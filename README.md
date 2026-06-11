# Developer Portfolio Website

A modern, highly responsive developer portfolio website designed to showcase a professional profile, technical stack, key projects, and experience. The site features a premium, polished user interface with custom typography, clean grid structures, glassmorphic cards, timeline displays, and hover animations.

---

## 🚀 Features & Page Highlights

The portfolio is structured across four main HTML pages, linked together by a unified, responsive navigation system:

### 1. 🏠 Home Page (`index.html`)
- **Profile Summary**: A direct introduction to core capabilities as a MERN Stack Developer.
- **Visual Illustration**: A responsive SVG illustration equipped with custom floating keyframe animations.
- **Quick Stack & Social Badges**: Compact tech logos and social profile links (LinkedIn, GitHub) arranged in hover-interactive capsules.

### 2. 🛠 Tech Stack (`stack.html`)
- **Grid Layout**: Displays deep-dives into core technical stack technologies (React, MongoDB, HTML5, CSS3, JavaScript, Tailwind CSS, Express.js, Node.js).
- **Tech Cards**: Hover-animated cards with custom left-border highlights keyed to the brand color of each specific tool.

### 3. 💼 Experience Timeline & Projects (`experience.html`)
- **Professional Timeline**: A responsive vertical timeline displaying core development history:
  - **Hope4All** *(Full-Stack Social Welfare Application)*: Details on request management, real-time donation tracking, instant messaging, and admin verification dashboards.
  - **MSN Academy** *(Digital Learning Platform)*: Details on certificate API integrations, UI responsiveness, and page performance optimizations.
  - **Mystery-message** *(Interactive AI Web App)*: Details on Next.js setup, Groq API validation, streaming responses, and username extraction.
- **Projects Grid**: Redesigned cards showcasing utility projects (URL Shortener, CRUD Application, Calculator) with categorized type badges, descriptions, and technology-colored labels.

### 4. ✉️ Contact Page (`contact.html` & `contact.js`)
- **Interactive Form**: Clean layout with custom input styling for sending messages.
- **Client-Side Validation**: Simple JavaScript-backed feedback using DOM event listener submits, preventing default actions, and validating fields.

---

## 🎨 Design System & Aesthetics

- **Color Palette**: A curated gold-to-beige gradient brand style:
  - Background: `linear-gradient(90deg, #f5e6ca 0%, #d4af37 100%)`
  - Cards: High-contrast white (`#ffffff`) offset by translucent glassmorphic components (`rgba(255, 255, 255, 0.6)` with `backdrop-filter: blur(10px)`).
  - Borders & Details: Muted gold outlines (`rgba(212, 175, 55, 0.25)`).
- **Typography**: Imported Google Fonts for premium text rendering:
  - Headings: **Plus Jakarta Sans** (Weights: 400, 500, 600, 700, 800)
  - Body Text: **Inter** (Weights: 300, 400, 500, 600, 700)
- **Micro-Animations**:
  - Vertical float keyframes applied to illustration components.
  - Shadow glow and 3D translation triggers (`transform: translateY(-5px)`) for card hover states.

---

## 📂 File Directory Structure

```text
Portfolio-html-css/
├── Assets/                                            # Graphics, illustrations and logos
│   ├── Beige Gold Minimalist Initials Logo Design.png # Navbar profile logo
│   └── frist.svg                                      # Main home landing illustration
├── index.html                                         # Homescreen / Introduction landing page
├── stack.html                                         # Tech stack detailed listing
├── experience.html                                    # Professional experience timeline & projects
├── contact.html                                       # Contact form page
├── contact.js                                         # Contact form JavaScript logic
├── style.css                                          # Global CSS stylesheet & animation definitions
└── README.md                                          # Project documentation
```

---

## 💻 Local Setup & Usage

To run and view the portfolio website on your local system, follow these steps:

### Option A: Direct Browser File Launch
1. Clone or download the repository to your local directory.
2. Navigate to the root directory folder.
3. Double-click `index.html` or drag-and-drop it into any modern web browser (Chrome, Edge, Firefox, Safari) to launch the landing page.

### Option B: Local Development Server (Recommended)
Running through a local server ensures consistent module parsing and correct resource paths:
1. Open the repository folder in a code editor like Visual Studio Code (VS Code).
2. Install the **Live Server** extension.
3. Click the **Go Live** button at the bottom-right corner of VS Code, or right-click `index.html` and select **Open with Live Server**.
4. The site will automatically launch at `http://127.0.0.1:5500/index.html`.

---

## 🛠 Built With

- **HTML5**: Semantic tags structure.
- **CSS3**: Layouts (Grid/Flexbox), custom animations, responsive media queries, and styling.
- **JavaScript (ES6)**: DOM events and client-side actions.
- **Google Fonts API**: Typography imports.
