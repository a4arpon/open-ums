# Open Contact Database

This is a Open Contact Database that allows to fetch and display user profiles from API endpoint. Users are presented with a list view containing user cards displaying basic information, and they can click on each card to access a detailed view with more information about the selected user. The project follows best practices for React development and is designed to be maintainable and well-structured.

## Project Structure

Here's an overview of the project structure:

```
- .eslintrc.cjs                  # ESLint configuration file
- .gitignore                     # Git ignore rules
- .husky                         # Git hooks configuration
- .prettierrc                    # Prettier configuration file
- index.html                     # Main HTML file
- node_modules                   # Node.js modules (dependencies)
- package.json                   # Project's package configuration
- postcss.config.js              # PostCSS configuration file
- src                            # Source code directory
  |- components                  # React components
  |- hooks                       # Custom React hooks
  |- interfaces                  # TypeScript interface definitions
  |- layouts                     # Page layouts
  |- lib                         # Utility and helper functions
  |- main.tsx                    # Main application file.
  |- index.css                   # CSS file for styling
  |- pages                       # Application pages
  |- providers                   # React context providers
  |- redux                       # Redux store setup and actions
  |- routes                      # Application routes and routing logic
  |- vite-env.d.ts               # Vite environment TypeScript declaration
- tailwind.config.js             # Tailwind CSS configuration file
- tsconfig.json                  # TypeScript configuration file
- tsconfig.node.json             # TypeScript configuration for Node.js
- vite.config.ts                 # Vite configuration file
- yarn.lock                      # Yarn lock file

```

## Project Dependencies

### Frontend Framework

- React: JavaScript library for building dynamic user interfaces.

### Styling

- Tailwind CSS: utility-first CSS framework used for responsive design and styling.
- Clsx: A utility for conditionally joining classNames together.
- Class Variance Authority: type-safe class controller
- Tailwind Merge: For merging conflicted tailwind classnames.

### Routing

- React Router DOM: A library for adding routing functionality to your React applications.

## Development Dependencies

### Development Environment

- Vite: A build tool that serves as the development server and bundler.

### Linting and Formatting

- ESLint: A tool for identifying and fixing problems in your JavaScript/TypeScript code.
- Prettier: An opinionated code formatter.
- eslint-config-prettier: ESLint configuration to disable conflicting Prettier rules.
- eslint-plugin-prettier: ESLint plugin that runs Prettier as an ESLint rule.

### TypeScript

- TypeScript: Superset of JavaScript that adds static types to your code.
- @types/react: TypeScript type definitions for React.
- @types/react-dom: TypeScript type definitions for React DOM.
- @types/node: TypeScript type definitions for Node.js.

### Git Hooks

- Husky: Tool that enables Git hooks to enforce code quality checks.

### Tailwind CSS & Post-processing CSS

- tailwindcss: The core library for Tailwind CSS.
- prettier-plugin-tailwindcss: A Prettier plugin for formatting Tailwind CSS files.
- PostCSS: A CSS post-processor that transforms styles with JavaScript plugins.
- autoprefixer: A PostCSS plugin to parse CSS and add vendor prefixes.

## Project Details

- Fetch user profiles from a mock API endpoint (you can use a static JSON file or a placeholder API).
- Display each user's name, email, and a profile picture.
- Implement a responsive design using Tailwind CSS for the user profile cards.
- Create a separate detail view for each user profile. When a user clicks on a profile card, it should navigate to a detail view displaying additional information about the user. You can choose what additional information to display.
- Implement routing in your React application to navigate between the list view and detail view.
- Make sure your application is well-structured, maintainable, and follows best practices for React development.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/a4arpon/open-ums.git
```

2. Install project dependencies using Yarn or npm.

```bash
cd open-ums && yarn install
# for npm : cd open-ums && npm install
```

3. Start the development server.

```bash
yarn dev
# for npm : npm run dev
```

4. Open your web browser and access the application at `http://localhost:3000`.

## Usage

Once the project is set up and running, you can interact with it as follows:

- Browse the list of user profiles on the main page.
- Click on a user card to view detailed information about that user.
