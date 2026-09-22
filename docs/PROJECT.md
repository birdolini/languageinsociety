# Project brief — Language in Society study site

## Product intent
Create a friendly, visually polished study companion for **ENGL3328: Language in Society**. It should turn the course into an easy-to-navigate learning path: students can see the course themes, revisit key ideas, and eventually reach focused revision and project-support material.

The product is a study aid, not an official course portal, a replacement for Moodle, or a place to submit research data.

## Constraints
- Static HTML/CSS/JavaScript; publishable on GitHub Pages.
- Clean, calm, and cute rather than corporate or cluttered.
- **iPad-first:** design and validate the primary layout for 768–1024px viewports (portrait and landscape), then adapt it gracefully to phones and desktops.
- Responsive, accessible, and fast.
- Provide an accessible light/dark theme toggle that respects the visitor's system preference and remembers an explicit choice locally.
- Original summaries and learning aids only. The handouts and readings remain private reference material.
- Do not inspect or reuse `old_site_readonly/` without explicit user permission.

## What the handouts establish
The course connects language with social life, from variation in everyday speech to multilingualism, identity, Arabic/Omani sociolinguistics, and digital language use. Its learning outcomes emphasize both concept knowledge and the ability to identify variables, examine patterns, and conduct a small sociolinguistic study.

The course research project (15%) is a group study of an **Omani variety**. Students select a dialect, define one or two linguistic variables, design collection methods, gather and analyze data, interpret results through course concepts, and produce a scientific poster. Project instructions call for at least eight interviewed speakers, stratified by age and gender; the supplied spreadsheet demonstrates count/percentage comparisons for the variable `(q)` by gender and age. The site may later explain this workflow, but must not collect participant data or manufacture results.

The supplied 2026 course outline lists the project submission/presentation on **4 May 2026**. Treat dates as term-specific and verify before placing them in the public UI.

## Course content map
Planned content should follow these connected study areas:

1. **Foundations** — sociolinguistics, language-and-society relationship, linguistic variables, variants, speech communities, and social factors.
2. **Research methods** — fieldwork, sampling, observer effects, interviews/rapid anonymous methods, dependent and independent variables, counts, percentages, patterns, and ethical reporting.
3. **Regional and social dialects** — accents, dialects, social stratification, prestige, and stigma.
4. **Gender and language** — socially patterned variation and careful interpretation of gender-based claims.
5. **Age and change** — childhood, adolescence, adulthood, old age, apparent time, and real time.
6. **Style and identity** — style-shifting, attention to speech, audience design, accommodation, and Omani migration/style-shifting examples.
7. **Status, class, and networks** — class/status, dense and multiplex networks, and community-level variation.
8. **Language contact** — bilingualism/multilingualism, language choice, code-switching, code-mixing, maintenance, shift, planning, pidgins, creoles, and language death.
9. **Attitudes, identity, and globalization** — language attitudes, social/personal identity, English as a global language, diversity, and power.
10. **Arabic and Omani sociolinguistics** — diglossia, standard/prestige questions, dialect variation, and locally grounded research.
11. **Internet sociolinguistics** — social media, digital identities, and changing linguistic forms/functions online.
12. **Study activities** — concept mapping, data interpretation, and applying concepts to examples.

## Current milestone: homepage + Foundations + Research Methods + Regional and Social Dialects + Gender, Age & Change + Style & Identity

### Goal
Keep the homepage and the first five lessons: Foundations, Research Methods, Regional and Social Dialects, Gender, Age & Change, and Style & Identity. Audit each against its source handouts before calling it complete. Use simple analogies only where they clarify a concept; each lesson needs natural Arabic explanations and its own layout. The remaining homepage topics and Project Notes can have clearly marked WIP pages.

### Required content
- Clear site name and a short description of the course/study purpose.
- A welcoming hero with one obvious primary action (for example, “Explore topics”).
- A compact, scannable overview of the main study areas above; it may use non-functional cards/anchors until lesson pages exist.
- A small, natural Arabic study-note line in the homepage hero.
- A teacher-like study-guidance section with practical revision steps, not promotional study copy.
- A concise note that this is an independent study companion and that course handouts remain the authoritative source.
- Footer with an unobtrusive course/site label.
- A working link from the Foundations topic tile to `lesson-01-foundations.html`.

