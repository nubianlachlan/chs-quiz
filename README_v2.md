# Kailani Rising: A Humanitarian Roleplay Game — v2 (Full Standard Edition)

## Overview

**Kailani Rising** is a comprehensive branching narrative roleplay game built on the
[Core Humanitarian Standard on Quality and Accountability (CHS) 2024](CHS_2024.json).

This version covers **all 9 CHS commitments** and **all 50 sub-requirements** explicitly
across nine decision chapters. It is not a quiz — it is a roleplay with real trade-offs,
cascading consequences, and complex systemic pressures that reflect the realities of
humanitarian and development work.

---

## The Story

You are **Maya Chen**, newly appointed Country Director of HopeForward International,
deployed to **Kailani** — a fictional Pacific island nation devastated by Cyclone Vera.

Over nine chapters, you face decisions that directly test each CHS commitment:

| Chapter | CHS Commitment | Core Dilemma |
|---------|---------------|-------------|
| 1 | Participation & Rights (CHS 1) | Who do you consult, and how? |
| 2 | Timely & Effective Support (CHS 2) | What do you actually distribute, and how? |
| 3 | Resilience & Local Ownership (CHS 3) | Are you building for the future? |
| 4 | Do No Harm & Protection (CHS 4) | What risks are you creating? |
| 5 | Complaints & Feedback (CHS 5) | How do you respond when someone speaks up? |
| 6 | Coordination & Complementarity (CHS 6) | Do you compete or collaborate? |
| 7 | Learning & Improvement (CHS 7) | What do you do with the truth? |
| 8 | Staff Competence & Wellbeing (CHS 8) | How do you care for your team? |
| 9 | Ethical Resource Management (CHS 9) | Whose interests does the money serve? |

---

## Files

| File | Description |
|------|-------------|
| `CHS_2024_game_v2.json` | Full game data file — v2 (full standard edition), 47 scenes, all 9 CHS commitments |
| `CHS_2024.json` | Reference: full CHS 2024 text with all commitments and requirements |
| `CHS_2024_game.json` | Version 1: Field Ready (linear quiz, 9 chapters, 3 options each) |

---

## Game Structure

