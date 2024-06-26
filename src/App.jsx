import React from "react";
import "./App.css";
import AnswerComponent from "./components/AnswerComponent";
import Head from "./components/Head";
import QuestionComponent from "./components/QuestionComponent";
import FloatingActionButton from "./components/FloatingActionButton";

function App() {
  return (
    <div className="App">
      <Head />
      <div className="App-button">
        <button>⬅ Back to Questions</button>
      </div>
      <div className="App-content">
        <QuestionComponent />

        <div className="Answer">
          <h2>Answers (32)</h2>
          <div style={{ display: "flex", alignItems: "center", gap: '20px' }}>
            <h3>Sort By: </h3>
            <button className="drpdwn">Popular</button>
          </div>
        </div>
        <AnswerComponent />
      </div>
      <FloatingActionButton />
    </div>
  );
}

export default App;
