import React from 'react';
import './App.css';

function App() {

  const langs = ['html', 'css', 'js', 'php'];

  return (
    <div>
      <ul>{langs.map(item => <li>{item}</li>)}</ul>
    </div>
  );
}

export default App;
