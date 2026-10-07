import Post from "./Post";

function App() {
  const handleTagAdded = (tag: string) => {
    console.log(`Tag added: ${tag}`);
  };

  const handleTagRemoved = (tag: string) => {
    console.log(`Tag removed: ${tag}`);
  };

  return (
    <>
      <Post
        title="My First Post"
        content="This is the content of my first post"
        onTagAdded={handleTagAdded}
        onTagRemoved={handleTagRemoved}
      />
    </>
  );
}

export default App;
