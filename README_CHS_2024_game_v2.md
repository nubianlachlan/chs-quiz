# Kailani Rising: A Humanitarian Roleplay

**File:** `CHS_2024_game_v2.json`
**Version:** 3.0
**Reference:** Core Humanitarian Standard on Quality and Accountability, 2024

---

## Overview

*Kailani Rising: A Humanitarian Roleplay* is a comprehensive branching narrative game covering all nine commitments of the Core Humanitarian Standard (CHS) 2024. Players take the role of **Maya Chen**, a newly appointed Country Director for HopeForward International in **Kailani** — a fictional Pacific island nation devastated by Cyclone Vera.

Over nine critical decision chapters — one per CHS commitment — Maya navigates community rights and participation, timely and effective assistance, building local resilience, avoiding harm, complaints and feedback, coordination, learning and improvement, staff management, and ethical resource stewardship. Every choice references specific CHS sub-requirements. Choices set **context flags** that cascade into later decisions, creating real interdependencies. At the end, four possible **scored endings** are determined by the player's cumulative performance across three dimensions.

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

### Setting Image Prompt (Pixel Art)

> 16-bit pixel art scene (320×180 px, 24-colour Kailani palette): aerial map-style view of Kailani, a fictional Pacific island nation. Tropical ocean surrounds the island. Northern coast shows cyclone damage — destroyed houses, debris, brown floodwater in streets. Manu Displacement Camp visible on the eastern shore — blue tarp shelters in rows. Capital Port Hana in the south — port, UN relief hub flag. Roads washed away in the north. Tevita Village shown inland with a small cluster of buildings. Talio Sub-district Hub mid-island. Post-cyclone overcast sky with light breaking through in the south. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing, rich tropical greens, Pacific blues, storm greys, warm ochre. No gradients, clean map-illustration aesthetic.

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

### Maya Chen — Pixel Art Portrait Prompt

> 16-bit pixel art portrait of Maya Chen, Country Director. East Asian woman, mid-thirties, short dark hair tucked behind one ear, wearing a light-blue HopeForward International field vest with logo over a white shirt. She holds a clipboard in one hand and a radio in the other. Background: Manu Displacement Camp, blue tarp shelters, palm trees, soft Pacific overcast sky. Expression: determined, slightly worn but focused. Colour palette: warm ochre, Pacific teal, relief blue, storm grey. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing, no anti-aliasing, crisp pixel edges.

---

## Key Characters

The game features nine named supporting characters, each defined by a detailed backstory and a pixel art portrait prompt:

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

### Character Pixel Art Portrait Prompts

All portrait prompts generate **16-bit pixel art sprites** (48×48 px full-body or 32×48 px bust for dialogue boxes) using the 24-colour Kailani palette. Prompts are taken directly from `key_characters[].image_prompt` in the JSON.

**Maya Chen** (Country Director, HopeForward International)

> 16-bit pixel art portrait of Maya Chen, Country Director. East Asian woman, mid-thirties, short dark hair tucked behind one ear, wearing a light-blue HopeForward International field vest with logo over a white shirt. She holds a clipboard in one hand and a radio in the other. Background: Manu Displacement Camp, blue tarp shelters, palm trees, soft Pacific overcast sky. Expression: determined, slightly worn but focused. Colour palette: warm ochre, Pacific teal, relief blue, storm grey. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing, no anti-aliasing, crisp pixel edges.

**Sione Taufa** (National Programme Officer, HopeForward)

> 16-bit pixel art portrait of Sione Taufa, National Programme Officer. Young Polynesian man, late twenties, compact and alert, wearing a HopeForward green field vest over a plain t-shirt. He holds a worn field notebook open in one hand, a pen behind his ear. Background: Manu Displacement Camp — blue tarp shelters, a crowd of community members in the distance, palm trees and post-cyclone sky. Expression: attentive, confident, grounded. Colour palette: warm ochre, Pacific teal, relief blue, tropical green. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing, no anti-aliasing, crisp pixel edges.

**Filomena Vaka** (Executive Director, Kailani Community Voices (KCV))

> 16-bit pixel art portrait of Filomena Vaka, Executive Director of KCV. Pacific Island woman in her mid-fifties, broad-shouldered and composed, wearing a bright floral blouse in tropical red and orange with a lanyard bearing the Kailani Community Voices logo. She holds a tablet and stands outside the KCV office — a modest painted concrete building with a hand-lettered sign, tropical plants. Expression: watchful, confident, a hint of scepticism. Colour palette: warm ochre, tropical red, Pacific teal, cream. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing.

**Leila Hassan** (Field Coordinator, Northern Coast)

> 16-bit pixel art portrait of Leila Hassan, Field Coordinator. East African woman, early thirties, lean and purposeful, wearing a tan field hat and HopeForward vest. She stands on a coastal road with cyclone damage visible behind her — a collapsed concrete wall, debris, a cracked road. She holds a radio handset, expression showing visible fatigue and controlled concern. Colour palette: warm ochre, storm grey, tan, Pacific teal, relief blue. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing, soft Pacific side-light, no anti-aliasing, crisp pixel edges.

**Carlos Reyes** (Logistics Coordinator, HopeForward)

> 16-bit pixel art portrait of Carlos Reyes, Logistics Coordinator. Latin American man, late thirties, compact and energetic, wearing a HopeForward vest and a headset. He stands inside a warehouse stacked with aid boxes — hygiene kits, water containers, tarpaulin bales. He holds a clipboard with a delivery manifest. Expression: efficient, slightly pressured, solution-focused. Colour palette: warm ochre, warehouse beige, relief blue, tropical green. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing, interior lighting, no anti-aliasing, crisp pixel edges.

**Amara Diallo** (M&E Officer, HopeForward)

> 16-bit pixel art portrait of Amara Diallo, M&E Officer. West African woman, late twenties, precise and energetic, sitting at a desk with a laptop open showing a data dashboard — bar charts, indicator rows, a map. Printed monitoring documents and a pen are spread beside her. She leans forward looking at the screen, expression sharp and analytical. Background: HopeForward Port Hana office, a whiteboard with data frameworks. Colour palette: warm ochre, data blue, cream, tropical green. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing.

**Toma Faleolo** (Finance & Compliance Manager, HopeForward)

> 16-bit pixel art portrait of Toma Faleolo, Finance Manager. Pacific Island man in his mid-forties, solidly built, wearing a formal office shirt with HopeForward logo. He sits at a desk with a printed budget spreadsheet and a calculator. He holds a pen, expression thoughtful and measured — a man reviewing figures he is not entirely comfortable with. Background: HopeForward Port Hana office, file shelves, a window with tropical light. Colour palette: warm ochre, office cream, Pacific teal, relief blue. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing.

**Dr. Ana Tuivaga** (Director, Kailani Aid Network (KAN))

> 16-bit pixel art portrait of Dr. Ana Tuivaga, Director of KAN. Pacific Island woman in her mid-fifties, authoritative and tired, wearing a doctor's lanyard over a plain shirt. She stands in a health clinic corridor — a painted breeze-block wall, a curtained examination bay visible behind her. She holds a thick stack of unread coordination reports, expression a controlled frustration. Colour palette: warm ochre, clinic white, storm grey, Pacific teal, relief blue. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing, soft interior light, no anti-aliasing, crisp pixel edges.

**Sina Talagi** (Community member, Manu Camp (complainant))

> 16-bit pixel art portrait of Sina Talagi, community member. Pacific Island woman, mid-thirties, wearing a printed wrap skirt and a plain blouse, hair tied back. She sits on a plastic chair outside a blue tarp shelter at Manu Displacement Camp. She holds a handwritten letter — the complaint she has submitted. Expression: guarded hope, visible uncertainty. Background: camp setting — shelters, a water point, community members in the distance, tropical overcast sky. Colour palette: warm ochre, tarp blue, tropical green, storm grey. 16-bit pixel art style, 24-colour Kailani palette, crisp pixel edges, no anti-aliasing.

---

## Game Structure

The game is stored in a single JSON object (`CHS_2024_game_v2.json`) with the following top-level keys:

