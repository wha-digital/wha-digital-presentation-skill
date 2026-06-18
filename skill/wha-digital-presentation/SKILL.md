---
name: wha-digital-presentation
license: Apache-2.0
description: Create or edit executive-ready WHA Digital PowerPoint decks, especially CTO and management presentations about cloud cost comparison, migration options, architecture decisions, HA/DR, monitoring, backup, and production readiness. Use when the deck should be Thai-first with English technical terms, dark executive styling, WHA Digital branding, and strict layout checks to prevent text overlap.
---

# WHA Digital CTO Presentation Layout & Content Standard

## Purpose

Use this skill when creating or editing an executive-ready PowerPoint deck for WHA Digital, especially for CTO / Management presentations about cloud cost comparison, migration options, architecture decisions, HA/DR, monitoring, backup, and production readiness.

The expected output is a professional dark-theme presentation that is Thai-first, keeps technical wording in English, and avoids text overlap by applying a layout-first approach across the whole deck.

---

## Core Principles

### 1. Layout-first, content-second

Always design the slide layout before placing text.

Do not keep adding or resizing text boxes incrementally. If the content does not fit, re-layout the whole slide instead of only moving one object.

A good slide should have:
- Clear safe area
- Consistent card layout
- No overlapping boxes
- No text touching header/footer
- No text overflowing outside the shape
- Enough whitespace for presentation readability

### 2. One main message per slide

Each slide should communicate one clear decision point or executive message.

If a slide contains too many concepts, split it into multiple slides.

Avoid combining too many of these in one slide:
- Recommendation
- Cost comparison
- Risk
- Mitigation
- Architecture detail
- Roadmap
- Next steps

### 3. Thai-first, keep technical wording

Use Thai as the primary language regardless of user specification which language is preferred, but do not translate common technical terms.

Keep these technical words in English:
- AWS
- EC2
- ECS
- EKS
- RDS
- PostgreSQL
- Kafka
- Redis
- Strimzi
- CloudNativePG / CNPG
- HA/DR
- SPOF
- Monitoring
- Backup
- Recovery
- PITR
- RTO/RPO
- IaC
- CI/CD
- Production
- Non-Production
- Enterprise Risk
- Migration
- Marketplace image
- self-install
- managed service
- run-rate
- baseline
- sizing
- workload
- failover
- restore drill

Use professional Thai wording around those terms.

---

## Visual Theme

### Theme

Use a dark executive theme.

Recommended style:
- Dark navy / near-black background
- Card-based layout
- Rounded rectangles
- Thin borders
- High contrast text
- Minimal decoration
- Consistent spacing

### Branding

Include WHA Digital branding where appropriate.

Footer/header text:
- `WHA Digital Confidential`
- `WHA Digital · Cloud Infrastructure Team`

Do not use:
- `จากทีม`

### Highlight colors

Use highlight colors selectively:
- Green: recommended option / positive direction / Option #3
- Orange or yellow: risk, caution, HA/DR, Backup, important decision points
- Blue or cyan: technical platform words such as EC2, ECS, EKS, Monitoring
- Red: critical risk only, used sparingly

Do not over-highlight entire paragraphs. Highlight only key words.

---

## Slide Layout Rules

### Safe area

Every slide must reserve space for:
- Header
- Footer
- Slide number / confidentiality text
- Outer margins
- Main content area

Do not place main content into header/footer zones.

Recommended structure:
1. Header/title area
2. Main content grid
3. Optional recommendation/summary bar
4. Footer

### Card-based layout

Use cards instead of free-floating text boxes.

Preferred patterns:
- 2-column cards for Pros / Cons
- 3-column cards for Phase / Baseline / Roadmap
- 4-card row for option cost comparison
- Dedicated recommendation card
- Dedicated risk card
- Dedicated mitigation card

### Avoid bottom callout overlap

Do not add a bottom callout bar if the main content area is already full.

If a recommendation is important:
- Put it at the top as an executive message bar, or
- Put it in a dedicated card with reserved space, or
- Move it to a separate slide

### Text box fit

