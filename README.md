# 🍍 A.Comosus Client Side NextJS Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## File Structure

Files are structured based on this [Guide](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472), but in a nutshell 🥜🥜.

```js
root/
  src/ // @src/* - Convenient backup path to bubble up to src directory
    common/ // @common/* -  Files that will be used throughout the project
      components/
        [type]/
        index
    modules/ // @modules/* - Files grouped by modules/functionalities
      [module]/
        components/
          index
        sections/
          index

    pages/ // @pages/* - Not sure why I have this but you never know 😎
    styles/
```
