# Meharoli Travels 🏯

A modern travel agency website for **Meharoli Travels**, showcasing Jaipur tour packages with an interactive hero video, enquiry form, day-wise itinerary, and WhatsApp integration.

Built with **React 19** + **Vite 7**.

---

## Prerequisites

Make sure you have the following installed on your machine:

| Tool    | Version            | Download           |
| ------- | ------------------ | ------------------ |
| Node.js | 18 or higher       | https://nodejs.org |
| npm     | comes with Node.js | —                  |

Verify your versions:

```bash
node -v
npm -v
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abhisheksaini3232/meharoli_travels.git
cd meharoli_travels
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** (or the next available port shown in your terminal).

---

## Available Scripts

| Command           | Description                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start local development server with hot-reload |
| `npm run build`   | Build optimised production bundle into `dist/` |
| `npm run preview` | Preview the production build locally           |
| `npm run lint`    | Run ESLint across all source files             |

---

## Project Structure

```
meharoli_travels/
├── public/
│   ├── pictures/              # Jaipur section images
│   │   └── main-section/      # Hero slideshow images
│   └── 236224_tiny.mp4        # Hero background video
├── src/
│   ├── App.jsx                # Main React component
│   ├── App.css                # All styles
│   ├── index.css              # Global resets
│   └── main.jsx               # React entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Configuration

### WhatsApp Number

Open `src/App.jsx` and replace the placeholder number with your real WhatsApp business number (include country code, no `+`):

```js
const whatsappNumber = "919999999999"; // e.g. 919876543210 for +91 98765 43210
```

---

## Building for Production

```bash
npm run build
```

Output is generated in the `dist/` folder. You can deploy it to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

To preview the production build locally before deploying:

```bash
npm run preview
```

---

## Tech Stack

- [React 19](https://react.dev)
- [Vite 7](https://vitejs.dev)
- CSS (no external UI library)
