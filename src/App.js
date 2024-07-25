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
import Boost from "./components/Boost/Boost";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import axios from 'axios'

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

const MainApp = () => {
  const query = useQuery();
  const id = query.get('userID');
  const userName = query.get('userName');

  const dispatch = useDispatch();
  const accountID = useSelector(state => state.account.accountID);

  useEffect(() => {
    if (id) {
      dispatch(setAccountId(id));
    }
  }, [id, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Welcome name={userName}/>}></Route>
        <Route path="/wallets" element={<Wallets/>}></Route>
        <Route path="/friends" element={<Friends/>}></Route>
        <Route path="/tasks" element={<Tasks/>}></Route>
        <Route path="/tron_mining" element={<TronMining/>}></Route>
        <Route path="/binance_mining" element={<BinanceMining/>}></Route>
        <Route path="/tron_withdraw" element={<TronWithdraw/>}></Route>
        <Route path="/binance_withdraw" element={<BinanceWithdraw/>}></Route>
        <Route path="/boost" element={<Boost/>}></Route>
      </Routes>
      <ToolBar />
    </div>
  );
};

// function App() {
//   const query = useQuery();
//   const id = query.get('userID');
//   const userName = query.get('userName');

//   const [userID, setUserID] = useState([]);
//   const dispatch = useDispatch();
//   const accountID = useSelector(state => state.account.accountID);

//   useEffect(() => {
//     if (id) {
//       dispatch(setAccountId(id));
//     }
//   }, [id, dispatch]);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route exact path="/" element={<Welcome name={userID}/>}></Route>
//           <Route path="/wallets" element={<Wallets/>}></Route>
//           <Route path="/friends" element={<Friends/>}></Route>
//           <Route path="/tasks" element={<Tasks/>}></Route>
//           <Route path="/tron_mining" element={<TronMining/>}></Route>
//           <Route path="/binance_mining" element={<BinanceMining/>}></Route>
//           <Route path="/tron_withdraw" element={<TronWithdraw/>}></Route>
//           <Route path="/binance_withdraw" element={<BinanceWithdraw/>}></Route>
//         </Routes>
//         <ToolBar />
//       </div>
//     </Router>
//   );
// }

export default App;
