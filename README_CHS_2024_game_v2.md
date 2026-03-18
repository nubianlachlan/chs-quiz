# Kailani Rising: A Humanitarian Roleplay

**File:** `CHS_2024_game_v2.json`
**Version:** 3.0-skeleton
**Status:** Skeleton — all 9 CHS commitments covered; use `development_prompts` to expand each section
**Reference:** Core Humanitarian Standard on Quality and Accountability, 2024

---

## Overview

*Kailani Rising: A Humanitarian Roleplay* is a comprehensive branching narrative game covering all nine commitments of the Core Humanitarian Standard (CHS) 2024. Players take the role of **Maya Chen**, a newly appointed Country Director for HopeForward International in **Kailani** — a fictional Pacific island nation devastated by Cyclone Vera.

Over nine critical decision chapters — one per CHS commitment — Maya navigates community rights and participation, timely and effective assistance, building local resilience, avoiding harm, complaints and feedback, coordination, learning and improvement, staff management, and ethical resource stewardship. Every choice references specific CHS sub-requirements. Choices set **context flags** that cascade into later decisions, creating real interdependencies. At the end, four possible **scored endings** are determined by the player's cumulative performance across four dimensions.

All 50 CHS sub-requirements are addressed across the nine decision chapters.

---

## Target Audience

Humanitarian and development sector workers, trainers, and students seeking a deep, scenario-based exploration of all nine CHS commitments. The game is designed for use in facilitated training sessions as well as self-directed learning.

---

## Estimated Duration

Approximately **45 minutes** for a single playthrough. Due to the branching structure and reflection content, facilitated use may require 60–90 minutes.

---

## Setting

### Country Overview

| Field | Detail |
|---|---|
| Country | Kailani (fictional Pacific island nation) |
| Crisis | Cyclone Vera (Category 4), landfall 72 hours before the game begins |
| Displaced population | 85,000 people |
| Government capacity | Stretched; limited response capability |
| Civil society | Active local organisations, under-resourced |
| Response timeline | Six months: immediate response (decisions 1–4), stabilisation (decisions 5–7), transition and exit (decisions 8–9) |

### Key Locations

| ID | Name | Description |
|---|---|---|
| `loc_capital` | Port Hana | Capital city; operational hub, government ministries, UN cluster system, HopeForward office |
| `loc_north` | Northern Coast | Worst-affected area; isolated communities, cut road access, high vulnerability, security concerns |
| `loc_camp` | Manu Displacement Camp | Largest camp near Port Hana; 12,000 displaced people; key site for participation and complaints decisions |
| `loc_village` | Tevita Village | Remote inland community; underserved; local partner KCV present; site of cash-transfer innovation |
| `loc_talio` | Talio Sub-district Hub | Safer inland town, 40 km from Northern Coast; emergency staff base during security incidents |

---

## Player Character

| Field | Detail |
|---|---|
| Name | Maya Chen |
| Role | Country Director |
| Organisation | HopeForward International |
| Background | Eight years of field experience across Asia and East Africa; trained in social work with a master's in humanitarian action |
| Backstory | First Country Director role; under pressure from headquarters; trusted by her team; committed to principled, accountable, locally-led response |
| Closest advisor | Sione Taufa, Kailani national with deep community networks |

---

## Key Characters

The game features nine named supporting characters, each defined by a detailed backstory, primary role, and a flat-vector illustration prompt:

| ID | Name | Role | Key Decisions |
|---|---|---|---|
| `char_maya` | Maya Chen | Country Director, HopeForward (player character) | All |
| `char_sione` | Sione Taufa | National Programme Officer, HopeForward | 1, 2, 3, 8 |
| `char_filomena` | Filomena Vaka | Executive Director, Kailani Community Voices (KCV) | 1, 3, 5, 6, 9 |
| `char_leila` | Leila Hassan | Field Coordinator, Northern Coast | 8 |
| `char_carlos` | Carlos Reyes | Logistics Coordinator, HopeForward | 2, 3, 4, 7 |
| `char_amara` | Amara Diallo | M&E Officer, HopeForward | 7 |
| `char_toma` | Toma Faleolo | Finance & Compliance Manager, HopeForward | 9 |
| `char_kan_director` | Dr. Ana Tuivaga | Director, Kailani Aid Network (KAN) | 6 |
| `char_sina` | Sina Talagi | Community member, Manu Camp (complainant) | 5 |

