# PEPVIDA Landing Page

A modern, luxurious landing page for PEPVIDA - a premium peptide protocols e-commerce site.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalist design with smooth animations and transitions
- **Product Showcase**: Beautiful product grid with hover effects
- **Sticky Navigation**: Persistent header that adapts on scroll
- **Hero Section**: Eye-catching hero with 3D pedestal effect
- **Interactive Elements**: Hover states, smooth scrolling, and interactive components

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, consistent icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
pepvida-landing/
├── public/              # Static assets (place product images here)
├── src/
│   ├── components/
│   │   └── PepVidaLanding.jsx  # Main landing page component
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Adding Product Images

Place your product images in the `public` folder with the following names:
- `RESET FINAL.png`
- `ATTRACT FINAL.png`
- `AMPLIFY FINAL.png`
- `HEAL FINAL.png`

The app includes fallback images from Unsplash if the local images are not found.

## Customization

### Colors

Main brand colors are defined in the component:
- Background: `#FAF9F6` (Warm off-white)
- Primary: `#1A1A1A` (Near black)
- Accent: `#6B9080` (Sage green)
- Highlight: `#42FFD4` (Bright cyan)

### Typography

- **Sans-serif**: Montserrat (for body text and UI elements)
- **Serif**: Times New Roman (for headings and elegant text)

You can customize these in `tailwind.config.js`.

## License

This project is proprietary and confidential.

© 2025 PEPVIDA. All rights reserved.