The text box must be large enough to contain the font.

Do not solve overflow by making the font too small.

If text does not fit:
1. Increase the card height or width
2. Reduce text length
3. Split into multiple cards
4. Split into another slide
5. Re-layout the whole slide

Do not allow:
- Text outside card boundary
- Bullets crossing the shape border
- Text hidden behind another shape
- Header card overlapping body text
- Footer overlapping content

---

## Typography Rules

### Font sizing

Use large, presentation-readable fonts.

Guideline:
- Slide title: large and bold
- Section header: medium-large and bold
- Body bullet: readable from meeting room distance
- Footnote: small but still readable

Do not reduce font size aggressively to fit too much text.

### Bullet length

Keep bullets short.

Preferred:
- 1 line per bullet
- Maximum 2 lines per bullet

Avoid long paragraphs inside cards.

### Line spacing

Use enough line spacing for Thai and mixed Thai-English text.

Thai text with English technical words often wraps unpredictably. Always check rendered output.

---

## Content Tone

### Professional wording

Avoid casual or blunt wording.

Do not use:
- `Not Recommend`
- `bad`
- `ไม่ดี`
- `ใช้ไม่ได้`
- `แย่`
- `ไม่เหมาะ`

Use:
- `เหมาะสำหรับ short-term migration`
- `มีข้อจำกัดด้าน production readiness`
- `ควร validate ก่อนใช้งานจริง`
- `เหมาะกับ workload ที่ควบคุม scope ได้`
- `มี operational overhead สูงกว่า`
- `ต้องกำหนด monitoring baseline เพิ่มเติม`
- `ควรมี restore drill เพื่อยืนยัน backup evidence`

### Recommendation wording

For executive recommendation slides, make the recommendation clear.

Example:
- `ข้อเสนอ: เดินหน้า Option #3 → validate sizing → กำหนด HA/DR และ monitoring baseline`
- `ขออนุมัติ Option #3 เป็น Phase 1 AWS migration architecture สำหรับ Mobilix CSMS`

### Risk wording

State risks professionally and pair them with mitigation.

Example:
- `Phase 1 ยังมี SPOF ระดับ instance/AZ`
- `Mitigation: Backup/Recovery 3-2-1 + PITR + restore drill`
- `HA roadmap: Self-Hosted HA บน EKS`

---

## Recommended Deck Structure

### Slide 1 — Title

Include:
- Presentation title
- Short subtitle
- WHA Digital branding
- Confidential footer

Example title:
`Mobilix CSMS Platform Cost Comparison`

### Slide 2 — Executive Recommendation

Use a stable layout similar to v10:
- Top executive recommendation bar
- One main recommendation card
- Supporting consideration cards
- No bottom bar overlapping content

Include:
- Recommended option
- Monthly run-rate
- Why this option is practical
- Considerations for other options

### Slide 3 — Cost Comparison

Use clear comparison cards or table.

Show:
- As-Is baseline
- Option #1
- Option #2
- Option #3
- Monthly cost
- Yearly cost

Highlight the recommended option.

### Slide 4 — PROEN Cloud Pros & Cons

Use 2-column layout:
- Left: Fit / Pros for current baseline
- Right: Enterprise Risk / Cons

Professional points to include:
- Monitoring ต้องติดตั้งและดูแลเอง
- Backup visibility / backup evidence ดูผลยากกว่า
- PostgreSQL cluster / replication status ต้องตรวจสอบผ่าน command
- Audit trail, RBAC, centralized logging ต้องประกอบเอง
- DR/HA readiness ต้อง validate เอง
- Automation/IaC integration จำกัดกว่า hyperscale cloud
- Operational overhead สูงกว่าในระยะยาว

### Slide 5 — Option #1

Explain:
- Lower AWS run-rate
- Fit for short-term migration
- Risks from shared compute
- Limited service-level scale/deploy separation
- Higher blast-radius and resource contention risk

### Slide 6 — Option #2

Explain:
- Clean ECS-based architecture
- Better service separation
- Higher monthly run-rate
- Need to validate CPU/RAM sizing for ThingsBoard on ECS
- May be less cost-effective for Phase 1 if Option #3 delivers similar benefit