| Key | Description |
|---|---|
| `game_meta` | Title, version, status, audience, duration, description, how-to-play, and multi-dimensional scoring rules |
| `player_character` | Maya Chen's name, role, organisation, backstory, and pixel art portrait prompt |
| `setting` | Country description, key locations, and pixel art map prompt |
| `score_dimensions` | Three scoring dimensions with descriptions and pixel art icon prompts |
| `context_flags_system` | Description of the flag system and full list of 18 context flags |
| `key_characters` | Array of nine named characters with roles, descriptions, and pixel art portrait prompts |
| `chs_reference_summary` | Quick-reference of all nine commitments with all 50 sub-requirements |
| `scenes` | Array of 47 scene objects (prologue + 9 decisions + 36 consequence scenes + epilogue) |
| `endings` | Four possible endings with score thresholds, narratives, and reflection questions |
| `supplementary_assets` | Expanded character backstories, UI design prompts, game engine notes, and pixel art implementation guide |

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
| 1 | `decision_1` | decision | Decision 1 — How Will You Hear the Community? | — |
| 2 | `scene_1A` | consequence | Invisible and Unheard | — |
| 3 | `scene_1B` | consequence | Heard — and the Data Shows It | — |
| 4 | `scene_1C` | consequence | The Digital Divide | — |
| 5 | `scene_1D` | consequence | The View from the Top of the Hierarchy | — |
| 6 | `decision_2` | decision | Decision 2 — What Do You Actually Distribute, and How? | — |
| 7 | `scene_2A` | consequence | Boxes Ticked, Needs Missed | — |
| 8 | `scene_2B` | consequence | The Right Things, To the Right People, At the Right Time | — |
| 9 | `scene_2C` | consequence | Efficient, but Whose Context? | — |
| 10 | `scene_2D` | consequence | Equal Isn't Always Just | — |
| 11 | `decision_3` | decision | Decision 3 — How Should the Programme Strengthen Local Resilience? | — |
| 12 | `scene_3A` | consequence | Delivered but Not Strengthened | — |
| 13 | `scene_3B` | consequence | Ownership in Practice | — |
| 14 | `scene_3C` | consequence | The Storm That Didn't Kill Anyone | — |
| 15 | `scene_3D` | consequence | Built to Last | — |
| 16 | `decision_4` | decision | Decision 4 — How Do You Protect People, Data, and the Environment? | — |
| 17 | `scene_4A` | consequence | Four Risks, Four Harms | — |
| 18 | `scene_4B` | consequence | Prevention Pays | — |
| 19 | `scene_4C` | consequence | Half-Protected | — |
| 20 | `scene_4D` | consequence | The Gap in the Informal Approach | — |
| 21 | `decision_5` | decision | Decision 5 — How Do You Handle a Serious Complaint? | — |
| 22 | `scene_5A` | consequence | The Silence That Follows | — |
| 23 | `scene_5B` | consequence | The System That Worked | — |
| 24 | `scene_5C` | consequence | Referred Without Asking | — |
| 25 | `scene_5D` | consequence | From Crisis to Capability | — |
| 26 | `decision_6` | decision | Decision 6 — How Will You Coordinate with Other Actors? | — |
| 27 | `scene_6A` | consequence | Competing While Communities Suffer | — |
| 28 | `scene_6B` | consequence | The Value of the Room | — |
| 29 | `scene_6C` | consequence | Better, But Not Good Enough | — |
| 30 | `scene_6D` | consequence | The Forum That Fragmented | — |
| 31 | `decision_7` | decision | Decision 7 — How Do You Use Evidence to Improve? | — |
| 32 | `scene_7A` | consequence | The Data That Was Buried | — |
| 33 | `scene_7B` | consequence | Learning That Changed the Programme | — |
| 34 | `scene_7C` | consequence | Half the Learning | — |
| 35 | `scene_7D` | consequence | Verified — And Three Weeks Late | — |
| 36 | `decision_8` | decision | Decision 8 — How Do You Care for Your Team and Uphold Conduct Standards? | — |
| 37 | `scene_8A` | consequence | Three Failures, One Month | — |
| 38 | `scene_8B` | consequence | The Call That Mattered | — |
| 39 | `scene_8C` | consequence | Safe But Not Protected | — |
| 40 | `scene_8D` | consequence | From Crisis to Culture | — |
| 41 | `decision_9` | decision | Decision 9 — How Do You Manage the Remaining Resources Ethically? | — |
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
| `narrative_summary` | string | Short summary of the scene context |
| `narrative` | string | Full scene narrative text (expanded via development prompts) |
| `situation_summary` | string | The specific dilemma Maya faces |
| `context_flag_effects` | object | How previously set flags change the situation in this decision |
| `options` | array | Four answer options (A, B, C, D) |
| `image_prompt` | string | Pixel art scene prompt (16-bit, 320×180 px, 24-colour Kailani palette) |

### Decision Option Schema

| Field | Type | Description |
|---|---|---|
| `id` | string | Option letter (`A`, `B`, `C`, `D`) |
| `text` | string | The option text shown to the player |
| `score_changes` | object | Points awarded or deducted across each of the three dimensions |
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
| `narrative_summary` | string | Immediate outcome summary |
| `narrative` | string | Full consequence narrative (expanded via development prompts) |
| `delayed_impact` | string | Longer-term consequence for communities or the programme |
| `image_prompt` | string | Pixel art scene prompt for the consequence |
| `next_scene_id` | string | ID of the next scene to navigate to |

---

## Scoring System

### Why Three Scoring Dimensions?

The game originally considered four scoring dimensions — Community Trust, Staff Wellbeing, Program Quality, and Accountability & Ethics. On review, **Staff Wellbeing was consolidated into Accountability, Ethics & Staff Wellbeing** for the following reasons:

1. **Single-commitment dependency**: Staff Wellbeing was the only dimension driven by a single CHS commitment (Commitment 8). Every other dimension draws from five or more commitments, making the Staff Wellbeing dimension disproportionately narrow.
2. **Inherent overlap**: CHS Commitment 8 already appeared in both the Staff Wellbeing and Accountability & Ethics dimensions. This double-counting created ambiguity in the score signals, particularly in Decision 8 where the same option would simultaneously move both dimensions.
3. **Conceptual alignment**: The well-being and professional development of staff is fundamentally an accountability issue — organisations are accountable to their staff just as they are to donors and communities. CHS 8 explicitly covers both staff support (wellbeing) and conduct standards/misconduct (accountability), making them naturally co-located in one dimension.
4. **Score balance**: The practical maximum for Staff Wellbeing over nine decisions was approximately 5–6 points, compared to 16–18 for the other three dimensions. This imbalance meant Staff Wellbeing had much less influence on the final ending than its importance as a humanitarian principle warranted.

Three dimensions is the minimum that separates the three fundamentally different audiences affected by Maya's decisions: **communities** (who receive assistance), **the programme** (what is actually delivered and its quality), and **the organisation** (how staff and resources are managed with integrity).

### Three Scoring Dimensions

| Dimension ID | Title | What It Measures | Shaped by CHS |
|---|---|---|---|
| `community_trust` | Community Trust | Degree to which communities trust, engage with, and feel heard by HopeForward | Commitments 1, 2, 5, 6, 7 |
| `program_quality` | Program Quality | Relevance, effectiveness, technical quality, and measurable impact of the response | Commitments 2, 3, 4, 6, 7 |
| `accountability` | Accountability, Ethics & Staff Wellbeing | Adherence to ethical standards, transparency, protection from exploitation, organisational integrity, and the safety, morale, and professional development of staff and volunteers | Commitments 4, 5, 8, 9 |

### Score Dimension Icon Prompts (Pixel Art)

All icons are **16-bit pixel art, 32×32 px**, drawn from the 24-colour Kailani palette:

**Community Trust** — Reflects the degree to which affected communities trust, engage with, and feel heard by HopeForward. Shaped primarily by CHS commitments 1, 2, 5, 6, and 7.

> 16-bit pixel art icon (32×32 px, 24-colour Kailani palette, crisp pixel edges): two hands clasped in a handshake, rendered in warm ochre and terracotta on a white background. Pixel art style, no anti-aliasing, crisp edges. 32×32 px target size, scaled 2× for display. Colours drawn from the 24-colour Kailani palette.

**Program Quality** — Reflects the relevance, effectiveness, technical quality, and measurable impact of the response. Shaped primarily by CHS commitments 2, 3, 4, 6, and 7.

> 16-bit pixel art icon (32×32 px, 24-colour Kailani palette, crisp pixel edges): an upward-trending bar chart with a small heart shape above the tallest bar, rendered in positive tropical green on a white background. Pixel art style, no anti-aliasing, crisp edges. 32×32 px target size, scaled 2× for display. Colours drawn from the 24-colour Kailani palette.

**Accountability, Ethics & Staff Wellbeing** — Reflects adherence to ethical standards, transparency with donors and communities, protection from exploitation, organisational integrity, and the safety, morale, psychological health, and professional development of HopeForward staff and volunteers. Shaped primarily by CHS commitments 4, 5, 8, and 9.

> 16-bit pixel art icon (32×32 px, 24-colour Kailani palette, crisp pixel edges): balanced scales with a small heart overlaid on the fulcrum — representing both ethical standards and staff care — rendered in neutral blue and soft green on a white background. Pixel art style, no anti-aliasing, crisp edges. 32×32 px target size, scaled 2× for display. Colours drawn from the 24-colour Kailani palette.

### Total Score and Ending Thresholds

The ending is determined by the **sum of all three dimension scores**. Note that scores can go below zero if consistently poor choices are made across multiple decisions.

| Score Range | Ending Title | Summary |
|---|---|---|
| 46–55 | 🏆 Transformative Leader | Principled, inclusive, locally-led action; all nine CHS commitments honoured in practice |
| 32–45 | 🌟 Committed Practitioner | Strong in most areas; some trade-offs and gaps; intent was always there |
| 18–31 | 📚 Struggling Responder | Well-intentioned but inconsistent; operational pressure frequently overrode principle |
| 17 or below | 🌱 Crisis Mode | Serious setbacks across multiple commitments; an honest invitation to reflect and restart |

---

## Context Flags System

Context flags are boolean states set by specific option choices. They are tracked by the game engine and modify the situations Maya faces in later decisions — creating real interdependencies between choices.

**Key principle:** Flags cannot be reversed once set. A flag set in Decision 1 may improve or constrain the options available in Decisions 5, 6, or 7.

### Full Flag List

