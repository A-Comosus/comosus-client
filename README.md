# 🍍 A.Comosus Client Side NextJS Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🏃‍♂️ How to run this project?

First, set up the development environment

TL;DR You need to set up following environment variables.

| Name                             | Description                                                   |
| -------------------------------- | ------------------------------------------------------------- |
| **#Google ReCaptcha**            |                                                               |
| \*NEXT_PUBLIC_RECAPTCHA_SITE_KEY | Access key to enable Google ReCaptcha                         |
| **#Opensea**                     |                                                               |
| NEXT_PUBLIC_OPENSEA_URL          | Base Url to view NFT on opensea                               |
| **#Alchemy**                     |                                                               |
| NEXT_PUBLIC_ALCHEMY_APP_URL      | Alchemy supported app url to create the Alchemy web3 instance |
| \*NEXT_PUBLIC_ALCHEMY_API_KEY    | Key to access Alchemy API                                     |
| NEXT_PUBLIC_ALCHEMY_NETWORK      | Alchemy supported network to fetch nfts from                  |
| NEXT_PUBLIC_CONTRACT_ADDRESS     | Smart Contract address where the nfts will be mint from       |
| **#Pinata**                      |                                                               |
| NEXT_PUBLIC_PINATA_KEY           | I don't know what this is yet, ask Max if you want to know    |
| NEXT_PUBLIC_PINATA_SECRET        | I don't know what this is yet, ask Max if you want to know    |
| **#A-Comosus**                   |                                                               |
| NEXT_PUBLIC_CLIENT_BASE_URL      | Base URL of client                                            |
| NEXT_PUBLIC_GRAPHQL_ENDPOINT     | URL to backend server                                         |

Then you want to make sure you have downloaded all the dependencies used for this project,

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

## 🅱️ How to start storybook?

Alright, we have support for storybook now!

To load the storybook when you are in developmetn mode, you can run the following command to spin up a storybook server at port 6006

```sh
yarn storybook
```

To build a static storybook website, you can run the following command

```sh
yarn build-storybook
```

## 🧪 How to test this app?

Simple! Just run this and you are good to go!

```bash
yarn test
```

To run e2e test with cypress, if you have the next server spinning already, then you can just run.

```bash
yarn e2e
# cypress run
```

However, there's also a command that allows you to start the server and run test at once.

```bash
yarn e2e:start-server
# start-server-and-test dev 3000 cypress run
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
