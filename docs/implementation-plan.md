# implementation-plan

## 🏗️ Implementation Plan

### 🪜 Step-by-Step Build

### 1. Structure the Layout

- Set up HTML scroll page with named sections
- Add sticky top nav with anchor links
- Add smooth scroll behavior

### 2. Build Hero / Home Section

- Add name, headline, short blurb
- Insert photo: use `gabe.jpg` (from media directory)
- Create two CTA buttons: Email + Resume embed

### 3. About Section

- Import content from `intro.md` (trimmed for clarity) in content directory
- Include technical skills as icons or compact bullets

### 4. Projects Section

- Build 3 case study cards with:
    - Title
    - Problem → Solution → Impact
    - Tech stack chips
    - Visual or diagram
    - obtain files from content directory (`projects.md`)
- Final card = “What Sets Me Apart” (AI project highlight) - obtain file from content directory (`what_sets_me_apart_project.md`)

### 5. Testimonials Section

- Add quote blocks with (including headshot of individual):
    - Name
    - Quote
    - LinkedIn URL badge/button
    - Obtain testimonials from content directory.
    - Obtain headshots from media directory →
        - `elizabeth.jpg`
        - `james.jpg`
        - `maxwell.jpg`

### 6. Contact Section

- Add email and LinkedIn link
- Primary CTA = `Contact Me`
- Secondary CTA = `View My Resume` (PDF embed) → [`CV - Gabriel Maja 2025.pdf`](https://github.com/Gabe-Maja/portfolio-website/blob/main/media/CV%20-%20Gabriel%20Maja%202025.pdf) obtained from media directory

### 7. Visual Polish

- Add icons and illustrations (e.g., via [undraw.co](https://undraw.co/) or [humaaans.com](https://www.humaaans.com/))
- Ensure mobile responsiveness
- AA-compliant color contrast

---

### 🗓️ Timeline

| Week | Tasks |
| --- | --- |
| 1 | Layout skeleton, add content |
| 2 | Visual polish, responsiveness, PDF resume |
| 3 | Test on multiple devices, fix bugs |
| 4 | Final UX tweaks and launch |

---

### 👥 Team Roles & Rituals

| Role | Task |
| --- | --- |
| You (Gabriel) | Approve content, provide resume PDF, test on mobile |
| Dev friend / contractor | Implement layout, polish visual design |
| Reviewer | 3 users run 5-min usability test |

**Bi-weekly usability test**:

- Ask 3 users: “Can you tell what I do in 30 seconds?”
- Log where they hesitate or scroll back.

---

### 🎯 Stretch Goals

- Add dark/light mode toggle
- Interactive charts in case studies (embedded Power BI or mock)
- Auto-scroll indicator or progress bar