| Flag ID | Set By | Effect Summary |
|---|---|---|
| `inclusive_assessment` | decision_1 option B | Communities expect continued meaningful participation. KCV is a trusted partner for all future activities. |
| `community_informed` | decision_1 options B or D | Communities understand their rights and HopeForward's responsibilities. |
| `local_knowledge_built_in` | decision_2 option B | Programme is grounded in context and local capacities, improving later adaptation. |
| `referral_pathways_active` | decision_2 option B | Other cluster members are aware of unmet needs HopeForward referred; strengthens coordination. |
| `local_ownership_by_design` | decision_3 options B or D | KCV and community leaders have formal role in programme governance; reduces dependency risk. |
| `drr_integrated` | decision_3 options C or D | Communities have disaster risk knowledge; strengthens long-term resilience. |
| `protection_framework_active` | decision_4 options B or C | PSEA and protection policies are established; staff and communities aware of mechanisms. |
| `data_protection_in_place` | decision_4 options B, C or D | Beneficiary data is handled ethically; reduces risk of future data-related harm. |
| `complaints_trusted` | decision_5 options B or D | Community members actively use feedback channels; complaints data is rich and timely. |
| `survivor_centred_process` | decision_5 options B or D | PSEA standards are actively modelled; staff understand expectations. |
| `cluster_coordination_active` | decision_6 option B | HopeForward is a trusted cluster member; geographic duplication is resolved; local partners included. |
| `partner_quality_supported` | decision_6 options B or C | KCV has received CHS capacity support; their programme quality improves. |
| `gender_data_actioned` | decision_7 option B | Gender gap is addressed; women and girls receive more targeted programming in later activities. |
| `learning_shared_externally` | decision_7 options B or C | Tevita modality is shared with cluster; other agencies benefit; HopeForward seen as learning leader. |
| `duty_of_care_upheld` | decision_8 options B, C or D | Staff trust leadership; retention improves; team culture of accountability is strong. |
| `misconduct_addressed_formally` | decision_8 options B or D | Staff understand code of conduct is enforced; community sees fair process. |
| `donor_transparent_engagement` | decision_9 option B | Donor trusts HopeForward with future flexible funding; ethical resource management is documented. |
| `community_resources_transferred` | decision_9 options B or C | Remaining resources are in community hands at exit; strengthens local ownership legacy. |

---

## Four Possible Endings

### 🏆 Transformative Leader (Score: 46–56)
Maya's leadership will be studied as a model of principled, inclusive, locally-led humanitarian action. She listened to marginalised voices, protected her staff, maintained accountability when it was uncomfortable, coordinated generously, used evidence to improve the programme, and left stronger local systems behind. All nine CHS commitments were honoured in practice — not just in policy.

**Reflection prompts:**
- What made it possible to prioritise community voice even under time and donor pressure?
- Which CHS commitment felt most natural to uphold, and which required the most effort?
- What would you do differently — even after a strong performance?
- How did early decisions shape your options in later chapters?

---

### 🌟 Committed Practitioner (Score: 32–45)
Maya made principled choices in most situations but faced real trade-offs and sometimes chose pragmatism over principle. The programme left positive impact. There are specific CHS commitments where the full standard was not met — but the intent was always there.

**Reflection prompts:**
- Which decisions were hardest and what made them hard?
- Where did operational pressure most consistently pull you away from CHS principles?
- Which CHS commitment do you most want to strengthen in your next response?

---

### 📚 Struggling Responder (Score: 18–31)
Maya's response was well-intentioned but inconsistent. Some communities and staff were let down. Operational pressures frequently overrode principled choices.

**Reflection prompts:**
- Which CHS commitments did you find hardest to uphold, and why?
- What systemic pressures most affected your decisions — and which could you have pushed back against?
- What one change in your organisation's systems would help you act differently?

---

### 🌱 Crisis Mode (Score: 0–17)
The response in Kailani faced serious setbacks across multiple CHS commitments. Communities were not heard or protected. Staff were harmed. Accountability was compromised. Resources were mismanaged.

**Reflection prompts:**
- Which pressures most consistently pushed you toward less principled choices?
- What does accountability mean when you are under-resourced and making decisions alone?
- Who in your network could support you to strengthen your practice before the next response?

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

---

## Scene Image Prompts

All scene image prompts are extracted directly from the `image_prompt` field of each scene object in the JSON. Every background is a **full-screen 16-bit pixel art composition at 320×180 px base resolution**, using the **24-colour Kailani palette**, integer-scaled to fill the viewport. Character sprites use the same palette at 48×48 px (full-body) or 32×48 px (bust portrait). No anti-aliasing. Crisp pixel edges throughout.

Style summary common to all prompts:
- **Format:** 16-bit pixel art, 320×180 px base canvas
- **Palette:** 24-colour Kailani palette (see Pixel Art section below)
- **Rendering:** crisp pixel edges, no anti-aliasing, no gradients
- **Scale:** integer-scaled via CSS `image-rendering: pixelated` to fill viewport

### Prologue & Epilogue

**prologue** (Narrative) — *Day One — Cyclone Vera's Aftermath*

> Aerial view descending into Port Hana, Kailani, a Pacific island nation. Through torn post-cyclone clouds: a coastline of cyclone-damaged coastal villages — palm trees snapped, fishing boats scattered on roads, clusters of blue tarp shelters gleaming against storm-grey debris. Brown floodwater threading through streets inland. Aid trucks queuing at a military checkpoint on the runway approach road. The capital Port Hana visible in the distance, a UN coordination flag flying at the relief hub. Maya Chen's silhouette faint in the aircraft window — East Asian woman, mid-thirties, dark hair, HopeForward light-blue field vest. 16-bit pixel art scene, storm-clearing Pacific light breaking through grey overcast, teal and charcoal palette with relief-blue accents.

**epilogue** (Narrative) — *Your Mission Report*

> Interior of Port Hana airport departure gate, Kailani. Maya Chen — East Asian woman, mid-thirties, short dark hair, wearing a HopeForward International light-blue field vest over a plain shirt — sits in an airport seat beside a large window. Through the window: Kailani's coastal landscape in late afternoon light, some cyclone damage still visible on the shoreline but green recovery growth visible too. She holds a worn, annotation-filled field notebook in one hand and a boarding pass in the other. Expression: reflective, tired, quietly proud. A departure board above the gate shows her flight. 16-bit pixel art scene style, warm sunset palette — deep ochre, coral, and Pacific blue — consistent Pacific humanitarian field setting.

### Decision 1 — Participation & Rights (CHS 1)

**decision_1** (Decision) — *Decision 1 — How Will You Hear the Community?*

> Manu Displacement Camp, morning, Day 2 after Cyclone Vera. Maya Chen stands in the open camp yard at a folding table covered in printed maps and a government survey form. To her left: Sione Taufa, HopeForward field vest, field notebook open, jaw set with concern. To her right: a sharp-suited government official, pen tapping an English-language questionnaire. Across the table: Filomena Vaka, KCV executive director, floral blouse and lanyard, holding a 3-day facilitation schedule. Behind the four adults, three distinct groupings of displaced people are visible at the far edge of the frame — coastal families near makeshift fishing gear, farming households with bundles of tools, and a quiet corner where elderly and disabled residents sit apart from the main activity under a patched tarpaulin. Tension between the four standing figures. 16-bit pixel art scene, warm Pacific morning light, complex crowd composition, relief-blue and ochre palette.

**scene_1A** (Consequence) — *Invisible and Unheard*

> Manu Displacement Camp, late afternoon. Maya and Carlos stand over a laptop showing a clean table: 620 survey responses, 100% distribution coverage against the approved list. Carlos points at the screen, satisfied. Behind them, through the open tent flap, a long concrete ramp leads to the disability section — no enumerator visible, the area quiet and unreached. To the side, a cluster of Tevita-dialect speakers exchange confused looks at a printed English form. Sione stands apart, field notebook pressed to his chest, expression unreadable. A single elderly man in a wheelchair sits alone at the camp perimeter, facing away. 16-bit pixel art scene, fading afternoon light, ochre and grey palette.

**scene_1B** (Consequence) — *Heard — and the Data Shows It*

> Manu Displacement Camp, end of Day 4. A community dialogue circle is in progress under a large shade shelter: Filomena Vaka facilitates in the foreground, a mixed group of women, elders, youth, and wheelchair users seated in the circle, all visibly engaged. Sione translates quietly at the edge. Maya sits beside a table covered in handwritten flip-chart notes, a map of the camp with disaggregated data pencilled in. One note reads: 'Water — TOP PRIORITY (Tevita).' Another: 'Modified shelter kits — 9 families.' A third: 'Women-only distribution space needed.' Through the shelter's open side: the disability section is visible and active for the first time. 16-bit pixel art scene, warm late-afternoon Pacific light, blues and warm greens.

**scene_1C** (Consequence) — *The Digital Divide*

> HopeForward field office, 90 minutes after the digital survey launch. Amara sits at a laptop displaying a demographic breakdown dashboard: a stark bar chart showing 81% male respondents, 74% aged 18–45, a bold zero in the disability section column. Carlos stands behind her, arms folded, half-smiling — 412 responses, fast and tidy. Maya stands to the side, arms at her sides, looking at the zero. Through the window: the camp is visible. A group of elderly women sit outside the disability section with no phones in sight. Sione stands at the office door, field notebook open to a page with a single underlined question: 'Who was left out?' 16-bit pixel art scene, harsh midday light, blue-grey office palette contrasting with warm camp colours outside.

**scene_1D** (Consequence) — *The View from the Top of the Hierarchy*

> Manu Camp community hall, morning. Maya sits at a table with three male council chairs — all men over 50, each with a visible leadership symbol: a carved staff, a formal sash, a government lanyard. The meeting is cordial and productive; papers are being signed. But through the hall's open doorway, Filomena Vaka stands in the threshold, arms folded, watching. Her expression is quiet but pointed. Behind Filomena: a group of camp women gathered outside, not invited, watching from a distance. A young woman with a disability sits on a low wall nearby, also excluded. 16-bit pixel art scene, morning light through louvred windows, warm brown tones, institutional setting contrasting with the excluded figures in the doorway.

### Decision 2 — Timely & Effective Support (CHS 2)

**decision_2** (Decision) — *Decision 2 — What Do You Actually Distribute, and How?*

