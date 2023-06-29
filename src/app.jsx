import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/test_component.jsx';

function App() {
  return (
    <div>
      <h1>PDF-reader</h1>
      <TestComponent />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));