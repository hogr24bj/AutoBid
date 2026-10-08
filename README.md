# AutoBid

A car auction application built with React, TypeScript, and Vite. The first screen is a searchable auction listing powered by sample data.

## Getting started

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

To create a production build, run `npm run build`.

## Project structure

- `src/models` contains auction data and types.
- `src/controllers` contains listing state and filtering logic.
- `src/views` contains the auction browsing and login interfaces.

The `/login` page is currently a front-end preview only; it does not send or save credentials. The current listings are sample data. Authentication and bid validation should be backed by a server when those features are implemented.