### Character Summaries

**Sione Taufa** is a Kailani national with deep community networks, serving as Maya's most trusted ground-level advisor. Practical and perceptive, he holds local knowledge no international hire could replicate.

**Filomena Vaka** leads Kailani Community Voices (KCV), the island's most respected civil society organisation. She has seen every variation of "partnership" that is really outsourcing. Warm and sharp, she is cautiously generous with her trust — and becomes a key partner or critic depending on Maya's choices.

**Leila Hassan** is HopeForward's Field Coordinator on the Northern Coast, operating in the hardest environment in the response. Fearless and meticulous, her safety and wellbeing are central to Decision 8.

**Carlos Reyes** is a highly efficient logistics specialist. His instinct is always to ask "how quickly?" rather than "whether?" — sometimes prioritising speed and donor compliance over community needs.

**Amara Diallo** is a data-driven M&E Officer who drives the learning and monitoring process. Central to Decision 7.

**Toma Faleolo** is HopeForward's meticulous Finance & Compliance Manager, central to Decision 9 and sometimes in tension with Carlos over spend versus compliance.

**Dr. Ana Tuivaga** leads the Kailani Aid Network (KAN), which is excluded from the UN cluster — representing local actor exclusion in Decision 6.

**Sina Talagi** is a 34-year-old displaced community member at Manu Camp and mother of two, whose formal complaint tests HopeForward's PSEA and complaints processes in Decision 5.

---

## Game Structure

The game is stored in a single JSON object with the following top-level keys:

| Key | Description |
|---|---|
| `game_meta` | Title, version, status, audience, duration, description, how-to-play, and multi-dimensional scoring rules |
| `setting` | Country description, key locations, and image prompt |
| `player_character` | Maya Chen's name, role, organisation, and backstory |
| `key_characters` | Array of nine named characters with roles, descriptions, and image prompts |
| `scenes` | Array of 47 scene objects (prologue + 9 decisions + 36 consequence scenes + epilogue) |
| `score_dimensions` | Four scoring dimensions with descriptions and icon prompts |
| `context_flags_system` | Description of the flag system and full list of 18 context flags |
| `endings` | Four possible endings with score thresholds, narratives, and reflection questions |
| `chs_reference_summary` | Quick-reference of all nine commitments with all 50 sub-requirements |
| `supplementary_assets` | Expanded character backstories and UI design prompts |
| `development_prompts` | Eleven expansion prompts for developing each section from skeleton to full text |

---

## Scenes Array

The `scenes` array contains **47 entries** covering the full arc from prologue to epilogue:

### Scene Types

| Type | Description |
|---|---|
| `narrative` | Non-interactive scene; sets context or closes the game |
| `decision` | Interactive scene presenting the situation and four options, each with scores and consequence links |
| `consequence` | Follow-on scene shown after an option is chosen; reveals immediate and delayed impacts |

### Scene Index

