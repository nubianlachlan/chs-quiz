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
| `score_dimensions` | Four scoring dimensions with descriptions and pixel art icon prompts |
| `context_flags_system` | Description of the flag system and full list of 18 context flags |
| `key_characters` | Array of nine named characters with roles, descriptions, and pixel art portrait prompts |
| `chs_reference_summary` | Quick-reference of all nine commitments with all 50 sub-requirements |
| `scenes` | Array of 47 scene objects (prologue + 9 decisions + 36 consequence scenes + epilogue) |
| `endings` | Four possible endings with score thresholds, narratives, and reflection questions |
| `development_prompts` | Twelve expansion prompts for developing each section from skeleton to full text |
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
| `narrative_summary` | string | Immediate outcome summary |
| `narrative` | string | Full consequence narrative (expanded via development prompts) |
| `delayed_impact` | string | Longer-term consequence for communities or the programme |
| `image_prompt` | string | Pixel art scene prompt for the consequence |
| `next_scene_id` | string | ID of the next scene to navigate to |

---

## Scoring System

### Four Scoring Dimensions

| Dimension ID | Title | What It Measures | Shaped by CHS |
|---|---|---|---|
| `community_trust` | Community Trust | Degree to which communities trust, engage with, and feel heard by HopeForward | Commitments 1, 2, 5, 6, 7 |
| `staff_wellbeing` | Staff Wellbeing | Safety, morale, psychological health, and professional development of staff and volunteers | Commitment 8 |
| `program_quality` | Program Quality | Relevance, effectiveness, technical quality, and measurable impact of the response | Commitments 2, 3, 4, 6, 7 |
| `accountability` | Accountability & Ethics | Adherence to ethical standards, transparency, protection from exploitation, and organisational integrity | Commitments 4, 5, 8, 9 |

### Score Dimension Icon Prompts (Pixel Art)

All icons are **16-bit pixel art, 32×32 px**, drawn from the 24-colour Kailani palette:

**Community Trust** — Reflects the degree to which affected communities trust, engage with, and feel heard by HopeForward. Shaped primarily by CHS commitments 1, 2, 5, 6, and 7.

> 16-bit pixel art icon (32×32 px, 24-colour Kailani palette, crisp pixel edges): two hands clasped in a handshake, rendered in warm ochre and terracotta on a white background. Pixel art style, no anti-aliasing, crisp edges. 32×32 px target size, scaled 2× for display. Colours drawn from the 24-colour Kailani palette.

**Staff Wellbeing** — Reflects the safety, morale, psychological health, and professional development of HopeForward staff and volunteers. Shaped primarily by CHS commitment 8.

> 16-bit pixel art icon (32×32 px, 24-colour Kailani palette, crisp pixel edges): a simplified person silhouette standing inside a protective rounded circle, rendered in supportive blue and soft green on a white background. Pixel art style, no anti-aliasing, crisp edges. 32×32 px target size, scaled 2× for display. Colours drawn from the 24-colour Kailani palette.

**Program Quality** — Reflects the relevance, effectiveness, technical quality, and measurable impact of the response. Shaped primarily by CHS commitments 2, 3, 4, 6, and 7.

> 16-bit pixel art icon (32×32 px, 24-colour Kailani palette, crisp pixel edges): an upward-trending bar chart with a small heart shape above the tallest bar, rendered in positive tropical green on a white background. Pixel art style, no anti-aliasing, crisp edges. 32×32 px target size, scaled 2× for display. Colours drawn from the 24-colour Kailani palette.

**Accountability & Ethics** — Reflects adherence to ethical standards, transparency with donors and communities, protection from exploitation, and organisational integrity. Shaped primarily by CHS commitments 4, 5, 8, and 9.

> 16-bit pixel art icon (32×32 px, 24-colour Kailani palette, crisp pixel edges): balanced scales with a small magnifying glass overlaid on the fulcrum, rendered in neutral blue and grey on a white background. Pixel art style, no anti-aliasing, crisp edges. 32×32 px target size, scaled 2× for display. Colours drawn from the 24-colour Kailani palette.

### Total Score and Ending Thresholds

The ending is determined by the **sum of all four dimension scores**:

