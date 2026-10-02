import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { options } from "less";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      //backgrounds are the colors that are used to render the entire storybook component in the storybook
      options: {
        blue: { name: "Blue", value: "#007bff" },
        dark: { name: "Dark", value: "#000000" },
        light: { name: "Light", value: "#ffffff" },
      },
      default: "light",
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
