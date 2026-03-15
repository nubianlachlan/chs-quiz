# Kailani Rising: A Humanitarian Roleplay Game — Version 2

## Overview

**Kailani Rising** is a branching narrative roleplay game built on the [Core Humanitarian Standard on Quality and Accountability (CHS) 2024](CHS_2024.json).

Unlike Version 1 (*Field Ready*), which follows a linear path of single-answer questions, Version 2 is a **true branching roleplay**: every decision creates a different story path, and there is no single "correct" journey. Players experience trade-offs, consequences, and systemic pressures that reflect real humanitarian and development work.

---

## The Story

You are **Maya Chen**, newly appointed Country Director of HopeForward International, deployed to **Kailani** — a fictional Pacific island nation devastated by Cyclone Vera. Over the course of five critical decisions, you navigate:

1. How to conduct an inclusive needs assessment under time pressure
2. Whether to distribute pre-positioned supplies or fight for community-led alternatives
3. How to respond when field staff face a security crisis
4. What to do when a credible complaint is made against a respected staff member
5. Whether to extend the programme, hand over responsibly, or accept a rushed exit

Every choice shapes your score across four dimensions and leads to one of four possible endings.

---

## File

| File | Description |
|------|-------------|
| `CHS_2024_game_v2.json` | Full game data file — skeleton version, ready for scene expansion |

---

## Game Structure

```
Prologue: Day One in Port Hana
       ↓
Decision 1 — Whose Voice Counts?  (CHS 1)
  ├── 1a: Top-down survey          → scene_1a
  ├── 1b: Inclusive process [best] → scene_1b
  └── 1c: Desk review only         → scene_1c
       ↓ (all paths converge)
Decision 2 — When Supplies Don't Match Needs  (CHS 2 & 4)
  ├── 2a: Distribute as planned          → scene_2a
  ├── 2b: Negotiate with donor [best]    → scene_2b
  └── 2c: Redirect without approval     → scene_2c
       ↓
Decision 3 — When Staff Are at Risk  (CHS 8)
  ├── 3a: Keep team deployed            → scene_3a
  ├── 3b: Suspend and evacuate [best]   → scene_3b
  └── 3c: Partial stand-down            → scene_3c
       ↓
Decision 4 — A Serious Complaint  (CHS 5)
  ├── 4a: Handle quietly               → scene_4a
  ├── 4b: Formal process [best]        → scene_4b
  └── 4c: Dismiss complaint            → scene_4c
       ↓
Decision 5 — Time to Hand Over  (CHS 3 & 6)
  ├── 5a: Request extension            → scene_5a
  ├── 5b: Structured handover [best]   → scene_5b
  └── 5c: Rapid HQ-driven exit         → scene_5c
       ↓
Epilogue + Score-Based Ending
  ├── 🏆 Transformative Leader   (32–40 pts)
  ├── 🌟 Committed Practitioner  (22–31 pts)
  ├── 📚 Struggling Responder    (12–21 pts)
  └── 🌱 Crisis Mode              (0–11 pts)
```

---

## Scoring Dimensions

| Dimension | What It Measures | Key CHS Commitments |
|-----------|-----------------|---------------------|
| **Community Trust** | How much affected communities trust and engage with HopeForward | 1, 2, 3, 5 |
| **Staff Wellbeing** | Safety, morale, and health of national and international staff | 8 |
| **Program Quality** | Effectiveness, relevance, and measurable impact of the response | 2, 3, 4, 6, 7 |
| **Accountability** | Ethical standards, transparency, and organisational integrity | 5, 7, 9 |

- Each dimension starts at **0** and can reach **10**
- Total maximum score: **40**
- Scores are cumulative across all five decisions

---

## Key Characters

| Character | Role | Significance |
|-----------|------|-------------|
| **Maya Chen** | Player — Country Director, HopeForward | Mid-30s, first CD role, experienced but under pressure |
| **Sione Taufa** | National Programme Officer, HopeForward | Ground-level advisor, trusted, Kailani national |
| **Filomena Vaka** | Executive Director, KCV (local partner) | Proud civil society leader, watchful of international NGOs |
| **Leila Hassan** | Field Coordinator, Northern Coast | Dedicated staff member at the centre of the security crisis |
| **Carlos Reyes** | Logistics Coordinator, HopeForward | Efficient but sometimes prioritises speed over community needs |

---

## Current Status: Skeleton

The game skeleton is complete. All five decisions, 15 consequence scenes, prologue, epilogue, and four endings are defined with:

- ✅ Scene IDs and branching structure
- ✅ CHS commitment links per decision
- ✅ Score effects per option
- ✅ Brief narrative summaries (1–3 sentences)
- ✅ Learning notes and CHS quotes
- ✅ Placeholder image prompts
- ✅ Four scored endings with reflection questions

**What still needs expansion** (marked with `"status": "placeholder"` in the JSON):
- Full narrative text per scene (~80–150 words each)
- Character dialogue and emotional detail
- Detailed AI image generation prompts
- Complete ending narratives
- Supporting character backstories and UI design prompts

Use the prompts below to expand the game iteratively.

---

## Development Prompts

Use these prompts in sequence with an AI assistant (e.g. GitHub Copilot, ChatGPT, Claude) to expand the skeleton into a complete, production-ready game data file.

---

### Prompt 1 — Expand the Prologue and Epilogue