| Score Range | Ending Title | Summary |
|---|---|---|
| 46–56 | 🏆 Transformative Leader | Principled, inclusive, locally-led action; all nine CHS commitments honoured in practice |
| 32–45 | 🌟 Committed Practitioner | Strong in most areas; some trade-offs and gaps; intent was always there |
| 18–31 | 📚 Struggling Responder | Well-intentioned but inconsistent; operational pressure frequently overrode principle |
| 0–17 | 🌱 Crisis Mode | Serious setbacks across multiple commitments; an honest invitation to reflect and restart |

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

## Development Prompts

The JSON file includes **twelve** `development_prompts` entries to guide content expansion from skeleton to full text. Each prompt specifies the scene(s) to expand, the CHS focus requirements, and detailed instructions for narrative voice, character dialogue, flag effects, image prompts, and JSON structure.

The full text of all twelve prompts is extracted below for convenience.

### Prompt Summary

| # | ID | Title | CHS Focus |
|---|---|---|---|
| 1 | `expand_prologue_epilogue` | Expand the Prologue and Epilogue | All nine commitments (framing) |
| 2 | `expand_decision_1_participation` | Expand Decision 1 — Participation & Rights | Requirements 1.1–1.6 |
| 3 | `expand_decision_2_timely_support` | Expand Decision 2 — Timely & Effective Support | Requirements 2.1–2.6 |
| 4 | `expand_decision_3_resilience` | Expand Decision 3 — Resilience & Local Ownership | Requirements 3.1–3.5 |
| 5 | `expand_decision_4_do_no_harm` | Expand Decision 4 — Do No Harm & Protection | Requirements 4.1–4.5 |
| 6 | `expand_decision_5_complaints` | Expand Decision 5 — Complaints & Feedback | Requirements 5.1–5.6 |
| 7 | `expand_decision_6_coordination` | Expand Decision 6 — Coordination & Complementarity | Requirements 6.1–6.4 |
| 8 | `expand_decision_7_learning` | Expand Decision 7 — Learning & Improvement | Requirements 7.1–7.5 |
| 9 | `expand_decision_8_staff_wellbeing` | Expand Decision 8 — Staff Competence & Wellbeing | Requirements 8.1–8.7 |
| 10 | `expand_decision_9_resource_management` | Expand Decision 9 — Ethical Resource Management | Requirements 9.1–9.6 |
| 11 | `write_four_endings` | Write the Four Endings | All 9 commitments (synthesis) |
| 12 | `expand_supporting_characters_ui_engine` | Expand Supporting Characters, UI Design, and Game Engine Guidance | All commitments (implementation) |

### Full Prompt Text

#### Prompt 1: Expand the Prologue and Epilogue

**CHS Focus:** All nine commitments (framing)  
**ID:** `expand_prologue_epilogue`

Using the skeleton in CHS_2024_game_v2.json, expand the 'prologue' and 'epilogue' scenes into full narrative text. The prologue (~200 words) should place Maya in Kailani with vivid sensory detail, introduce Sione, and create a sense of stakes and complexity. The epilogue (~200 words) should be reflective and personal — calling back to specific decisions and characters from the game. Also replace PLACEHOLDER image_prompt fields for both scenes with complete AI illustration prompts (flat digital illustration style, Pacific island humanitarian setting, consistent character descriptions). Remove 'status' fields when done.

---

#### Prompt 2: Expand Decision 1 — CHS 1: Participation & Rights

**CHS Focus:** Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6  
**ID:** `expand_decision_1_participation`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_1' and its four consequence scenes ('scene_1A', 'scene_1B', 'scene_1C', 'scene_1D'). For 'decision_1': write a full scene narrative (~150 words) with dialogue from Sione, Filomena (KCV), and the government official. Show Maya's internal conflict between speed and inclusion. For each consequence scene: write a full narrative (~120 words) with specific character reactions, delayed impact detail, and a complete image_prompt. Requirements 1.1-1.6 should each be visibly addressed or missed in the relevant options. Remove PLACEHOLDER and 'status' fields. Keep JSON exactly.

---

#### Prompt 3: Expand Decision 2 — CHS 2: Timely & Effective Support

