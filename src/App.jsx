import "./App.css";
import AnswerComponent from "./components/AnswerComponent";
import Head from "./components/Head";
import QuestionComponent from "./components/QuestionComponent";
import DropdownMenu from './components/DropdownMenu';
import FloatingActionButton from "./components/FloatingActionButton";
import floatClosed from "./assets/floatClosed.png"
import IssueForm from "./components/float/IssueForm";
import Share from "./components/float/Share";
import Suggestion from "./components/float/Suggestion";
import Contactus from "./components/float/Contactus";

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
          <div style={{ display: "flex", alignItems: "center" ,gap:'20px'}}>
            <h3>Sort By: </h3>
            <button className="drpdwn">Popular</button>
          </div>
        </div>
        <AnswerComponent />
      </div>
      <FloatingActionButton>
      <DropdownMenu />
      </FloatingActionButton>
      {/* <IssueForm /> */}
      {/* <Share/> */}
      {/* <Suggestion/> */}
      <Contactus />
    </div>
  );
}

export default App;
