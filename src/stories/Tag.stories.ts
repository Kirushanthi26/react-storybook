import type { Meta, StoryObj } from "@storybook/react-vite";
import Tag from "../Tag";

const meta = {
  //Cool is used to group the stories in the sidebar
  title: "Cool/Tag",
  component: Tag, //This is the component that is being described
} satisfies Meta<typeof Tag>;
//Meta is a type that is used to describe the component
//satisfies is used to ensure that the component satisfies the Meta type

export default meta;

//StoryObj is a type that is used to describe the story
//Tag is the component that is being described
type Story = StoryObj<typeof meta>;

//Base is the name of the story. we can have multiple stories for the same component.
//args is an object that is used to pass props to the component
//label is the prop that is being passed to the component
//Tag test text is the value of the label prop
export const Base: Story = {
  args: {
    label: "Tag test text",
    variant: "primary",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete tag",
    variant: "danger",
  },
};
