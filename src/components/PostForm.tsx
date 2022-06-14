import React, { FormEvent, useCallback, useState } from "react";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onTitleChange = useCallback(
    ({ currentTarget }: FormEvent<HTMLInputElement>) => {
      setTitle(currentTarget.value);
    },
    [setTitle]
  );
  const onBodyChange = useCallback(
    ({ currentTarget }: FormEvent<HTMLTextAreaElement>) => {
      setBody(currentTarget.value);
    },
    [setBody]
  );
  const onSubmit = useCallback(async () => {
    if ([title, body].includes("")) return; // =>

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setTitle("");
    setBody("");
  }, [title, body, setTitle, setBody]);

  return (
    <form className="postForm">
      <input type="text" name="title" value={title} onChange={onTitleChange} />
      <textarea
        className="postForm-text"
        name="body"
        value={body}
        onChange={onBodyChange}
      />
      <button type="button" onClick={onSubmit}>
        submit
      </button>
    </form>
  );
};

export default PostForm;
