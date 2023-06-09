This is a fullstack personal project with Nextjs 13 only to study purposes.

Live preview: https://next13-fullstack-project-management.vercel.app/signin

## Getting Started

First, initiate Prisma:

```bash
npx prisma init
```

Config `.env` file with the `DATABASE_URL`, then run:

```bash
npx prisma db seed
```

Config `.env` file with the `JWT_SECRET` and `COOKIE_NAME`.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech stack

- Nextjs 13;
- React 18;
- PostgreSQL (Railway);
- Prisma;
- Tailwind CSS;
- Typescript.
