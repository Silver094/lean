import React from 'react';
import './QuestionComponent.css';

const QuestionComponent = () => {
  return (
    <div className="question-container">
      <div className="tags">
        <span className="tag">Design</span>
        <span className="tag">Technology</span>
      </div>
      <div className="question-content">
        <span>
        A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? 
        </span>
        <p>Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? </p>
      </div>
      <div className="question-meta">
        <span>👁️ 100 Views</span>
        <span>ⓘ How should you word your answer ?</span>
      </div>
    </div>
  );
};

export default QuestionComponent;
