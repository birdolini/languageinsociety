# Week alignment plan — Fall 2026

## Purpose
Reorganise the public study site around the **Fall 2026 ENGL3328 weekly schedule**, while preserving the finished lesson writing and each lesson’s distinct visual identity. The homepage should answer one immediate question: **“What are we studying this week?”**

This is a navigation and information-architecture change, not a rewrite of the course outline or a replacement for Moodle. The site will use short original topic labels only. It will not publish the outline document, full reading list, staff details, policies, or fixed assessment dates.

## Source and boundaries
- **Schedule source:** `docs/FL26-ENGL3328_LiS_New course outline.docx` (private reference; do not publish or commit).
- **Student-facing source of truth:** Moodle and the instructor’s announcements.
- **Existing lesson prose:** retain unless a small week label, anchor, or navigation adjustment is needed for clarity.
- **No new data collection, quizzes, accounts, tracking, or calendar system.**
- **No use of `old_site_readonly/`.**

## Course map to implement

| Week | Outline topic | Public card/action | Existing destination |
|---|---|---|---|
| 1 | What is sociolinguistics? | Study Week 1 | Foundations introduction |
| 2 | Social factors and dimensions affecting variation | Study Week 2 | Foundations social factors section |
| 3 | Sociolinguistic research methods | Study Week 3 | Research Methods |
| 4 | Regional & social dialects; language variation & gender | Two topic links under one Week 4 card | Dialects section; Gender section |
| 5 | Age: acquisition of variation in childhood, adolescence, adulthood | Study Week 5 | Gender, Age & Change life-stages section |
| 6 | Age continued: real time & apparent time | Study Week 6 | Gender, Age & Change time section |
| 7 | Style: attention to speech, audience design, accommodation, Omani Arabic | Study Week 7 | Style & Identity |
| 8 | Test I | Assessment milestone only | No lesson page |
| 9 | Language, status & social class | Study Week 9 | Dialects, Class & Networks class/status section |
| 10 | Language & social networks | Study Week 10 | Dialects, Class & Networks networks section |
| 11 | Globalization and diversity: multilingualism, choice, attitudes, identity, global English | Week 11 — in progress | Lesson 6 WIP |
| 12 | Test II | Assessment milestone only | No lesson page |
| 13 | Arabic sociolinguistics | Week 13 — in progress | Lesson 7 WIP |
| 14 | Internet sociolinguistics; project submission/presentation | Two linked actions under one Week 14 card | Lesson 8 WIP; Project Notes WIP |
| 15 | Revision | Revision milestone | No new content page |
| 16 | Final exam | Final milestone | No new content page |

## Homepage design direction

### Course-week path
- Replace the current lesson-number topic wall with a chronological **Course weeks** section.
- Use an iPad-first two-column grid: a slim left-side week marker / vertical path and a wide, touch-friendly card body. At 768–1024px, cards should remain easy to scan without becoming a dense 16-column calendar.
- On phones, collapse into a single vertical path with the week marker still visible.
- On wide desktops, keep the reading column constrained; do not spread cards across an overly wide canvas.
- Keep a clear visual distinction among:
  - **Study weeks** — normal link cards.
  - **Combined-topic weeks** — Week 4 and Week 14, with two equally clear links.
  - **Assessment/revision milestones** — quieter, non-clickable cards with no invented preparation material.
  - **In-progress weeks** — honest WIP treatment only for unfinished content.

### Visual language
- Retain the warm notebook palette, generous whitespace, rounded surfaces, Apple-style emoji treatment where already used, and light theme as default.
- Give each study phase a restrained accent colour instead of making every card a different colour:
  1. Weeks 1–3: foundations and methods.
  2. Weeks 4–10: variation, identity, and social structure.
  3. Weeks 11–14: global, Arabic, and digital sociolinguistics.
  4. Weeks 15–16: quiet review/assessment finish.
- Add only small visual cues that improve recall: week numerals, subtle connector lines, and existing lesson illustrations—not decorative clutter.
- Preserve minimum 44px tap targets, visible focus styles, reduced-motion support, and light/charcoal theme parity.

## Weekly destination strategy

Every Week 1–16 card will open a dedicated `week-XX.html` guide. A guide gives that week one clear topic focus, a short study route, and an honest status. Existing long-form lessons remain useful deep dives reached from the relevant weekly guide; homepage cards will no longer jump into a combined lesson or a buried fragment.