> HopeForward logistics warehouse, Port Hana, Day 5 after Cyclone Vera. Carlos Reyes stands at a long metal shelving unit, one hand resting on a stack of HEB boxes, the other holding a tablet showing a colour-coded distribution timeline. His expression is tight with urgency. Maya Chen stands opposite, arms folded, looking at a whiteboard she has half-covered with community priority notes: 'WATER — top priority (Tevita),' 'Dignity kits,' 'Modified shelter kits — disability section,' 'Tevita Village — NOT on list.' A printed donor approval letter is pinned to the corkboard behind Carlos. Sione stands to Maya's left, field notebook open to a disaggregated needs table with rows for each community group. On a side table, a phone shows a missed-call notification labelled 'Donor Rep — M. Fischer.' 16-bit pixel art scene, cool warehouse fluorescent light, blue-grey and amber palette.

**scene_2A** (Consequence) — *Boxes Ticked, Needs Missed*

> Manu Camp distribution point, morning, Day 6 after Cyclone Vera. Two HopeForward staff carry HEB boxes off a truck and stack them on a trestle table. A short queue of registered household heads collects packages. In the foreground, a woman with a disability sits outside the distribution tent; a large plastic sheeting roll leans against the wall beside her — she cannot lift it alone. In the background, at the camp perimeter, a cluster of Tevita Village residents watch from a distance with empty hands — no table, no queue, no aid. Carlos stands to one side, marking names off a tablet checklist, expression satisfied. A makeshift market stall behind the main tent shows HEB packets trading for water containers. 16-bit pixel art scene, harsh morning light, muted ochre and grey.

**scene_2B** (Consequence) — *The Right Things, To the Right People, At the Right Time*

> Manu Camp distribution point, morning, Day 8 after Cyclone Vera. A well-organised, sector-divided distribution is underway. One lane shows water purification tablets and dignity kits; a second has modified shelter kits being handed to disability section families with a staff member assisting. A third lane at the far end shows Tevita Village residents — new arrivals — receiving packages for the first time. Amara stands to one side with a tablet, entering data into a weekly monitoring checklist. A handwritten sign reads: 'Targeting criteria — visible and public.' In the distance, a UNICEF vehicle pulls into the camp gate for the nutrition extension. Carlos leans against a truck, arms folded, expression tight but resigned. 16-bit pixel art scene, clear morning light, blues and warm greens.

**scene_2C** (Consequence) — *Efficient, but Whose Context?*

> HopeForward field office, Port Hana, Day 6 after Cyclone Vera. A projector displays a consultant's regional template on a white wall: neatly colour-coded rows, a standardised 'general displaced household' targeting category, Sphere-standard quantities for food and shelter. The consultant — a professional in a polo shirt — gestures confidently at the table. Sione stands apart, pointing at a line on a printed camp map: Tevita Village, flagged as 'already served — GAP agency, six months prior.' His expression is flat. Behind him, a handwritten note on the whiteboard reads: 'Communal land structure — no individual-household field in template.' Maya sits at the table, pen in hand, looking from the template to Sione's map. 16-bit pixel art scene, projector blue-white light, cool and clinical palette.

**scene_2D** (Consequence) — *Equal Isn't Always Just*

> Manu Camp main distribution square, Day 6 after Cyclone Vera. A single distribution lane stretches across the square: every person in the registration queue receives the same standard package — one HEB box, one plastic sheeting roll. A community leader stands beside a HopeForward banner, smiling. A printed sign reads: 'One package per registered person — fair for all.' In the foreground, an elderly man in a wheelchair holds the registration slip for his package; a 20-kilogram plastic sheeting roll sits beside him on the ground. He looks at it. He cannot lift it. Sione stands at a distance, field notebook open, writing. Tevita Village residents remain outside the camp boundary — still unregistered, still invisible. 16-bit pixel art scene, flat midday light, neutral palette with one detail of warm colour on the wheelchair, isolated.

### Decision 3 — Resilience & Local Ownership (CHS 3)

**decision_3** (Decision) — *Decision 3 — How Should the Programme Strengthen Local Resilience?*

> HopeForward's field office, Week 2. Maya stands at a whiteboard with two columns: 'Direct Delivery' and 'Community-Led Governance'. A laptop screen shows a HQ video call — the regional director's face tight with impatience. Across the table, Filomena Tui holds a laminated co-governance proposal. Sione Taufa sits to one side, a notepad of hand-drawn storm-sign symbols in his lap. Through the window, a weather app on a phone displays a new tropical depression forming. Maps pinned to the wall show Manu Camp and the coastline. 16-bit pixel art scene, morning light, tension between urgency and possibility, relief-blue and ochre palette.

**scene_3A** (Consequence) — *Delivered but Not Strengthened*

> Manu Camp field office, evening, Week 7. Maya sits at a table with a blank evacuation-routes folder open in front of her. Carlos is loading HopeForward equipment boxes onto a vehicle visible through the open doorway. On the laptop screen: a satellite image of a tropical storm system approaching the Kailani coast. Through the window, twelve thousand displaced people are visible waiting outside their shelters — no visible community leader, no signs, no coordination. A HopeForward banner hangs undisturbed. The tone is eerie calm before a storm. 16-bit pixel art scene, dusk light, grey and ochre palette.

**scene_3B** (Consequence) — *Ownership in Practice*

> Community hall, Manu Camp, Week 3. The Community Programme Committee meeting is in progress: Filomena Tui at the head of the table, writing on a large notepad, visibly managing several conversations simultaneously. Six community members — fishing cooperative representatives, a women's group leader, a youth delegate — are talking at once. Carlos stands in the doorway, arms folded, watching. Maya sits to one side, notably not at the head of the table — an observer, not the chair. A whiteboard shows a budget breakdown with '8% — nets, fishing coop' circled. The energy is productive chaos, not crisis. 16-bit pixel art scene, daytime indoor light, blues and warm ochre palette.

**scene_3C** (Consequence) — *The Storm That Didn't Kill Anyone*

> Manu Camp community hall, predawn, Week 7. Eighteen families — adults carrying children, elderly supported by younger relatives — move up the path toward higher ground, guided by hand-held torches. A community member holds a phone showing the WhatsApp early warning message. Sione stands at the hall entrance directing people in. In the background, below the hill, water is beginning to rise in the low-lying camp area. The sky is dark and turbulent. The contrast between orderly movement uphill and the spreading floodwater below is the image's central tension. 16-bit pixel art scene, predawn blue-grey palette, torch-light warm accents.

**scene_3D** (Consequence) — *Built to Last*

> Split scene, two moments in time. Left panel: Week 2 setup — Maya, Filomena, and Sione around a table covered in governance framework documents and traditional storm-knowledge sketches; Carlos in the background on a phone, expression strained; a laptop showing two strongly worded HQ emails. Right panel: Month 6 programme review — the same three figures, now at a cluster meeting table; the Community Programme Committee chair position clearly Filomena's; a map showing the early warning system coverage; the cluster coordinator pointing at the Kailani model on a presentation screen. Progression from tension to recognition. 16-bit pixel art scene, warm Pacific light, blues and ochre palette.

### Decision 4 — Do No Harm & Protection (CHS 4)

**decision_4** (Decision) — *Decision 4 — How Do You Protect People, Data, and the Environment?*

> Maya Chen at her field desk in the HopeForward operations tent, early morning, Week 3. Four printed notes are pinned to her laptop screen: 'Tevita — women intercepted, cash coercion'; 'Google Drive — 4,000 records, password=HopeForward2024'; 'Truck fumes — children at water point, 3 complaints'; 'PSEA — no orientation, no pathway'. Carlos Reyes stands to her right, pointing at a project Gantt chart on a printed A3 sheet, expression urgent, laptop open showing a countdown: 'SCALE-UP: T-6 DAYS'. Amara Diallo stands to her left holding a printed email, looking strained. Through the tent opening, a community water point is faintly visible with a truck parked nearby. 16-bit pixel art scene, Pacific island humanitarian setting, relief-blue and ochre palette, sense of converging simultaneous pressures.

**scene_4A** (Consequence) — *Four Risks, Four Harms*

> Four-panel split scene, each panel showing one materialised harm, arranged around a central HopeForward logo. Top left: a laptop screen showing a Google Drive access log — unknown IP, 2:14 a.m., file downloaded — Amara Diallo staring at the screen in the background, hand over mouth. Top right: Sione Taufa at a field table receiving a written complaint from two women at the Sector 7 distribution tent, a third woman watching from the entrance. Bottom left: two women in Tevita Village standing outside their shelter, arms folded, not walking toward the distribution point; a male figure is visible in shadow at the shelter entrance behind them. Bottom right: a community health worker kneeling next to a small child near the camp water point, tally sheet on clipboard showing eleven marks, a HopeForward truck idling in the background. 16-bit pixel art scene, Pacific island humanitarian setting, muted and heavy palette.

**scene_4B** (Consequence) — *Prevention Pays*

> Maya Chen and Sione Taufa stand outside the Tevita Village distribution shelter, seven days after Maya's decision. A new handwritten sign on the shelter wall indicates a private women's collection space with an arrow. Sione's laptop is open on a field table showing a secure database login screen with individual user credentials. In the background, two HopeForward trucks are parked 200 metres from the water point, children visible playing unobstructed nearby. A middle-aged woman in a printed dress gestures at the new sign with cautious approval, a small child at her side. On the far wall, a PSEA reporting poster is visible in both Kailani and Tevita dialect with an illustrated hotline number. A whiteboard in the background reads: 'PSEA ORIENTATION: 23/23 COMPLETE'. 16-bit pixel art scene, Pacific island humanitarian setting, warm morning light, careful and measured tone.

**scene_4C** (Consequence) — *Half-Protected*

