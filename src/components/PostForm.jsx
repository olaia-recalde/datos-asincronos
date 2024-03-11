import { useState } from "react";

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const post = { title, body, userId: Number(userId) };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        addPost({...data, id: Math.random()});
        setIsSubmitting(false); 
        setTitle('');
        setBody('');
        setUserId('');
      });
  };

  if (isSubmitting) {
    return <img src="../../public/spinning-circles.svg" alt="Enviando..." />; // Muestra el indicador de carga
  }

  return (
    <form
      onSubmit={handleSubmit}
      // Envía los datos del nuevo post a la API. Si la respuesta es correcta, añadiremos el nuevo post al estado de posts
      >
      <label htmlFor="title">Título:</label>
      <input
        id="title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="body">Contenido:</label>
      <textarea
        id="body"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <label htmlFor="userId">ID usuario:</label>
      <input
        type="number"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button>Crear post</button>
    </form>
  );
};

export default PostForm;