```
Prologue: Day One in Port Hana
        ↓
Chapter 1 — CHS 1 (Participation & Rights)
  ├── A: Rapid English survey (fails 1.1, 1.3, 1.4)
  ├── B: Inclusive KCV-led process [best] ✓ all 1.1-1.6    → sets: inclusive_assessment, community_informed
  ├── C: Digital mobile survey (fails 1.1, 1.3)
  └── D: Community council only (fails 1.1, 1.4)
        ↓ (context flags cascade forward)
Chapter 2 — CHS 2 (Timely & Effective Support)
  ├── A: Distribute pre-positioned stocks (fails 2.1, 2.3, 2.5, 2.6)
  ├── B: Adapt to assessed priorities [best] ✓ all 2.1-2.6  → sets: local_knowledge_built_in, referral_pathways_active
  ├── C: External consultant's generic package (fails 2.1, 2.6)
  └── D: Equal distribution to all (fails 2.2, 2.6)
        ↓
Chapter 3 — CHS 3 (Resilience & Local Ownership)
  ├── A: Direct delivery, no sustainability (fails 3.1, 3.4)
  ├── B: Co-governance with KCV                              → sets: local_ownership_by_design
  ├── C: DRR integration, early warning system              → sets: drr_integrated
  └── D: Co-governance + DRR [best] ✓ all 3.1-3.5          → sets: both flags
        ↓
Chapter 4 — CHS 4 (Do No Harm & Protection)
  ├── A: Scale up ignoring all four risks (fails 4.1-4.5)
  ├── B: Address all four risks [best] ✓ all 4.1-4.5        → sets: protection_framework_active, data_protection_in_place
  ├── C: Address protection + data; skip environmental      → sets: protection_framework_active, data_protection_in_place
  └── D: Address environment + data; handle PSEA informally → sets: data_protection_in_place
        ↓
Chapter 5 — CHS 5 (Complaints & Feedback)
  ├── A: Informal handling (fails 5.4, 5.5, 5.6)
  ├── B: Formal survivor-centred process [best] ✓ 5.1-5.6   → sets: complaints_trusted, survivor_centred_process
  ├── C: Refer to police without survivor consent (fails 5.5)
  └── D: Formal process + comprehensive feedback system     → sets: complaints_trusted, survivor_centred_process
        ↓
Chapter 6 — CHS 6 (Coordination & Complementarity)
  ├── A: Minimal coordination, keep data proprietary (fails 6.1, 6.2, 6.3, 6.4)
  ├── B: Full coordination [best] ✓ all 6.1-6.4             → sets: cluster_coordination_active, partner_quality_supported
  ├── C: Selective coordination — resolve GAP, support KCV  → sets: partner_quality_supported
  └── D: Create parallel coordination structure (fails 6.1, 6.4)
        ↓
Chapter 7 — CHS 7 (Learning & Improvement)
  ├── A: Positive aggregates only (fails 7.1-7.5)
  ├── B: Full transparency + course correction [best] ✓ 7.1-7.5 → sets: gender_data_actioned, learning_shared_externally
  ├── C: Share innovation but downplay gender gap           → sets: learning_shared_externally
  └── D: Commission verification study — delay action (fails 7.3)
        ↓
Chapter 8 — CHS 8 (Staff Competence & Wellbeing)
  ├── A: Informal on all three issues (fails 8.2, 8.4, 8.5, 8.6)
  ├── B: Evacuate + investigate + restore training [best] ✓ 8.1-8.7 → sets: duty_of_care_upheld, misconduct_addressed_formally
  ├── C: Evacuate only; discrimination informal             → sets: duty_of_care_upheld
  └── D: Restructure HR systems [best+ all 8] ✓            → sets: duty_of_care_upheld, misconduct_addressed_formally
        ↓
Chapter 9 — CHS 9 (Ethical Resource Management)
  ├── A: Return funds; ignore COI; approve visibility campaign (fails 9.3-9.6)
  ├── B: Negotiate reallocation + investigate + refuse [best] ✓ 9.1-9.6 → sets: donor_transparent_engagement, community_resources_transferred
  ├── C: Reallocate without approval + investigate (fails 9.2) → sets: community_resources_transferred
  └── D: Return funds; ignore COI; approve campaign (fails 9.3-9.5)
        ↓
Epilogue + Score-Based Ending
  ├── 🏆 Transformative Leader   (46–56 pts)
  ├── 🌟 Committed Practitioner  (32–45 pts)
  ├── 📚 Struggling Responder    (18–31 pts)
  └── 🌱 Crisis Mode              (0–17 pts)
```

---

## Scoring System

**Four dimensions**, each starting at 0:

| Dimension | What It Measures | Key CHS Commitments |
|-----------|-----------------|---------------------|
| **Community Trust** | Whether communities feel heard, respected, and engaged | 1, 2, 5, 6, 7 |
| **Staff Wellbeing** | Safety, morale, professional support, and fair treatment of staff | 8 |
| **Program Quality** | Effectiveness, relevance, technical quality, and community impact | 2, 3, 4, 6, 7 |
| **Accountability & Ethics** | Transparency, integrity, complaint handling, and resource stewardship | 4, 5, 8, 9 |

- Scores accumulate across all nine decisions
- Best option per decision typically gives **+2 per dimension** (total ~+7 per decision)
- Poor choices give **−1 or −2** per relevant dimension
- Maximum possible total: **~56**

**Ending thresholds:**

