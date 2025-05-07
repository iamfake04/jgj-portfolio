# JGJ Portfolio

This is a Next.js project for JGJ's personal portfolio website, built with TailwindCSS and Framer Motion.

## Project Overview

- A professional portfolio website showcasing JGJ's work, skills, and contact information.
- Clean, modern aesthetic with glassmorphism design elements.
- Responsive layout for all devices.
- Interactive elements to engage visitors.

## Technology Stack

- Next.js (with App Router)
- React
- TypeScript
- TailwindCSS
- Framer Motion
- Vercel (for deployment)

## Core Pages

1.  **Home**: Engaging introduction.
2.  **About**: Professional background and skills.
3.  **Projects**: Showcase of work with a filterable gallery (to be implemented).
4.  **Contact**: Contact form and other contact methods.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later recommended)
- npm (comes with Node.js)

### Installation

1.  Clone the repository (if applicable, otherwise you already have the project setup).
    ```sh
    git clone <your-repo-url>
    cd jgj-portfolio
    ```
2.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/home/page.tsx`. The page auto-updates as you edit the file.

## Learn More (Next.js Documentation)

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

This project is intended to be deployed on [Vercel](https://vercel.com/), the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Project Structure (Initial)

```
jgj-portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── about/          # About page
│   │   │   └── page.tsx
│   │   ├── contact/        # Contact page
│   │   │   └── page.tsx
│   │   ├── projects/       # Projects page
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   └── components/         # Reusable components
│       └── layout/         # Layout components (Navbar, Footer)
│           ├── Footer.tsx
│           └── Navbar.tsx
├── .eslintrc.json          # ESLint configuration
├── next.config.mjs         # Next.js configuration
├── package.json
├── postcss.config.mjs      # PostCSS configuration (for TailwindCSS)
├── README.md
└── tsconfig.json           # TypeScript configuration
```

This project is currently in its initial setup phase. More features and refinements will be added progressively.