**CHS Focus:** Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6  
**ID:** `expand_decision_2_timely_support`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_2' and its four consequence scenes ('scene_2A', 'scene_2B', 'scene_2C', 'scene_2D'). Show the context_flag_effects in the scene narrative — if inclusive_assessment was set, Sione has richer data. Include dialogue from Carlos (logistics pressure) and the donor representative (compliance pressure). For each consequence: ~120 words with specific Sphere standard references, delayed impacts, and image_prompts. Requirements 2.1-2.6 should each be visibly addressed or missed. Remove PLACEHOLDER and 'status' fields. Keep JSON exactly.

---

#### Prompt 4: Expand Decision 3 — CHS 3: Resilience & Local Ownership

**CHS Focus:** Requirements 3.1, 3.2, 3.3, 3.4, 3.5  
**ID:** `expand_decision_3_resilience`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_3' and its four consequence scenes ('scene_3A', 'scene_3B', 'scene_3C', 'scene_3D'). Show the HQ direct delivery pressure, Filomena's co-governance proposal, and Sione's traditional knowledge offer. Reference the approaching tropical storm as a real risk that gives DRR integration urgency. For each consequence: ~120 words with context-flag effects (especially for options B and D which set 'local_ownership_by_design' and 'drr_integrated'), delayed impacts, and image_prompts. Requirements 3.1-3.5 addressed or missed per option. Remove PLACEHOLDER and 'status' fields.

---

#### Prompt 5: Expand Decision 4 — CHS 4: Do No Harm & Protection

**CHS Focus:** Requirements 4.1, 4.2, 4.3, 4.4, 4.5  
**ID:** `expand_decision_4_do_no_harm`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_4' and its four consequence scenes ('scene_4A', 'scene_4B', 'scene_4C', 'scene_4D'). Show the four simultaneous risks as concrete, urgent details — not abstractions. Reference the Tevita Village coercion signal, the specific Google Drive data exposure, the truck idling near children, and the absent PSEA framework. Show Carlos's push for scale-up on schedule. For each consequence: ~120 words with specific harm descriptions, community member voices, and image_prompts. All five requirements (4.1-4.5) addressed or missed per option. Remove PLACEHOLDER and 'status' fields.

---

#### Prompt 6: Expand Decision 5 — CHS 5: Complaints & Feedback

**CHS Focus:** Requirements 5.1, 5.2, 5.3, 5.4, 5.5, 5.6  
**ID:** `expand_decision_5_complaints`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_5' and its four consequence scenes ('scene_5A', 'scene_5B', 'scene_5C', 'scene_5D'). Give Sina Talagi a specific, dignified voice in the scene narrative. Show the 12% complaints awareness finding as a concrete management failure. Reference how the protection_framework_active flag (if set in Decision 4) changes what systems are available. For each consequence: ~120 words with Sina's experience at the centre (survivor-centred), staff reaction, community perception, and image_prompts. All six requirements (5.1-5.6) visible. Remove PLACEHOLDER and 'status'.

---

#### Prompt 7: Expand Decision 6 — CHS 6: Coordination & Complementarity

**CHS Focus:** Requirements 6.1, 6.2, 6.3, 6.4  
**ID:** `expand_decision_6_coordination`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_6' and its four consequence scenes ('scene_6A', 'scene_6B', 'scene_6C', 'scene_6D'). Show the concrete impacts of the geographic duplication in the two villages. Give Dr. Ana Tuivaga (KAN) a specific, compelling voice — her exclusion is the human face of CHS 6 failure. Reference how local_ownership_by_design and referral_pathways_active flags (if set) change the dynamics. For each consequence: ~120 words with inter-agency tension, community confusion, and image_prompts. All four requirements (6.1-6.4) visible. Remove PLACEHOLDER and 'status'.

---

#### Prompt 8: Expand Decision 7 — CHS 7: Learning & Continuous Improvement

**CHS Focus:** Requirements 7.1, 7.2, 7.3, 7.4, 7.5  
**ID:** `expand_decision_7_learning`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_7' and its four consequence scenes ('scene_7A', 'scene_7B', 'scene_7C', 'scene_7D'). Give Amara a specific, confident voice in presenting the monitoring findings. Show Carlos's 'preliminary and contestable' pushback in dialogue. Reference the two specific community members whose feedback was not acknowledged — give them names and brief context. Show how complaints_trusted and inclusive_assessment flags make the data richer. For each consequence: ~120 words with specific outcome data, community voice, and image_prompts. All five requirements (7.1-7.5) visible. Remove PLACEHOLDER and 'status'.