| Ending | Score Range | Meaning |
|--------|------------|---------|
| 🏆 Transformative Leader | 46–56 | All or most CHS commitments upheld in practice |
| 🌟 Committed Practitioner | 32–45 | Strong intent; some gaps under pressure |
| 📚 Struggling Responder | 18–31 | Inconsistent; operational pressure frequently won |
| 🌱 Crisis Mode | 0–17 | Multiple significant failures; urgent learning needed |

---

## Context Flags System

Early choices set **context flags** that cascade forward, changing the situation you face
in later decisions. The game engine tracks these throughout the session.

| Flag | Set By | Effect on Later Decisions |
|------|--------|--------------------------|
| `inclusive_assessment` | D1 option B | Communities expect continued participation; richer data for D2 |
| `community_informed` | D1 options B or D | Communities know their rights; more likely to report concerns in D5 |
| `local_knowledge_built_in` | D2 option B | Programme design is context-grounded; aids D7 adaptation |
| `referral_pathways_active` | D2 options B or C | Cluster relationships exist; easier coordination in D6 |
| `local_ownership_by_design` | D3 options B or D | KCV in governance; strengthens D6 partnership |
| `drr_integrated` | D3 options C or D | Community early warning active when second storm arrives |
| `protection_framework_active` | D4 option B | PSEA pathways ready; strengthens D5 complaint handling |
| `data_protection_in_place` | D4 options B or C | Data managed ethically; D9 consent issues easier to address |
| `complaints_trusted` | D5 options B or D | Feedback data is richer for D7; community engagement higher |
| `survivor_centred_process` | D5 options B or D | Staff understand conduct expectations going into D8 |
| `cluster_coordination_active` | D6 option B | Data and geography resolved; D7 learning reaches wider audience |
| `partner_quality_supported` | D6 options B or C | KCV programme quality strengthens; D9 handover smoother |
| `gender_data_actioned` | D7 option B | Women's outcomes improve; D9 impact data is stronger |
| `learning_shared_externally` | D7 options B or C | Sector learns from Kailani; HopeForward's reputation strengthens |
| `duty_of_care_upheld` | D8 options B or D | Staff retention high; national staff advisory input improves D9 |
| `misconduct_addressed_formally` | D8 options B or D | Clear conduct culture; reduces D9 ethical risk |
| `donor_transparent_engagement` | D9 option B | Donor trusts future flexible allocations |
| `community_resources_transferred` | D9 options B or C | Exit strengthens local actors |

---

## Key Characters

| Character | Role | Key Decisions |
|-----------|------|--------------|
| **Maya Chen** | Player — Country Director, HopeForward | All |
| **Sione Taufa** | National Programme Officer | 1, 2, 3, 8 |
| **Filomena Vaka** | Executive Director, KCV (local partner) | 1, 3, 5, 6, 9 |
| **Leila Hassan** | Field Coordinator, Northern Coast | 8 |
| **Carlos Reyes** | Logistics Coordinator | 2, 3, 4, 7 |
| **Amara Diallo** | M&E Officer | 5, 7 |
| **Toma Faleolo** | Finance & Compliance Manager | 9 |
| **Dr. Ana Tuivaga** | Director, Kailani Aid Network (KAN) | 6 |
| **Sina Talagi** | Community member, Manu Camp (complainant) | 5 |

---

## All 50 CHS Sub-Requirements — Coverage Map

| Commitment | Requirements | Primarily Addressed |
|-----------|-------------|-------------------|
| CHS 1 | 1.1, 1.2, 1.3, 1.4, 1.5, 1.6 | Decision 1 |
| CHS 2 | 2.1, 2.2, 2.3, 2.4, 2.5, 2.6 | Decision 2 |
| CHS 3 | 3.1, 3.2, 3.3, 3.4, 3.5 | Decision 3 |
| CHS 4 | 4.1, 4.2, 4.3, 4.4, 4.5 | Decision 4 |
| CHS 5 | 5.1, 5.2, 5.3, 5.4, 5.5, 5.6 | Decision 5 |
| CHS 6 | 6.1, 6.2, 6.3, 6.4 | Decision 6 |
| CHS 7 | 7.1, 7.2, 7.3, 7.4, 7.5 | Decision 7 |
| CHS 8 | 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7 | Decision 8 |
| CHS 9 | 9.1, 9.2, 9.3, 9.4, 9.5, 9.6 | Decision 9 |