> A community health worker in a green vest kneels beside a small child near the camp water point, one hand on the child's back, listening to breathing. The child coughs. The health worker's clipboard shows a tally sheet: eleven marks under 'respiratory complaints, under-5'. Clipped to the top of the clipboard is a child's crayon drawing of a truck emitting black smoke with small stick figures standing nearby. In the background, a HopeForward truck idles at the water point, diesel fumes rising. On the far side of the scene, a thought bubble or inset box shows a dated sticky note from Week 3: 'Truck idling — deprioritised, operational.' The sky is overcast. 16-bit pixel art scene, Pacific island humanitarian setting, grey-green environmental harm palette.

**scene_4D** (Consequence) — *The Gap in the Informal Approach*

> Sione Taufa sits at a field table reviewing a complaint form. Opposite him, two women sit — one pointing to a handwritten statement, the other looking at the table. To the right through the tent opening, three distribution volunteers are visible at the Sector 7 point — none wearing a code-of-conduct lanyard; no PSEA poster is visible on the wall behind them (only a logistics map). On Sione's table, an onboarding folder is open: three volunteer name slots, all with blank signature lines and no briefing dates. A sticky note on the folder reads: 'PSEA orientation — next monthly meeting (4 weeks)'. On the far side of the tent, the Monday morning briefing sheet is visible pinned to a board, annotated with seven names — the Sector 7 volunteers' names are absent. 16-bit pixel art scene, Pacific island humanitarian setting, formal and serious tone, muted palette.

### Decision 5 — Complaints & Feedback (CHS 5)

**decision_5** (Decision) — *Decision 5 — How Do You Handle a Serious Complaint?*

> Maya Chen at her desk in the HopeForward operations office, holding Sina Talagi’s sealed handwritten complaint letter — two languages, full name at the bottom. Through the glass partition behind her, the accused volunteer is visible at his desk, working, unaware. Amara Diallo stands to Maya’s left, tablet open showing the monitoring dashboard: ‘12% — community members who can name a reporting channel’. On Maya’s laptop screen, an email from Filomena Tui: ‘Three community members said they didn’t know there was a box.’ Carlos Reyes stands in the doorway. The complaint box is visible outside the window, bolted to its post, unmarked. 16-bit pixel art scene, formal programme office interior, Pacific island humanitarian setting, muted blues and ochre, stillness and weight.

**scene_5A** (Consequence) — *The Silence That Follows*

> The HopeForward complaint box on its post in Manu Camp, morning light. ‘NO POINT’ is written in black marker across the slot. Sina Talagi stands at a distance, arms folded, facing partly away. Four women cluster behind her — one holds a folded piece of paper and slides it back into her pocket. The KCV community session tent is visible with empty plastic chairs. Sione Taufa photographs the defaced box with his phone, expression flat. No programme staff are visible. 16-bit pixel art scene, Pacific island humanitarian setting, muted ochre and grey palette, sense of institutional silence and community withdrawal.

**scene_5B** (Consequence) — *The System That Worked*

> Sina Talagi sits across from a female case officer at a small table in a private room — no programme branding on the walls, natural light, Filomena Tui present as interpreter. Sina’s hands are clasped on the table, composed and purposeful. The case officer’s notepad is open; a process timeline is pinned to the corkboard behind her, each step numbered, several already checked. Through the window the complaint box is visible with a new A4 notice in Kailani language beside it. The next distribution queue is orderly in the background. 16-bit pixel art scene, Pacific island humanitarian setting, warm natural light, tone of careful institutional respect and due process.

**scene_5C** (Consequence) — *Referred Without Asking*

> Sina Talagi stands alone in her section of Manu Camp, arms close to her body, looking away from the distribution area. In the middle distance, a uniformed Kailani police officer speaks to a HopeForward staff member at the gate — the volunteer visible in the background. A neighbour’s hand rests on Sina’s shoulder; Sina’s expression is closed, frightened. The complaint box stands untouched on its post. On the near wall, a handwritten note from another woman has been torn half-off. 16-bit pixel art scene, Pacific island humanitarian setting, flat grey-blue midday light, sense of institutional power misdirected and survivor displacement.

**scene_5D** (Consequence) — *From Crisis to Capability*

> A community noticeboard in Manu Camp showing the new multi-channel feedback system: trilingual written forms, a phone number in bold Kailani type, a large-print format mounted at lower height for the disability section. Filomena Tui addresses a small group of women in an outdoor awareness session; two KCV intermediaries hold translated leaflets. Sina Talagi stands at the edge of the group, small notepad in hand, listening with quiet authority. To the right, Maya Chen reviews the feedback dashboard on her tablet — 23 submissions, acknowledgement timestamps visible. The original complaint-box post remains, now with a new trilingual notice beside it. 16-bit pixel art scene, Pacific island humanitarian setting, warm mid-morning palette, sense of survivor-led institutional transformation.

### Decision 6 — Coordination & Complementarity (CHS 6)

**decision_6** (Decision) — *Decision 6 — How Will You Coordinate with Other Actors?*

> UN cluster meeting room, Port Hana. Around a table: UN staff, INGO representatives including a GAP logo, HopeForward flag. An empty chair with a KAN name card. On the wall: a map showing HopeForward and GAP zone overlap in Lotu and Vosa villages. Carlos has a folder labelled 'Proprietary Data'. KCV's Filomena is not in the room. Dr. Ana Tuivaga sits outside the door, waiting. 16-bit pixel art scene, 320×180 px, 24-colour Kailani palette, formal meeting room, complex power dynamics, crisp pixel edges, no anti-aliasing.

**scene_6A** (Consequence) — *Competing While Communities Suffer*

> Split-panel scene in Lotu village. Left panel: two distribution queues running side by side — one with a HopeForward banner, one with a GAP banner — community members holding two different ration cards, confused expressions. Mere, a community health worker, sits apart writing in a handwritten ledger. Right panel: Dr. Ana Tuivaga at a small desk on the Northern Coast, reading a rejection email on a battered laptop, a folder of nutrition data open beside her, a malnourished child's growth chart pinned to the wall. Empty cluster seat visible in the background. 16-bit pixel art scene, Pacific island humanitarian setting, muted ochre and grey palette, tone of institutional failure and community exhaustion.

**scene_6B** (Consequence) — *The Value of the Room*

> Cluster meeting room, Port Hana. Dr. Ana Tuivaga stands at the head of the table presenting nutrition data on a projected map — red zones visible on the Northern Coast. HopeForward, GAP, and UN representatives lean forward, engaged. The empty KAN chair is now occupied; a name card reads 'Dr. A. Tuivaga, KAN'. Maya Chen has an open data folder in front of her. Carlos Reyes sits to one side, the 'Proprietary Data' folder now open and shared. On a second screen: a map of Lotu and Vosa showing clean GAP-HopeForward geographic boundaries. Filomena Tui stands at a whiteboard presenting the KCV partnership framework. 16-bit pixel art scene, Pacific island humanitarian setting, warm morning light, sense of collective progress.

**scene_6C** (Consequence) — *Better, But Not Good Enough*

> Two-part scene. Upper half: Lotu village, a single orderly registration queue — one banner, one system. Mere, the community health worker, hands her notebook to a HopeForward staff member. Relief visible in the community. Lower half: Dr. Ana Tuivaga on the Northern Coast, sitting with two volunteers in a bare nutrition clinic, a near-empty supply shelf behind her. A growth chart on the wall shows a downward curve. On her phone screen: an article she is writing, title visible — 'Who Gets Left Out of Coordination?' The cluster meeting room is visible in the far background through a window, its door closed. 16-bit pixel art scene, Pacific island humanitarian setting, split warm/cool palette — progress above, concern below.

**scene_6D** (Consequence) — *The Forum That Fragmented*

> A Port Hana restaurant converted into a makeshift coordination meeting: plastic tables pushed together, seven INGO staff with laptops, HopeForward flag propped against the wall. The restaurant menu is visible on a chalkboard behind the group. Two empty chairs at the table where GAP representatives should sit. Outside the window, the UN cluster meeting room is visible down the street, lights on, a larger group visible through the glass — the official coordination system running in parallel. Dr. Ana Tuivaga is not in either scene; she appears in a small inset panel, alone at her Northern Coast desk, emailing into a void. 16-bit pixel art scene, Pacific island humanitarian setting, evening light, tone of institutional hubris and fragmentation.

### Decision 7 — Learning & Improvement (CHS 7)

**decision_7** (Decision) — *Decision 7 — How Do You Use Evidence to Improve?*

> HopeForward field office meeting room, Month 4. Amara Diallo stands at the head of a folding table, laptop screen facing the group, expression focused and direct. The screen shows three charts: a bar graph with red bars significantly lower for women than men (labelled 'Food Security / Protection / Livelihood — by gender'), a tall green bar for 'Tevita Modality vs Standard (+40%)', and two yellow warning flags beside 'Community Feedback: No Response (Sera Matagi — Week 3; Ratu Vailala — Week 6).' Carlos Reyes sits across the table, arms folded, clipboard face-down. Maya Chen reads a printed report, one hand raised mid-question. On Maya's phone screen, face-up: an email notification reading 'Donor report — Friday — clean narrative please.' 16-bit pixel art scene, indoor meeting room, afternoon Pacific light, muted blues and amber.

**scene_7A** (Consequence) — *The Data That Was Buried*

> Manu Displacement Camp, one week after the mid-term report. Sera Matagi, a Kailani woman in her thirties, stands at the HopeForward community feedback board — no responses posted, no new notices. Her young child holds her hand. Ratu Vailala, an elderly Kailani man in a wheelchair, waits at a water distribution point blocked by a narrow concrete step with no ramp visible. In the background on a field desk: Amara's gender gap monitoring report sits in a manila folder labelled 'Mid-Term — Internal Only,' filed and unreviewed. The camp continues around them, indifferent. Fading afternoon light. 16-bit pixel art scene, ochre and grey palette.

