import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import { createNote } from '../../services/fetch-utils';

export default function CreateNote() {
  const { user } = useUserContext();
  const history = useHistory();

  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote({ user_id: user.id, heading, content });
    setHeading('');
    setContent('');
    history.push('/');
  };

  return (
    <>
      <Link to="/">Back to Notes</Link>
      <section aria-label="container for form">
        <form aria-label="submit form to create a note" onSubmit={handleSubmit}>
          <div>
            <span>Create a Note</span>
          </div>
          <label htmlFor="heading">Note heading:</label>
          <input
            type="text"
            name="heading"
            placeholder="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
          />
          <label htmlFor="content">Your note:</label>
          <input
            type="text"
            name="content"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}
