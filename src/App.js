import "./App.css";
import React, { useEffect } from "react";
import Welcome from "./components/Welcome";
import ToolBar from "./components/ToolBar/ToolBar";
import Wallets from "./components/Wallets/Wallets";
import Friends from "./components/Friends/Friends";
import Tasks from "./components/Tasks/Tasks";
import TronMining from "./components/TronMining/TronMining";
import TronWithdraw from "./components/Withdraw/TronWithdraw";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Welcome name="COOL"/>}></Route>
          <Route path="/wallets" element={<Wallets/>}></Route>
          <Route path="/friends" element={<Friends/>}></Route>
          <Route path="/tasks" element={<Tasks/>}></Route>
          <Route path="/tron_mining" element={<TronMining/>}></Route>
          <Route path="/tron_withdraw" element={<TronWithdraw/>}></Route>
        </Routes>
        <ToolBar />
      </div>
    </Router>
  );
}

export default App;
