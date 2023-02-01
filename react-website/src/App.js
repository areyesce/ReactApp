import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GO AHEAD AND Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// import React from "react";
// import Form from "./components/Form";
// import FormStatus from "./components/FormStatus";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <div className="App">
//           <Route exact path="/" component={Form} />
//           <Route path="/form-status" component={FormStatus} />
//         </div>
//       </Routes>
//     </Router>
//   );
// }
