import type { Meta, StoryObj } from "@storybook/react-vite";
import Tag from "../Tag";

const meta = {
  //Cool is used to group the stories in the sidebar
  title: "Cool/Tag",
  component: Tag, //This is the component that is being described
  parameters: {
    backgrounds: {
      options: {
        green: { name: "Green", value: "#00ff00" }, //green is the default background color which is only visible in the tag component background
      },
    },
  },
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
  parameters: {
    backgrounds: {
      options: {
        //orange is the background color which is only visible in the tag component background when the danger story is selected
        orange: { name: "Orange", value: "#ffa500" },
      },
    },
  },
};

export const MultipleTags: StoryObj = {
  render: () => (
    <div className="flex gap-2">
      <Tag label="Tag 1" variant="primary" />
      <Tag label="Tag 2" variant="secondary" />
      <Tag label="Tag 3" variant="danger" />
      <Tag label="Tag 4" variant="warning" />
      <Tag label="Tag 5" variant="success" />
    </div>
  ),
};

type MultipleTagsCustomGapProps = {
  gap: number;
};

export const MultipleTagsCustomGap: StoryObj<MultipleTagsCustomGapProps> = {
  args: {
    gap: 2,
  },

  argTypes: {
    gap: {
      control: {
        type: "range",
        min: 0,
        max: 32,
        step: 2,
      },
    },
  },

  render: (args) => (
    <div className="flex" style={{ gap: `${args.gap}px` }}>
      <Tag label="Tag 1" variant="primary" />
      <Tag label="Tag 2" variant="secondary" />
      <Tag label="Tag 3" variant="danger" />
      <Tag label="Tag 4" variant="warning" />
      <Tag label="Tag 5" variant="success" />
    </div>
  ),
};
