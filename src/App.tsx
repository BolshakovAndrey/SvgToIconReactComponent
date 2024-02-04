import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from "./Icon";
import '../src/styles/custom-icon.css'

// Массив объектов иконок
const icons = [
  { name: "alarm", className: "custom-icon" },
  { name: "home", className: "custom-icon" },
  { name: "pacman", className: "custom-icon" },
  { name: "spades", className: "custom-icon" },
  { name: "clubs", className: "custom-icon" },
  { name: "diamonds", className: "custom-icon" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Single Icon</p>
        <Icon name="clubs" className="custom-icon" />
        <p>MultiIcons</p>
        {icons.map(icon => (
          <Icon name={icon.name} className="custom-icon" size={28}/>
        ))}
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