**scene_7B** (Consequence) — *Learning That Changed the Programme*

> HopeForward field office, three weeks after the full report submission. A whiteboard shows three green check marks: 'Women-only distribution windows — LIVE,' 'Livelihood grants — disbursed,' 'Tevita modality — cluster-adopted x4.' Amara Diallo sits at a desk completing a learning brief, printed monitoring charts around her. Inset panel left: Sera Matagi reads a HopeForward letter to a small group of neighbours outside her shelter, expression relieved. Inset panel right: Ratu Vailala at a newly installed concrete ramp beside a water distribution point, attended by a HopeForward volunteer. Warm, purposeful atmosphere. 16-bit pixel art scene, Pacific field setting, greens and blues.

**scene_7C** (Consequence) — *Half the Learning*

> Cluster coordination meeting room, one month after mid-term. A projected slide shows the Tevita modality adoption map with four agency logos and checkmarks. Amara Diallo sits in the second row, acknowledging the cluster coordinator's praise. On her desk: a printed mid-term report with a sticky note reading 'Gender gap — not actioned.' Bottom inset panels: left — Sera Matagi holds a HopeForward written response letter, relieved; right — Ratu Vailala reads a written acknowledgment letter at the water distribution point, but no ramp has been installed and no physical change is visible. Mixed mood of genuine progress and visible omission. 16-bit pixel art scene, meeting-room setting, warm and slightly muted palette.

**scene_7D** (Consequence) — *Verified — And Three Weeks Late*

> HopeForward field office, three weeks after the verification decision. Amara Diallo stands at a whiteboard that reads 'Verification: 94% confidence — SAME FINDINGS.' Her expression is flat — vindicated but not satisfied. A wall calendar shows three weeks crossed out in red. Carlos Reyes looks at his shoes. On the desk: a donor email printout reads 'Delay noted — formal explanation required.' Through the window: women at a distribution queue using the unchanged standard modality. Small side panel: a Northern Coast agency representative presents a flipchart reading 'New Community Modality' — almost identical to the Tevita model. 16-bit pixel art scene, indoor office, late afternoon, grey-blue palette.

### Decision 8 — Staff Competence & Wellbeing (CHS 8)

**decision_8** (Decision) — *Decision 8 — How Do You Care for Your Team and Uphold Conduct Standards?*

> Maya Chen's phone screen shows a WhatsApp message thread from Leila Hassan: 'Day 3. No food in the house tonight. I’m scared. What should I do?' sent at 3:17 am. The phone rests on Maya’s desk beside a folded handwritten note from Tevi Moli — written in two languages, 'national staff' circled — and a printed budget reallocation form signed by Carlos Reyes with 'Skills Training → Logistics' in the subject line. Three separate pressures, one desk. 16-bit pixel art scene, HopeForward field office, Port Hana, Pacific island humanitarian setting, late morning light, muted ochre and grey.

**scene_8A** (Consequence) — *Three Failures, One Month*

> Northern Coast field site, day 15. Leila Hassan sits alone in the team’s remaining shelter, phone in hand, WhatsApp thread visible — her last message unanswered for 18 hours. An empty camp chair beside her marks where her evacuated colleague sat. In the distance, a militia checkpoint blocks the road. Inset left: Tevi Moli at his desk in Port Hana, expression closed, two colleagues visible in background, one watching. Inset right: three printed employment contracts on a desk, the 'skills development support' clause circled in pencil with a question mark. Fading light. 16-bit pixel art scene, Pacific island humanitarian setting, grey-ochre palette, exhaustion and institutional absence.

**scene_8B** (Consequence) — *The Call That Mattered*

> Talio coordination hub, 9 pm. Leila Hassan sits at a table in the common room, phone to her ear, relief visible — one team member sleeps in a chair behind her, the other accepts tea from a hub volunteer. Through the window: the safe Talio road. Inset left: a formal HR investigation folder open on a desk, support person’s name card beside it, Tevi Moli’s written statement clipped inside. Inset right: Carlos Reyes signs a memo acknowledging the training budget reallocation overrode a contract commitment, Maya Chen watching. Warm light. 16-bit pixel art scene, Pacific island humanitarian setting, greens and warm ochre, sense of systems working and dignity restored.

**scene_8C** (Consequence) — *Safe But Not Protected*

> Port Hana field office, two weeks after Leila’s evacuation. The senior international staff member works at his desk, composed, while two national staff — including Tevi Moli — work in silence in the background, exchanging a glance. On Maya’s desk in the foreground: Leila’s formal security-suspension file stamped ‘Resolved,’ but beside it Tevi’s handwritten note has no response attached. A printed training schedule shows the skills development sessions still blocked in red: ‘Budget: Reallocated.’ Split mood — one crisis resolved, two unaddressed. 16-bit pixel art scene, Pacific island humanitarian setting, muted ochre palette, institutional unease.

**scene_8D** (Consequence) — *From Crisis to Culture*

> HopeForward Port Hana office, three weeks after the crisis. The national staff advisory forum sits around a table — eight national staff members, Sione Taufa facilitating, a whiteboard showing two flagged programme improvements. Maya Chen sits at the back, listening. On the desk behind her: three employment contract folders with ‘Training Budget Restored — HR Approved’ sticky notes. A wall calendar shows Leila Hassan’s return date circled in green. Small inset: Tevi Moli accepts a written outcome letter, expression composed and dignified. Warm, functional atmosphere. 16-bit pixel art scene, Pacific island humanitarian setting, greens and ochre, sense of culture built from crisis.

### Decision 9 — Ethical Resource Management (CHS 9)

**decision_9** (Decision) — *Decision 9 — How Do You Manage the Remaining Resources Ethically?*

> Toma Faleolo, Pacific Island man in his 40s, formal office shirt and lanyard, stands at the meeting table in the HopeForward Port Hana office. He has placed three documents in precise order in front of Maya Chen: left — a budget spreadsheet with ‘$47,000 underspend’ highlighted in yellow; centre — a procurement audit note with a supplier name circled in red and ‘undisclosed relationship’ handwritten in the margin; right — a printout of an HQ email with a community family photograph embedded in the body, subject line ‘Visibility Campaign — $12,000 remaining funds.’ Maya sits opposite, reading the third document, expression attentive and careful. Late afternoon light through slatted coastal blinds. 16-bit pixel art scene, HopeForward field office, Port Hana, Pacific island humanitarian setting, ochre-grey palette, professional integrity under pressure.

**scene_9A** (Consequence) — *Technically Compliant, Ethically Failing*

> HopeForward Port Hana office, end of month 6. Left panel: Toma Faleolo sits at his desk, a wire-transfer confirmation on screen, expression neutral — the $47,000 returned, a filing cabinet drawer half-open behind him, one folder labelled ‘Month 6 Internal Notes.’ Centre panel: a printed HopeForward donor report spread open on a table, cover photograph showing a Kailani family from Manu Camp — two adults, one child, unaware they are the cover image of an international fundraising document. Right panel: a community noticeboard in Manu Camp, a woman pointing at the printed page with the same photo — KCV’s Filomena Vaka stands beside her, phone out, taking notes. 16-bit pixel art scene, Pacific island humanitarian setting, muted ochre-grey palette, quiet institutional failure made visible.

**scene_9B** (Consequence) — *Every Dollar for Its Purpose*

> Three moments, one month later. Left panel: Toma Faleolo and Maya Chen at a desk, a donor reallocation approval email visible on screen — a spreadsheet beside it shows ‘$35,000 → KAN Nutrition, $12,000 → Early Warning System Upgrade.’ Centre panel: a KAN community nutrition site, Dr. Ana Tuivaga and two health workers distributing supplementary food packages to mothers with young children, a hand-painted sign reading ‘Month 7 Nutrition Support.’ Right panel: a community meeting in Manu Camp — a HopeForward staff member presents a printed consent form to seated community members, small photographs on the table showing what images would be used and how; Filomena Vaka of KCV sits alongside, observing. Warm, purposeful light. 16-bit pixel art scene, Pacific island humanitarian setting, warm green and ochre palette, ethical systems working.

**scene_9C** (Consequence) — *Right Goal, Wrong Road*

> Split scene. Left panel — month 6: Toma Faleolo signs a transfer authorisation form at his desk, expression determined, a KAN programme brief visible beside the keyboard — the $47,000 reallocation underway, no donor approval email in sight. Right panel — six months later: an external audit office. A compliance officer holds an open audit report, a section circled in red — ‘Unilateral reallocation of restricted donor funds: $47,000.’ Beside her, Toma sits in a chair, formal and still, a letter visible in his hand marked ‘Formal Censure.’ On the far wall, a small KAN nutrition poster — children under five, healthy — a reminder of what the money achieved and what it cost. 16-bit pixel art scene, Pacific island humanitarian setting, muted ochre and grey, right outcome, wrong process, visible cost.

**scene_9D** (Consequence) — *The Cost of Looking Away*

> Three moments across one year, arranged in a triptych. Left — month 6: a clean programme closure report on a desk, ‘All Financials Reconciled’ stamped, the conflict of interest folder still in the filing cabinet, drawer closed. Centre — month 12: an external audit table, a compliance officer pointing to a highlighted section — ‘Undisclosed procurement relationship identified; internal record found.’ A printout of the Manu Camp family photograph lies beside two formal complaint letters. Right — month 14: a laptop screen showing a published article titled ‘When NGO Fundraising Exploits the Communities It Claims to Serve,’ with a screenshot of the HopeForward donation page bearing the Manu Camp photo; a share count reads ‘2,147.’ 16-bit pixel art scene, Pacific island humanitarian setting, cool grey palette, clean surfaces concealing accumulated cost.

---

## Ending Badge Image Prompts

