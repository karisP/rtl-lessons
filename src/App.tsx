import LevelOne from "./LevelOne/LevelOne";
import "./App.css";
import LevelTwo from "./LevelTwo/LevelTwo";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>RTL Lessons</h1>
        <div className="image-container">
          <img
            className="px-2"
            src="https://testing-library.com/img/octopus-128x128.png"
          />
          <p className="px-2">+</p>
          <img
            className="px-2"
            src="https://testing-library.com/img/react-128x128.png"
          />
        </div>
      </div>
      <LevelOne />
      <LevelTwo />
    </div>
  );
}

export default App;
