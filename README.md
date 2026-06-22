# ASI Publication Frontend

Frontend application for the Archaeological Survey of India publication portal. The project provides a public-facing digital book store/library experience along with protected user pages and a seller/admin dashboard for managing publication content.

## Description

This React application helps users browse ASI publications, view book details, read purchased or available books, manage a cart, and access their orders and personal library. It also includes an admin area where sellers can sign in and manage books, categories, users, orders, and payments.

The app is built with Vite, React, React Router, Tailwind CSS, Axios, Chart.js, and PDF viewing support. It expects a backend API configured through environment variables.

## Features

- Public home page with publication banners, categories, best sellers, and recently added books
- Book listing, category filtering, search support, and book detail pages
- Cart flow with quantity updates and total calculation
- User-protected pages for orders, owned books, and address management
- PDF/book reading and viewing experience
- Seller/admin login with protected dashboard routes
- Admin management screens for books, categories, users, orders, payments, and dashboard analytics
- Toast notifications for user feedback
- Production build configured for deployment under `/publication/`

## Tech Stack

- React 19
- Vite 6
- React Router DOM 7
- Tailwind CSS 4
- Axios
- Chart.js and React Chart.js 2
- React Hot Toast
- PDF viewer support with EmbedPDF and PDF.js

## Project Structure

```text
src/
  assets/              Static images, icons, and media
  components/          Shared UI components and seller login
  context/             App and seller context providers
  layout/              User layout
  pages/               Public, user, policy, seller, and utility pages
  routes/              Protected route wrappers
  App.jsx              Application routes
  main.jsx             React entry point and router basename
```

## Environment Variables

Create or update the environment files before running the app:

```env
VITE_CURRENCY='₹'
VITE_BACKEND_URL='http://localhost:4000'
```

For production, the current configuration uses:

```env
VITE_BACKEND_URL=/publication/api
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Routing

The application uses `BrowserRouter` with the basename `/publication`, and Vite is also configured with `base: '/publication/'`. Deploy the built app so that all frontend routes are served from this path.

Main route groups include:

- `/publication/` - public home page
- `/publication/books` - all books
- `/publication/books/:id` - book details
- `/publication/book-reader/:id` - book reader
- `/publication/my-orders` - protected user orders
- `/publication/my-books` - protected user library
- `/publication/login` - seller/admin login
- `/publication/seller/dashboard` - protected seller dashboard

## PDF Viewer

This project uses PDF viewing libraries for the book reader/viewer experience.

Reference:

```text
https://app.embedpdf.com/
```

## Deployment Notes

- Build output is generated in the `dist/` directory.
- The frontend is configured for the `/publication/` base path.
- Ensure the backend API is reachable at the value configured in `VITE_BACKEND_URL`.
- SPA redirects should point unknown frontend routes back to `index.html`.
