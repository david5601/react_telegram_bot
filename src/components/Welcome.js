import React from 'react'
import "../App.css"
import ButtonGroup from "./ButtonGroup/ButtonGroup";
import tronIcon from "../assets/images/tron.webp"
import bnbIcon from "../assets/images/Binance.webp"

const Welcome = (props) => {
    return (
        <>
            <div>
                <h2 className='title'>Hi, {props.name}!</h2>
            </div>
            <div>
                <h1 style={{paddingBottom: "10px", fontWeight:"600", fontSize:"1.9em"}}>
                    Select the currency you want to mine 
                    <p style={{fontSize: "15px", display: "contents"}}>&nbsp;&nbsp;👇</p>
                </h1>
            </div>
            <div style={{paddingTop: "20px"}}>
                <ButtonGroup name="Tron(TRX)" src={tronIcon}/>
                <ButtonGroup name="Binance Coin(BNB)" src={bnbIcon}/>
            </div>
        </>
    );
}

export default Welcome;