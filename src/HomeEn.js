import React from 'react'
import { Link } from "react-router-dom"
import "./HomeEn.css"
import { FaLinkedinIn, FaGithub, FaRegEnvelope, FaPortrait } from 'react-icons/fa'

function HomeEn() {
    
    return (
        <div className="en__all">
            <div className="enmain__nav">
                <Link style={{width:"fit-content", cursor:"default"}} to='/'><button className="enmain__nav-button">HOME</button></Link>
                <div className="enmain__nav-bar">
                    <p className="enmain__nav-bar-en">en</p>
                    <p>/</p>
                    <Link to='/es' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plpmain__nav-bar-en">es</p></Link>
                    <p>/</p>
                    <Link to='/pl' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plpmain__nav-bar-en">pl</p></Link>
                </div> 
            </div>
            <div className="encontainer"> 
                <div className="enmain__icons">
                    <a className="enmain__icons-icon-a" target="_blank" href="https://www.linkedin.com/in/damian-sawicki-3a50a7179/">
                        <FaLinkedinIn className="enmain__icons-icon"/>
                    </a>
                    <a className="enmain__icons-icon-a" target="_blank" href="https://github.com/damian996s/">
                        <FaGithub className="enmain__icons-icon"/>
                    </a>
                    <a className="enmain__icons-icon-a" href="mailto: damian.sawicki996@gmail.com">
                        <FaRegEnvelope className="enmain__icons-icon"/>
                    </a>
                    <a className="enmain__icons-icon-a" target="_blank" href="https://drive.google.com/file/d/1x3lQFuZWagmL86p1rPjDUh2T7rvi0sCY/view?usp=sharing">
                        <FaPortrait className="enmain__icons-icon"/>
                    </a>
                </div>
                <div className="enmain">                        
                    <div className="enmain__core">
                        <div className="enmain__core-title">
                            <h1>Hey! I am,
                                <div className="enmain__core-title-rotate">
                                    <span>
                                        developer<br></br>
                                        designer<br></br>
                                        &amp;
                                        creator
                                    </span>
                                </div>
                            </h1>
                        </div>
                        <div style={{paddingTop: "2vh", display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <div className="enmain__core-div">
                                <h2 className="enmain__core-paragraph" data-link-alt="I'M"><span>I'M</span></h2>                           
                                <h2 className="enmain__core-paragraph" data-link-alt="DAMIAN"><span>DAMIAN</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="SAWICKI,"><span>SAWICKI,</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="A"><span>A</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="TECH"><span>TECH</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="ENTHUSIAST"><span>ENTHUSIAST</span></h2> 
                            </div>
                            <div className="enmain__core-div">
                                <h2 className="enmain__core-paragraph" data-link-alt="WHO'S"><span>WHO'S</span></h2>                           
                                <h2 className="enmain__core-paragraph" data-link-alt="LOOKING"><span>LOOKING</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="FOR"><span>FOR</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="AN"><span>AN</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="OPPORTUNITY"><span>OPPORTUNITY</span></h2>
                            </div>
                            <div className="enmain__core-div">
                                <h2 className="enmain__core-paragraph" data-link-alt="AS"><span>AS</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="A"><span>A</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="WEB"><span>WEB</span></h2>
                                <h2 className="enmain__core-paragraph" data-link-alt="DEVELOPER"><span>DEVELOPER</span></h2> 
                            </div>
                        </div>  
                        <Link to='/projects' style={{textAlign:"center", width:"fit-content"}}><button className="enmain__core-btn">MY PROJECTS</button></Link>
                    </div>
                </div>
            </div>
            
            <div className="enfooter">
                <p className="enfooter__lets">LET'S GET IN TOUCH!</p>
                <p className="enfooter__email">Email: damian.sawicki996@gmail.com</p>
                <p className="enfooter__paragraph">Tel: +48 730 683 313</p>
            </div>
        </div>
    )
}

export default HomeEn
