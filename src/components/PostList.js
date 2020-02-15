import React, { Component } from 'react';

import Post from './Post';

import './PostList.css';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Fernanda",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "02 Jan 2020",
        content: "Pessoal, alguém pode me explicar mais sobre tênis de mesa?",
        comments: [
          {
            id: 1,
            author: {
              name: "Ma Long",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: `Table tennis, also known as ping-pong, is a sport in which two
              or four players hit a lightweight ball back and forth across a
              table using small rackets. The game takes place on a hard table
              divided by a net. Except for the initial serve, the rules are
              generally as follows: players must allow a ball played toward
              them to bounce one time on their side of the table, and must
              return it so that it bounces on the opposite side at least once.
              A point is scored when a player fails to return the ball
              within the rules. Play is fast and demands quick reactions.
              Spinning the ball alters its trajectory and limits an opponent's
              options, giving the hitter a great advantage.`
          },
          {
            id: 2,
            author: {
              name: "Xu Xin",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: `Table tennis, also known as ping-pong, is a sport in which two
              or four players hit a lightweight ball back and forth across a
              table using small rackets. The game takes place on a hard table
              divided by a net. Except for the initial serve, the rules are
              generally as follows: players must allow a ball played toward
              them to bounce one time on their side of the table, and must
              return it so that it bounces on the opposite side at least once.
              A point is scored when a player fails to return the ball
              within the rules. Play is fast and demands quick reactions.
              Spinning the ball alters its trajectory and limits an opponent's
              options, giving the hitter a great advantage.`
          },
        ]
      },
      {
        id: 2,
        author: {
          name: "Emanuel",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "02 Jan 2020",
        content: "Alguém sabe onde caçar em Venore, sou pally level 30?",
        comments: [
          {
            id: 3,
            author: {
              name: "Cachero",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: `Tem uma D'lair um pouco antes de chagar em Venore, indo pro sul.
              Lá você vai encontrar Drag e DL. Leva bastante mana e Sniper Arrows.
              Boa hunt!`
          },
        ]
      },
    ]
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }

}

export default PostList;