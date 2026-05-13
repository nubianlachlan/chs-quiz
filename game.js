// ============================================================
// CHS Field Ready — Game Logic
// ============================================================

const GAME_DATA_URL = 'CHS_2024_game.json';

// Image path helper for commitment icons
function commitmentIconImg(num, size) {
  return `<img src="assets/chs/${num}-commitment.png" class="commit-img-icon" width="${size}" height="${size}" alt="Commitment ${num} icon">`;
}

// Scene colour index (maps to CSS classes)
const SCENE_COLORS = {
  prologue: 'scene-0',
  chapter_1: 'scene-1',
  chapter_2: 'scene-2',
  chapter_3: 'scene-3',
  chapter_4: 'scene-4',
  chapter_5: 'scene-5',
  chapter_6: 'scene-6',
  chapter_7: 'scene-7',
  chapter_8: 'scene-8',
  chapter_9: 'scene-9',
  epilogue: 'scene-epilogue',
  menu: 'scene-menu',
};

let gameData = null;
let state = {
  currentChapterIndex: 0,   // 0 = prologue, 1-9 = chapters, 10 = epilogue
  score: 0,
  answers: [],               // { chapterIndex, optionId, points }
  answered: false,
};

// ---- DOM helpers ----
const $ = (id) => document.getElementById(id);
const showScreen = (id) => {
  document.querySelectorAll('.screen').forEach((s) => s.classList.remove('active'));
  const el = $(id);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
};

