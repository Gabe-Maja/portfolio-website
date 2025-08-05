# masterplan

## Personal Portfolio: Gabriel Kevin Maja

### 🚀 Elevator Pitch

A sleek, one-page portfolio that showcases Gabriel Maja’s data projects, technical capabilities, and standout automation skills—all designed to impress recruiters and hiring managers in under 3 scrolls.

### 🧩 Problem & Mission

**Problem**: Recruiters often skim dozens of profiles daily. A cluttered, unfocused portfolio buries great talent.

**Mission**: Build a sharp, single-scroll portfolio that lets hiring teams grasp Gabe’s value in 30 seconds or less—with friction-free access to projects, testimonials, and contact.

### 🎯 Target Audience

- Data science / BI recruiters
- Hiring managers in fintech, marketing, insurance
- Tech leads scanning for applied analytics talent
- Bootcamp assessors or technical evaluators

### 🛠️ Core Features

- Sticky navigation bar: `Home → About → Projects → What Sets Me Apart → Testimonials → Contact`
- Single-scroll design with smooth anchor jumps
- Hero landing with headline, photo, CTA buttons:
    - `📩 Contact Me` (Primary)
    - `📄 View My Resume` (Secondary, PDF embed)
- Projects: 3 case study cards with visuals + “What Sets Me Apart” AI project
- Testimonials: Carousel or stacked quote cards with names + LinkedIn links
- Contact section: Email + LinkedIn profile link

### ⚙️ Tech Stack

| Layer | Tech | Why It Fits |
| --- | --- | --- |
| Frontend | HTML, Tailwind CSS, Alpine.js | Lightweight, fast, highly customizable |
| Resume Viewer | PDF.js | Seamless in-browser PDF preview |
| Deployment | GitHub Pages or Vercel | Simple, fast, zero-cost hosting |
| Analytics (Optional) | Plausible / Google Analytics | Track recruiter engagement (non-invasive) |

### 🧱 Conceptual Data Model (in words)

No database needed. All content is static:

- `about` = markdown section
- `projects[]` = array of project cards with title, tech, problem, results
- `testimonials[]` = array of quotes with name, text, LinkedIn
- `contact` = email + LinkedIn + CTA anchors

### 🧭 UI Design Principles

- **Don’t Make Me Think**: CTAs always visible. No dropdowns or deep menus.
- **Mobile-first**: Responsive from day one.
- **Visual hierarchy**: Use bold headings, cards, icons to guide scanning.
- **High contrast**: Clean backgrounds with legible dark text and action buttons.

### 🔐 Security & Compliance

- Minimal data exposure (email & LinkedIn only)
- Resume embed does not track viewers
- Optional: CAPTCHA or spam filtering for contact form

### 🛣️ Phased Roadmap

| Phase | Goal |
| --- | --- |
| MVP | Scrolling portfolio with About, Projects, Testimonials, Contact. Includes resume button + email CTA. |
| V1 | Add “What Sets Me Apart” project; polish visuals; improve responsiveness |
| V2 | Add embedded intro video, dark mode toggle, analytics (e.g., clicks on email/resume) |

### ⚠️ Risks & Mitigations

- **Overdesigning** → Keep layout intuitive and content-first
- **Too much text** → Use cards, collapsibles, or toggles for deep dives
- **Resume file errors** → Always host PDF in repo and test fallback link

### 🔮 Future Expansion Ideas

- Blog or case study writeups
- AI chatbot (e.g., “Ask Gabe about my work”)
- Project tags/filters for portfolio scalability