---

#### Prompt 9: Expand Decision 8 — CHS 8: Staff Competence & Wellbeing

**CHS Focus:** Requirements 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7  
**ID:** `expand_decision_8_staff_wellbeing`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_8' and its four consequence scenes ('scene_8A', 'scene_8B', 'scene_8C', 'scene_8D'). Give Leila's distress a specific, human voice through her WhatsApp messages. Give Tevi's discrimination experience careful, dignified framing. Show the training budget reallocation as Carlos's pragmatic decision that ignored a contract commitment. Reference how duty_of_care_upheld and protection_framework_active flags (if set) change staff expectations. For each consequence: ~120 words with specific staff experiences, HR outcomes, and image_prompts. All seven requirements (8.1-8.7) visible. Remove PLACEHOLDER and 'status'.

---

#### Prompt 10: Expand Decision 9 — CHS 9: Ethical Resource Management

**CHS Focus:** Requirements 9.1, 9.2, 9.3, 9.4, 9.5, 9.6  
**ID:** `expand_decision_9_resource_management`

Using the skeleton in CHS_2024_game_v2.json, expand 'decision_9' and its four consequence scenes ('scene_9A', 'scene_9B', 'scene_9C', 'scene_9D'). Give Toma a specific, careful voice — he is a principled professional who is also professionally vulnerable. Show the HQ visibility campaign request as a real institutional pressure, not an obvious wrongdoing. Reference how donor_transparent_engagement and community_informed flags (if set) change what is possible. For each consequence: ~120 words with specific financial, ethical, and community outcomes, and image_prompts. All six requirements (9.1-9.6) visible. Remove PLACEHOLDER.

---

#### Prompt 11: Write the Four Endings

**CHS Focus:** All 9 commitments (synthesis)  
**ID:** `write_four_endings`

Using the skeleton in CHS_2024_game_v2.json, expand all four endings: 'ending_transformative', 'ending_committed', 'ending_struggling', and 'ending_crisis'. For each ending: write a full narrative_summary (~150 words) that references specific decisions, characters, and outcomes from the game — reflecting what Maya did well or where she fell short across all nine CHS commitments. Reference the context flags the player may have set. The tone should be reflective, human, and educational — not punitive. Write badge_image_prompts that visually represent the journey. Keep the reflection_questions and chs_requirements fields exactly as-is. Remove PLACEHOLDER.

---

#### Prompt 12: Expand Supporting Characters, UI Design, and Game Engine Guidance

**CHS Focus:** All commitments (implementation)  
**ID:** `expand_supporting_characters_ui_engine`

Using the skeleton in CHS_2024_game_v2.json, expand the 'supplementary_assets' section: Write backstory paragraphs (~80 words each) for all eight key characters (Maya, Sione, Filomena, Leila, Carlos, Amara, Toma, Dr. Ana Tuivaga). Replace all image_prompt PLACEHOLDERs with complete, consistent AI illustration prompts (flat digital illustration style, Pacific island setting, consistent palette). For ui_design_prompts: write production-ready prompts for main menu, score dashboard, decision screen, chapter transition card, consequence screen, and ending screen. Add a game_engine_notes section with guidance on how to implement the context_flags_system — which flags affect which later scene narrative, and how.