function shuffleOptions(options) {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function makePlaceholderImg(sceneClass, label) {
  return `
    <div class="placeholder-img ${sceneClass}">
      <div class="pixel-art-bg"></div>
      <div class="img-label">🎨 ILLUSTRATION<br>${label}</div>
    </div>`;
}

function makeHUD(chapterIndex, totalChapters, score) {
  // totalChapters = 9 interactive chapters
  const interactive = Math.max(0, chapterIndex - 1); // chapters 1-9 answered
  const pct = Math.round((interactive / totalChapters) * 100);
  return `
    <div class="hud">
      <div class="hud-score">SCORE <span>${score}</span>/90</div>
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="hud-chapter">${interactive}/${totalChapters}</div>
    </div>`;
}

// ---- Screen: Loading ----
function renderLoading(error) {
  showScreen('screen-loading');
  if (error) {
    $('loading-content').innerHTML = `
      <div class="error-box">
        <h2>⚠ Load Error</h2>
        <p>${error}</p>
      </div>`;
  }
}

// ---- Screen: Menu ----
function renderMenu() {
  const meta = gameData.game_meta;
  const player = gameData.player_character;
  const setting = gameData.setting;

  $('screen-menu').innerHTML = `
    <div class="game-container fade-in">
      <div class="menu-header">
        <img src="assets/chs/chs-flower.svg" class="chs-flower" alt="Core Humanitarian Standard flower logo">
        <div class="menu-title">${meta.title}</div>
        <p class="menu-subtitle">${meta.subtitle}</p>
      </div>

      <div class="menu-info-grid">
        <div class="info-card">
          <span class="info-label">🧭 YOUR ROLE</span>
          <div class="info-value">${player.role}</div>
        </div>
        <div class="info-card">
          <span class="info-label">🏢 ORGANISATION</span>
          <div class="info-value">${player.organisation}</div>
        </div>
        <div class="info-card">
          <span class="info-label">📍 LOCATION</span>
          <div class="info-value">${setting.country}, Sub-Saharan Africa</div>
        </div>
        <div class="info-card">
          <span class="info-label">⏱ DURATION</span>
          <div class="info-value">~${meta.estimated_duration_minutes} minutes</div>
        </div>
      </div>

      <div class="how-to-play">
        <h3>HOW TO PLAY</h3>
        <p>${meta.how_to_play}</p>
      </div>

      <div class="menu-cta">
        <button class="btn btn-large" id="btn-start">▶ START ADVENTURE</button>
      </div>
    </div>`;

  showScreen('screen-menu');
  $('btn-start').addEventListener('click', startGame);
}

// ---- Start Game ----
function startGame() {
  state.currentChapterIndex = 0;
  state.score = 0;
  state.answers = [];
  state.answered = false;
  renderPrologue();
}

// ---- Screen: Prologue ----
function renderPrologue() {
  const ch = gameData.chapters[0];
  const el = $('screen-prologue');
  el.innerHTML = `
    <div class="game-container fade-in">
      ${makeHUD(0, 9, state.score)}
      <div class="chapter-title-row">
        <div class="chapter-badge">PROLOGUE</div>
        <div class="chapter-title">${ch.title}</div>
      </div>

      ${makePlaceholderImg('scene-0', 'VERDANIA — ARRIVAL')}

      <div style="margin-top:16px"></div>

      <div class="character-row">
        <div class="character-info">
          <div class="avatar-img"><img src="assets/illustrations/alex-portrait.png" alt="Alex" class="avatar-portrait"></div>
          <div class="character-name">ALEX</div>
        </div>
        <div class="bubble bubble-left">
          <p class="narrative-text">${ch.narrative}</p>
        </div>
      </div>

      <div class="pixel-divider"></div>

      <div style="text-align:center; padding: 8px 0 32px;">
        <button class="btn btn-large" id="btn-prologue-next">BEGIN MISSION ▶</button>
      </div>
    </div>`;

  showScreen('screen-prologue');
  $('btn-prologue-next').addEventListener('click', () => nextChapter());
}

// ---- Next Chapter ----
function nextChapter() {
  state.currentChapterIndex++;
  state.answered = false;

  if (state.currentChapterIndex <= 9) {
    renderChapter(state.currentChapterIndex);
  } else {
    renderEpilogue();
  }
}

// ---- Screen: Chapter ----
function renderChapter(idx) {
  const ch = gameData.chapters[idx]; // chapters[1..9]
  const sceneClass = SCENE_COLORS[ch.id] || 'scene-1';
  const commitNum = ch.chs_commitment.number;
  const shuffledOptions = shuffleOptions(ch.question.options);

  const optionsHtml = shuffledOptions.map((opt, optIdx) => `
    <button class="option-btn" data-option-id="${opt.id}" data-chapter-id="${ch.id}">
      <span class="option-letter">${String.fromCharCode(65 + optIdx)}</span>
      <span>${opt.text}</span>
    </button>`).join('');

  $('screen-chapter').innerHTML = `
    <div class="game-container fade-in">
      ${makeHUD(idx, 9, state.score)}

      <div class="chapter-title-row">
        <div class="chapter-badge">CH ${idx}</div>
        <div class="chapter-title">${ch.title}</div>
      </div>

      <div class="scene-area">
        ${makePlaceholderImg(sceneClass, ch.title.toUpperCase())}
      </div>

      <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">
        ${commitmentIconImg(commitNum, 36)}
        <span style="font-family:var(--font-pixel);font-size:0.42rem;color:var(--dark-gray);line-height:1.8">
          CHS COMMITMENT ${commitNum}: ${ch.chs_commitment.title}
        </span>
      </div>

      <div class="character-row">
        <div class="character-info">
          <div class="avatar-img"><img src="assets/illustrations/alex-portrait.png" alt="Alex" class="avatar-portrait"></div>
          <div class="character-name">ALEX</div>
        </div>
        <div class="bubble bubble-left">
          <p class="narrative-text">${ch.narrative}</p>
        </div>
      </div>

      <div class="situation-box">
        <span class="situation-label">📋 THE SITUATION</span>
        <p class="situation-text">${ch.situation}</p>
      </div>

      <div class="question-area">
        <p class="question-text">${ch.question.text}</p>
        <div id="options-list">${optionsHtml}</div>
      </div>
    </div>`;

  showScreen('screen-chapter');

  // Attach option click handlers
  document.querySelectorAll('.option-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (state.answered) return;
      const optionId = btn.dataset.optionId;
      handleAnswer(ch, optionId);
    });
  });
}

