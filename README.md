# Netflix Clone - Group 1

A collaborative Netflix-inspired frontend application built with React, Vite, JavaScript, and the TMDB API.

This repository is for a university group project developed by 10 students. GitHub is used for code collaboration, and Trello is used for task tracking.

## Project Goal

The goal is to build a responsive movie browsing interface similar to Netflix. The app will fetch movie and TV data from TMDB and display it through reusable React components.

Planned features include:

- Netflix-style header and navigation
- Search, notifications, and profile dropdown interactions
- Hero/banner section with dynamic movie data
- Movie and TV category rows
- Responsive carousel sliders
- Movie cards with hover previews
- Responsive footer
- Desktop, tablet, and mobile layouts

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | UI components |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| Axios | API requests |
| React Router | Client-side routing |
| Lucide React | Icons |
| React Icons | Additional icons |
| Swiper | Carousel/slider UI |
| TMDB API | Movie and TV data |
| Oxlint | Code linting |

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DawitMahabaw/movieGroup1Collab.git
cd movieGroup1Collab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create an Environment File

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Important: do not commit `.env` or any API key to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Open the localhost URL shown in the terminal.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```text
movieGroup1Collab/
|-- public/
|-- Resources/
|   |-- Designs/
|   |-- Extensions/
|-- src/
|   |-- assets/
|   |   |-- image/
|   |-- Components/
|   |   |-- Banner/
|   |   |-- DisplayRow/
|   |   |-- Footer/
|   |   |-- Header/
|   |   |-- MovieCard/
|   |   |-- SlideShow/
|   |-- Data/
|   |-- Utility/
|   |-- App.jsx
|   |-- index.css
|   |-- main.jsx
|-- .gitignore
|-- CONTRIBUTING.md
|-- README.md
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
```

## Team Roles

### Main Group Leader

Ahmed Dawud

### Sub-group B Leader and Repository Owner

Dawit Mahabaw

## Task Assignments

### Sub-group A

| Member | Assigned Tasks | Responsibility |
| --- | --- | --- |
| Ahmed Dawud | T-01, T-06 | Project scaffolding and router/layout |
| Eliyas Wakjira | T-07, T-13 | Header and Swiper carousel |
| Ananya Wubshiet | T-10 | Banner API fetching |
| Natnial Tilahun | T-11, T-14 | Banner UI and movie card |
| Yohannes Abegaz | T-09, T-15 | Footer and responsive design |

### Sub-group B

| Member | Assigned Tasks | Responsibility |
| --- | --- | --- |
| Dawit Mahabaw | T-03, T-04 | TMDB API setup and Axios utilities |
| Surafel Jiberuk | T-05 | Global CSS/theme |
| Mayet Mengist | T-08, T-12 | Header interactions and category fetching |
| Zelalem Mengistu | T-02, T-16 | Assets and CSS Modules consistency audit |
| Tsega Desalegni | T-16 | Animation and CSS polish |

T-16 is shared. Zelalem should focus on CSS Modules consistency and class naming, while Tsega should focus on animation, transitions, and final CSS polish.

## Master Task Checklist

| ID | Task |
| --- | --- |
| T-01 | Project scaffolding and dependencies |
| T-02 | Asset organization and static data |
| T-03 | TMDB API key and environment setup |
| T-04 | Axios instance and request endpoints |
| T-05 | Global theme and base styles |
| T-06 | App layout shell and router |
| T-07 | Header and scroll-aware background |
| T-08 | Header search, notifications, and profile dropdown |
| T-09 | Responsive footer component |
| T-10 | Banner data fetching and random selection |
| T-11 | Banner UI and gradient overlay |
| T-12 | Multi-category parallel fetching |
| T-13 | SlideShow Swiper carousel |
| T-14 | MovieCard component and hover preview |
| T-15 | Responsive layout and mobile navigation |
| T-16 | CSS Modules audit and animation polish |

## Collaboration Rules

- Do all feature work on a branch, not directly on `main`.
- Keep Pull Requests focused on one task or one related set of changes.
- Test your work locally before opening a Pull Request.
- Do not commit `.env`, API keys, passwords, or tokens.
- Communicate before changing shared files such as `App.jsx`, `main.jsx`, `index.css`, routing, API utilities, or shared components.
- Keep Trello updated as your task moves from TODO to DOING to REVIEW to DONE.

For the full team workflow, read [CONTRIBUTING.md](CONTRIBUTING.md).