Each of the four endings features a distinct circular digital badge. All badges use **flat digital illustration style** with Pacific island humanitarian imagery. Prompts are taken directly from `endings[].badge_image_prompt` in the JSON.

**ending_transformative** — *Transformative Leader*

> Digital badge, circular format. Gold outer ring with nine small icons evenly spaced around the circumference, each representing one CHS commitment: a speech bubble (participation), a water drop (timely support), a seedling (resilience), a shield (do no harm), a complaint box (accountability), two overlapping circles (coordination), a lightbulb (learning), a person with a heart (staff wellbeing), and a coin with a checkmark (ethical resources). Centre image: a Pacific island coastline in aerial view — green recovery vegetation visible among light cyclone damage, a small fishing cooperative on the shore, a community meeting shelter. Warm late-afternoon Pacific light. Text at base: 'Transformative Leader'. Colour palette: deep gold, ocean blue, fresh green, white. Flat digital illustration style, clean and professional.

**ending_committed** — *Committed Practitioner*

> Digital badge, circular format. Silver outer ring. Centre image: a Pacific island outline with visible recovery — new green growth alongside remaining cyclone damage. A figure (representing Maya) stands on a path that leads forward, facing toward the horizon. Around the inner ring: small growth icons — an upward arrow, an open book, a sprouting plant, a handshake. Text at base: 'Committed Practitioner'. Colour palette: silver, teal, warm yellow, white. Flat digital illustration style.

**ending_struggling** — *Struggling Responder*

> Digital badge, circular format. Bronze outer ring. Centre image: an open notebook lying on a field table, with a single seedling growing up through the pages — symbolising learning emerging from experience. Faint Pacific island coastal landscape in the background, slightly hazy. Around the inner ring: small icons representing reflection and growth — a magnifying glass, an open hand, a seedling, a looping arrow. Text at base: 'Learning in Progress'. Colour palette: bronze, warm orange, light blue, white. Flat digital illustration style.

**ending_crisis** — *Crisis Mode*

> Digital badge, circular format. Earth-toned outer ring in deep brown and muted green. Centre image: a single green seedling pushing up through cracked, storm-dried earth — resilient growth from difficult ground. A faint Pacific island horizon in the background after a storm: grey-clearing sky, scattered debris, early signs of renewal. Around the inner ring: simple icons of persistence — an upward arrow through a barrier, an open door, a rising sun. Text at base: 'Rising Learner'. Colour palette: earthy brown, muted green, warm amber, soft white. Flat digital illustration style.

## Web-Based Game — Implementation Guide

Kailani Rising is designed to be built as a **web-based game** running entirely in a browser using **HTML, JavaScript, CSS, GIF animations**, and the Web Audio API. No install, no plugin — one URL, any device.

### Architecture Overview

```
Browser
  └── index.html          Full-screen canvas mount + overlay divs
        ├── style.css      Viewport fill, pixelated rendering, UI styles
        └── js/
              main.js      Game loop, scene routing, input handling
              loader.js    fetch() + JSON parse, scene index
              flags.js     Context flag state (18 boolean flags)
              score.js     Three dimension score counters
              renderer.js  Canvas draw: backgrounds, sprites, dialogue box
              ui.js        Decision / consequence / score / ending screens
              audio.js     Web Audio API chiptune player
data/
  CHS_2024_game_v2.json    All game content — loaded at runtime via fetch()
assets/
  bg/                      Background PNGs (320×180 px pixel art)
  sprites/                 Character GIF sprite sheets (48×48 px, 4-frame)
  ui/                      UI tile PNGs (buttons, dialogue box, badges)
  audio/                   Chiptune .ogg tracks + sound effect .ogg files
```

### Full-Screen Pixel Art Canvas

The game renders at a **320×180 px base resolution** (16:9), scaled up via CSS to fill the entire viewport. Every background and UI element is a full-screen graphic — the canvas always occupies 100 % of the screen.

```css
/* style.css */
html, body {
  margin: 0;
  background: #1A2028;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#gameCanvas {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  width: 100vmin;
  height: calc(100vmin * 9 / 16);
  max-width: 100vw;
  max-height: 100vh;
}
```

This scales the 320×180 canvas to any screen size while preserving crisp pixel edges. On a 1920×1080 display the canvas is rendered at 6× (1080×607); on a 4K display at up to 10×.

### Loading Game Data

All game content lives in `CHS_2024_game_v2.json`. The JavaScript engine loads it once at startup and builds an in-memory index:

```javascript
async function loadGame() {
  const res  = await fetch("data/CHS_2024_game_v2.json");
  const data = await res.json();

  // Index scenes by ID for O(1) lookup
  state.scenes = Object.fromEntries(data.scenes.map(s => [s.id, s]));

  // Initialise all 18 context flags to false
  state.flags = Object.fromEntries(
    data.context_flags_system.flags.map(f => [f.id, false])
  );

  // Initialise three score dimension counters
  state.scores = {
    community_trust: 0,
    program_quality: 0,
    accountability: 0
  };

  state.currentSceneId = "prologue";
  renderScene(state.scenes["prologue"]);
}
```

### Scene Routing Logic

The engine routes between three scene types based on the `type` field:

```javascript
function renderScene(scene) {
  switch (scene.type) {
    case "narrative":    renderNarrative(scene);    break;
    case "decision":     renderDecision(scene);     break;
    case "consequence":  renderConsequence(scene);  break;
  }
}
```

**Narrative scenes** display the full-screen background pixel art, the dialogue box with narrative text, and a "Continue" prompt. On advance, navigate to `scene.next_scene_id`.

**Decision scenes** display the background, situation text, any active context flag banners, and the four option buttons (A–D). On selection, call `applyOption(option)`.

**Consequence scenes** display the background, consequence narrative, score delta animation, the CHS quote box, and the Cascading Note panel if a flag was set. On continue, navigate to `scene.next_scene_id`.

### Applying an Option (Scores + Flags)

```javascript
function applyOption(option) {
  // 1. Apply score changes across all three dimensions
  for (const [dim, val] of Object.entries(option.score_changes || {})) {
    state.scores[dim] = (state.scores[dim] || 0) + val;
  }

  // 2. Set context flag (if this option activates one)
  if (option.sets_flag) {
    state.flags[option.sets_flag] = true;
  }

  // 3. Navigate to the consequence scene
  state.currentSceneId = option.consequence_scene_id;
  renderScene(state.scenes[option.consequence_scene_id]);
}
```

### Context Flag Injection

Before rendering a decision scene, the engine checks for active flags that affect that scene and injects contextual text:

```javascript
function getActiveFlagsForScene(sceneId) {
  const flagEffects = gameData.supplementary_assets
    .game_engine_notes.context_flags_implementation
    .flag_effects_by_decision;
  return flagEffects
    .filter(f => f.affects_scenes.includes(sceneId) && state.flags[f.flag])
    .map(f => ({ label: f.flag, note: f.narrative_effect }));
}
```

If any flags are active for the current scene, show an amber banner: *"Your earlier choices are shaping this situation."*

### Determining the Ending

After the epilogue scene, sum all three dimension scores and compare against the thresholds from `game_meta.scoring.ending_thresholds`:

```javascript
function determineEnding() {
  const total = Object.values(state.scores).reduce((a, b) => a + b, 0);
  const thresholds = gameData.game_meta.scoring.ending_thresholds;
  if (total >= thresholds.transformative_leader)  return "ending_transformative";
  if (total >= thresholds.committed_practitioner) return "ending_committed";
  if (total >= thresholds.struggling_responder)   return "ending_struggling";
  return "ending_crisis";
}
```

### GIF Sprite Animations

Character sprites are **48×48 px GIF files** with a 4-frame idle/talk cycle, layered over the canvas using absolutely positioned `<img>` elements:

```javascript
// Place a sprite at canvas-pixel coordinates
function placeSprite(charId, x, y) {
  const img = document.getElementById("sprite-" + charId);
  img.style.left   = (x / 320 * 100) + "%";
  img.style.bottom = (y / 180 * 100) + "%";
  img.style.display = "block";
}
```

GIFs loop automatically, providing ambient character movement (idle breathing, hair movement, small gestures) without any JavaScript animation code. Talk animations are separate GIFs swapped in when a character speaks.

### CSS Transitions for Screen Changes

Scene-to-scene transitions use CSS fade or slide animations for atmosphere:

```css
#screen {
  transition: opacity 0.3s ease-in-out;
}
#screen.transitioning {
  opacity: 0;
}
```

Chapter transition cards (between decisions) use a full-screen pixel art slide-in:

```css
#chapter-card {
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
#chapter-card.active {
  transform: translateX(0);
}
```

### Score Delta Animation

On the consequence screen, score changes are animated sequentially (200 ms between dimensions):

- **Positive delta:** teal fill sweeps upward in the progress bar
- **Negative delta:** coral fill sweeps downward
- Text label (e.g. `+2 Community Trust`) fades in alongside the bar animation

### Session Persistence (localStorage)

To support saving progress across sessions:

```javascript
function saveSession() {
  localStorage.setItem("kailani_session", JSON.stringify({
    currentSceneId: state.currentSceneId,
    flags:          state.flags,
    scores:         state.scores
  }));
}

function loadSession() {
  const saved = localStorage.getItem("kailani_session");
  if (!saved) return false;
  const s = JSON.parse(saved);
  // Validate — initialise any missing flag keys to false
  state.flags = Object.fromEntries(
    gameData.context_flags_system.flags.map(f => [f.id, s.flags[f.id] ?? false])
  );
  state.scores         = s.scores;
  state.currentSceneId = s.currentSceneId;
  return true;
}
```

---

## Pixel Art — Visual Style

