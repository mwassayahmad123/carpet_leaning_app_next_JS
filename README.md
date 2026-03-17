# Carpet Service Website

A modern, sleek, and premium Carpet Service website built with React JS and Tailwind CSS. The website is fully mobile responsive, fast, and visually appealing with smooth animations and hover effects.

## Features

- **Modern Design**: Clean, minimal, and elegant UI with soft shadows, rounded corners, subtle gradients, and modern typography
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Premium animations and hover effects throughout
- **Sticky Navbar**: Smooth scroll navigation with all menu items
- **Hero Section**: Full-width background with compelling CTAs
- **About Section**: Quality assurance, hygiene standards, and customer satisfaction highlights
- **Services Section**: Full-width video introduction and service cards
- **Team Section**: Highlighted team member card plus 6 smaller team cards
- **3D Reviews Carousel**: Cool 3D rotating reviews section with 4-second auto-rotate
- **Image Gallery**: Modern responsive grid with hover zoom effects
- **Contact Form**: WhatsApp integration for direct booking
- **Google Maps**: Embedded map showing business location

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Configuration

### WhatsApp Integration

To set up WhatsApp integration, edit `src/components/Contact.js` and update the `whatsappNumber` variable:

```javascript
const whatsappNumber = '1234567890'; // Replace with your WhatsApp number (country code + number, no + or spaces)
```

### Google Maps

To update the Google Maps embed, edit `src/components/Contact.js` and replace the `src` URL in the iframe with your business location coordinates.

### Contact Information

Update contact details in:
- `src/components/Contact.js` - Contact section
- `src/components/Footer.js` - Footer section

### Video Embed

To add your service introduction video, edit `src/components/Services.js` and replace the placeholder div with your actual video embed code.

## Project Structure

```
laundary_service/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Team.js
│   │   ├── Reviews.js
│   │   ├── Gallery.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Technologies Used

- **React 18**: Modern React with functional components
- **Tailwind CSS 3**: Utility-first CSS framework
- **React Scripts**: Build tooling for React applications

## Customization

### Colors

The website uses a blue-to-purple gradient theme. To customize colors, update the Tailwind classes in components or modify `tailwind.config.js`.

### Animations

Animations are defined in `tailwind.config.js` and can be customized there.

### Images

Replace placeholder images with your own:
- Team member photos in `src/components/Team.js`
- Gallery images in `src/components/Gallery.js`
- Review customer photos in `src/components/Reviews.js`
- Hero background image in `src/components/Home.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for use.

## Support

For issues or questions, please contact the development team.