| Index | Scene ID | Type | Title | CHS # |
|---|---|---|---|---|
| 0 | `prologue` | narrative | Day One — Cyclone Vera's Aftermath | — |
| 1 | `decision_1` | decision | Decision 1 — How Will You Hear the Community? | 1 |
| 2 | `scene_1A` | consequence | Invisible and Unheard | — |
| 3 | `scene_1B` | consequence | Heard — and the Data Shows It | — |
| 4 | `scene_1C` | consequence | The Digital Divide | — |
| 5 | `scene_1D` | consequence | The View from the Top of the Hierarchy | — |
| 6 | `decision_2` | decision | Decision 2 — What Do You Actually Distribute, and How? | 2 |
| 7 | `scene_2A` | consequence | Boxes Ticked, Needs Missed | — |
| 8 | `scene_2B` | consequence | The Right Things, To the Right People, At the Right Time | — |
| 9 | `scene_2C` | consequence | Efficient, but Whose Context? | — |
| 10 | `scene_2D` | consequence | Equal Isn't Always Just | — |
| 11 | `decision_3` | decision | Decision 3 — How Should the Programme Strengthen Local Resilience? | 3 |
| 12 | `scene_3A` | consequence | Delivered but Not Strengthened | — |
| 13 | `scene_3B` | consequence | Ownership in Practice | — |
| 14 | `scene_3C` | consequence | The Storm That Didn't Kill Anyone | — |
| 15 | `scene_3D` | consequence | Built to Last | — |
| 16 | `decision_4` | decision | Decision 4 — How Do You Protect People, Data, and the Environment? | 4 |
| 17 | `scene_4A` | consequence | Four Risks, Four Harms | — |
| 18 | `scene_4B` | consequence | Prevention Pays | — |
| 19 | `scene_4C` | consequence | Half-Protected | — |
| 20 | `scene_4D` | consequence | The Gap in the Informal Approach | — |
| 21 | `decision_5` | decision | Decision 5 — How Do You Handle a Serious Complaint? | 5 |
| 22 | `scene_5A` | consequence | The Silence That Follows | — |
| 23 | `scene_5B` | consequence | The System That Worked | — |
| 24 | `scene_5C` | consequence | Referred Without Asking | — |
| 25 | `scene_5D` | consequence | From Crisis to Capability | — |
| 26 | `decision_6` | decision | Decision 6 — How Will You Coordinate with Other Actors? | 6 |
| 27 | `scene_6A` | consequence | Competing While Communities Suffer | — |
| 28 | `scene_6B` | consequence | The Value of the Room | — |
| 29 | `scene_6C` | consequence | Better, But Not Good Enough | — |
| 30 | `scene_6D` | consequence | The Forum That Fragmented | — |
| 31 | `decision_7` | decision | Decision 7 — How Do You Use Evidence to Improve? | 7 |
| 32 | `scene_7A` | consequence | The Data That Was Buried | — |
| 33 | `scene_7B` | consequence | Learning That Changed the Programme | — |
| 34 | `scene_7C` | consequence | Half the Learning | — |
| 35 | `scene_7D` | consequence | Verified — And Three Weeks Late | — |
| 36 | `decision_8` | decision | Decision 8 — How Do You Care for Your Team and Uphold Conduct Standards? | 8 |
| 37 | `scene_8A` | consequence | Three Failures, One Month | — |
| 38 | `scene_8B` | consequence | The Call That Mattered | — |
| 39 | `scene_8C` | consequence | Safe But Not Protected | — |
| 40 | `scene_8D` | consequence | From Crisis to Culture | — |
| 41 | `decision_9` | decision | Decision 9 — How Do You Manage the Remaining Resources Ethically? | 9 |
| 42 | `scene_9A` | consequence | Technically Compliant, Ethically Failing | — |
| 43 | `scene_9B` | consequence | Every Dollar for Its Purpose | — |
| 44 | `scene_9C` | consequence | Right Goal, Wrong Road | — |
| 45 | `scene_9D` | consequence | The Cost of Looking Away | — |
| 46 | `epilogue` | narrative | Your Mission Report | — |

### Decision Scene Object Schema

Each `decision` scene contains the following fields:

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique scene identifier (e.g. `decision_1`) |
| `type` | string | `"decision"` |
| `title` | string | Display title |
| `chs_commitment` | object | CHS commitment number, full title, and all sub-requirements with descriptions |
| `narrative_summary` | string | Short summary of the scene context (placeholder for full narrative in skeleton) |
| `narrative` | string | Full scene narrative text (to be expanded from skeleton using development prompts) |
| `situation_summary` | string | The specific dilemma Maya faces |
| `context_flag_effects` | object | How previously set flags change the situation in this decision |
| `options` | array | Four answer options (see below) |
| `image_prompt` | string | Detailed illustration prompt for scene artwork |

### Decision Option Schema

Each option in the `options` array contains:

| Field | Type | Description |
|---|---|---|
| `id` | string | Option letter (`A`, `B`, `C`, `D`) |
| `text` | string | The option text shown to the player |
| `score_changes` | object | Points awarded or deducted across each of the four dimensions |
| `sets_flag` | string or null | Context flag this option activates (if any) |
| `consequence_scene_id` | string | ID of the consequence scene triggered by this option |
| `chs_requirements_met` | array | Sub-requirements this option upholds |
| `chs_requirements_missed` | array | Sub-requirements this option fails to uphold |
| `consequence_summary` | string | Brief summary of the outcome |
| `cascading_note` | string | How this choice shapes future decisions |

