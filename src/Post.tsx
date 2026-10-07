import { useState } from "react";
import Tag from "./Tag";

type Props = {
  title: string;
  content: string;
  initialTags?: string[];
  onTagAdded: (tag: string) => void;
  onTagRemoved: (tag: string) => void;
};

const Post = ({ initialTags = [], ...props }: Props) => {
  const [tags, setTags] = useState(initialTags);
  const [newTag, setNewTag] = useState("");

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()];
      setTags(updatedTags);
      props.onTagAdded(newTag);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    props.onTagRemoved(tagToRemove);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-gray-700 mb-2">{props.content}</p>

      <div>
        {tags.map((tag, index) => (
          <span
            key={index}
            className="tag"
            style={{
              position: "relative",
              display: "inline-block",
              marginRight: "8px",
            }}
          >
            <button
              onClick={() => removeTag(tag)}
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
              }}
            >
              ×
            </button>
            <Tag label={tag} variant="primary" />
          </span>
        ))}
      </div>

      <div className="flex flex-row gap-2">
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Add tag..."
          className="border border-gray-300 rounded-md p-2"
          aria-label="Add Tag"
          name="addTagInput"
        />
        <button
          onClick={addTag}
          className="bg-blue-500 text-white rounded-md p-6"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Post;