### Design direction
- Use a warm, light palette with playful accents and a small, intentional use of Apple-style emoji images; keep body text highly legible.
- Give sections generous whitespace, clear hierarchy, soft shapes, and restrained motion.
- Use a distinctive but readable display treatment for headings and a practical text face for body copy. Avoid a dependency on remote fonts where a good system fallback works.
- Do not use generic stock imagery. Small original CSS illustrations, icons, or abstract language-inspired marks are acceptable.
- Start with a spacious, touch-friendly iPad composition: comfortable tap targets (minimum 44×44 CSS px), no hover-only interactions, and topic cards that are easy to scan and tap.
- Respect `prefers-reduced-motion`; preserve visible keyboard focus; reflow cleanly at narrow phone widths and use available desktop space without oversized line lengths.

### Acceptance criteria
- `index.html` opens directly with no build step and no console errors.
- The primary experience is polished at iPad portrait and landscape widths (768–1024px), and remains usable from 320px-wide mobile screens through desktop widths.
- Navigation, theme toggle, and primary action are keyboard reachable and have visible focus.
- No external framework, API, login, or tracking is required.
- Copy is accurate to the course scope and does not present handout text as original website content.

### Foundations topic-page acceptance criteria
- `lesson-01-foundations.html` gives a short original introduction to sociolinguistics, language variation, linguistic variables/variants, speech communities, and social factors.
- It uses the homepage visual system while having its own memorable reading layout.
- It includes a small, non-graded reflection activity that does not store or submit answers.
- It links back to the homepage and does not imply that other topic pages already exist.
- It includes readable English and Arabic explanations, each written naturally for its language rather than as word-for-word translation. Arabic content uses a dedicated Arabic typeface and feminine second-person forms when addressing the student. Carefully frame Omani-Arabic examples; do not flatten Omani Arabic into a generic Gulf dialect or make unsupported claims about every Omani speaker.
- It includes additional guided segments on speech communities, evidence, and common mistakes, so the page supports understanding rather than only definition memorisation.
- The footer surprise is a self-contained romantic vignette: a slowly growing luminous heart, a timed starlight burst, red/white Apple heart particles, and typed affection with changing verbs. Keep a visible close control, restore focus, and offer a static reduced-motion version.
- The site footer may include one optional, isolated visual surprise. It must not store data, block reading, or be required for study; its HTML, CSS, and JavaScript must be removable as a small self-contained feature.

### Research Methods acceptance criteria
- `lesson-02-research-methods.html` is reachable from the homepage and Foundations, with return navigation.
- Paraphrase `Handout2-Sociolinguistic Research Methods.docx.pdf`; distinguish sampling from data-collection methods.
- Use a hypothetical question, not invented speaker data or findings. Analogies must be explicitly distinguished from research evidence.
- Keep explanations short, bilingual, and useful without JavaScript. Native disclosures may hold method comparisons; no quiz or data collection.
- Verify phone/iPad layouts, light/charcoal themes, keyboard access, and relative links.

## Explicitly out of scope for this milestone
- Full lesson/article pages beyond Foundations, Research Methods, and Regional and Social Dialects, and a full glossary. WIP pages are permitted only as honest placeholders.
- Quizzes, progress tracking, local storage, accounts, or grading.
- Project-data forms, recording uploads, spreadsheets, or poster generation.
- A public calendar, instructor contact information, or hard-coded deadline notices.
- Migrating or redesigning the old site.

## Proposed future sequence
1. Homepage, visual foundations, and one Foundations topic-page pattern.
2. Topic index and additional lesson pages using the established pattern.
3. Original concept summaries, glossary, and small self-check activities.
4. Research-project guide with ethical, non-collecting templates and data-literacy examples.
5. Deployment polish and accessibility review.

## Source inventory consulted
- Course outline (scope, outcomes, schedule, assessment)
- Project assignment and submission instructions
- Project analysis workbook
- Introductory, methods, dialect, gender, age, style, class, network, language-contact, identity/attitudes, Arabic sociolinguistics, and activity handouts
- Supporting readings on fieldwork, social stratification, variation acquisition, gender, social networks, multilingualism, attitudes, Arabic prestige, regional/social dialects, and style

No files in `old_site_readonly/` were consulted.