> Using the skeleton in `CHS_2024_game_v2.json`, expand the `prologue` and `epilogue` scenes into full narrative text of approximately 150 words each. The prologue should describe Maya's arrival in Kailani in vivid, urgent detail. The epilogue should be reflective and personal. Also replace all PLACEHOLDER text in the `image_prompt` fields for these two scenes with complete, detailed AI image generation prompts in the same style as `CHS_2024_game.json`.

---

### Prompt 2 — Expand Decision 1: Assessment & Participation

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_1` and its three consequence scenes (`scene_1a`, `scene_1b`, `scene_1c`). For `decision_1`: write a full scene narrative (~120 words) with character dialogue involving Sione and a KCV representative. For each consequence scene: write a full narrative (~100 words) with learning feedback and a detailed `image_prompt`. Remove all PLACEHOLDER text and `status` fields once complete. Maintain the JSON structure exactly.

---

### Prompt 3 — Expand Decision 2: Aid Distribution Crisis

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_2` and its three consequence scenes (`scene_2a`, `scene_2b`, `scene_2c`). For `decision_2`: write a full scene narrative (~120 words) with pressure from Carlos (logistics) and tension around donor compliance. For each consequence scene: write a full narrative (~100 words) with learning feedback and a detailed `image_prompt`. Remove all PLACEHOLDER text and `status` fields once complete. Maintain JSON structure exactly.

---

### Prompt 4 — Expand Decision 3: Staff Safety Crisis

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_3` and its three consequence scenes (`scene_3a`, `scene_3b`, `scene_3c`). For `decision_3`: write a full scene narrative (~120 words) including messages from Leila and pressure from HQ. For each consequence scene: write a full narrative (~100 words) with learning feedback and a detailed `image_prompt`. Remove all PLACEHOLDER text and `status` fields once complete. Maintain JSON structure exactly.

---

### Prompt 5 — Expand Decision 4: Complaints & Accountability

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_4` and its three consequence scenes (`scene_4a`, `scene_4b`, `scene_4c`). For `decision_4`: write a full scene narrative (~120 words) with detail about the complaint, the staff dynamics, and Maya's internal conflict. For each consequence scene: write a full narrative (~100 words) with learning feedback and a detailed `image_prompt`. Remove all PLACEHOLDER text and `status` fields once complete. Maintain JSON structure exactly.

---

### Prompt 6 — Expand Decision 5: Handover & Exit

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_5` and its three consequence scenes (`scene_5a`, `scene_5b`, `scene_5c`). For `decision_5`: write a full scene narrative (~120 words) involving Filomena from KCV, HQ pressure for extension, and the long-term perspective. For each consequence scene: write a full narrative (~100 words) with learning feedback and a detailed `image_prompt`. Remove all PLACEHOLDER text and `status` fields once complete. Maintain JSON structure exactly.

---

### Prompt 7 — Write the Four Endings

> Using the skeleton in `CHS_2024_game_v2.json`, expand all four endings: `ending_transformative`, `ending_committed`, `ending_struggling`, and `ending_crisis`. For each ending: write a full `narrative_summary` of ~100 words that reflects Maya's journey in Kailani, the human impact of her choices, and what the score dimensions mean. Also write detailed `badge_image_prompts` for each badge. Keep the reflection questions as-is but ensure they fit the narrative tone. Maintain JSON structure exactly.

---

### Prompt 8 — Expand Supporting Characters and UI Design Prompts

> Using the skeleton in `CHS_2024_game_v2.json`, expand the `supplementary_assets` section. For each of the four `key_supporting_characters`: write a fuller backstory (~60 words) and replace the PLACEHOLDER `image_prompt` with a complete AI illustration prompt. For the `ui_design_prompts` section: replace each PLACEHOLDER with a detailed, production-ready AI image generation prompt for each UI screen (main_menu, score_dashboard, decision_screen, chapter_transition). Use the same style as the prompts in `CHS_2024_game.json` for consistency.

---

## Relationship to Version 1

| Feature | v1: Field Ready | v2: Kailani Rising |
|---------|----------------|-------------------|
| Structure | Linear (9 chapters in sequence) | Branching (5 decisions, 15 paths) |
| Question format | Single correct answer | Three options with trade-offs |
| Scoring | Single score (0–100) | Four dimensions (0–10 each) |
| Endings | One epilogue with 4 score tiers | Four distinct narrative endings |
| Character | Alex (field coordinator) | Maya Chen (country director) |
| Setting | Verdania (floods, Africa) | Kailani (cyclone, Pacific) |
| Estimated playtime | 12 minutes | 25 minutes |
| CHS commitments covered | All 9 (one per chapter) | 1, 2, 3, 4, 5, 8, 9 (embedded in decisions) |

---

## CHS Commitments Reference

| # | Title | Covered in |
|---|-------|-----------|
| 1 | Participation & Inclusion | Decision 1 |
| 2 | Timely, Needs-Based Support | Decisions 1 & 2 |
| 3 | Resilience & Local Ownership | Decision 5 |
| 4 | Do No Harm | Decision 2 |
| 5 | Safe Complaints & Feedback | Decision 4 |
| 6 | Coordination & Complementarity | Decision 5 |
| 7 | Learning & Accountability | All endings |
| 8 | Competent, Well-Managed Staff | Decision 3 |
| 9 | Ethical Resource Management | Decisions 2 & 4 |

Reference: [Core Humanitarian Standard on Quality and Accountability, 2024](CHS_2024.json)
