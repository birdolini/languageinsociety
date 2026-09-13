# AGENTS.md

## Project purpose
Build a neat, clean, and cute static study companion for **ENGL3328 — Language in Society**. It should help students review course concepts and prepare for the sociolinguistic research project, with an Omani/Arabic sociolinguistics context where the course materials do.

## Current milestone
**Homepage + Foundations + Research Methods.** Each lesson should be individually crafted, concise, and bilingual, with simple analogies. Further lessons, quizzes, authentication, a backend, or data-submission workflows require a new request.

## Technical constraints
- Deploy as a static site on GitHub Pages or an equivalent static host.
- Use plain HTML, CSS, and vanilla JavaScript only. No build step, framework, server, database, or API is needed.
- Keep paths relative and deployment-friendly; `index.html` must work from the repository root.
- Design iPad-first: make the 768–1024px portrait/landscape experience the primary composition, then adapt gracefully to phones and desktops.
- Prefer semantic HTML, responsive CSS, keyboard-accessible controls, and readable contrast.
- Keep the site lightweight. Do not add dependencies for effects that CSS can provide.

## Content rules
- Treat `handouts_readonly/` as source material, not website assets. Never modify it.
- Do **not** read, copy, adapt, or use anything in `old_site_readonly/` unless the user explicitly asks. This includes its structure, prose, CSS, JavaScript, and assets.
- Paraphrase course material; do not publish handout scans or substantial copyrighted reading excerpts.
- Preserve uncertainty: course dates, instructor details, and assessment arrangements should be shown only when explicitly requested or verified against the current handouts.
- The course's project is an Omani-variety sociolinguistic study; never invent research findings, participant data, or citations.

## Source of truth
- `docs/PROJECT.md` — product scope, homepage acceptance criteria, content map, and deferred work.
- `docs/LESSON_AUTHORING.md` — English, Arabic, and Omani Arabic authoring rules for current and future lessons.
- `handouts_readonly/UPDATED- SP26-ENGL3328_LiS_course outline.docx` — course scope and schedule.
- `handouts_readonly/SP26-Project_ENGL3328.pdf` and `Instructions for Project Submission.pdf` — research-project requirements.

## Working conventions
- Before changing scope or content, update `docs/PROJECT.md`.
- Keep student-facing copy direct, warm, and academically accurate; avoid promotional language, choppy fragments, and generic AI-style phrasing. When using Arabic, write naturally in Arabic rather than as a word-for-word English translation, use an Arabic-capable font, and follow the user-approved Omani forms: feminine second person uses forms such as `تراجعي` (not generic Gulf `تراجعين`), and relevant plural forms use forms such as `يبينوا` and `يأثروا` (not `يبينون` and `يأثرون`).
- Test static pages in a browser or a simple local static server before calling a UI change complete.
- Do not commit generated extracts, local test files, or student recordings/data.
- If generative AI is used for course work, the course outline requires disclosure of the tool, purpose, exact prompts, and generated output. Keep this in mind for any material intended for submission.
