# Field Ready: CHS in Practice

**File:** `CHS_2024_game.json`
**Version:** 1.0
**Reference:** Core Humanitarian Standard on Quality and Accountability, 2024

---

## Overview

*Field Ready: CHS in Practice* is a story-driven, interactive learning game designed to help humanitarian and development sector workers understand and apply the nine commitments of the Core Humanitarian Standard (CHS) 2024. Players step into the shoes of **Alex**, a field coordinator freshly deployed to **Verdania** — a fictional semi-arid sub-Saharan nation struck by catastrophic flooding — and must navigate real-world dilemmas that affect 200,000 displaced people.

The game is structured as a sequence of ten chapters (one prologue and nine interactive chapters) plus a scored epilogue. Each interactive chapter targets one CHS commitment, presenting a contextual narrative scenario followed by a multiple-choice question. Players receive instant feedback after every decision, and a final impact report grades their overall performance.

---

## Target Audience

Humanitarian and development sector workers — including field staff, programme managers, team leaders, and trainers — who want an engaging, scenario-based introduction to or refresher on the CHS 2024.

---

## Estimated Duration

Approximately **12 minutes** for a single playthrough.

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

---

## Game Structure

The game is stored in a single JSON object with the following top-level keys:

| Key | Description |
|---|---|
| `game_meta` | Title, version, audience, duration, description, how-to-play, and scoring rules |
| `setting` | Country context, description, and image prompt |
| `player_character` | Name, role, organisation, backstory, and avatar description |
| `chapters` | Array of 10 chapter objects (1 prologue + 9 interactive + 1 epilogue-style scene) |
| `epilogue` | Final narrative and score-based feedback bands |
| `chs_reference_summary` | Quick-reference summary of all nine CHS commitments |
| `supplementary_assets` | Key characters, UI design prompts, and printable learning card prompts |

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
| `chs_commitment` | object or null | CHS commitment number, full title, and key requirements addressed |
| `duration_hint_seconds` | number | Suggested reading/play time in seconds |
| `narrative` | string | Scene-setting text describing the situation |
| `situation` | string | The specific dilemma Alex faces |
| `character_emotion` | string | Alex's emotional state in the scene |
| `image_prompt` | string | Detailed illustration prompt for scene artwork |
| `question` | object | The multiple-choice question (see below) |
| `learning_point` | string | Key takeaway after the question is answered |
| `chs_quote` | string | Verbatim CHS requirement most relevant to the scenario |

### Question Object Schema

Each `question` object contains:

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique question identifier (e.g. `q1`) |
| `text` | string | The question prompt |
| `options` | array | Array of 2–3 answer options (see below) |

Each answer option contains:

| Field | Type | Description |
|---|---|---|
| `id` | string | Option letter (`a`, `b`, `c`) |
| `text` | string | The answer text shown to the player |
| `is_correct` | boolean | Whether this is the best answer |
| `score` | number | Points awarded (10 = correct, 5 = partial, 0 = incorrect) |
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

At the end of the game, players receive a badge and personalised feedback message based on their total score:

| Score Range | Badge Title | Summary |
|---|---|---|
| 90–100 | 🏆 CHS Champion | Consistently upheld the highest standards across all nine commitments |
| 70–89 | 🌟 Committed Practitioner | Strong decisions on most commitments; a few areas for continued growth |
| 50–69 | 📚 Learning in Action | On the right track; some avoidable gaps remain — revisit lower-scoring commitments |
| 0–49 | 🌱 Rising Learner | The game was challenging; review the full CHS 2024 document and replay |

---

## CHS Commitments Covered

This game covers all nine commitments of the Core Humanitarian Standard on Quality and Accountability (2024):

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

Each chapter targets specific CHS sub-requirements, which are recorded in the `chs_commitment.key_requirements` array within each chapter object.

---

## Epilogue

After all nine chapters, players reach the epilogue scene (`id: "epilogue"`, title: *Your Mission Report*). The narrative reflects on ten weeks of field work in Verdania and reinforces the message that quality and accountability are a daily mindset, not a compliance checklist. The epilogue object includes:

- A closing narrative passage
- An image prompt for the final scene
- A `score_feedback` object with distinct messages and badge prompts for each of the four score bands (90–100, 70–89, 50–69, 0–49)

---

## Supplementary Assets

The `supplementary_assets` key contains three categories of supporting material intended to guide UI/UX implementation and training delivery:

### Key Characters

Four character definitions, each with a name, role description, and a detailed flat-vector illustration prompt:

- **Alex** — Player character, field coordinator
- **Mira** — Alex's colleague at the camp
- **Yusuf** — Community feedback officer
- **Marco** — Senior international colleague (appears in Chapter 8)

### UI Design Prompts

Detailed illustration prompts for four key interface elements:

| Element | Description |
|---|---|
| `main_menu_background` | Aerial landscape of flooded Verdania; wide panoramic flat digital illustration |
| `chapter_transition_screen` | Nine CHS commitment colours in an interconnected circle graphic |
| `score_dashboard` | Nine commitment icons in a grid with colour-coded score indicators and a total-score circle |
| `loading_screen` | Alex walking along a dirt path toward the horizon, with a CHS quote overlay |

### Printable Learning Card Prompts

Nine learning card definitions — one per CHS commitment — each with a headline and a flat-vector illustration prompt suitable for printing as physical job aids or classroom resources.

---

## How to Use This File

1. **Load the JSON** into your learning platform, game engine, or quiz application.
2. **Render the prologue** (`chapters[0]`) as an introductory narrative screen.
3. **For each of the nine interactive chapters** (`chapters[1]` through `chapters[9]`):
   - Display the `narrative` and `situation` text.
   - Render the `question.options` as selectable buttons (in randomised order if desired).
   - On selection, reveal the chosen option's `feedback` and `character_response`, and add the option's `score` to the running total.
   - Display the `learning_point` and `chs_quote` after feedback.
4. **Render the epilogue** (`epilogue`) using the player's total score to select the appropriate `score_feedback` band.
5. Use the `supplementary_assets` image prompts to commission or generate chapter artwork and UI elements.

---

## File Reference

**Source:** Core Humanitarian Standard on Quality and Accountability, 2024
**Filename:** `CHS_2024_game.json`
**Related files:** `CHS_2024.json` (raw CHS data), `CHS_2024.pdf` (official CHS document)
