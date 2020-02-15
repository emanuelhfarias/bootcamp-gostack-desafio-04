import React from 'react';

import User from '../assets/user.svg';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-info">
        <img src={User} />
        <div className="post-info-topo">
          <strong>{post.author.name}</strong>
          <small>{post.date}</small>
        </div>
      </div>

      <div className="post-text">
        {post.content}
      </div>

      <ul className="comments">
        {post.comments.map(comment => (
          <li key={comment.id}>
            <img src={User} />
            <section>
              <p>
                <strong>{comment.author.name}</strong> {comment.content}
              </p>
            </section>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Post;