### Consequence Scene Object Schema

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique scene identifier (e.g. `scene_1A`) |
| `type` | string | `"consequence"` |
| `title` | string | Display title |
| `chs_commitment` | null | Not applicable to consequence scenes |
| `narrative_summary` | string | Immediate outcome summary |
| `narrative` | string | Full consequence narrative (to be expanded from skeleton) |
| `delayed_impact` | string | Longer-term consequence for communities or the programme |
| `image_prompt` | string | Illustration prompt for the consequence scene |
| `next_scene_id` | string | ID of the next scene to navigate to |

---

## Scoring System

### Four Scoring Dimensions

The game tracks progress across four independent dimensions. Each dimension can accumulate positive or negative scores across all nine decisions. The maximum possible score per dimension is approximately +18; negative scores are possible for poor choices.

| Dimension ID | Title | What It Measures | Shaped by CHS |
|---|---|---|---|
| `community_trust` | Community Trust | Degree to which communities trust, engage with, and feel heard by HopeForward | Commitments 1, 2, 5, 6, 7 |
| `staff_wellbeing` | Staff Wellbeing | Safety, morale, psychological health, and professional development of staff and volunteers | Commitment 8 |
| `program_quality` | Program Quality | Relevance, effectiveness, technical quality, and measurable impact of the response | Commitments 2, 3, 4, 6, 7 |
| `accountability` | Accountability & Ethics | Adherence to ethical standards, transparency, protection from exploitation, and organisational integrity | Commitments 4, 5, 8, 9 |

### Total Score and Ending Thresholds

The ending is determined by the **sum of all four dimension scores**:

| Score Range | Ending Title | Summary |
|---|---|---|
| 46–56 | 🏆 Transformative Leader | Principled, inclusive, locally-led action; all nine CHS commitments honoured in practice |
| 32–45 | 🌟 Committed Practitioner | Strong in most areas; some trade-offs and gaps; intent was always there |
| 18–31 | 📚 Struggling Responder | Well-intentioned but inconsistent; operational pressure frequently overrode principle |
| 0–17 | 🌱 Rising Learner (Crisis Mode) | Serious setbacks across multiple commitments; an honest invitation to reflect and restart |

---

## Context Flags System

Context flags are boolean states set by specific option choices. They are tracked by the game engine and modify the situations Maya faces in later decisions — creating real interdependencies between choices.

**Key principle:** Flags cannot be reversed once set. A flag set in Decision 1 may improve or constrain the options available in Decisions 5, 6, or 7.

### Full Flag List

| Flag ID | Set By | Effect Summary |
|---|---|---|
| `inclusive_assessment` | Decision 1, Option B | Communities expect continued meaningful participation; KCV is a trusted partner for all future activities |
| `community_informed` | Decision 1, Options B or D | Communities understand their rights and HopeForward's responsibilities |
| `local_knowledge_built_in` | Decision 2, Option B | Programme is grounded in context and local capacities, improving later adaptation |
| `referral_pathways_active` | Decision 2, Option B | Other cluster members are aware of unmet needs HopeForward referred; strengthens coordination |
| `local_ownership_by_design` | Decision 3, Options B or D | KCV and community leaders have formal role in programme governance; reduces dependency risk |
| `drr_integrated` | Decision 3, Options C or D | Communities have disaster risk knowledge; strengthens long-term resilience |
| `protection_framework_active` | Decision 4, Options B or C | PSEA and protection policies are established; staff and communities aware of mechanisms |
| `data_protection_in_place` | Decision 4, Options B, C or D | Beneficiary data is handled ethically; reduces risk of future data-related harm |
| `complaints_trusted` | Decision 5, Options B or D | Community members actively use feedback channels; complaints data is rich and timely |
| `survivor_centred_process` | Decision 5, Options B or D | PSEA standards are actively modelled; staff understand expectations |
| `cluster_coordination_active` | Decision 6, Option B | HopeForward is a trusted cluster member; geographic duplication resolved; local partners included |
| `partner_quality_supported` | Decision 6, Options B or C | KCV has received CHS capacity support; their programme quality improves |
| `gender_data_actioned` | Decision 7, Option B | Gender gap addressed; women and girls receive more targeted programming in later activities |
| `learning_shared_externally` | Decision 7, Options B or C | Tevita modality shared with cluster; other agencies benefit; HopeForward seen as learning leader |
| `duty_of_care_upheld` | Decision 8, Options B, C or D | Staff trust leadership; retention improves; team culture of accountability is strong |
| `misconduct_addressed_formally` | Decision 8, Options B or D | Staff understand code of conduct is enforced; community sees fair process |
| `donor_transparent_engagement` | Decision 9, Option B | Donor trusts HopeForward; future funding relationship is stable and honest |
| `community_resources_transferred` | Decision 9, Options B or C | Remaining resources are in community hands at exit; strengthens local ownership legacy |

