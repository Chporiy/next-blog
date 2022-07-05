import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { useAddPostMutation } from '../app/api/postsApi';

const PostForm = () => {
  const [addPost, { isSuccess }] = useAddPostMutation();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onTitleChange = useCallback(
    ({ currentTarget }: FormEvent<HTMLInputElement>) => {
      setTitle(currentTarget.value);
    },
    [setTitle],
  );
  const onBodyChange = useCallback(
    ({ currentTarget }: FormEvent<HTMLTextAreaElement>) => {
      setBody(currentTarget.value);
    },
    [setBody],
  );
  const onSubmit = useCallback(async () => {
    if ([title, body].includes('')) return; // =>

    addPost({
      title,
      body,
      userId: 1,
      date: new Date().toISOString(),
    });
  }, [title, body, addPost]);

  useEffect(() => {
    if (isSuccess) {
      setTitle('');
      setBody('');
    }
  }, [isSuccess, setTitle, setBody]);

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
