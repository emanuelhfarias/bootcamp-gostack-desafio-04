import React from 'react';

import Comment from './Comment';

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
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  )
}

export default Post;