---

## Four Possible Endings

### 🏆 Transformative Leader (Score: 46–56)
Maya's leadership will be studied as a model of principled, inclusive, locally-led humanitarian action. She listened to marginalised voices, protected her staff, maintained accountability when it was uncomfortable, coordinated generously, used evidence to improve the programme, and left stronger local systems behind. All nine CHS commitments were honoured in practice — not just in policy.

**Key flags typically achieved:** `inclusive_assessment`, `local_ownership_by_design`, `protection_framework_active`, `complaints_trusted`, `cluster_coordination_active`, `gender_data_actioned`, `duty_of_care_upheld`, `donor_transparent_engagement`

**Reflection prompts:**
- What made it possible to prioritise community voice even under time and donor pressure?
- Which CHS commitment felt most natural to uphold, and which required the most effort?
- What would you do differently — even after a strong performance?
- How did early decisions shape your options in later chapters?

---

### 🌟 Committed Practitioner (Score: 32–45)
Maya made principled choices in most situations but faced real trade-offs and sometimes chose pragmatism over principle. The programme left positive impact. There are specific CHS commitments where the full standard was not met — but the intent was always there. The learning journey continues.

**Reflection prompts:**
- Which decisions were hardest and what made them hard?
- Where did operational pressure most consistently pull you away from CHS principles?
- Which CHS commitment do you most want to strengthen in your next response?

**CHS requirements to revisit:** 1.1, 3.4, 4.4, 5.5, 6.4, 7.3, 8.7

---

### 📚 Struggling Responder (Score: 18–31)
Maya's response was well-intentioned but inconsistent. Some communities and staff were let down. Operational pressures frequently overrode principled choices. The gap between what CHS requires and what the programme delivered is significant across multiple commitments.

**Reflection prompts:**
- Which CHS commitments did you find hardest to uphold, and why?
- What systemic pressures most affected your decisions — and which could you have pushed back against?
- What one change in your organisation's systems would help you act differently?

**CHS requirements to revisit:** 1.4, 2.1, 3.1, 4.1, 4.4, 5.4, 5.5, 6.1, 7.3, 8.2, 9.5

---

### 🌱 Rising Learner / Crisis Mode (Score: 0–17)
The response in Kailani faced serious setbacks across multiple CHS commitments. Communities were not heard or protected. Staff were harmed. Accountability was compromised. Resources were mismanaged. This is not a verdict on character — it is a signal that operational pressure and institutional incentives systematically overrode principled practice.

**Reflection prompts:**
- Which pressures most consistently pushed you toward less principled choices?
- What does accountability mean when you are under-resourced and making decisions alone?
- Who in your network could support you to strengthen your practice before the next response?

**CHS requirements to revisit:** All 50 requirements, particularly 1.1, 2.1, 3.4, 4.1, 4.4, 5.4, 5.5, 6.1, 7.3, 8.2, 9.5

---

## CHS Commitments and Sub-Requirements

This game addresses all **50 CHS sub-requirements** across nine decisions:

