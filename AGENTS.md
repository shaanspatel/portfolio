# Portfolio Agent Instructions

## Project Goal

This is Shaan Patel's robotics and mechanical engineering portfolio.

The site should feel like a visual display of engineering work:
- simple intro
- image-led projects
- clear project pages
- short captions
- real engineering evidence
- clean visual polish
- no corporate "case study" tone

The portfolio should communicate:
- mechanical design
- robotics hardware
- CAD
- prototyping
- fabrication planning
- testing/validation when actually performed
- controls/electronics/AI-ML only when accurate and supported

The site should not feel like:
- a generic software portfolio
- a startup landing page
- a corporate case-study template
- an AI-written report
- a long text-heavy project essay

## Hard Rules

- Do not invent claims, metrics, rankings, awards, test results, payloads, dimensions, torque values, or validation results.
- Do not make writing sound more complete than the project actually is.
- Do not use "case study" or "case-study" in public-facing copy.
- Use "project", "project page", "project notes", "development", "build notes", or "project documentation".
- Do not add JavaScript unless specifically requested.
- Do not add category filters, tabs, sorting controls, or unnecessary UI controls.
- Do not rewrite project content unless the task is explicitly a content task.
- Do not redesign the whole site unless explicitly asked.
- Accuracy beats polish.

## Privacy / IP Rules

- Never reintroduce SERES or SF Motors references.
- Never reference old `sf-motors-*` image assets in public HTML.
- Never use company-related photos, names, captions, metadata, or alt text.
- The finger module project must always be framed as:
  - personal
  - independent
  - early-stage
  - work in progress
  - not built unless explicitly confirmed
  - not tested or validated unless explicitly confirmed
  - not company-related
- If a privacy/IP concern is found, stop and flag it before continuing.

## Current Site Direction

The homepage should be simple:

1. Short intro for Shaan Patel
2. Projects section
3. Centered text: "Click a project to learn more"
4. Large clickable project image cards
5. Contact/footer

Homepage rules:
- Keep the intro short.
- Projects should be the main focus.
- Project cards should be visual and clickable.
- Project titles may appear on hover/focus, but mobile users must still understand the cards.
- No category labels.
- No filters.
- No tabs.
- No sorting controls.
- No long homepage explanation.
- No "case study" wording.

## Homepage Visual Rules

When asked to change homepage colors, typography, or visual polish:

- Preserve the current homepage structure.
- Preserve the intro + project gallery format.
- Preserve "Click a project to learn more".
- Improve the homepage, not just the project pages.
- Keep the project grid large, centered, and visual.
- Do not make the homepage text-heavy.
- Use CSS-first changes.
- Only edit `index.html` if class names or small structural hooks are required.
- Prefer editing `styles.css` only.

## Project Page Direction

Project pages should be image-led.

The desired pattern is:

1. Project title
2. Specific subtitle/status line
3. Large image near the top
4. Very short intro, max 2 short paragraphs
5. Visual walkthrough sections
6. Top Skills Used
7. Other Projects

Each visual walkthrough section should follow this rhythm:

```text
Large image
Caption title
1–2 sentence engineering explanation