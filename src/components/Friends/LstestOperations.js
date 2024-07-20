import React from 'react'
import "./Friends.css"
import searchIcon from "../../assets/images/Vector-Search-PNG-Image.png"
let row  = [
    'Date',
    'Coin',
    'Amount',
    'Type',
    'Status'
]



const LstestOperations = (props) => {

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
                        <th style={{width: "18%"}}>
                            Coin
                        </th>
                        <th style={{width: "18%"}}>
                            Amount
                        </th>
                        <th style={{width: "30%"}}>
                            Type
                        </th>
                        <th style={{width: "16%"}}>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {createTable()} */}
                </tbody>
            </table>
        </div>
        <div className='search-icon'>
            <img src={searchIcon}></img>
            <p>No transaction yet...</p>
        </div>
    </>
  )
}

export default LstestOperations;