Every option in every decision specifies which requirements it **addresses** and which it **misses** — making the learning explicit and traceable.

---

## Current Status: Skeleton

The game structure is complete. All nine decisions, 36 consequence scenes, prologue, epilogue, and four endings are defined with:

- ✅ Scene IDs and complete branching structure (47 scenes)
- ✅ All 9 CHS commitments explicitly addressed (one decision per commitment)
- ✅ All 50 CHS sub-requirements mapped per option (addressed / missed)
- ✅ 4 options per decision (36 consequence scenes total)
- ✅ Score effects per option across 4 dimensions
- ✅ Context flags system (18 flags with cascading effects)
- ✅ `requirements_addressed` and `requirements_missed` per option
- ✅ `delayed_impact` field per option (immediate + long-term consequences)
- ✅ Learning notes and CHS quotes per consequence
- ✅ All links validated ✓, JSON validated ✓

**What still needs expansion** (marked `"status": "placeholder"` in JSON):
- Full narrative text per scene (~120–200 words each)
- Character dialogue and emotional detail
- AI image generation prompts
- Context flag text in situation summaries
- Ending narratives with character call-backs
- Game engine implementation notes

Use the 12 development prompts below to expand iteratively.

---

## Development Prompts

Use these prompts in sequence with an AI assistant (GitHub Copilot, ChatGPT, Claude) to
expand the skeleton into a complete, production-ready game data file.

---

### Prompt 1 — Expand the Prologue and Epilogue *(CHS framing)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand the `prologue` and `epilogue` scenes
> into full narrative text. The prologue (~200 words) should place Maya in Kailani with vivid
> sensory detail, introduce Sione, and create a sense of stakes and complexity. The epilogue
> (~200 words) should be reflective and personal — calling back to specific decisions and
> characters from the game. Also replace PLACEHOLDER `image_prompt` fields for both scenes
> with complete AI illustration prompts (flat digital illustration style, Pacific island
> humanitarian setting, consistent character descriptions). Remove `status` fields when done.

---

### Prompt 2 — Expand Decision 1 — CHS 1: Participation & Rights *(1.1–1.6)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_1` and its four consequence
> scenes (`scene_1A`, `scene_1B`, `scene_1C`, `scene_1D`). For `decision_1`: write a full
> scene narrative (~150 words) with dialogue from Sione, Filomena (KCV), and the government
> official. Show Maya's internal conflict between speed and inclusion. For each consequence
> scene: write a full narrative (~120 words) with specific character reactions, delayed impact
> detail, and a complete `image_prompt`. Requirements 1.1–1.6 should each be visibly addressed
> or missed in the relevant options. Remove PLACEHOLDER and `status` fields. Keep JSON exactly.

---

### Prompt 3 — Expand Decision 2 — CHS 2: Timely & Effective Support *(2.1–2.6)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_2` and its four consequence
> scenes (`scene_2A`, `scene_2B`, `scene_2C`, `scene_2D`). Show the `context_flag_effects`
> in the scene narrative — if `inclusive_assessment` was set, Sione has richer data. Include
> dialogue from Carlos (logistics pressure) and the donor representative (compliance pressure).
> For each consequence: ~120 words with specific Sphere standard references, delayed impacts,
> and `image_prompts`. Requirements 2.1–2.6 should each be visibly addressed or missed.
> Remove PLACEHOLDER and `status` fields. Keep JSON exactly.

---

