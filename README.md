# 🍍 A.Comosus Client Side NextJS Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🏃‍♂️ How to run this project?

First, you want to make sure you have downloaded all the dependencies used for this project,

```bash
yarn
```

Then you will need to fetch required graphql schema and generate `react-query` hooks with:

```bash
yarn codegen
```

Then you can start the app simply by:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 How to test this app?

Simple! Just run this and you are good to go!

```bash
yarn test
```

## File Structure

Files are structured based on this [Guide](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472), but in a nutshell 🥜🥜.

```js
root/
  src/ // @src/* - Convenient backup path to bubble up to src directory
    __test__
    _generated/ // @generated/* - graphql-codegen generated graphql schema
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
    utils/ // @utils/* - All the utilities we need for this project?

    pages/ // @pages/* - Not sure why I have this but you never know 😎
    styles/
```

## 🥞 What is your tech stack?

| Category           | Packages                                                        |
| ------------------ | --------------------------------------------------------------- |
| Framework          | `next`                                                          |
| BootStrapper       | `create-next-app`                                               |
| Scripting Language | `typescript`                                                    |
| ApiClient          | `graphql-request`, `axios`,`react-query`, `graphql-codegen`     |
| Styling            | `styled-components`, `chakra-ui`, `framer-motion`, `fontsource` |
| State-Management   | `React Context API`                                             |
| Testing            | `cypress`, `react-testing-library`, `jest`                      |
| Localisation       | `react-i18next`, `ni18n`                                        |
| Code Control       | `eslint`, `prettier`, `eslint-plugin-prettier`                  |
| CI/CD              | `GitHub Actions`                                                |
| `undefined`        | `lodash`, `react-hook-form`, `yup`                              |
