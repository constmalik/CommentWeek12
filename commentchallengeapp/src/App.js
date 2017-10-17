import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor() {
    super();
    // this.handleLike = this.handleLike.bind(this);
    this.state = {
      commentBox: "",
      comments: []
    };
  }
  //when text is entered into input field.
  handleChange = (event) => {
    this.setState({
      commentBox: event.target.value
    });
  }
  //upon click of submit button
  handleSubmit = () => {
    if(this.state.commentBox === "" || this.state.commentBox === " ") {
      return;
    }
    const stateCopy = Object.assign({}, this.state);
    // let newComments = {comment: this.state.commentBox, likes:0, dislikes: 0}
    stateCopy.comments.push({
      comment: this.state.commentBox,
      likes: 0,
      dislikes: 0,
      replies: []
    });
    stateCopy.commentBox = '';
    this.setState(stateCopy);
  }
  //once like button is clicked
  handleLike = (i) => {
    const commentsArray = this.state.comments.slice();
    commentsArray[i].likes++;
    this.setState({
      comments: commentsArray
    });
  }
  //once dislike button is clicked
  handleDislike = (i) => {
    const commentsArray = this.state.comments.slice();
    commentsArray[i].dislikes++;
    this.setState({
      comments: commentsArray
    });
  }
  render() {
    let comments = this.state.comments.map((userInput, i) => {
      return (
        <div id="eachComment"key={i}>
          <span id="commentText">{userInput.comment}</span>
          <button id="likebtn" onClick={() => this.handleLike(i)}>like {userInput.likes}</button>
          <button id="dislikebtn" onClick={() => this.handleDislike(i)}>dislike {userInput.dislikes}</button>
          <button>reply</button>
        </div>
      )
    }, this);
    return (
      <div className="container">
        <div className="header">
          <h1>Comment Challenge App</h1>
        </div>
        <section className="getcomments">
          <div className="addcomment">
            <input type="text" id="comment" placeholder="Leave a comment" onChange={this.handleChange} value={this.state.commentBox}/>
            <button id="commentbtn" onClick={this.handleSubmit}>Comment</button>
          </div>
        </section>
        <section className="showcomments">
          {comments}
        </section>
      </div>
    );
  }
}
export default App;
