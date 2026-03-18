# Field Ready: A Humanitarian Adventure — Game Build Guide

**File:** `CHS_2024_game.json`
**Version:** 1.0
**Reference:** Core Humanitarian Standard on Quality and Accountability, 2024

---

## Overview

*Field Ready: A Humanitarian Adventure* is a story-driven, interactive learning game designed to help humanitarian and development sector workers understand and apply the nine commitments of the Core Humanitarian Standard (CHS) 2024. Players step into the shoes of **Alex**, a field coordinator freshly deployed to **Verdania** — a fictional semi-arid sub-Saharan nation struck by catastrophic flooding — and navigate real-world dilemmas that affect 200,000 displaced people.

The game consists of ten chapters (one narrative prologue and nine interactive chapters) plus a scored epilogue. Each interactive chapter targets one CHS commitment, presenting a contextual narrative scenario followed by a multiple-choice question. Players receive instant feedback after every decision, and a final impact report grades their overall performance.

**Estimated duration:** approximately **12 minutes** per playthrough.

---

## How to Build This Game — Web Implementation

This game is designed as a **web-based application** built with standard HTML, CSS, and JavaScript. No build tools or frameworks are required. Pixel art backgrounds and animated GIFs are used to create atmosphere and immersion. All game content is loaded from `CHS_2024_game.json` at runtime.

### Technology Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (full-screen layout, transitions, pixel-scaling) |
| Logic | Vanilla JavaScript (ES6+) |
| Data | `CHS_2024_game.json` loaded via `fetch()` |
| Visuals | Pixel art PNG/GIF backgrounds per scene |
| Animation | CSS animations + animated GIF sprites and ambience loops |
| Fonts | Press Start 2P (headings), a readable pixel or system sans-serif (body text) |

### Project File Structure

```
/
├── index.html              ← Single-page game shell
├── style.css               ← Full-screen layout and UI styles
├── game.js                 ← Game logic and state machine
├── CHS_2024_game.json      ← All game content and questions
└── assets/
    ├── backgrounds/        ← Full-screen pixel art backgrounds (PNG or animated GIF)
    │   ├── prologue.gif
    │   ├── chapter_1.gif
    │   ├── chapter_2.gif
    │   ├── ...
    │   └── epilogue.gif
    ├── characters/         ← Character portrait sprites (PNG)
    │   ├── alex.png
    │   ├── mira.png
    │   ├── yusuf.png
    │   └── marco.png
    ├── ui/                 ← UI background panels (PNG)
    │   ├── main_menu_bg.gif
    │   ├── chapter_transition.gif
    │   ├── score_dashboard.png
    │   └── loading_screen.gif
    └── audio/              ← Optional chiptune and sound effects (MP3/OGG)
```

### Full-Screen Pixel Art Design Philosophy

The game uses **full-screen pixel art backgrounds** for every scene. These backgrounds are:

- Rendered at **320×180 px base resolution** and scaled up to fill the viewport using CSS `image-rendering: pixelated` and `transform: scale()` or `zoom`. This preserves the pixel art aesthetic at any screen size.
- Delivered as **animated GIFs** where ambience effects are needed (rain, flickering lights, rippling water, smoke).
- Designed to fill the full browser viewport (`100vw × 100vh`), with game text and UI elements layered on top using semi-transparent dark panels for readability.
- Styled with **pixel art colour palettes** relevant to each scene — warm ochres and dusty blues for the field, deep greens and ambers for the epilogue, urgent reds for crisis scenes.

### HTML Shell (`index.html`)

The page has a single `<div id="game">` container that fills the full viewport. Layers inside it (back to front):

1. `<div id="background">` — full-screen pixel art GIF background for the current scene
2. `<div id="overlay">` — semi-transparent dark panel to ensure text legibility
3. `<div id="screen">` — the active screen content (narrative, question, feedback, score)
4. `<div id="hud">` — score display and chapter indicator (always visible during gameplay)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Field Ready: A Humanitarian Adventure</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="game" role="main">
    <div id="background" aria-hidden="true"></div>
    <div id="overlay" aria-hidden="true"></div>
    <div id="screen" aria-live="polite"></div>
    <div id="hud" role="complementary" aria-label="Game progress">
      <span id="chapter-label"></span>
      <span id="score-display">Score: 0</span>
    </div>
  </div>
  <script src="game.js"></script>
</body>
</html>
```

### CSS — Full-Screen Pixel Art Layout (`style.css`)

Key rules to implement:

```css
/* Full-screen game container */
body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background: #000; }
#game { position: relative; width: 100vw; height: 100vh; }

/* Full-screen background — pixel-scaled */
#background {
  position: absolute; inset: 0;
  background-size: cover;
  background-position: center;
  image-rendering: pixelated;      /* Standard (Chrome, Firefox, Edge) */
  image-rendering: crisp-edges;   /* Fallback for Safari */
}

