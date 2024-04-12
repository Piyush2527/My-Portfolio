import React from 'react'

function Nav() {
  return (
    <>
      <div id="header">
            <div className="container">
                <nav>
                    <img src="images/logo.png" className="logo" />
                    <ul style={{listStyleType:"none"}}>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-text">
                    <p>UI/UX PROJECT</p>
                    <h1>Hi, i' m <span>Piyush Bhardwaj</span></h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav
