# Portfolio Website

A responsive portfolio website showcasing projects and experience.

## Tech Stack

- **Frontend**: JavaScript, React, HTML, CSS, Material-UI
- **Build Tool**: Vite
- **Deployment**: GitHub Actions & GitHub Pages
- **Version Control**: Git

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```sh
git clone https://github.com/AnmolKhangura/AnmolKhangura.github.io.git
cd AnmolKhangura.github.io
```

2. **Install dependencies**
```sh
npm install
```

3. **Start the development server**
```sh
npm run dev
```

The development server will start at `http://localhost:5173`

## Build

```sh
npm run build
```

The production build will be output to the `dist/` directory.

## Deployment

This project is deployed using **GitHub Actions** and **GitHub Pages**.

### Setup Instructions

1. **Repository Settings**
   - Ensure your repository is public (or pro for private repos)
   - Go to **Settings** → **Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source

2. **Automatic Deployment**
   - Every push to the `main` branch triggers the deployment workflow
   - GitHub Actions builds your project and deploys it to GitHub Pages

3. **Access Your Site**
   - Your portfolio will be available at `https://<username>.github.io/<repo-name>`
   - Or use a custom domain by configuring DNS records

For more details, refer to the [Vite GitHub Pages Deployment Guide](https://vite.dev/guide/static-deploy#github-pages).

## Features

- Responsive design with Material-UI components
- Project showcase with grid and expanded views
- About and experience sections
- Custom theme configuration
- Fast build with Vite