---

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
              score.js     Four dimension score counters
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

  // Initialise four score dimension counters
  state.scores = {
    community_trust: 0,
    staff_wellbeing: 0,
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
  // 1. Apply score changes across all four dimensions
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

After the epilogue scene, sum all four dimension scores and compare against the thresholds from `game_meta.scoring.ending_thresholds`:

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

## UI Design Prompts (Pixel Art)

The following prompts are taken directly from `supplementary_assets.ui_design_prompts` in the JSON. They describe the layout and visual content of each key screen. All screens are **full-screen pixel art at 320×180 px base resolution**, integer-scaled to fill the viewport.

### Main Menu Screen

> 16-bit pixel art layout for the 'Kailani Rising' main menu screen. Full-screen composition (320×180 px base canvas, integer-scaled to 1280×720 or 1920×1080). Upper two-thirds: aerial view of a Pacific island coastline beginning to recover from Cyclone Vera — blue tarps on damaged rooftops, aid trucks on a coastal road, palm trees bent but standing, tropical ocean beyond. Warm recovering light breaking through storm clouds. Lower third: dark teal panel with the title 'KAILANI RISING' in bold serif type, subtitle 'A Humanitarian Roleplay' in smaller weight. Four menu buttons stacked vertically: START GAME, HOW TO PLAY, ABOUT CHS 2024, SCORE HISTORY — white text on semi-transparent dark teal panels. HopeForward International logo small bottom-left, CHS badge bottom-right. Colour palette: Pacific teal, warm ochre, storm grey, relief blue, tropical green. 16-bit pixel art style, no gradients, clean type hierarchy.

### Score Dashboard

> 16-bit pixel art layout for the score dashboard screen. Clean, information-first design. White background with teal header bar reading 'YOUR PROGRESS' in white bold type. Four large circular gauge components arranged in a 2x2 grid, each with a distinct icon and colour: (1) Community Trust — handshake icon, Pacific teal fill; (2) Staff Wellbeing — heart icon, warm coral fill; (3) Program Quality — star icon, tropical green fill; (4) Accountability and Ethics — scales icon, ochre fill. Each gauge shows a percentage arc with the numeric value large in the centre. Below the grid: a horizontal 'Total Score' bar with current points and band label (Transformative Leader / Committed Practitioner / Struggling Responder / Crisis Mode). Right panel: 'Active Context Flags' list — flags displayed as small labelled chips in soft teal, grey for inactive flags. Bottom: chapter progress indicator (1-9 steps). 16-bit pixel art style, clean spacing, readable at mobile scale.

### Decision Screen

> 16-bit pixel art layout for the decision screen. Split composition. Upper 40%: scene illustration panel — a Pacific island humanitarian setting relevant to the current chapter (changes per scene). Below: white content panel. Header row: chapter number chip (e.g. 'Ch. 4') left-aligned, CHS commitment badge with commitment number and short title right-aligned (e.g. 'CHS 4 — Do No Harm'). Situation text block: 3-5 lines of narrative situation summary in medium body type. Context flag indicator: if active flags affect this decision, a small amber banner reads 'Your earlier choices are shaping this situation — see flags'. Four option buttons stacked below, labelled A, B, C, D — each a full-width rounded rectangle with option label text. Progress dots at bottom: nine dots, current chapter filled teal. Colour palette: Pacific teal, warm ochre, clean white, storm grey. 16-bit pixel art, clean typographic hierarchy, accessible contrast ratios.

### Consequence Screen

> 16-bit pixel art layout for the consequence screen. Upper 45%: scene illustration showing the direct consequence of the player's choice — character present, setting relevant. Below: white card panel with coloured top border matching the score impact (teal = positive, coral = negative, grey = neutral). 'CONSEQUENCE' label small above the immediate consequence text (2-3 sentences). Score delta row: coloured pill badges showing each dimension change, e.g. '+2 Community Trust', '-1 Staff Wellbeing', each in its dimension colour. 'WHAT THE CHS SAYS' section: quoted CHS text in a light teal box, italic, with CHS requirement number. 'CASCADING NOTE' panel at bottom: amber background, text showing which context flag was set (if any) and what effect it will have on later decisions. 'CONTINUE' button bottom-right, teal. 16-bit pixel art style, clean card layout, mobile-readable type.

### Chapter Transition Card

> 16-bit pixel art layout for the chapter transition card, displayed between chapters. Full-screen pixel art card (320×180 px base, integer-scaled to 1280×720 or 1920×1080). Background: a Pacific island landscape relevant to the next chapter location — illustrated in flat style with bold colour. Overlaid: a centred white card panel with rounded corners. Card content from top: 'CHAPTER N' in small caps; large bold chapter title (e.g. 'Do No Harm and Protection'); 'CHS Commitment N' in medium weight; a horizontal rule; then a bulleted list of all sub-requirement numbers and short titles for that commitment (e.g. '4.1 Do not harm / 4.2 Prevent sexual exploitation...'). Bottom of card: a decorative horizontal border in a Pacific island motif — simple geometric woven pattern in ochre on teal. Background colours vary per chapter: Ch.1 teal, Ch.2 green, Ch.3 ochre, Ch.4 coral, Ch.5 plum, Ch.6 blue, Ch.7 amber, Ch.8 slate, Ch.9 deep teal. 16-bit pixel art style, bold type.

### Ending Screen

> 16-bit pixel art layout for the ending screen. Full-screen, scrollable (320×180 px base, integer-scaled). Top section: ending badge large and centred — a distinct illustrated badge for each of the four endings (Transformative Leader: a rising sun over a rebuilt village; Committed Practitioner: a steady compass; Struggling Responder: an open book; Crisis Mode: a cracked foundation). Badge title in bold below it. Scrollable narrative section below: Maya's ending narrative text in body size type over a warm cream background, 150-200 words. Score breakdown panel: four dimension scores shown as horizontal bars with numeric values, dimension colours matching the dashboard. 'CONTEXT FLAGS ACTIVE' section: each set flag shown as a chip with its short description — representing the cumulative journey. Three reflection questions in a teal-bordered card. Bottom: two full-width buttons — 'SHARE RESULTS' (teal fill, white text) and 'PLAY AGAIN' (outlined, teal text). 16-bit pixel art style, warm Pacific palette.

---

## Supplementary Assets

The `supplementary_assets` key contains four categories of supporting material:

### 1. Expanded Character Backstories (`key_supporting_characters_expanded`)

Full biographical backstories and pixel art portrait prompts for all nine named characters. Each entry includes: `id`, `name`, `role`, `backstory`, `key_decisions`, and `image_prompt`.

### 2. UI Design Prompts (`ui_design_prompts`)

Six pixel art layout prompts (documented in full above): `main_menu`, `score_dashboard`, `decision_screen`, `consequence_screen`, `chapter_transition`, `ending_screen`.

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
2. **Initialise session state:** all 18 flags set to `false`; all four score dimensions set to `0`.
3. **Render the prologue** (`scenes[0]`) as an opening narrative screen over a full-screen background.
4. **For each decision scene** (`type: "decision"`):
   - Query active flags against `context_flag_effects` to inject contextual text.
   - Display the full-screen background, situation text, flag banners (if active), and four option buttons.
   - On selection, apply `score_changes`, set `sets_flag` if defined, and navigate to `consequence_scene_id`.
5. **For each consequence scene** (`type: "consequence"`):
   - Display the full-screen background, narrative text, delayed impact, and score delta animation.
   - Show the Cascading Note panel if a flag was just set.
   - Navigate to `next_scene_id`.
6. **At the epilogue**, sum all four dimension scores, compare against `game_meta.scoring.ending_thresholds`, and display the corresponding `endings` entry.
7. **Use the pixel art image prompts** (all specified as 16-bit pixel art, 320×180 px, 24-colour Kailani palette) to generate scene backgrounds and character sprites via an AI image generation tool or by commissioning a pixel artist.

### For Trainers and Facilitators

1. Use individual decision scenes as standalone case studies for group discussion.
2. Run participants through 2–3 decisions per session and use consequence scenes to prompt reflection.
3. Use the twelve `development_prompts` to commission or generate full narrative text for any sections that remain as skeletons.
4. The `reflection_questions` in each `endings` entry are ready-made debrief prompts for post-game discussion.
5. Use the `chs_reference_summary` in the JSON as a printed quick-reference during training sessions.

### For Content Authors

Use the twelve `development_prompts` entries (extracted in full above) to expand skeleton scenes into full narrative text. Each prompt specifies exact scene IDs, required word counts, character voices to include, flag effects to reference, and JSON structure to preserve. Use pixel art style image generation prompts (all now updated to 16-bit pixel art style in the JSON).

---

## File Reference

**Source:** Core Humanitarian Standard on Quality and Accountability, 2024
**Filename:** `CHS_2024_game_v2.json`
**Related files:** `CHS_2024.json` (raw CHS data), `CHS_2024.pdf` (official CHS document), `CHS_2024_game.json` (Version 1 — shorter linear game)
