# React Storybook

This project is a small React app used to learn Storybook. The Vite app is the normal website. Storybook is a separate workshop where each component can be opened on its own, with different props, without running the whole app.

## What we covered so far

- A Vite + React + TypeScript app, with Tailwind CSS for utility classes such as `bg-blue-500` and `flex`.
- Storybook stories for the example `Button`, `Header`, and `Page` components.
- A `Tag` component whose `variant` prop picks a color: `primary`, `secondary`, `danger`, `warning`, or `success`.
- Tag stories that pass props with `args`, render several tags together, and expose a `gap` range control.
- A `Post` component that shows a title, content, and tags. You can add and remove tags. Its story supplies empty `onTagAdded` and `onTagRemoved` handlers.
- `fn()` from `storybook/test` on the Button `onClick` prop. This is a watched fake function. When you click the button, the Actions panel records the call. It does not run real app logic.
- Tailwind is loaded in Storybook by importing `src/index.css` from `.storybook/preview.tsx`.
- `.storybook/styles.d.ts` contains `declare module "*.css"`. TypeScript does not treat `.css` as a module by itself. That line tells TypeScript a CSS import is allowed.
- Stories that contain JSX, such as a custom `render` function, live in `.tsx` files. A `.ts` file cannot contain `<Tag />`.

## Requirements

- [Node.js](https://nodejs.org/) 20 or newer (npm comes with it)

## Install

From this folder:

```bash
npm install
```

## Run

Start the React app:

```bash
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

Start Storybook:

```bash
npm run storybook
```

Open `http://localhost:6006`. In the sidebar, example components are under **Example**. `Tag` and `Post` are under **Cool**.

## Other scripts

| Command | What it does |
| --- | --- |
| `npm run build` | Type-check the app and build it for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run build-storybook` | Build a static Storybook site |

## Important dependencies

Runtime packages (used by the app itself):

| Package | Why it is here |
| --- | --- |
| `react`, `react-dom` | Build and render the UI |
| `tailwindcss`, `@tailwindcss/vite` | Utility CSS classes, processed by Vite |

Dev packages (used to build, check, and view components):

| Package | Why it is here |
| --- | --- |
| `vite`, `@vitejs/plugin-react` | Dev server and production build |
| `typescript` | Type checking |
| `storybook`, `@storybook/react-vite` | Component workshop, using the Vite React setup |
| `@storybook/addon-docs` | Auto docs from stories tagged `autodocs` |
| `@storybook/addon-a11y` | Accessibility checks in Storybook |
| `@storybook/addon-vitest`, `vitest`, `playwright` | Run story tests in a browser |
| `eslint` and the ESLint plugins | Lint React and Storybook files |

## Project layout

```text
.storybook/          Storybook config, Tailwind import, CSS type declaration
src/App.tsx          React app entry screen
src/index.css        Tailwind import
src/Tag.tsx          Tag component
src/Post.tsx         Post component
src/stories/         Story files (*.stories.ts and *.stories.tsx)
```

Story files match `src/**/*.stories.ts` and `src/**/*.stories.tsx`, as set in `.storybook/main.ts`.
