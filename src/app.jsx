import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import styles from './styles/index.css'

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));