// ---- Handle Answer ----
function handleAnswer(chapter, selectedId) {
  state.answered = true;
  const opts = chapter.question.options;
  const chosen = opts.find((o) => o.id === selectedId);
  const points = chosen.score;
  state.score += points;
  state.answers.push({
    chapterIndex: state.currentChapterIndex,
    chapterId: chapter.id,
    optionId: selectedId,
    points,
  });

  // Highlight buttons
  document.querySelectorAll('.option-btn').forEach((btn) => {
    btn.classList.add('answered');
    const opt = opts.find((o) => o.id === btn.dataset.optionId);
    if (btn.dataset.optionId === selectedId) {
      if (opt.is_correct) btn.classList.add('correct');
      else if (opt.score === 5) btn.classList.add('partial');
      else btn.classList.add('incorrect');
    } else {
      btn.classList.add('dimmed');
    }
  });

  // Brief pause then show feedback
  setTimeout(() => renderFeedback(chapter, chosen), 500);
}

// ---- Screen: Feedback ----
function renderFeedback(chapter, chosen) {
  const isCorrect = chosen.is_correct;
  const isPartial = !isCorrect && chosen.score === 5;
  const resultClass = isCorrect ? 'correct' : isPartial ? 'partial' : 'incorrect';
  const resultIcon = isCorrect
    ? '<i class="fa-solid fa-circle-check" aria-label="Correct"></i>'
    : isPartial
    ? '<i class="fa-solid fa-circle-half-stroke" aria-label="Partial credit"></i>'
    : '<i class="fa-solid fa-circle-xmark" aria-label="Incorrect"></i>';
  const resultLabel = isCorrect ? 'CORRECT' : isPartial ? 'PARTIAL CREDIT' : 'INCORRECT';
  const commitNum = chapter.chs_commitment.number;

  $('screen-feedback').innerHTML = `
    <div class="game-container fade-in">
      ${makeHUD(state.currentChapterIndex, 9, state.score)}

      <div class="chapter-title-row">
        <div class="chapter-badge">CH ${state.currentChapterIndex}</div>
        <div class="chapter-title">${chapter.title}</div>
      </div>

      <div class="feedback-result-banner ${resultClass}">
        <div class="result-icon">${resultIcon}</div>
        <div class="result-meta">
          <span class="result-label">${resultLabel}</span>
          <div class="result-points">+${chosen.score} point${chosen.score !== 1 ? 's' : ''}</div>
        </div>
      </div>

      <div class="feedback-section">
        <span class="feedback-section-label">💬 FEEDBACK</span>
        <div class="bubble bubble-feedback">
          <p class="feedback-text">${chosen.feedback}</p>
        </div>
      </div>

      <div class="feedback-section">
        <span class="feedback-section-label">📖 WHAT HAPPENED</span>
        <div class="bubble bubble-feedback">
          <p class="feedback-text" style="font-style:italic">${chosen.character_response}</p>
        </div>
      </div>

      <div class="learning-point-box">
        <span class="learning-label">💡 LEARNING POINT</span>
        <p class="learning-text">${chapter.learning_point}</p>
      </div>

      <div class="chs-quote-box">
        <span class="chs-quote-label">📜 CHS ${commitNum} SAYS</span>
        <p class="chs-quote-text">"${chapter.chs_quote}"</p>
      </div>

      <div style="text-align:center;padding:8px 0 32px;">
        <button class="btn btn-large" id="btn-feedback-next">
          ${state.currentChapterIndex < 9 ? 'NEXT CHAPTER ▶' : 'VIEW MISSION REPORT ▶'}
        </button>
      </div>
    </div>`;

  showScreen('screen-feedback');
  $('btn-feedback-next').addEventListener('click', () => nextChapter());
}

