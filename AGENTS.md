# Portfolio Agent Instructions

## Project Goal

This portfolio is for Summer 2026 mechanical engineering and robotics internships.

The site should feel like an engineering project journal, not a generic software portfolio.

The landing page should focus on one main featured project with a deep-dive/case-study/blog-style structure. Below that, there should be an Additional Projects section with image/title cards. Each card should link to its own project case-study page.

The site should emphasize:
- robotics hardware
- mechanical design
- CAD
- prototyping
- manufacturing
- testing
- robotic hands
- tendon-driven mechanisms
- robot software only when it supports robotics/mechanical work

## General Rules

- Do not make unrelated changes.
- Keep changes small and reviewable.
- List every file changed.
- Explain why each change was made.
- Manually verify the site in a browser before finishing.
- Do not exaggerate claims about experience or projects.
- Prefer clear engineering communication over flashy effects.

## File Boundaries

### index.html
Use this for:
- landing page structure
- intro section
- main featured project section
- additional project cards
- links to project pages
- metadata
- accessibility labels

### styles.css
Use this for:
- layout
- spacing
- colors
- typography
- responsive design
- visual hierarchy

### script.js
Use this only for:
- simple navigation behavior
- small interactions
- gallery behavior

Do not add unnecessary JavaScript.

### assets/
Use this for:
- images
- screenshots
- portfolio visuals

Do not rename or delete assets unless necessary.

### projects/
Use this for:
- individual project case-study pages
- blog-style project writeups
- project placeholders

## Agent Roles

### Main Architect Agent
- Audits the repo
- Creates the implementation plan
- Splits work into worker-agent tasks
- Reviews worker-agent results
- Does not edit files unless explicitly asked

### Portfolio Structure Agent
May edit:
- index.html
- styles.css if basic layout is needed
- script.js only if needed
- README.md if needed
- new files under projects/

Should not:
- write final polished project content
- make the site overly flashy
- delete existing assets

### Content Agent
May edit:
- index.html
- project pages
- README.md

Should not edit:
- major layout
- styling
- animations
- script.js

### Design Agent
May edit:
- styles.css
- index.html only if needed for class names or structure

Should not edit:
- project wording
- project claims
- README.md
- script.js unless absolutely necessary

### SEO and Accessibility Agent
May edit:
- index.html
- project pages
- README.md if needed

Should not edit:
- visual design
- main project story
- component/page structure unless needed for headings, links, alt text, or accessibility