### Prompt 4 — Expand Decision 3 — CHS 3: Resilience & Local Ownership *(3.1–3.5)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_3` and its four consequence
> scenes (`scene_3A`, `scene_3B`, `scene_3C`, `scene_3D`). Show the HQ direct delivery
> pressure, Filomena's co-governance proposal, and Sione's traditional knowledge offer.
> Reference the approaching tropical storm as a real risk that gives DRR integration urgency.
> For each consequence: ~120 words with context-flag effects (especially for options B and D
> which set `local_ownership_by_design` and `drr_integrated`), delayed impacts, and `image_prompts`.
> Requirements 3.1–3.5 addressed or missed per option. Remove PLACEHOLDER and `status` fields.

---

### Prompt 5 — Expand Decision 4 — CHS 4: Do No Harm & Protection *(4.1–4.5)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_4` and its four consequence
> scenes (`scene_4A`, `scene_4B`, `scene_4C`, `scene_4D`). Show the four simultaneous risks
> as concrete, urgent details — not abstractions. Reference the Tevita Village coercion signal,
> the specific Google Drive data exposure, the truck idling near children, and the absent PSEA
> framework. Show Carlos's push for scale-up on schedule. For each consequence: ~120 words with
> specific harm descriptions, community member voices, and `image_prompts`. All five requirements
> (4.1–4.5) addressed or missed per option. Remove PLACEHOLDER and `status` fields.

---

### Prompt 6 — Expand Decision 5 — CHS 5: Complaints & Feedback *(5.1–5.6)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_5` and its four consequence
> scenes (`scene_5A`, `scene_5B`, `scene_5C`, `scene_5D`). Give Sina Talagi a specific,
> dignified voice in the scene narrative. Show the 12% complaints awareness finding as a
> concrete management failure. Reference how the `protection_framework_active` flag (if set in
> Decision 4) changes what systems are available. For each consequence: ~120 words with
> Sina's experience at the centre (survivor-centred), staff reaction, community perception,
> and `image_prompts`. All six requirements (5.1–5.6) visible. Remove PLACEHOLDER and `status`.

---

### Prompt 7 — Expand Decision 6 — CHS 6: Coordination & Complementarity *(6.1–6.4)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_6` and its four consequence
> scenes (`scene_6A`, `scene_6B`, `scene_6C`, `scene_6D`). Show the concrete impacts of
> the geographic duplication in the two villages. Give Dr. Ana Tuivaga (KAN) a specific,
> compelling voice — her exclusion is the human face of CHS 6 failure. Reference how
> `local_ownership_by_design` and `referral_pathways_active` flags (if set) change the dynamics.
> For each consequence: ~120 words with inter-agency tension, community confusion, and
> `image_prompts`. All four requirements (6.1–6.4) visible. Remove PLACEHOLDER and `status`.

---

### Prompt 8 — Expand Decision 7 — CHS 7: Learning & Improvement *(7.1–7.5)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_7` and its four consequence
> scenes (`scene_7A`, `scene_7B`, `scene_7C`, `scene_7D`). Give Amara a specific, confident
> voice in presenting the monitoring findings. Show Carlos's "preliminary and contestable"
> pushback in dialogue. Reference the two specific community members whose feedback was not
> acknowledged. Show how `complaints_trusted` and `inclusive_assessment` flags make the data
> richer. For each consequence: ~120 words with specific outcome data, community voice, and
> `image_prompts`. All five requirements (7.1–7.5) visible. Remove PLACEHOLDER and `status`.

---

### Prompt 9 — Expand Decision 8 — CHS 8: Staff Competence & Wellbeing *(8.1–8.7)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_8` and its four consequence
> scenes (`scene_8A`, `scene_8B`, `scene_8C`, `scene_8D`). Give Leila's distress a
> specific, human voice through her WhatsApp messages. Give Tevi's discrimination experience
> careful, dignified framing. Show the training budget reallocation as Carlos's pragmatic
> decision that ignored a contract commitment. Reference how `duty_of_care_upheld` and
> `protection_framework_active` flags (if set) change staff expectations. For each consequence:
> ~120 words with specific staff experiences, HR outcomes, and `image_prompts`. All seven
> requirements (8.1–8.7) visible. Remove PLACEHOLDER and `status`.

