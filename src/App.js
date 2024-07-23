import "./App.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setAccountId } from "./actions/accountActions";
import Welcome from "./components/Welcome";
import ToolBar from "./components/ToolBar/ToolBar";
import Wallets from "./components/Wallets/Wallets";
import Friends from "./components/Friends/Friends";
import Tasks from "./components/Tasks/Tasks";
import TronMining from "./components/TronMining/TronMining";
import BinanceMining from "./components/BinanceMining/BinanceMining";
import TronWithdraw from "./components/Withdraw/TronWithdraw";
import BinanceWithdraw from "./components/Withdraw/BinanceWithdraw";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios'

function App() {
  const [userID, setUserID] = useState([]);
  const dispatch = useDispatch();
  const accountID = useSelector(state => state.account.accountID);

  useEffect(() => {
    const fetchUserID = async () => {
      try {
        const response = await axios.get("https://api.refgetaway.net/telegram/api/userid")
        setUserID(response.data);
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    };

    fetchUserID();
  }, []);

  const handleSetAccountId = (id) => {
    dispatch(setAccountId(id));
  }


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Welcome name={userID}/>}></Route>
          <Route path="/wallets" element={<Wallets/>}></Route>
          <Route path="/friends" element={<Friends/>}></Route>
          <Route path="/tasks" element={<Tasks/>}></Route>
          <Route path="/tron_mining" element={<TronMining/>}></Route>
          <Route path="/binance_mining" element={<BinanceMining/>}></Route>
          <Route path="/tron_withdraw" element={<TronWithdraw/>}></Route>
          <Route path="/binance_withdraw" element={<BinanceWithdraw/>}></Route>
        </Routes>
        <ToolBar />
      </div>
    </Router>
  );
}

export default App;
