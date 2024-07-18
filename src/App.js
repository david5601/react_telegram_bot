import "./App.css";
import React, { useEffect } from "react";

window.Telegram.WebApp.MainButton.show();
window.Telegram.WebApp.MainButton.setText("Hello");
window.Telegram.WebApp.MainButton.onClick(() => {
  window.Telegram.WebApp.showAlert("Hello World");
});

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      // console.log("Hello World!");
      // window.Telegram.WebApp.showAlert("Hello World");
    }
    // console.log("No Hello World");
  }, []);

  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
      </div>
      <div className="bar">
        <ul className="">

        </ul>
      </div>
    </>
  );
}

export default App;