---

### Prompt 10 — Expand Decision 9 — CHS 9: Ethical Resource Management *(9.1–9.6)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand `decision_9` and its four consequence
> scenes (`scene_9A`, `scene_9B`, `scene_9C`, `scene_9D`). Give Toma a specific, careful
> voice — he is a principled professional who is also professionally vulnerable. Show the
> HQ visibility campaign request as a real institutional pressure, not an obvious wrongdoing.
> Reference how `donor_transparent_engagement` and `community_informed` flags (if set) change
> what is possible. For each consequence: ~120 words with specific financial, ethical, and
> community outcomes, and `image_prompts`. All six requirements (9.1–9.6) visible.
> Remove PLACEHOLDER and `status`.

---

### Prompt 11 — Write the Four Endings *(all 9 commitments, synthesis)*

> Using the skeleton in `CHS_2024_game_v2.json`, expand all four endings: `ending_transformative`,
> `ending_committed`, `ending_struggling`, and `ending_crisis`. For each ending: write a full
> `narrative_summary` (~150 words) that references specific decisions, characters, and outcomes
> from the game — reflecting what Maya did well or where she fell short across all nine CHS
> commitments. Reference the context flags the player may have set. The tone should be
> reflective, human, and educational — not punitive. Write `badge_image_prompts` that
> visually represent the journey. Keep the `reflection_questions` and `chs_requirements` fields
> exactly as-is. Remove PLACEHOLDER and `status`.

---

### Prompt 12 — Expand Characters, UI Design, and Game Engine Guidance

> Using the skeleton in `CHS_2024_game_v2.json`, expand the `supplementary_assets` section:
> Write backstory paragraphs (~80 words each) for all nine key characters (Maya, Sione,
> Filomena, Leila, Carlos, Amara, Toma, Dr. Ana Tuivaga, Sina Talagi). Replace all
> `image_prompt` PLACEHOLDERs with complete, consistent AI illustration prompts (flat
> digital illustration style, Pacific island setting, consistent palette). For `ui_design_prompts`:
> write production-ready prompts for all six screen types (main menu, score dashboard,
> decision screen, consequence screen, chapter transition card, ending screen). Add a
> `game_engine_notes` section with guidance on implementing the `context_flags_system` —
> specifically which flags affect which later scene narratives and how the UI should surface them.

---

## Comparison: Version 1 vs Version 2

| Feature | v1: Field Ready | v2: Kailani Rising (Full Standard) |
|---------|----------------|-------------------|
| Structure | Linear (9 chapters, sequential) | Branching (9 chapters, cascading flags) |
| Options per decision | 3 (one best, two wrong) | 4 (nuanced trade-offs, rarely simple) |
| CHS commitments | All 9 (one per chapter, broadly) | All 9 (one per chapter, all sub-requirements mapped) |
| Sub-requirements covered | Illustrative | All 50, explicitly per option |
| Scoring | Single score (0–100) | 4 dimensions (cumulative across 9 decisions) |
| Consequences | Learning feedback | Immediate + delayed impact, character-specific |
| Cascading effects | None | 18 context flags shape later decision contexts |
| Endings | Score-tiered epilogue | 4 distinct narrative endings with flag-aware reflection |
| Characters | Alex (field coordinator) | Maya + 8 named supporting characters |
| Setting | Verdania (floods) | Kailani (cyclone, Pacific) |
| Estimated duration | 12 minutes | 45 minutes |
| File size | ~60 KB | ~176 KB |

---

## CHS Reference

Source: [Core Humanitarian Standard on Quality and Accountability, 2024](CHS_2024.json)

All 9 commitments. All 50 sub-requirements. Each one explicitly tested in this game.
