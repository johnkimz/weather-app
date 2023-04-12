# Weather App

## Getting Started

First, install npm packages

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Objective

In addition to the project’s requirements, I was recently inspired when learning about Next.JS’s implementation of React’s Client and Server Components in version 13 of their framework and I wanted to see what it would be like to build an app that primarily renders on the server. This is why I deliberately chose not to load an app store (e.g. Redux, Zustand, SWR) on the client for this exercise. It did take some time to read through Next’s documentation to figure out the suggested patterns for routing, data-fetching, and data mutation but the exercise was an interesting mental model shift from the SSR/CSR (hydration) pattern that I am more familiar with.

- The entry point is `<root>/app/page.tsx` which imports `<root>/app/(home)/page.tsx`

- I mocked the api routes and added a `location: string` property to the response for ease of development.

- The forecast api returns a random generated temperature so this is why the location’s forecast changes per every page refresh or data fetch.

- File/folder organization:

  - Only pages and routes are in the <root>/app directory
  - Client/Server components are in <root>/components directory
  - Utils/Services are in the <root>/libs directory
  - Component styles are co-located with the respective component

- The primary means of storing user data is through cookies. It’s not an elegant solution, but the easiest to implement without the usage of additional client or server state/cache.
