# Next.js Dashboard App

This is a tutorial project I completed to learn Next.js and TypeScript. It's a full-stack dashboard application built with Next.js 15, TypeScript, PostgreSQL, and Tailwind CSS.

## Features

- User authentication with NextAuth.js
- Dashboard with revenue charts and analytics
- Customer and invoice management
- Form validation with Zod
- Responsive design with Tailwind CSS
- PostgreSQL database integration

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database

## How to Run This Yourself

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd nextjs-dashboard
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:

   ```
   POSTGRES_URL=your_postgres_connection_string
   AUTH_SECRET=your_auth_secret
   ```

4. **Set up the database:**

   - Create a PostgreSQL database
   - Update the `POSTGRES_URL` in your `.env` file
   - Run the seed script: `http://localhost:3000/seed`

5. **Start the development server:**

   ```bash
   pnpm dev
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000`

## Login Credentials

- Email: user@nextmail.com
- Password: 123456

## Metadata

Include `favicon.ico` and `opengraph-image.jpg` in your root folder and these will automatically be identified as your favicon and OG image.

For more information about metadata, see: https://nextjs.org/learn/dashboard-app/adding-metadata

## Tutorial Source

This project follows the [Next.js App Router Course](https://nextjs.org/learn) curriculum on the Next.js website.
