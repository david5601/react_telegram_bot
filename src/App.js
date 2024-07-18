import "./App.css";
import React, { useEffect } from "react";
import { ReactDOM } from "react-dom";
import Welcome from "./components/Welcome";
import ButttonGroup from "./components/ButtonGroup/ButttonGroup";
import tronIcon from "./assets/images/tron.webp"
import bnbIcon from "./assets/images/Binance.webp"
import ToolBar from "./components/ToolBar/ToolBar";

// window.Telegram.WebApp.MainButton.show();
// window.Telegram.WebApp.MainButton.setText("Hello");
// window.Telegram.WebApp.MainButton.onClick(() => {
//   window.Telegram.WebApp.showAlert("Hello World");
// });

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <>
      <div className="App">
        <Welcome name='Cool' />
        <ButttonGroup name="Tron(TRX)" src={tronIcon}/>
        <ButttonGroup name="Binance Coin(BNB)" src={bnbIcon}/>
        <ToolBar/>
      </div>
    </>
  );
}

export default App;
