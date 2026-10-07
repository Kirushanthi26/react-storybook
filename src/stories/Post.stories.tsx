import type { Meta, StoryObj } from "@storybook/react-vite";
import Post from "../Post";
import { expect } from "storybook/test";

const meta = {
  title: "Cool/Post",
  component: Post,
  tags: ["autodocs"], //This is used to generate the documentation for the component
  //default values for the post component
  args: {
    content: "The content of a cool story",
    title: "Cool Story",
    onTagAdded: () => {},
    onTagRemoved: () => {},
  },
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

/**
 * args shows tag 1, 2, 3 in the screen. This test checks if the tags are displayed in the screen.
 *
 * This is a simple test to check if the tags are displayed in the screen.
 *
 * play for async function to wait for the tags to be displayed in the screen.
 *
 * canvas is the canvas element from the storybook test library.
 *
 * findByText is used to find the tags in the screen.
 *
 * await expect is used to wait for the tags to be displayed in the screen.
 *
 * toBeInTheDocument is used to check if the tags are displayed in the screen.
 *
 * all the tests pass will be visible in the storybook interactions tab.
 *
 * @param canvas - The canvas element
 */
export const WithInitialTags: Story = {
  args: {
    initialTags: ["Tag 1", "Tag 2", "Tag 3"],
  },
  play: async ({ canvas }) => {
    const tagOne = await canvas.findByText("Tag 1", { selector: "span" });
    const tagTwo = await canvas.findByText("Tag 2", { selector: "span" });
    const tagThree = await canvas.findByText("Tag 3", { selector: "span" });
    await expect(tagOne).toBeInTheDocument();
    await expect(tagTwo).toBeInTheDocument();
    await expect(tagThree).toBeInTheDocument();
  },
};