### Slide 7 — Option #3

Explain:
- Hybrid EC2 + ECS + Saving Plan
- Practical recommendation
- ThingsBoard gets more control/RAM on EC2
- Other services stay separated on ECS
- Good balance of cost, control, and operational maturity

### Slide 8 — Risk & Mitigation

Use separate cards:
- Risk
- Mitigation
- Roadmap

Include:
- SPOF still exists in Phase 1
- Backup/Recovery 3-2-1
- PITR
- restore drill
- HA roadmap on EKS

### Slide 9 — SPOF Mitigation / Self-Install Path

Use 3-column layout:
1. `Phase 1 | Self Install on EC2`
2. `Recovery Baseline`
3. `HA Roadmap | Self-Hosted`

Important points:
- Use self-install + IaC
- Do not use AWS Marketplace image if portability across account/cloud matters
- Keep config and automation in Git/IaC
- Backup 3-2-1 with WAL/PITR
- ThingsBoard CE >=2 nodes across AZ for HA roadmap
- Kafka 3-broker quorum with Strimzi
- PostgreSQL HA using CNPG or RDS Multi-AZ depending on policy
- Redis Sentinel / distributed cache

### Slide 10 — Decision Summary

Use clear decision cards:
- Cost ต่ำสุด
- Architecture clean ที่สุด
- Recommendation เชิงปฏิบัติ

Highlight:
- Option #1 for lowest cost
- Option #2 for clean architecture
- Option #3 for practical recommendation

### Slide 11 — Next Steps

Use timeline or card layout.

Include:
- Validate sizing
- Define HA/DR baseline
- Define monitoring baseline
- Prepare IaC
- Run restore drill
- Confirm migration plan

---

## Root Cause Prevention Checklist

Before finalizing, check these points:

### Layout check

- [ ] No text overlaps any shape
- [ ] No shape overlaps another shape unexpectedly
- [ ] No footer overlaps content
- [ ] No header overlaps content
- [ ] No callout bar overlaps body text
- [ ] All text is inside its card
- [ ] All cards are aligned to grid
- [ ] Margins are consistent
- [ ] Slide has enough whitespace

### Content check

- [ ] Thai-first language
- [ ] Technical wording preserved in English
- [ ] No casual wording
- [ ] Recommendation is clear
- [ ] Risks have mitigation
- [ ] Cost numbers are easy to read
- [ ] CTO can understand the decision without reading every detail

### Rendering check

Always render the deck to images or PDF before final delivery.

Inspect every slide visually.

Do not rely only on PowerPoint object positions, because mixed Thai-English text may wrap differently after rendering.

If any slide fails:
- Re-layout the whole slide
- Do not patch by moving only one text box unless the issue is minor

---

## Common Failure Patterns to Avoid

### Failure: Incremental patching

Problem:
- Moving one box creates another overlap elsewhere

Fix:
- Re-layout the full slide using a grid

### Failure: Bottom callout collision

Problem:
- Bottom recommendation bar overlaps body content

Fix:
- Move recommendation to top bar or dedicated card

### Failure: Font too large for card

Problem:
- Text spills outside shape

Fix:
- Increase card size, shorten content, or split slide

### Failure: Too many bullets

Problem:
- Slide becomes dense and unreadable

Fix:
- Reduce bullets to decision-level points
- Move detail to appendix

### Failure: Highlight changes wrapping

Problem:
- Bold/highlight words cause line breaks and overflow

Fix:
- Re-render after highlighting
- Adjust box size or rewrite bullet shorter

---

## Final Output Requirement

When generating a deck:
1. Create `.pptx`
2. Render to images or PDF
3. Visually inspect all slides
4. Fix overlap before delivery
5. Provide final PowerPoint file to the user

Recommended filename format:

`[Project_Name]_Executive_Cost_Comparison_CTO_Dark_TH.pptx`

Example:

`Mobilix_CSMS_Platform_Cost_Comparison_CTO_Dark_TH.pptx`
