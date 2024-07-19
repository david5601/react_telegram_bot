import "./App.css";
import React, { useEffect } from "react";
import Welcome from "./components/Welcome";
import ButttonGroup from "./components/ButtonGroup/ButttonGroup";
import tronIcon from "./assets/images/tron.webp"
import bnbIcon from "./assets/images/Binance.webp"
import ToolBar from "./components/ToolBar/ToolBar";

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
        <div style={{paddingTop: "20px"}}>
          <ButttonGroup name="Tron(TRX)" src={tronIcon}/>
          <ButttonGroup name="Binance Coin(BNB)" src={bnbIcon}/>
        </div>
        <ToolBar/>
      </div>
    </>
  );
}

export default App;
