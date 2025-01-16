# Modern Waitlist Boilerplate

A modern, responsive waitlist landing page built with Next.js 14, Tailwind CSS, and shadcn/ui. Perfect for collecting early sign-ups for your upcoming product or service.

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Next.js 14](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## Features

- Next.js 15 App Router
- Tailwind CSS
- Shadcn/ui components
- Dark/Light mode

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/slackerkids/waitlist-boilerplate.git
```

2. Install dependencies:
```bash
cd waitlist-boilerplate
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
waitlist-boilerplate/
├── app/                    # Next.js app directory
├── components/            
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global styles
```

## Key Components

- **Hero Section**: Main landing section with primary call-to-action
- **Features Section**: Showcase your product's key features
- **CTA Section**: Secondary call-to-action for conversion
- **Waitlist Form**: Reusable form component with success modal
- **Footer**: Site footer with additional waitlist form

## Customization

1. **Colors**: Update the colors in `tailwind.config.ts`
2. **Content**: Modify the text in each section component
3. **Styling**: Adjust the Tailwind classes or modify the shadcn/ui components
4. **Components**: Add or remove sections as needed

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)