| # | Short Title | Sub-Requirements |
|---|---|---|
| 1 | Participation & Rights | 1.1 DEI and marginalisation · 1.2 Information sharing · 1.3 Language and formats · 1.4 Meaningful participation · 1.5 Consent and dignity in communications · 1.6 Organisational approach to participation |
| 2 | Timely & Effective Support | 2.1 Local knowledge and capacities · 2.2 Fair and transparent criteria · 2.3 Monitoring and adjustment · 2.4 Technical standards · 2.5 Referral of unmet needs · 2.6 Contextual understanding of diversity and risk |
| 3 | Resilience & Local Ownership | 3.1 Community leadership and local resilience · 3.2 Risk reduction capacities · 3.3 Long-term positive effects · 3.4 Local ownership from the outset · 3.5 Organisational approach to local leadership |
| 4 | Do No Harm & Protection | 4.1 Prevent harm to people and communities · 4.2 Prevent environmental harm · 4.3 Data protection and privacy · 4.4 PSEA and protection from abuse · 4.5 Environmental impact reduction approach |
| 5 | Complaints & Accountability | 5.1 Accessible feedback and complaints mechanisms · 5.2 Community awareness of staff conduct standards · 5.3 Community awareness of how to complain · 5.4 Manage and investigate complaints · 5.5 Survivor-centred PSEA approaches · 5.6 Organisational approach to complaints |
| 6 | Coordination & Complementarity | 6.1 Coordination with local and community-based actors · 6.2 Support partners to apply quality and accountability · 6.3 Assess and strengthen partner quality · 6.4 Equitable decision-making and resource sharing in partnerships |
| 7 | Learning & Improvement | 7.1 Listen and respond to community feedback · 7.2 Disaggregated data collection · 7.3 Use data to improve programmes · 7.4 Share learning with communities and stakeholders · 7.5 Organisational approach to continuous improvement |
| 8 | Staff Competence & Wellbeing | 8.1 Organisational culture of quality and accountability · 8.2 Safe and inclusive working environment · 8.3 Staff support, skills, and competencies · 8.4 Code of conduct adherence · 8.5 Staff reporting mechanisms · 8.6 Address misconduct · 8.7 Fair and transparent HR management |
| 9 | Ethical Resource Management | 9.1 Adequate capacity and resources · 9.2 Responsible financial management · 9.3 Ethical fundraising and resource mobilisation · 9.4 Achieve intended purpose, minimise waste · 9.5 Corruption, fraud, and conflict of interest prevention · 9.6 Organisational approach to resource management |

---

## Development Prompts

The file includes eleven `development_prompts` entries to guide content expansion from skeleton to full text. Each prompt specifies:

- The scene(s) to expand
- The CHS focus requirements
- Detailed instructions for narrative voice, character dialogue, flag effects, image prompts, and JSON structure

### Expansion Prompts Summary

| # | Title | CHS Focus |
|---|---|---|
| 1 | Expand the Prologue and Epilogue | All nine commitments (framing) |
| 2 | Expand Decision 1 — Participation & Rights | Requirements 1.1–1.6 |
| 3 | Expand Decision 2 — Timely & Effective Support | Requirements 2.1–2.6 |
| 4 | Expand Decision 3 — Resilience & Local Ownership | Requirements 3.1–3.5 |
| 5 | Expand Decision 4 — Do No Harm & Protection | Requirements 4.1–4.5 |
| 6 | Expand Decision 5 — Complaints & Feedback | Requirements 5.1–5.6 |
| 7 | Expand Decision 6 — Coordination & Complementarity | Requirements 6.1–6.4 |
| 8 | Expand Decision 7 — Learning & Improvement | Requirements 7.1–7.5 |
| 9 | Expand Decision 8 — Staff Competence & Wellbeing | Requirements 8.1–8.7 |
| 10 | Expand Decision 9 — Ethical Resource Management | Requirements 9.1–9.6 |
| 11 | Final Integration Pass | Cross-cutting: flag cascade effects, score calibration, endings |

---

## Supplementary Assets

The `supplementary_assets` key contains two categories of supporting material:

### Expanded Character Backstories

Full biographical backstories for all nine named characters (Maya, Sione, Filomena, Leila, Carlos, Amara, Toma, Dr. Ana Tuivaga, Sina Talagi), each with a detailed flat-vector illustration prompt consistent with the game's visual style.

### UI Design Prompts

Detailed illustration prompts for key interface elements:

