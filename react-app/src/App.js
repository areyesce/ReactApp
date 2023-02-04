import './App.css';
import FetchAPI from "./components/API/FetchAPI";

// Function: App
// Purpose: Called in index.js
// Return: Call to FetchAPI file which prompts user to enter VIN number

function App() {
  return (
    <div className="App">
      <div>
        <FetchAPI />
      </div>
    </div>
  );
}

export default App;
