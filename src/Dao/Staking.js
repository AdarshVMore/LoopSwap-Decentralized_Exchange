import React from 'react'
import logo from '../../src/assets/images/logo.png'
import Navbar from '../pages/dex/navbar/Navbar'
import SimpleSwap from '../components/simpleswap/SimpleSwap'
import '../components/classicswap/classicswap.css'
import { Link } from 'react-router-dom'
export default function Staking() {
  return (
    <>
     <Navbar/>
        <div className='limit-swap'style={{textAlign:"center",}}>
            <br/><br/><br></br><br/><br/><br/><br/><br/> <h1>Staking &nbsp; <span><button style={{display:"inline" ,background:""}} className='connect-button'>coming soon ...</button></span></h1>
        <div style={{filter:"blur(4px)"}}> 
             <h2 >
                1 . Don't have LOI tokens ?
                
                </h2>
                <br/>
                <h2 style={{textAlign:"justify-centre"}}>
                2. Stake
                
                </h2>
                <br/>
                <h2 style={{textAlign:"right"}}>
                3. Receive delegation rewards
                
                </h2>

                </div>
           
              </div>

      <div className='simple-swap'  style={{filter:"blur(4px)","margin-left":"50%",display:"grid","border-radius":"10px"}}>
      <h5>Stake &nbsp; <Link>Unstake</Link>                      </h5>
      <div className="swaping-input"  style={{background:"#0c1119",display:"grid","border-radius":"10px"}}>
        <h6>&nbsp; Amount </h6>
       <span><h3>&nbsp; <img src={logo}  className='avatar'width="50px" height="50px" style={{background:"black","border-radius":"60%"}}/>
       &nbsp;&nbsp;&nbsp;&nbsp; LOI </h3>
       </span></div>
       <br/>

       <button className="live-crypto-price" style={{background:"lightblue","color":"black", textAlign:"center"}}>👜 Connect Wallet</button>


      </div>
    </>
  )
}