| Element | Description |
|---|---|
| Main menu background | Aerial map-style view of Kailani post-cyclone; flat digital illustration, Pacific blues, tropical greens, storm greys |
| Character selection screen | Grid of eight named characters in their illustration style |
| Decision screen layout | Maya's portrait left, situation text centre, four option buttons right |
| Consequence screen layout | Full-width consequence scene illustration with narrative text and score-dimension indicators |
| Score dashboard | Four dimension bars in a horizontal layout with icons and running totals |
| Ending screen | Badge image, ending title, narrative summary, and reflection question cards |

### Pixel Art Implementation Recommendation

The `pixel_art_implementation` key in `supplementary_assets` contains a full pixel art visual style and engine implementation guide. Summary:

#### Recommended Engine: Ren'Py

[Ren'Py](https://www.renpy.org/) is the primary recommendation — open-source, cross-platform (Windows, macOS, Linux, Android, iOS, Web), and purpose-built for branching narrative games. Its flag/variable system maps directly to `context_flags_system`, and its scripting language is readable by non-programmers. The JSON file can be loaded at runtime with a Python `json.loads()` block.

**Alternatives:**

| Engine | Best For |
|---|---|
| RPG Maker MZ | Overworld map, movement mechanics, richer pixel environments |
| GB Studio 4 | Ultra-minimal Game Boy–style browser demo; conference/event use |
| Godot 4 | Point-and-click or map-navigation expansion; full open-source control |
| Twine + SugarCube | Zero-install web prototype; trainer-editable content |

#### Pixel Art Specs

| Setting | Value |
|---|---|
| Base canvas | 320×180 px (16:9, integer-scaled to 720p/1080p) |
| Colour palette | 24-colour Kailani palette (Pacific Teal, Warm Ochre, Tropical Green, Storm Grey, Relief Blue, Warm Coral, three skin tones, and supporting shades) |
| Character sprites | 48×48 px full-body; 32×48 px bust portrait for dialogue boxes |
| Backgrounds | 320×180 px, 3 parallax layers |
| UI tile grid | 8×8 px base grid |
| Recommended fonts | Press Start 2P (headers), Munro (body/dialogue), Pixel Operator (accessibility variant) |

#### Audio

Chiptune with Pacific island atmosphere. Tools: FamiTracker, LMMS, or BeepBox. Seven distinct music tracks (main menu, each environment type, high/low endings) plus six core sound effects (page turn, positive ding, negative thud, flag-set chime, dialogue blip, chapter transition).

#### Accessibility

Integer scaling only · Font-size toggle (bitmap ↔ system sans-serif) · Text labels on all colour-coded deltas · Minimum 44×44 CSS px tap targets on mobile.

---

## How to Use This File

### For Game Developers

1. **Load the JSON** into your game engine.
2. **Render the prologue** (`scenes[0]`) as an opening narrative screen.
3. **For each decision scene** (scenes at `type: "decision"`):
   - Check active context flags against `context_flag_effects` to adjust the situation displayed.
   - Display the `narrative` text and four `options`.
   - On selection, apply `score_changes` to all four dimensions, set `sets_flag` if defined, and navigate to `consequence_scene_id`.
4. **For each consequence scene** (`type: "consequence"`):
   - Display `narrative` and `delayed_impact`.
   - Navigate to `next_scene_id`.
5. **At the epilogue**, sum all four dimension scores to determine the ending threshold and display the corresponding `endings` entry.

### For Trainers and Facilitators

1. Use individual decision scenes as standalone case studies for group discussion.
2. Run participants through 2–3 decisions per session and use consequence scenes to prompt reflection.
3. Use the `development_prompts` to commission or generate full narrative text for any sections that remain as skeletons.
4. The `reflection_questions` in each ending object are ready-made debrief prompts for post-game discussion.
5. Use the `chs_reference_summary` as a printed quick-reference during training sessions.

### For Content Authors

Use the `development_prompts` array to expand skeleton scenes into full narrative text. Each prompt specifies exact scene IDs, required word counts, character voices to include, flag effects to reference, and JSON structure to preserve.

---

## File Reference

**Source:** Core Humanitarian Standard on Quality and Accountability, 2024
**Filename:** `CHS_2024_game_v2.json`
**Related files:** `CHS_2024.json` (raw CHS data), `CHS_2024.pdf` (official CHS document), `CHS_2024_game.json` (Version 1 — shorter linear game)
