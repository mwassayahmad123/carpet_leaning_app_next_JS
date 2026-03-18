# Carpet Service Website (Next.js)

A modern, sleek, premium Carpet Service website built with **Next.js** and **Tailwind CSS**. Fully responsive, fast, and visually polished with smooth animations and hover effects.

## Features

- **Modern design**: Clean, minimal UI with soft shadows, rounded corners, subtle gradients, and modern typography
- **Fully responsive**: Mobile-first design that works on all devices
- **Smooth animations**: Premium hover and transition effects throughout
- **Sticky navbar**: Smooth scroll navigation with menu items
- **Hero section**: Full-width background with clear CTAs
- **About section**: Quality assurance, hygiene standards, and customer satisfaction highlights
- **Services section**: Video intro + service cards
- **Team section**: Highlighted team member + additional team cards
- **Reviews carousel**: Auto-rotating 3D-style reviews section
- **Gallery**: Responsive grid with hover zoom effects
- **Contact**: WhatsApp integration for booking + embedded Google Map

## Tech Stack

- **Next.js** (App Router)
- **React 18**
- **Tailwind CSS**

## Getting Started

### Prerequisites

- Node.js **18.18+** (recommended for modern Next.js)
- npm (or yarn/pnpm)

### Install

```bash
npm install
```

### Run locally (development)

```bash
npm run dev
```

Open `http://localhost:3000`.

### Build for production

```bash
npm run build
```

This creates an optimized Next.js build (output in the `.next/` directory).

### Run production build locally

```bash
npm run start
```

## Deploy to Netlify (Next.js)

### Recommended: Git integration (auto-deploy)

- **Base directory**: (leave empty)
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Required**: enable the Netlify Next.js build plugin
  - In Netlify: Site configuration → Build & deploy → Plugins → add **Next.js** plugin
  - Or add this to `netlify.toml` (if you choose to create one):

```toml
[[plugins]]
package = "@netlify/plugin-nextjs"
```

After that, every push to your connected branch will auto-build and deploy.

## Configuration / Customization

### WhatsApp Integration

Edit `src/components/Contact.js` and update the `whatsappNumber` variable:

```js
const whatsappNumber = '1234567890'; // country code + number, no + or spaces
```

### Google Maps

In `src/components/Contact.js`, replace the Google Maps iframe `src` with your business location embed link.

### Contact information

- `src/components/Contact.js`
- `src/components/Footer.js`

### Services video

Update the video/embed section in `src/components/Services.js`.

## Project Structure (high level)

```
carpet_leaning_app_next_JS/
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ layout.js        # App Router root layout
│  │  ├─ page.js          # Home page composition
│  │  └─ globals.css
│  └─ components/         # UI sections (Navbar, Home, About, ...)
├─ next.config.js         # Includes custom webpack rule for .mp4 assets
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json
```

## Notes

- This repo uses Next.js App Router (`src/app/*`). If you see older React entry files like `src/index.js`, they are not used by Next.js runtime.

## License

Open source — use as needed.