// ---- Screen: Epilogue ----
function renderEpilogue() {
  const ep = gameData.epilogue;
  const meta = gameData.game_meta;
  const totalScore = state.score;
  const maxScore = meta.scoring.max_score;

  // Determine badge band
  let band;
  if (totalScore >= 90) band = ep.score_feedback['90_to_100'];
  else if (totalScore >= 70) band = ep.score_feedback['70_to_89'];
  else if (totalScore >= 50) band = ep.score_feedback['50_to_69'];
  else band = ep.score_feedback['0_to_49'];

  // Score stats
  const correct  = state.answers.filter((a) => a.points === 10).length;
  const partial  = state.answers.filter((a) => a.points === 5).length;
  const incorrect = state.answers.filter((a) => a.points === 0).length;

  // CHS commitments list
  const chs = gameData.chs_reference_summary.commitments || [];
  const commitListHtml = chs.map((c, i) => {
    const answer = state.answers.find((a) => a.chapterIndex === i + 1);
    const pts = answer ? answer.points : null;
    const icon = pts === 10
      ? '<i class="fa-solid fa-circle-check commit-icon-correct" aria-label="Correct"></i>'
      : pts === 5
      ? '<i class="fa-solid fa-circle-half-stroke commit-icon-partial" aria-label="Partial"></i>'
      : pts === 0
      ? '<i class="fa-solid fa-circle-xmark commit-icon-incorrect" aria-label="Incorrect"></i>'
      : '<span>—</span>';
    return `
      <div class="commitment-item">
        <span class="commitment-icon">${icon}</span>
        ${commitmentIconImg(c.number, 28)}
        <span><strong>${c.short_title || 'Commitment ' + c.number}</strong> — ${c.summary || ''}</span>
      </div>`;
  }).join('');

  $('screen-epilogue').innerHTML = `
    <div class="game-container fade-in">
      <div class="epilogue-header">
        <div class="epilogue-title">${ep.title}</div>
      </div>

      <div class="scene-area">
        ${makePlaceholderImg('scene-epilogue', 'VERDANIA — SUNSET DEBRIEF')}
      </div>

      <div class="score-display">
        <div class="score-circle">
          <div class="score-number">${totalScore}</div>
          <div class="score-max">/ ${maxScore}</div>
        </div>
      </div>

      <div class="badge-display">
        <span class="badge-emoji">${extractEmoji(band.title)}</span>
        <div class="badge-title">${stripEmoji(band.title)}</div>
      </div>

      <div class="score-grid">
        <div class="score-item correct-answer">
          <div class="si-icon"><i class="fa-solid fa-circle-check" aria-label="Correct"></i></div>
          <span class="si-label">CORRECT</span>
          <span class="si-value">${correct}</span>
        </div>
        <div class="score-item partial-answer">
          <div class="si-icon"><i class="fa-solid fa-circle-half-stroke" aria-label="Partial"></i></div>
          <span class="si-label">PARTIAL</span>
          <span class="si-value">${partial}</span>
        </div>
        <div class="score-item incorrect-answer">
          <div class="si-icon"><i class="fa-solid fa-circle-xmark" aria-label="Missed"></i></div>
          <span class="si-label">MISSED</span>
          <span class="si-value">${incorrect}</span>
        </div>
      </div>

      <div class="bubble bubble-narrator" style="margin-bottom:20px;">
        <p class="narrative-text">${ep.narrative}</p>
      </div>

      <div class="score-message-box">
        <p>${band.message}</p>
      </div>

      <div class="chs-summary">
        <div class="chs-summary-title">YOUR COMMITMENT SCORECARD</div>
        <div class="commitment-list">
          ${commitListHtml}
        </div>
      </div>

      <div class="epilogue-cta">
        <button class="btn btn-large" id="btn-replay">↩ PLAY AGAIN</button>
        <button class="btn btn-large btn-secondary" id="btn-back-menu">🏠 MAIN MENU</button>
      </div>
    </div>`;

  showScreen('screen-epilogue');
  $('btn-replay').addEventListener('click', startGame);
  $('btn-back-menu').addEventListener('click', renderMenu);
}

// ---- Emoji helpers ----
function extractEmoji(str) {
  const m = str.match(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu);
  return m ? m[0] : '';
}

function stripEmoji(str) {
  return str.replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, '').trim();
}

// ---- Init ----
async function init() {
  renderLoading();
  showScreen('screen-loading');

  try {
    const res = await fetch(GAME_DATA_URL);
    if (!res.ok) {
      console.error(`Failed to load ${GAME_DATA_URL}: HTTP ${res.status} ${res.statusText}`);
      throw new Error('network');
    }
    gameData = await res.json();
    renderMenu();
    showScreen('screen-menu');
  } catch (err) {
    const msg = err.message === 'network'
      ? 'Unable to load game data. Please refresh the page or try again later.'
      : 'An unexpected error occurred while loading. Please refresh the page.';
    console.error('Game init error:', err);
    renderLoading(msg);
  }
}

document.addEventListener('DOMContentLoaded', init);
