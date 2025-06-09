import React from 'react'
import '../Index.css'
import {Link} from "react-router-dom"


const LandingPage = () => {
  return (
    <div className='landingPageContainer'>
        <nav>
            <div className='navHeader'>
             <h2 style={{ color: "white", fontWeight: "700", fontSize: "28px" }}>
  Vibe<span style={{ color: "#FF9839" }}>Call</span>
</h2>
            </div>
            <div className='navList'>
                <p>
                    <Link to="/home" style={{ color: "white", textDecoration: "none" }}>Join as Guest</Link>
                </p>
                <p> Register</p>
                <div role='button'> 
                    <p>
                       <Link to={"/auth"} style={{color: "white",  textDecoration: "none"}}> Login</Link></p>
                </div>
            </div>
        </nav>

        <div className='landingMainContainer'>
             <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by VibeCall</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
        </div>
    </div>
  )
}

export default LandingPage;