/* Legibility overlay */
#overlay {
  position: absolute; inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

/* Content panel */
#screen {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  padding: 2rem;
  color: #f5f0e8;
  font-family: 'Press Start 2P', monospace;
  font-size: clamp(0.6rem, 1.5vw, 0.9rem);
  line-height: 1.8;
  text-align: center;
  max-width: 860px;
  margin: 0 auto;
}

/* Answer option buttons */
.option-btn {
  display: block; width: 100%; max-width: 640px;
  min-height: 48px; /* WCAG touch target minimum */
  margin: 0.5rem auto; padding: 0.8rem 1.2rem;
  background: rgba(20, 30, 20, 0.85);
  border: 2px solid #a0c060;
  color: #e8f0d8;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.65rem;
  cursor: pointer;
  text-align: left;
  line-height: 1.7;
  transition: background 0.15s, border-color 0.15s;
}
.option-btn:hover { background: rgba(60, 100, 40, 0.9); border-color: #d4f080; }
.option-btn.correct { border-color: #80ff80; background: rgba(0, 100, 0, 0.8); }
.option-btn.incorrect { border-color: #ff6060; background: rgba(100, 0, 0, 0.75); }
.option-btn.partial { border-color: #ffc060; background: rgba(100, 70, 0, 0.75); }

/* HUD */
#hud {
  position: absolute; top: 1rem; left: 1rem; right: 1rem;
  display: flex; justify-content: space-between;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.6rem; color: #e8e0c0;
  text-shadow: 1px 1px 0 #000;
}
```

### JavaScript — Game State Machine (`game.js`)

The game is driven by a simple state machine with six states:

| State | Description |
|---|---|
| `MAIN_MENU` | Title screen with start button |
| `PROLOGUE` | Narrative-only opening scene |
| `CHAPTER_NARRATIVE` | Show chapter narrative and situation text |
| `CHAPTER_QUESTION` | Show question and answer options |
| `CHAPTER_FEEDBACK` | Show selected option's feedback + learning point + CHS quote |
| `EPILOGUE` | Show final narrative and score-based badge |

#### Loading the Game Data

```javascript
let gameData = null;
let currentChapterIndex = 1; // 0 = prologue; 1–9 = interactive chapters
let totalScore = 0;

async function init() {
  try {
    const response = await fetch('CHS_2024_game.json');
    if (!response.ok) throw new Error(`Failed to load game data: ${response.status}`);
    gameData = await response.json();
    showMainMenu();
  } catch (err) {
    document.getElementById('screen').innerHTML =
      `<p style="color:#ff8080;">Error loading game: ${err.message}. Please check that CHS_2024_game.json is accessible.</p>`;
  }
}

document.addEventListener('DOMContentLoaded', init);
```

#### Rendering the Background

Each chapter object has an `image_prompt` field. The corresponding background asset is a pixel art GIF in `assets/backgrounds/` named by chapter ID (`prologue.gif`, `chapter_1.gif`, etc.):

```javascript
function setBackground(chapterId) {
  const bg = document.getElementById('background');
  bg.style.backgroundImage = `url('assets/backgrounds/${chapterId}.gif')`;
}
```

#### Rendering a Chapter

```javascript
function showChapterNarrative(index) {
  const chapter = gameData.chapters[index];
  setBackground(chapter.id);
  const screen = document.getElementById('screen');

  // Build chapter header from CHS commitment (if interactive)
  const commitmentBadge = chapter.chs_commitment
    ? `<p class="commitment-badge">CHS Commitment ${chapter.chs_commitment.number}</p>`
    : '';

  screen.innerHTML = `
    <h2 class="chapter-title">${chapter.title}</h2>
    ${commitmentBadge}
    <p class="narrative">${chapter.narrative}</p>
    ${chapter.situation ? `<p class="situation"><em>${chapter.situation}</em></p>` : ''}
    <button class="continue-btn" data-next="${index}">Continue →</button>
  `;

  screen.querySelector('.continue-btn').addEventListener('click', function() {
    showChapterQuestion(parseInt(this.dataset.next, 10));
  });

  document.getElementById('chapter-label').textContent =
    chapter.chs_commitment ? `Ch. ${chapter.chs_commitment.number} / 9` : 'Prologue';
}
```

#### Rendering the Question

Use `data-` attributes instead of inline `onclick` handlers for safe event binding:

```javascript
function showChapterQuestion(index) {
  const chapter = gameData.chapters[index];
  const q = chapter.question;
  const screen = document.getElementById('screen');

  // Fisher-Yates shuffle for replayability (optional — create a copy first)
  const options = [...q.options];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  screen.innerHTML = `
    <p class="question-text">${q.text}</p>
    <div class="options-list" id="options-list">
      ${options.map(opt => `
        <button class="option-btn" data-chapter="${index}" data-optid="${opt.id}">
          ${opt.text}
        </button>
      `).join('')}
    </div>
  `;

  // Bind events via delegation — avoids inline onclick and XSS risk
  document.getElementById('options-list').addEventListener('click', function(e) {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;
    const chIdx = parseInt(btn.dataset.chapter, 10);
    const optId = btn.dataset.optid;
    selectOption(chIdx, optId);
  }, { once: true });
}
```

#### Handling an Answer

```javascript
function selectOption(chapterIndex, optionId) {
  const chapter = gameData.chapters[chapterIndex];
  const chosen = chapter.question.options.find(o => o.id === optionId);

  // Lock all buttons and highlight result using data attributes
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    const btnOptId = btn.dataset.optid;
    const opt = chapter.question.options.find(o => o.id === btnOptId);
    if (!opt) return;
    if (opt.is_correct) btn.classList.add('correct');
    else if (opt.score === 5) btn.classList.add('partial');
    else btn.classList.add('incorrect');
  });

  // Add score
  totalScore += chosen.score;
  document.getElementById('score-display').textContent = `Score: ${totalScore}`;

  // Show feedback panel
  showFeedback(chapterIndex, chosen);
}
```

#### Showing Feedback

```javascript
function showFeedback(chapterIndex, chosen) {
  const chapter = gameData.chapters[chapterIndex];
  const screen = document.getElementById('screen');

  // Determine result label
  const resultLabel = chosen.is_correct
    ? '✔ Correct!'
    : chosen.score === 5 ? '~ Partial credit' : '✖ Incorrect';
  const resultClass = chosen.is_correct ? 'correct' : chosen.score === 5 ? 'partial' : 'incorrect';

  const nextIndex = chapterIndex + 1;
  const isLast = nextIndex >= gameData.chapters.length;

  screen.innerHTML = `
    <p class="result-label ${resultClass}">${resultLabel} (+${chosen.score} pts)</p>
    <p class="feedback">${chosen.feedback}</p>
    <p class="learning-point"><strong>Key Learning:</strong> ${chapter.learning_point}</p>
    <blockquote class="chs-quote">"${chapter.chs_quote}"</blockquote>
    <button class="continue-btn" data-next="${nextIndex}" data-last="${isLast}">
      ${isLast ? 'View Your Mission Report →' : 'Next Chapter →'}
    </button>
  `;

  screen.querySelector('.continue-btn').addEventListener('click', function() {
    if (this.dataset.last === 'true') showEpilogue();
    else showChapterNarrative(parseInt(this.dataset.next, 10));
  });
}
```

#### Prologue (Narrative Only)

The prologue (`chapters[0]`) has no question. After showing the narrative, advance directly to `chapters[1]`:

```javascript
function showPrologue() {
  const prologue = gameData.chapters[0];
  setBackground(prologue.id);
  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2>${prologue.title}</h2>
    <p>${prologue.narrative}</p>
    <button class="continue-btn">Begin →</button>
  `;
  screen.querySelector('.continue-btn').addEventListener('click', () => showChapterNarrative(1));
  document.getElementById('chapter-label').textContent = 'Prologue';
}
```

#### Epilogue and Score Badge

```javascript
function showEpilogue() {
  const epilogue = gameData.epilogue;
  setBackground('epilogue');

  // Determine badge band
  let band;
  if (totalScore >= 90) band = epilogue.score_feedback['90_to_100'];
  else if (totalScore >= 70) band = epilogue.score_feedback['70_to_89'];
  else if (totalScore >= 50) band = epilogue.score_feedback['50_to_69'];
  else band = epilogue.score_feedback['0_to_49'];

  const screen = document.getElementById('screen');
  screen.innerHTML = `
    <h2>${epilogue.title}</h2>
    <p>${epilogue.narrative}</p>
    <hr />
    <p class="final-score">Your score: ${totalScore} / 100</p>
    <h3 class="badge-title">${band.title}</h3>
    <p class="badge-message">${band.message}</p>
    <button class="continue-btn">Play Again</button>
  `;
  screen.querySelector('.continue-btn').addEventListener('click', showMainMenu);
  document.getElementById('chapter-label').textContent = 'Mission Report';
}
```

### Animation and Atmosphere

- **Animated GIF backgrounds:** Each scene background is a looping animated GIF with subtle pixel-art ambience: rain falling in street scenes, flickering lamplight in night scenes, slow cloud movement in outdoor scenes, gentle fire glow in the epilogue camp scene.
- **CSS transitions:** Use a brief `opacity` fade (0.3s) between screens to smooth scene changes without jarring cuts.
- **HUD pulse:** When a score is added, use a CSS `@keyframes` pulse on `#score-display` to draw attention.
- **Button hover effects:** Pixel-accurate border-colour shifts on hover — no blur or shadow.

### Accessibility

- All background images have a dark overlay to ensure sufficient contrast for text.
- Font-size uses `clamp()` to scale with viewport while respecting user preferences.
- All answer buttons are full-width and easily tappable on mobile (`min-height: 48px`).
- After an answer is selected, all buttons show correct/incorrect state visually *and* via text labels — never colour alone.

---

## Target Audience

Humanitarian and development sector workers — including field staff, programme managers, team leaders, and trainers — who want an engaging, scenario-based introduction to or refresher on CHS 2024.

---

## Setting

| Field | Detail |
|---|---|
| Country | Verdania (fictional) |
| Region | Sub-Saharan Africa |
| Crisis type | Catastrophic flash floods |
| Scale | 200,000+ displaced people across three regions |
| Infrastructure | Damaged roads, disrupted markets |
| Vulnerable groups | Women, children, elderly, people with disabilities |

---

## Player Character

| Field | Detail |
|---|---|
| Name | Alex |
| Role | Field Coordinator |
| Organisation | HumanityCare International |
| Experience | Three years of field experience |
| Backstory | Just landed at Verdania International Airport after a 14-hour flight; co-leads the emergency response to the worst floods the country has seen in 50 years |

---

## Supporting Characters

| Name | Role |
|---|---|
| Mira | Alex's colleague at the displacement camp |
| Yusuf | Community feedback officer |
| Marco | Senior international colleague (Chapter 8) |
| Sami | Staff member observed during procurement investigation (Chapter 9) |

---

## Game Structure

The game is stored in a single JSON object (`CHS_2024_game.json`) with the following top-level keys:

| Key | Description |
|---|---|
| `game_meta` | Title, version, audience, duration, description, how-to-play, and scoring rules |
| `player_character` | Name, role, organisation, backstory, and avatar description |
| `setting` | Country context and description |
| `chapters` | Array of 10 chapter objects (1 prologue + 9 interactive chapters) |
| `epilogue` | Final narrative and four score-based feedback bands |
| `supplementary_assets` | Key characters, UI design prompts, and printable learning card prompts |
| `chs_reference_summary` | Quick-reference summary of all nine CHS commitments |

### Chapters Array

The `chapters` array contains **10 entries** at indices 0–9:

| Index | ID | Title | CHS Commitment |
|---|---|---|---|
| 0 | `prologue` | Welcome to Verdania | — (narrative only) |
| 1 | `chapter_1` | Chapter 1: Who Gets a Voice? | Commitment 1 — Participation & Inclusion |
| 2 | `chapter_2` | Chapter 2: Whose Needs Count? | Commitment 2 — Timely, Needs-Based Support |
| 3 | `chapter_3` | Chapter 3: Building Back Better (or Not) | Commitment 3 — Resilience & Local Ownership |
| 4 | `chapter_4` | Chapter 4: The Hidden Harm | Commitment 4 — Do No Harm |
| 5 | `chapter_5` | Chapter 5: Listen Up | Commitment 5 — Safe Complaints & Feedback |
| 6 | `chapter_6` | Chapter 6: Better Together | Commitment 6 — Coordination |
| 7 | `chapter_7` | Chapter 7: What Did We Actually Learn? | Commitment 7 — Learning & Adaptation |
| 8 | `chapter_8` | Chapter 8: Team Trouble | Commitment 8 — Competent, Well-Managed Staff |
| 9 | `chapter_9` | Chapter 9: Follow the Money | Commitment 9 — Ethical Resource Management |

### Chapter Object Schema

Each interactive chapter contains the following fields:

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique chapter identifier (e.g. `chapter_1`) |
| `type` | string | `"interactive"` for scored chapters; `"narrative_only"` for prologue |
| `title` | string | Display title |
| `chs_commitment` | object or null | CHS commitment number, full title, and key sub-requirements addressed |
| `duration_hint_seconds` | number | Suggested reading/play time in seconds |
| `narrative` | string | Scene-setting text describing the situation |
| `situation` | string | The specific dilemma Alex faces |
| `character_emotion` | string | Alex's emotional state in the scene |
| `image_prompt` | string | Illustration prompt for scene artwork (see pixel art prompts below) |
| `question` | object | The multiple-choice question |
| `learning_point` | string | Key takeaway revealed after the player answers |
| `chs_quote` | string | Verbatim CHS requirement most relevant to the scenario |

### Question Object Schema

Each `question` object contains:

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique question identifier (e.g. `q1`) |
| `text` | string | The question prompt |
| `options` | array | Array of answer options (see below) |

Each answer option contains:

| Field | Type | Description |
|---|---|---|
| `id` | string | Option letter (`a`, `b`, `c`) |
| `text` | string | The answer text shown to the player |
| `is_correct` | boolean | Whether this is the best answer |
| `score` | number | Points awarded: 10 = correct, 5 = partial credit, 0 = incorrect |
| `feedback` | string | Explanation of why this answer is correct, partial, or incorrect |
| `character_response` | string | Narrative consequence of choosing this option |

---

## Scoring System

| Outcome | Points |
|---|---|
| Correct answer | 10 |
| Partial answer | 5 |
| Incorrect answer | 0 |
| **Maximum total score** | **100** |

### Final Score Bands and Badges

| Score Range | Badge Title | Summary |
|---|---|---|
| 90–100 | 🏆 CHS Champion | Consistently upheld the highest standards across all nine commitments |
| 70–89 | 🌟 Committed Practitioner | Strong decisions on most commitments; a few areas for continued growth |
| 50–69 | 📚 Learning in Action | On the right track; some avoidable gaps remain — revisit lower-scoring commitments |
| 0–49 | 🌱 Rising Learner | The game was challenging; review the full CHS 2024 document and replay |

---

## CHS Commitments Covered

| # | Short Title | Full Commitment Statement |
|---|---|---|
| 1 | Participation & Inclusion | People and communities can exercise their rights and participate in actions and decisions that affect them. |
| 2 | Timely, Needs-Based Support | People and communities access timely and effective support in accordance with their specific needs and priorities. |
| 3 | Resilience & Local Ownership | People and communities are better prepared and more resilient to potential crises. |
| 4 | Do No Harm | People and communities access support that does not cause harm to people or the environment. |
| 5 | Safe Complaints & Feedback | People and communities can safely report concerns and complaints and get them addressed. |
| 6 | Coordination | People and communities access coordinated and complementary support. |
| 7 | Learning & Adaptation | People and communities access support that is continually adapted and improved based on feedback and learning. |
| 8 | Competent, Well-Managed Staff | People and communities interact with staff and volunteers that are respectful, competent, and well-managed. |
| 9 | Ethical Resource Management | People and communities can expect that resources are managed ethically and responsibly. |

---

## All Image Prompts — Pixel Art Style

All pixel art backgrounds are designed as **full-screen** scenes at **320×180 px base resolution**, scaled up to fill the viewport with `image-rendering: pixelated`. Animated GIFs should loop seamlessly to provide ambient movement. The palette for each scene is listed alongside the prompt.

### Scene Backgrounds

---

#### Prologue — Welcome to Verdania

**Asset filename:** `assets/backgrounds/prologue.gif`
**Animation:** looping rain particles, windshield-wiper motion, rippling puddle reflections

> Full-screen 16-bit pixel art scene: a yellow taxi pushes through flooded streets of an African city at dusk. Through a rain-streaked pixel car window, a field coordinator (Alex) gazes out with determined focus. Outside: blue tarp emergency shelters, pixel-art families carrying belongings, children wading in muddy puddles, a lone street vendor under an umbrella. Animated rain falls in diagonal streaks. Warm ambers and deep blues dominate — street lamps cast orange halos on wet pixel pavement. Cinematic wide composition filling the full screen. Retro pixel art style, 320×180 base, 24-colour palette.

---

#### Chapter 1 — Who Gets a Voice?

**Asset filename:** `assets/backgrounds/chapter_1.gif`
**Animation:** subtle dust particles drifting in midday heat, distant tent flaps moving in breeze

> Full-screen 16-bit pixel art scene: an outdoor community meeting in a displacement camp under a blazing midday sun. A large circle of mostly adult men sit on pixel-art plastic chairs and upturned buckets. At the edges, women with babies and children watch from a distance near white UNHCR tents. An elderly woman with a walking stick stands in shadow near a tent flap. A young man in a manual wheelchair is positioned far from the circle. Dust motes drift in the hot air. Warm ochre and sky-blue palette, sense of tension and exclusion expressed through pixel body language. Full-screen wide composition.

---

#### Chapter 2 — Whose Needs Count?

**Asset filename:** `assets/backgrounds/chapter_2.gif`
**Animation:** flickering fluorescent warehouse lights, subtle dust motes

> Full-screen 16-bit pixel art scene: inside a large humanitarian warehouse in a flood-hit area. Rows of stacked pixel crates labelled "High-Energy Biscuits" recede into the background. Alex stands between a logistics officer gesturing eagerly at a loaded truck and a community elder pointing through the warehouse window toward wells and buckets outside. Flickering fluorescent overhead lights. Cool blue warehouse interior contrasts with warm natural light from the window showing the community outside. Flat pixel art style, 320×180 base, 24-colour palette.

---

#### Chapter 3 — Building Back Better (or Not)

**Asset filename:** `assets/backgrounds/chapter_3.gif`
**Animation:** subtle paper-shuffling motion on the table, window light shifting slowly

> Full-screen 16-bit pixel art scene: a field office planning room. A wide table displays a pixel-art map and shelter blueprints. HQ staff on one side point to a stopwatch and prefab shelter diagram; a local NGO officer and community mason on the other side hold up a traditional architecture sketch. Whiteboards with pixel decision-tree diagrams fill the background. Warm earthy tones with greens; deliberate pixel contrast between modern prefab imagery and traditional local architecture. Full-screen composition.

---

#### Chapter 4 — The Hidden Harm

**Asset filename:** `assets/backgrounds/chapter_4.gif`
**Animation:** red warning icon flashing on the laptop screen, cursor blinking

> Full-screen 16-bit pixel art scene: split-screen composition. Left half: a data officer in a field office stares at an unencrypted spreadsheet on a pixel laptop; red warning icons flash above. Paper registration forms are stacked around the desk. Right half: a communications officer holds a camera toward a family with children, whose faces are intentionally pixelated for privacy. A bold red alert colour-washes both halves. Split-screen pixel art style, high contrast, 320×180 base, animated warning glyph on loop.

---

#### Chapter 5 — Listen Up

**Asset filename:** `assets/backgrounds/chapter_5.gif`
**Animation:** soft torch/candle flicker ambience inside the tent, gentle canvas ripple at tent entrance

> Full-screen 16-bit pixel art scene: the interior of a field office tent at dusk. Feedback officer (Yusuf) sits close to a distressed teenage girl who looks down — her face shown in silhouette to preserve privacy. Alex stands in the foreground with a grave, attentive expression. Through the tent entrance, a public suggestion box is visible outside, highlighted by a shaft of fading sunlight. Soft muted tones: grey-blue canvas, warm orange lamp light. Pixel art style, emotional atmosphere, full-screen composition.

---

#### Chapter 6 — Better Together

**Asset filename:** `assets/backgrounds/chapter_6.gif`
**Animation:** subtle map-marker blinking, outside window figure slightly animated (waiting)

> Full-screen 16-bit pixel art scene: a coordination meeting room viewed from a slight bird's-eye angle. A large table is covered with overlapping pixel maps. Post-it notes and colour markers cluster around two central zones on the map while two northern zones are bare. Representatives from many organisations look at the same overcrowded area. Through the window, a local CBO representative waits outside, uninvited. Bold pixel graphic elements highlight duplication vs. gaps on the map. Warm purposeful atmosphere, multi-colour organisation badges, full-screen composition.

---

#### Chapter 7 — What Did We Actually Learn?

**Asset filename:** `assets/backgrounds/chapter_7.gif`
**Animation:** downward trend arrow animating on the chart, notification blink on the unread feedback stack

> Full-screen 16-bit pixel art scene: a field office interior with monitoring dashboards covering the wall. Alex points to a pixel chart showing 62% satisfaction with a downward-trend arrow. One team member scrolls their phone; another stares blankly. In the corner, a large stack of unread feedback forms sits untouched, glowing faintly amber. Through the window, a person with a mobility aid is visible trying to reach a distant distribution point. Data blues and greens contrast with urgent amber for the unread forms. Full-screen pixel art composition.

---

#### Chapter 8 — Team Trouble

**Asset filename:** `assets/backgrounds/chapter_8.gif`
**Animation:** slow heat-shimmer effect on the dusty ground, tense figure posture held static

> Full-screen 16-bit pixel art scene: an outdoor team briefing in a dusty field setting. Senior international staff member (Marco) stands with crossed arms and a dismissive pixel expression. Two national staff members stand to one side looking downward. A third team member watches from a distance. A field office tent is visible behind. The scene radiates tension and power imbalance through pixel body language. Muted palette of greys and dusty beige with red accent tones indicating stress. Full-screen composition, 320×180 base.

---

#### Chapter 9 — Follow the Money

**Asset filename:** `assets/backgrounds/chapter_9.gif`
**Animation:** desk lamp flicker, red invoice discrepancy highlight pulsing

> Full-screen 16-bit pixel art scene: a field office at night. Under the glow of a pixel desk lamp, Alex examines a paper invoice next to a laptop showing a procurement database; a red discrepancy is highlighted and pulsing. Through a glass partition, a nervous staff member (Sami) watches from the shadows. A wall clock shows late evening. The bright desk lamp contrasts with the dark background, creating a pixel detective-scene atmosphere. Muted dark blues and ambers with the red alert as the focal point. Full-screen night-scene composition.

---

#### Epilogue — Your Mission Report

**Asset filename:** `assets/backgrounds/epilogue.gif`
**Animation:** children playing in background, fire glow flickering, slow purple-orange sky gradient shift

> Full-screen 16-bit pixel art scene: a field coordinator (Alex) sits on worn office steps at golden-hour sunset, writing in a notebook. The displacement camp glows in the background at dusk — pixel children playing, families cooking over small fires, tents lit from within. The flood plain is visible in the distance, water now lower. The sky transitions in animated pixel gradient from warm orange to deep purple. The scene carries quiet resolution and warmth. Painterly pixel art style, warm tones with deep pixel shadows, impressionistic crowd detail. Full-screen composition.

---

### Character Portrait Prompts

Character portraits are used as small inset sprites in dialogue boxes (approximately 64×64 px at base resolution).

---

#### Alex — Player Character

**Asset filename:** `assets/characters/alex.png`

> 16-bit pixel art character portrait: gender-neutral field coordinator, mid-thirties. Light blue field vest with a small organisation logo. Thoughtful, determined pixel expression. Holding a notebook and satellite phone. Transparent background, 64×64 px base. Retro pixel art style, 16-colour character palette, clean outlines.

---

#### Mira — Alex's Colleague

**Asset filename:** `assets/characters/mira.png`

> 16-bit pixel art character portrait: female humanitarian worker, early thirties, south Asian appearance. Orange field vest, clipboard in hand. Warm and collaborative pixel expression, slightly uncertain. Transparent background, 64×64 px base. Retro pixel art style.

---

#### Yusuf — Community Feedback Officer

**Asset filename:** `assets/characters/yusuf.png`

> 16-bit pixel art character portrait: male community feedback officer, late twenties, east African appearance. Green T-shirt with a feedback box logo. Compassionate, professional pixel demeanour. Transparent background, 64×64 px base. Retro pixel art style.

---

#### Marco — Senior International Colleague

**Asset filename:** `assets/characters/marco.png`

> 16-bit pixel art character portrait: male senior international humanitarian worker, mid-forties, European appearance. Formal field shirt, crossed arms, dismissive pixel posture. Tense expression. Transparent background, 64×64 px base. Retro pixel art style.

---

### UI Design Prompts (Pixel Art)

---

#### Main Menu Background

**Asset filename:** `assets/ui/main_menu_bg.gif`
**Animation:** slow cloud drift, subtle water shimmer on flood plains

> Full-screen 16-bit pixel art background: sweeping aerial landscape of a semi-arid African country after flooding. Patchwork of earthy greens and yellows, brown floodwaters in pixel channels, white-tented displacement camps on high ground, a bright sky with dramatic animated pixel clouds. Wide panoramic composition filling the full screen. Vibrant and hopeful pixel palette despite the crisis setting. Animated GIF with gentle cloud and water movement on loop.

---

#### Chapter Transition Screen

**Asset filename:** `assets/ui/chapter_transition.gif`
**Animation:** circles pulse outward in sequence (1 through 9), then hold

> Full-screen 16-bit pixel art graphic: nine interconnected pixel circles, each in a distinct colour representing one CHS commitment. Circles pulse outward in sequence and then link into a web or network pattern. Central icon: a pixelated heart with hands. Bold, modern pixel art design. Animated GIF, 320×180 base, loop-once then hold on final frame.

---

#### Score Dashboard

**Asset filename:** `assets/ui/score_dashboard.png`

> 16-bit pixel art UI panel: a clean score dashboard. Nine commitment icons arranged in a 3×3 pixel grid, each with a colour-coded indicator (green pixel = correct, amber = partial, red = missed). A central large pixel circle displays the total score as a percentage. Below: a pixel progress bar and player badge icon. White/dark background with accent colour per commitment. Static PNG, 320×180 base.

---

#### Loading Screen

**Asset filename:** `assets/ui/loading_screen.gif`
**Animation:** Alex walking cycle along the dirt path (8-frame loop), dust kicking up from feet

> Full-screen 16-bit pixel art scene: Alex walking along a dirt path toward the horizon in an animated walk cycle. Field vest on, backpack over shoulder. Verdanian landscape in the background — semi-arid terrain with distant pixel mountains. A CHS quote overlays the bottom: *"Quality and accountability are not destinations. They are daily choices."* Clean, hopeful, warm-toned pixel palette. Animated GIF with seamless walking loop, 320×180 base.

---

### Printable Learning Card Visual Prompts (Pixel Art)

These prompts are for printed or on-screen job aids — one card per CHS commitment. Digital versions can also be rendered as static pixel art panels within the game's reference section.

| # | Card Headline | Pixel Art Visual Prompt |
|---|---|---|
| 1 | PARTICIPATION — Every Voice Counts | 16-bit pixel art: a diverse circle of people — different ages, genders, and abilities — seated together in dialogue, each with a small pixel speech bubble. Bright, inclusive colour palette, flat pixel vector style. |
| 2 | NEEDS-BASED SUPPORT — Build on What's Already There | 16-bit pixel art: a pixel tree with deep roots labelled "local knowledge" and "community capacities". A humanitarian worker with a small watering can labelled "external support" tends it. Warm earthy tones, flat pixel style. |
| 3 | RESILIENCE — Programme for the Long Run | 16-bit pixel art: a community rebuilding together — people of all ages constructing a house with local materials, a local leader directing. Mountains and green landscape in background. Hopeful green pixel palette. |
| 4 | DO NO HARM — Protection is Everyone's Job | 16-bit pixel art: a pixel shield at the centre surrounded by four icons: a locked padlock (data protection), a consent scroll, a green leaf (environment), and a PSEA symbol. Bold, clear pixel icon style. |
| 5 | FEEDBACK & COMPLAINTS — Safe Channels, Real Action | 16-bit pixel art: multiple feedback pathways — pixel phone, suggestion box, trusted person figure, community meeting circle. All pathways converge on a central "action" icon. Calm blues and greens. |
| 6 | COORDINATION — Together We Cover More Ground | 16-bit pixel art: a jigsaw puzzle map with organisation pieces fitting together. The local NGO piece is the centrepiece. No gaps, no overlaps. Multi-colour organisation pieces, flat pixel style. |
| 7 | LEARNING — Listen, Adapt, Improve | 16-bit pixel art: a circular infographic — Data → Analysis → Decision → Action → Community Feedback → back to Data. Pixel arrows forming a virtuous cycle. Bold blues and greens. |
| 8 | STAFF & VOLUNTEERS — Culture Starts at the Top | 16-bit pixel art: a team in a circle, equal-sized diverse pixel figures, a code of conduct scroll in the centre, a protective umbrella arching over all. Inclusive warm pixel palette. |
| 9 | RESOURCES — Entrusted, Not Owned | 16-bit pixel art: a transparent pixel piggy bank with small community figures visible inside. A pixel magnifying glass and scales of justice on either side. Clean blues and gold pixel tones. |

---

### Score Badge Prompts (Pixel Art)

Badge images are displayed on the epilogue screen. Render at 48×48 px base resolution.

| Badge | Asset Filename | Pixel Art Prompt |
|---|---|---|
| 🏆 CHS Champion (90–100) | `assets/badges/champion.png` | 16-bit pixel art badge: a gold pixel trophy with a globe and heart symbol, surrounded by pixel laurel leaves. Inscribed "CHS Champion". Gold and white pixel palette. 48×48 px base. |
| 🌟 Committed Practitioner (70–89) | `assets/badges/practitioner.png` | 16-bit pixel art badge: a silver pixel star with a handshake icon. Inscribed "Committed Practitioner". Silver and blue pixel palette. 48×48 px base. |
| 📚 Learning in Action (50–69) | `assets/badges/learning.png` | 16-bit pixel art badge: a bronze circular pixel badge with an open book and a seedling growing from it. Inscribed "Learning in Action". Bronze and green pixel palette. 48×48 px base. |
| 🌱 Rising Learner (0–49) | `assets/badges/learner.png` | 16-bit pixel art badge: a teal circular pixel badge with a seedling and upward arrow. Inscribed "Rising Learner". Teal and cream pixel palette. 48×48 px base. |

---

## How to Use This File

### For Game Developers

1. **Load `CHS_2024_game.json`** into the page via `fetch()` at startup.
2. **Render the prologue** (`chapters[0]`) as the opening narrative screen with full-screen pixel art background.
3. **For each of the nine interactive chapters** (`chapters[1]` through `chapters[9]`):
   - Set the full-screen pixel art GIF background for the chapter's `id`.
   - Display `narrative` and `situation` text over the background.
   - Render the `question.options` as selectable buttons.
   - On selection: highlight correct/partial/incorrect options, add `score` to running total, display `feedback`, `learning_point`, and `chs_quote`.
4. **Render the epilogue** using the player's total score to select the appropriate `score_feedback` band.
5. Use the **pixel art image prompts** above to generate or commission background GIFs, character sprites, and UI elements.

### For Trainers and Facilitators

1. Use individual chapters as standalone case studies for group discussion.
2. Display the `situation` text and pause for discussion before revealing options.
3. After answering, use `learning_point` and `chs_quote` as discussion anchors.
4. Use the `chs_reference_summary` as a printed quick-reference card during sessions.

### For Artists and Pixel Art Creators

1. Work at **320×180 px base resolution**; the game engine scales up with `image-rendering: pixelated`.
2. Use a **24-colour palette** per scene, drawing from the scene mood descriptions in each prompt.
3. Deliver scene backgrounds as **animated GIFs** (8–16 frames for ambient loops) and character portraits as static **PNG** files with transparent backgrounds.
4. Follow each prompt's animation guidance for the specific ambient effect required.

---

## File Reference

**Source:** Core Humanitarian Standard on Quality and Accountability, 2024
**Filename:** `CHS_2024_game.json`
**Related files:** `CHS_2024.json` (raw CHS data), `CHS_2024.pdf` (official CHS document), `README_CHS_2024_game.md` (summary README for this game)
