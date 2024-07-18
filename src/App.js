import './App.css';
import React, { useEffect } from 'react';



function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>  
    </div>
  );
}

export default App;
