import React from 'react';

import User from '../assets/user.svg';

function Comment({ comment }) {
  return (
    <li key={comment.id}>
      <img src={User} />
      <section>
        <p>
          <strong>{comment.author.name}</strong> {comment.content}
        </p>
      </section>
    </li>
  )
}

export default Comment;