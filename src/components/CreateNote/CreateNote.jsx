import React, { useState } from 'react';
import { useUserContext } from '../../hooks/useUserContext';
import { createNote } from '../../services/fetch-utils';

export default function CreateNote() {
  const { user } = useUserContext();

  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote({ user_id: user.id, heading, content });
    setHeading('');
    setContent('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="heading">Note heading:</label>
        <input
          type="text"
          name="heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          required
        />
        <label htmlFor="content">Your note:</label>
        <input
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
}
