import React, { Component } from 'react';

import './PostList.css';
import User from '../assets/user.svg';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <div className="wrapper">

        <div className="post">
          <div className="post-info">
            <img src={User} />
            <div className="post-info-topo">
              <strong>Fernanda</strong>
              <small>02 Jan 2020</small>
            </div>
          </div>
          <div className="post-text">
            Pessoal, alguém pode me explicar mais sobre tênis de mesa?
          </div>
          <ul className="comments">
            <li>
              <img src={User} />
              <section>
                <p>
                  <strong>Ma Long</strong>:
                  Table tennis, also known as ping-pong, is a sport in which two
                  or four players hit a lightweight ball back and forth across a
                  table using small rackets. The game takes place on a hard table
                  divided by a net. Except for the initial serve, the rules are
                  generally as follows: players must allow a ball played toward
                  them to bounce one time on their side of the table, and must
                  return it so that it bounces on the opposite side at least once.
                  A point is scored when a player fails to return the ball
                  within the rules. Play is fast and demands quick reactions.
                  Spinning the ball alters its trajectory and limits an opponent's
                  options, giving the hitter a great advantage. 
                </p>
              </section>
            </li>
            <li>
              <img src={User} />
              <section>
                <p>
                  <strong>Xu Xin</strong>:
                  Table tennis is governed by the worldwide organization
                  International Table Tennis Federation (ITTF), founded in 1926.
                  ITTF currently includes 226 member associations. The table
                  tennis official rules are specified in the ITTF handbook.
                  Table tennis has been an Olympic sport since 1988, with 
                  several event categories. From 1988 until 2004, these were 
                  men's singles, women's singles, men's doubles and women's doubles. 
                  Since 2008, a team event has been played instead of the doubles. 
                </p>
              </section>
            </li>
          </ul>
        </div>

        <div className="post">
          <div className="post-info">
            <img src={User} />
            <div className="post-info-topo">
              <strong>Emanuel</strong>
              <small>02 Jan 2020</small>
            </div>
          </div>
          <div className="post-text">
            Alguém sabe onde caçar em Venore, sou pally level 30?
          </div>
          <ul className="comments">
            <li>
              <img src={User} />
              <section>
                <p>
                  <strong>Cachero</strong>:
                  Tem uma D'lair um pouco antes de chagar em Venore, indo pro sul.
                  Lá você vai encontrar Drag e DL. Leva bastante mana e Sniper Arrows.
                  Boa hunt!
                </p>
              </section>
            </li>
          </ul>
        </div>

      </div>
    )
  }

}

export default PostList;