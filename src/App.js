import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <StyledFont>
        <header className="App-header">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/51/IU_in_%22Love_Poem%22_Concert_in_Seoul_on_23rd_November_2019.jpg"
            }
            className="App-logo"
            alt="logo"
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </StyledFont>
    </div>
  );
}

export default App;
