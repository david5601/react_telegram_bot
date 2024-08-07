import React from 'react'
import "./Friends.css"
import searchIcon from "../../assets/images/Vector-Search-PNG-Image.png"
import tronIcon from "../../assets/images/tron.webp"
import binanceIcon from "../../assets/images/Binance.webp"
import BigNumber from 'bignumber.js'
let row = ["Date", "Type", "Username"];

const LstestFriendOperations = (props) => {

    const getCoinIcon = (icon) => {
        if (icon == 0) {
            return tronIcon;
        }
        else {
            return binanceIcon;
        }
    }

    const checkLstestOperations = () => {
        if (props.lstestOperations?.length == 0) {
            return (
                <div className="search-icon">
                    <img src={searchIcon}></img>
                    <p>No transaction yet...</p>
                </div>
            )
        } 
    }
    const formatDateString = (dateStr) => {
        // Create a Date object
        const date = new Date(dateStr);
        
        // Format the date parts
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
        const day = String(date.getUTCDate()).padStart(2, '0');
        
        // Format the time parts
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        
        // Combine the date and time parts
        const formattedDate = `${year}-${month}-${day}\n ${hours}:${minutes}:${seconds}`;
        
        return formattedDate;
    }
    
    const createTable = () => {
        row = props.lstestOperations;
    
        return (
          <tbody>
            {row?.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{formatDateString(item.created_at)}</td>
                  <td>Invite Friend</td>
                  <td>@{item.username}</td>
                </tr>
              );
            })}
          </tbody>
        );
      };

  return (
    <>
        <h3 style={{fontSize: "21px", margin: "0px"}}>Lstest operations</h3>
        <div className='lstest-operations'>
            <table id="lstest_operations">
                <thead>
                    <tr>
                        <th style={{width: "25%"}}>
                            Date
                        </th>
                       
                        <th style={{width: "30%"}}>
                            Type
                        </th>
                        <th style={{width: "16%"}}>
                            Username
                        </th>
                    </tr>
                </thead>
                {createTable()}
            </table>
        </div>
        {checkLstestOperations()}
    </>
  )
}

export default LstestFriendOperations;
