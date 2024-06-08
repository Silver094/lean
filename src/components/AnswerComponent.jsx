import React from 'react';
import './AnswerComponent.css';
import like from '../assets/like.png'
import user from '../assets/user.png'
const AnswerComponent = () => {
  return (
    <div className="answer-container">
      <div className="answer-header">
        <div style={{display:"flex",alignItems:'center'}}>
        <img src={user} alt="Profile" className="profile-pic" />
        <div>
          <h3>Neha Bhat (You)</h3>
          <p>Jun 27, 2023</p>
          </div>
        </div>
        <button className="edit-button">Edit</button>
      </div>
      <div className="answer-content">
        <p>Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam. Bibendum amet mi.... 
        <span className="show-more">Show more</span></p>
      </div>
      <div className="answer-actions"> 
        <button className="like-button"><img src={like} /> Like</button>
        <input type="text" placeholder="Add a comment" className="comment-input" />
        <button className="post-button">Post</button>
      </div>
    </div>   
  );
};

export default AnswerComponent;
