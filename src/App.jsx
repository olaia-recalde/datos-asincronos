import "./App.css";
import { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Carga aquí los posts con un useEffect...
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          setPosts(data);
          setIsLoading(false); 
        });
  }, []);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <h1>Ejercicio Posts</h1>

      <PostForm addPost={addPost}/>
      {isLoading ? (
      <img src="../public/spinning-circles.svg" alt="Cargando..."/>
    ) : (
      <>
        {posts.length > 0 && <PostList posts={posts} />}
        {posts.length === 0 && <p>No hay posts todavía</p>}
      </>
    )}
    </>
  );
}

export default App;