# Gaudiy Frontend Coding Test Submission

Welcome to my submission for the Gaudiy Frontend Coding Test. The application is a Single Page Application (SPA) designed to showcase real-time financial data for cryptocurrencies, specifically BTC and ETH.

You can view the live website [here](https://gaudiy-exchange-fe.vercel.app).

## Project Overview

The project is structured as a monorepo using Turborepo, promoting code reusability and consistency across different parts of the application. Within the `packages` directory, you'll find:

- `apps`: Directory for all the apps that is potentially needed for Gaudiy
- `apps/gaudiy-exchange-fe`: Directory for the exchange app for this code test
- `packages`: Internal packages are packages which are only intended to be used inside the monorepo. They're extremely useful for sharing code between apps in closed-source monorepos.
- `packages/libs`: Houses shared utilities and custom hooks that are used across the application, centralized for easier maintenance and updates.
- `packages/libs/ui`: Contains the UI components built with TailwindCSS and TypeScript, ensuring a consistent design system and developer experience.
- `packages/libs/utils`: Contains the utils for the whole monorepo.
- `packages/eslint-config`: This package contains shared ESLint configuration that can be used across different apps within the monorepo to ensure consistent coding styles and rules.
- `packages/tailwind-config`: This package include a shared configuration for Tailwind CSS. By keeping it in a separate package, we can ensure that all applications within the monorepo use the same design tokens and styling conventions.
- `packages/typescript-config`: Similar to eslint-config, this package contains shared TypeScript configuration. It helps maintain consistent compiler options and type-checking across all TypeScript applications and packages in the monorepo.

This architecture supports rapid scaling, as seen in a series B startup environment, by facilitating the growth of the codebase while maintaining a single source of truth for shared components and styles.

## Technical Decisions

- **Turborepo**: Chosen for its efficiency in managing monorepos and its caching capabilities, which is crucial for fast builds and iterations.
- **TailwindCSS**: Utilized for its utility-first approach, allowing for rapid UI development without sacrificing the ability to customize and extend.
- **TypeScript**: Employed for its static typing capabilities, enhancing code quality and maintainability.
- **Jest**: Selected for unit and integration testing due to its wide adoption and the richness of its testing features.
- **React Router DOM**: Incorporated for its simplicity and popularity, ensuring that new team members can easily understand and contribute to the routing logic.

## Setup Instructions

### Prerequisites

- Node.js (LTS)
- npm or bun (I recommend using [bun](https://bun.sh/) for its performance benefits)

### Installation & Local Development

#### With npm

```sh
npm install
npm run build
npm run dev
```

or

```sh
bun install
bun run build
bun run dev
```

After running the above commands, the application will be available at http://localhost:5173/.

## Running Tests

To run the test suite, execute the following command:

```sh
npm test
```

or

```sh
bun run test
```

## Potential Improvements

Due to time constraints, the following areas have been identified for future improvements:

- End-to-End Testing: Integration with Cypress for E2E testing is planned to ensure comprehensive coverage of user interactions.
- Deprecated Libraries: The @testing-library/react-hooks is currently deprecated due to React 16 usage. An upgrade to the latest React version is in the pipeline, and corresponding testing libraries will be updated.
- Add storybook: For visual test
- A more detailed and streamlined Git history. While this project's Git history doesn't reflect it due to time constraints, I am well-versed in proper Git practices and even know how to set up commitizen (cz) for streamlined Git performance.

## Final Thoughts

This project has been crafted with growth in mind. As a series B startup, the ability to scale quickly and effectively is paramount. The chosen technologies and project structure reflect a balance between rapid development and long-term maintainability, which is essential for a fast-growing company. The flexibility of the codebase allows for quick onboarding of new engineers, ensuring that the team can scale as fast as the application.

## Notes on Git Usage

For this submission, the Git history might not fully reflect conventional commits and the usual granular commit strategy. This is solely due to the expedited nature of the coding test. In a typical development environment, I employ a rigorous commit process, including conventional commit messages that enhance readability and maintainability.

- Time Taken: The task was completed in 1.5 days.
- Technologies Used for the First Time: This project was my first experience using TradingView, which I found to be an efficient solution for integrating financial charts.
- Rationale Behind NPM Package Choices: I opted to utilize radix for its comprehensive design system and react-icons for the vast selection of readily available icons. These choices were made to ensure a balance between aesthetic appeal and functional robustness.
- Use of Language Models: I leveraged ChatGPT predominantly to discuss architectural decisions and gather insights on best practices.