Pixel art is used for **ambience and atmosphere**, not just decoration. The lo-fi aesthetic creates emotional distance that helps learners engage with difficult humanitarian scenarios without feeling overwhelmed. Every background is a **full-screen graphic** at 320×180 px, integer-scaled to fill the viewport.

### Recommended Pixel Art Specifications

| Setting | Value |
|---|---|
| Base canvas resolution | 320×180 px (16:9) |
| Display scaling | Integer-scaled via CSS `image-rendering: pixelated` to fill viewport |
| Colour palette | 24-colour Kailani palette (see below) |
| Character sprites | 48×48 px full-body standing; 32×48 px bust portrait for dialogue |
| Sprite animation | 4-frame GIF: idle cycle + 2-frame talk (mouth open/closed) |
| Backgrounds | 320×180 px, 3 parallax layers (sky / midground / foreground) |
| UI tile grid | 8×8 px base grid |

### 24-Colour Kailani Palette

| Name | Hex | Primary Use |
|---|---|---|
| Pacific Teal | `#2E7D8C` | UI headers, water, active flag chips |
| Teal Highlight | `#4DB8C8` | Water reflections, UI highlights |
| Teal Shadow | `#1A4F5A` | Deep water, shadow on teal surfaces |
| Warm Ochre | `#C8832A` | Soil, wood, warm UI accents |
| Ochre Highlight | `#E8A94E` | Sand, sun-lit ground |
| Ochre Shadow | `#7A4A10` | Dark soil, tree trunks |
| Tropical Green | `#3A8C40` | Healthy vegetation, positive score fill |
| Green Highlight | `#68C46E` | Palm fronds, grass highlights |
| Green Shadow | `#1E5622` | Dense foliage shadow |
| Storm Grey | `#6E7B82` | Damaged structures, storm clouds |
| Grey Highlight | `#A8B8BE` | Concrete, corrugated iron highlights |
| Grey Shadow | `#3A454A` | Deep shadow, debris |
| Relief Blue | `#2456A4` | HopeForward vests, UN branding |
| Sky Blue | `#7CB8E8` | Clearing sky, hope moments |
| Tarp Blue | `#4888CC` | Blue tarp shelters |
| Warm Coral | `#D45C4A` | Negative score fill, warning UI |
| Skin Tone 1 | `#F0C89A` | Character skin — lightest |
| Skin Tone 2 | `#C8885A` | Character skin — medium |
| Skin Tone 3 | `#7A4830` | Character skin — dark |
| Hair Dark | `#1C1410` | Dark hair (Maya, Sione, Filomena) |
| Warm White | `#F2EDE4` | Text backgrounds, paper, clothing |
| UI Dark | `#1A2028` | Text, outlines, UI borders |
| Amber Flag | `#E8A020` | Active context flag banners |
| Pure White | `#FFFFFF` | UI text on dark backgrounds |

### Required Backgrounds (11 full-screen scenes)

| ID | Scene | Description |
|---|---|---|
| `bg_port_hana_aerial` | prologue | Aerial view of Port Hana — aid trucks, blue tarps, brown floodwater, storm-clearing sky |
| `bg_manu_camp_yard` | decision_1 / scenes 1A–1D | Camp yard, folding tables, tarp shelters, crowd in background |
| `bg_distribution_point` | decision_2 / scenes 2A–2D | Camp distribution area, pallets of supplies, HopeForward banner |
| `bg_tevita_village` | decision_3 / scenes 3A–3D | Remote inland village, community shelter, damaged palms |
| `bg_northern_coast_road` | decision_4 / scenes 4A–4D | Damaged coastal road, aid truck, cracked infrastructure |
| `bg_hopeforward_office` | decision_5 / scenes 5A–5D | Small NGO office, maps on wall, complaint box visible |
| `bg_un_cluster_room` | decision_6 / scenes 6A–6D | UN cluster room, whiteboards, agency flags, empty KAN chair |
| `bg_field_data_tent` | decision_7 / scenes 7A–7D | Field data tent, Amara's M&E workstation, printed charts |
| `bg_talio_staff_base` | decision_8 / scenes 8A–8D | Talio sub-district base, briefing room, whiteboard |
| `bg_hopeforward_boardroom` | decision_9 / scenes 9A–9D | HopeForward boardroom, donor video-call, finance sheets |
| `bg_airport_departure` | epilogue | Port Hana airport departure gate, recovering coastline beyond |

### Recommended Pixel Fonts

| Font | Source | Use |
|---|---|---|
| Press Start 2P | Google Fonts (free) | Chapter titles, ending titles, UI headers |
| Munro | Ten by Twenty (free) | Body text, dialogue, option labels |
| Pixel Operator | itch.io (free) | Alternative body font; higher x-height for accessibility |

### Audio

Chiptune with Pacific island atmosphere. Recommended tools: FamiTracker, LMMS with 8-bit plugins, or BeepBox (browser-based). Seven music tracks + six core sound effects:

**Music tracks:** `mus_main_menu` (hopeful/tense), `mus_camp_day` (urgent/warm), `mus_north_coast` (tense/isolated), `mus_office` (focused/bureaucratic), `mus_community` (warm/communal), `mus_ending_high` (triumphant), `mus_ending_low` (reflective/minor)

**Sound effects:** page turn · positive ding · negative thud · flag-set chime · dialogue blip · chapter transition swoosh

---

## Supplementary Assets

The `supplementary_assets` key contains four categories of supporting material:

### 1. Expanded Character Backstories (`key_supporting_characters_expanded`)

Full biographical backstories and pixel art portrait prompts for all nine named characters. Each entry includes: `id`, `name`, `role`, `backstory`, `key_decisions`, and `image_prompt`.

### 2. UI Layout Specifications (`ui_design_prompts`)

Screen layout specifications for six key screens: `main_menu`, `score_dashboard`, `decision_screen`, `consequence_screen`, `chapter_transition`, `ending_screen`. These are **HTML/CSS/JS implementation guides** describing the structure, components, and content of each screen (buttons, text panels, score gauges, flag chips, progress indicators, etc.). They are not image generation prompts — all interactive UI elements are built in code. The scene illustration slot on each screen is populated by the relevant `image_prompt` from the corresponding scene object in `scenes`.

### 3. Game Engine Notes (`game_engine_notes`)

Implementation guidance for the context flags system, UI flag surfacing, and rendering notes. Covers:
- `context_flags_implementation` — storage, flag-setting logic, and narrative effects per decision
- `ui_flag_surfacing` — decision screen banners, consequence Cascading Note panel, score dashboard flag list, ending screen flag summary
- `rendering_notes` — situation summary injection, image prompt use, CHS badge rendering, score delta animation

### 4. Pixel Art Implementation Guide (`pixel_art_implementation`)

Full visual style and engine implementation guide including:
- Recommended tech stack: **HTML5 + JavaScript (web browser)** as primary; Ren'Py, RPG Maker MZ, GB Studio 4, Godot 4, and Twine + SugarCube as alternatives
- 24-colour Kailani palette
- Character sprite specifications (48×48 px GIF, 4-frame animation)
- Background specifications (320×180 px, 3 parallax layers, 11 scenes required)
- UI pixel art elements (dialogue box, option buttons, score bars, flag chips, chapter card, CHS badge)
- Recommended pixel fonts
- Audio recommendations (chiptune tools, 7 tracks, 6 SFX)
- HTML/JS implementation sketch (file structure, `loadGame()`, `applyOption()`, full-screen CSS, GIF sprite positioning)
- Accessibility notes (integer scaling, font-size toggle, colour-blind support, minimum tap targets)

---

## How to Use This File

### For Game Developers

1. **Load the JSON** via `fetch("CHS_2024_game_v2.json")` and build a scene index.
2. **Initialise session state:** all 18 flags set to `false`; all three score dimensions set to `0`.
3. **Render the prologue** (`scenes[0]`) as an opening narrative screen over a full-screen background.
4. **For each decision scene** (`type: "decision"`):
   - Query active flags against `context_flag_effects` to inject contextual text.
   - Display the full-screen background, situation text, flag banners (if active), and four option buttons.
   - On selection, apply `score_changes`, set `sets_flag` if defined, and navigate to `consequence_scene_id`.
5. **For each consequence scene** (`type: "consequence"`):
   - Display the full-screen background, narrative text, delayed impact, and score delta animation.
   - Show the Cascading Note panel if a flag was just set.
   - Navigate to `next_scene_id`.
6. **At the epilogue**, sum all three dimension scores, compare against `game_meta.scoring.ending_thresholds`, and display the corresponding `endings` entry.
7. **Use the pixel art image prompts** (all specified as 16-bit pixel art, 320×180 px, 24-colour Kailani palette) to generate scene backgrounds and character sprites via an AI image generation tool or by commissioning a pixel artist.

### For Trainers and Facilitators

1. Use individual decision scenes as standalone case studies for group discussion.
2. Run participants through 2–3 decisions per session and use consequence scenes to prompt reflection.
3. The `reflection_questions` in each `endings` entry are ready-made debrief prompts for post-game discussion.
4. Use the `chs_reference_summary` in the JSON as a printed quick-reference during training sessions.

### For Content Authors

Use the image generation prompts documented in the **Scene Image Prompts** and **Character Portrait Prompts** sections of this file to generate or commission scene backgrounds and character sprites. All prompts specify 16-bit pixel art style, 320×180 px backgrounds, and the 24-colour Kailani palette. Each prompt is taken directly from the corresponding `image_prompt` field in the JSON.

---

## File Reference

**Source:** Core Humanitarian Standard on Quality and Accountability, 2024
**Filename:** `CHS_2024_game_v2.json`
**Related files:** `CHS_2024.json` (raw CHS data), `CHS_2024.pdf` (official CHS document), `CHS_2024_game.json` (Version 1 — shorter linear game)