## Lesson alignment changes

### Completed lessons
- **Lesson 1 — Foundations:** add `Week 1–2` context and stable anchors for introduction and social factors.
- **Lesson 2 — Research Methods:** add `Week 3` context.
- **Lesson 3 — Dialects, Class & Networks:** add clear internal week chips and stable anchors for Week 4 (dialects), Week 9 (class/status), and Week 10 (networks). Keep one lesson page; do not duplicate the class or network content.
- **Lesson 4 — Gender, Age & Change:** identify the Week 4 gender section, Week 5 life-stages section, and Week 6 apparent/real-time section. Keep the existing age-orbit illustration and learning aids.
- **Lesson 5 — Style & Identity:** add `Week 7` context and retain its speech-bubble/accommodation learning aids.

### In-progress lessons
- **Lesson 6:** rename/reframe its WIP label around Week 11’s full outline bundle, rather than only “contact.”
- **Lesson 7:** label as Week 13 Arabic sociolinguistics.
- **Lesson 8:** label as Week 14 Internet sociolinguistics.
- **Project Notes:** make its Week 14 relationship explicit, while keeping it non-collecting and WIP.

## Ordered implementation checklist

### A. Safety and source hygiene
- [x] Add the Fall 2026 outline file to `.gitignore` before staging future work.
- [x] Update `docs/PROJECT.md` to name week-based navigation as the approved next initiative and replace stale schedule references with the Fall 2026 outline.
- [x] Confirm no outline text, reading list, personal/staff information, or deadline date is copied into public HTML.

### B. Information architecture
- [x] Inventory current homepage lesson-card markup and identify reusable card styles versus styles that should be retired.
- [x] Define semantic markup for the course-week path (`section`, ordered list, cards, and clear headings).
- [x] Create the full Week 1–16 map using the table above.
- [x] Give Week 4 and Week 14 two explicit destinations without implying that both are one lesson.
- [x] Add quiet non-link milestone cards for Weeks 8, 12, 15, and 16.
- [x] Keep WIP labels only on Weeks 11, 13, and 14’s unfinished destinations.

### C. Lesson routes and labels
- [x] Add stable, descriptive fragment IDs to the relevant sections in Lessons 1–5.
- [x] Add concise visible week chips/context lines without repeating the homepage schedule on every lesson.
- [x] Replace section-fragment homepage links with dedicated weekly-guide destinations.
- [x] Build dedicated Week 1–16 guides with a focused overview, three-step study route, deep-dive route, and previous/next week navigation.
- [x] Update previous/next lesson links where a weekly route makes the sequence clearer, without creating broken circular navigation.
- [x] Align Lesson 6’s WIP wording with globalization, diversity, multilingualism, language choice, attitudes, identity, and global English.
- [x] Align Lesson 7 and Lesson 8 WIP wording with their respective Week 13 and Week 14 outline topics.
- [x] Associate Project Notes with Week 14 only; do not add forms or submission mechanisms.

### D. iPad-first styling
- [x] Implement the course-week path at 768px, 834px, and 1024px first: readable labels, comfortable cards, no squeezed multi-column calendar.
- [x] Add mobile single-column rules and wide-desktop containment rules.
- [x] Verify dark mode uses the same hierarchy and does not rely on colour alone for card state.
- [x] Preserve keyboard focus, tap targets, semantic links, and reduced-motion behaviour.
- [x] Ensure the new week path does not make the homepage materially heavier or visually noisier than the current topic index.

### E. Content and release review
- [x] Check every card label against the Fall 2026 schedule table.
- [x] Check every completed card points to the intended page/section; check each unfinished destination remains visibly WIP.
- [x] Review English and Omani Arabic week/context labels for natural, concise wording.
- [x] Perform the user-requested static/browser review at iPad portrait, iPad landscape, phone, light mode, and dark mode.
- [x] Check relative links and direct GitHub Pages paths.
- [x] Commit only public site files and documentation; verify the private outline remains ignored.
- [x] Push the finished weekly-alignment change to `main`.

## Completion definition
The work is complete when the homepage reads as a calm Fall 2026 study path from Week 1 through Week 16, every completed topic routes directly to the relevant lesson material, WIP content is honest, and the primary iPad experience remains spacious, touch-friendly, and recognisably part of the existing site.
