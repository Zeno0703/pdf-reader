import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar.jsx';

function App() {

  const getFile = () => {
    // const { dialog } = window.electron.remote;
    // dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
    console.log("Hello world!");
  };

  return (
    <div>
      <Navbar onClick={() => getFile()}/>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);