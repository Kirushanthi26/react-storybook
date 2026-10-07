import type { Meta, StoryObj } from "@storybook/react-vite";
import Post from "../Post";
import { expect, fn, userEvent } from "storybook/test";

const meta = {
  title: "Cool/Post",
  component: Post,
  tags: ["autodocs"], //This is used to generate the documentation for the component
  //default values for the post component
  args: {
    content: "The content of a cool story",
    title: "Cool Story",
    onTagAdded: () => {}, // This is a function that is called when a tag is added.
    onTagRemoved: () => {}, // This is a function that is called when a tag is removed.
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

/**
 * This test checks if the tag is deleted when the delete button is clicked.
 *
 * findAllByRole is used to find all the delete buttons in the screen.
 *
 * userEvent.setup is used to setup the user event.
 *
 * click is used to click the delete button.
 *
 * queryByText is used to check if the tag is deleted from the screen.
 *
 * args is the arguments passed to the story.
 *
 * onTagRemoved is the function that is called when the tag is removed.
 *
 * toHaveBeenCalledWith is used to check if the function has been called with the correct arguments.
 */

export const DeleteTagTest: Story = {
  args: {
    initialTags: ["Tag 1", "Tag 2", "Tag 3"],
    onTagRemoved: fn(), //fn is a function invoked when the tag is removed.
  },
  play: async ({ canvas, args }) => {
    const tagOne = await canvas.findByText("Tag 1", { selector: "span" });
    const tagTwo = await canvas.findByText("Tag 2", { selector: "span" });
    const tagThree = await canvas.findByText("Tag 3", { selector: "span" });
    await expect(tagOne).toBeInTheDocument();
    await expect(tagTwo).toBeInTheDocument();
    await expect(tagThree).toBeInTheDocument();

    const deleteTagButton = (await canvas.findAllByRole("button"))[0];

    const user = userEvent.setup();
    await user.click(deleteTagButton);

    await expect(canvas.queryByText("Tag 1")).not.toBeInTheDocument();

    await expect(args.onTagRemoved).toHaveBeenCalledWith("Tag 1");
  },
};

/**
 * "input" is the HTML tag. The role of <input type="text"> is "textbox". The name option is the label a screen reader would read, which here is aria-label="Add Tag". The HTML attribute name="addTagInput" is only the form field name, so findByRole ignores it.
 *
 * onTagAdded is the function that is called when the tag is added.
 *
 * toHaveBeenCalledWith is used to check if the function has been called with the correct arguments.
 *
 * queryByText is used to check if the tag is added to the screen.
 *
 * toBeInTheDocument is used to check if the tag is added to the screen.
 *
 * toHaveValue is used to check if the input has the correct value.
 *
 * toBeInTheDocument is used to check if the tag is added to the screen.
 */

export const AddTagTest: Story = {
  args: {
    initialTags: ["Tag 1", "Tag 2", "Tag 3"],
    onTagAdded: fn(), //fn is a function invoked when the tag is added.
  },
  play: async ({ canvas, args }) => {
    //another way: findbyplaceholder is used to find the add tag input in the screen.
    const addTagInput = await canvas.findByRole("textbox", {
      name: "Add Tag",
    });
    const user = userEvent.setup();
    await user.type(addTagInput, "Tag 4");

    const addTagButton = await canvas.findByRole("button", { name: "Add" });
    await user.click(addTagButton);

    await expect(canvas.queryByText("Tag 4")).toBeInTheDocument();
    await expect(args.onTagAdded).toHaveBeenCalledWith("Tag 4");

    await expect(addTagInput).toHaveValue("");
  },
};
