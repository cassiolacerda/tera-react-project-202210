import React from "react";

import Default from "../templates/Default";

export default function CreatePost() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://63cf09718a780ae6e6710dbe.mockapi.io/users/1/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      setTitle("");
      setContent("");
    });
  };

  return (
    <Default>
      <div className="create-post">
        <h1>Criar</h1>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
            <input
              type="text"
              id="name"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="create-post__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
