const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        const { id, title, body, userId } = post;

        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <p>Creado por el usuario {userId}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;