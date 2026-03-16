# MAC-OS Portfolio

A macOS-inspired portfolio built with React and Vite. The interface mimics a desktop experience with draggable windows, a dock, embedded resume and Spotify views, a project gallery, and a small interactive CLI.

## Features

- macOS-style desktop UI
- draggable app windows using `react-rnd`
- dock-based navigation
- project showcase window
- note/code preview window
- embedded PDF resume viewer
- embedded Spotify player
- portfolio CLI with custom commands
- quick links for Google Calendar, Gmail compose, and LinkedIn

## Tech Stack

- React
- Vite
- SCSS
- `react-rnd`
- `react-console-emulator`
- `react-syntax-highlighter`

## Project Structure

```text
src/
  components/
    Dock.jsx
    Nav.jsx
    github.jsx
    windows/
      MacWindow.jsx
      note.jsx
      Resume.jsx
      Spotify.jsx
      Cli.jsx
  assets/
  App.jsx
  main.jsx

public/
  resume.pdf
  note.txt
  doc-icons/
  navbar-icons/
```

## CLI Commands

The terminal window supports these commands:

- `about`
- `skills`
- `projects`
- `project <number>`
- `contact`
- `socials`
- `status`
- `echo <text>`
- `help`
- `clear`

## Dock Icons

The dock at the bottom of the screen acts like the main app launcher for the portfolio.

- `GitHub`: opens the projects window with portfolio cards loaded from `src/assets/github.json`
- `Note`: opens the note window and renders the content from `public/note.txt`
- `PDF`: opens the resume window and embeds `public/resume.pdf`
- `Calendar`: opens Google Calendar in a new tab
- `Spotify`: opens the Spotify player window
- `Mail`: opens Gmail compose in a new tab with the email prefilled
- `Link`: opens the LinkedIn profile in a new tab
- `CLI`: opens the terminal-style portfolio window

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev` starts the dev server
- `npm run build` creates a production build
- `npm run preview` previews the production build
- `npm run lint` runs ESLint

## Notes

- The mail dock icon opens Gmail compose in a new tab.
- The calendar dock icon opens Google Calendar.
- Window close behavior is handled through the shared `MacWindow` component.
- Some content is currently placeholder portfolio data and can be replaced with your real links, projects, and contact info.


