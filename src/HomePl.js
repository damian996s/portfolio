import React from 'react'
import { Link } from "react-router-dom"
import "./HomePl.css"
import { FaLinkedinIn, FaGithub, FaRegEnvelope, FaPortrait } from 'react-icons/fa'

function HomePL() {
    
    return (
        <div>
            <div className="plmain__nav">
                <Link style={{width:"fit-content", cursor:"default"}} to='/pl'><button className="plmain__nav-button">HOME</button></Link>
                <div className="plmain__nav-bar">
                    <Link to='/' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plmain__nav-bar-en">en</p></Link>
                    <p>/</p>
                    <Link to='/es' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plmain__nav-bar-es">es</p></Link>
                    <p>/</p>
                    <p className="plmain__nav-bar-pl">pl</p>
                </div> 
            </div>
            <div className="plcontainer"> 
                <div className="plmain__icons">
                    <a className="plmain__icons-icon-a" target="_blank" href="https://www.linkedin.com/in/damian-sawicki-3a50a7179/">
                        <FaLinkedinIn className="plmain__icons-icon"/>
                    </a>
                    <a className="plmain__icons-icon-a" target="_blank" href="https://github.com/damian996s/">
                        <FaGithub className="plmain__icons-icon"/>
                    </a>
                    <a className="plmain__icons-icon-a" href="mailto: damian.sawicki996@gmail.com">
                        <FaRegEnvelope className="plmain__icons-icon"/>
                    </a>
                    <a className="plmain__icons-icon-a" target="_blank" href="https://drive.google.com/file/d/1x3lQFuZWagmL86p1rPjDUh2T7rvi0sCY/view?usp=sharing">
                        <FaPortrait className="plmain__icons-icon"/>
                    </a>
                </div>
                <div className="plmain">                        
                    <div className="plmain__core">
                        <div className="plmain__core-title">
                            <h1>Cześć! Jestem,
                                <div className="plmain__core-title-rotate">
                                    <span>
                                        deweloperem<br></br>
                                        projektantem<br></br>
                                        &amp;
                                        kreatorem
                                    </span>
                                </div>
                            </h1>
                        </div>
                        <div className="plmain__core-div">
                            <h2 className="plmain__core-paragraph" data-link-alt="JESTEM"><span>JESTEM</span></h2>                           
                            <h2 className="plmain__core-paragraph" data-link-alt="DAMIAN"><span>DAMIAN</span></h2>
                            <h2 className="plmain__core-paragraph" data-link-alt="SAWICKI,"><span>SAWICKI,</span></h2>
                            <h2 className="plmain__core-paragraph" data-link-alt="ENTUZJASTA"><span>ENTUZJASTA</span></h2>
                            <h2 className="plmain__core-paragraph" data-link-alt="TECHNOLOGI"><span>TECHNOLOGII</span></h2>                             
                        </div>
                        <div className="plmain__core-div">
                        <h2 className="plmain__core-paragraph" data-link-alt="KTÓRY"><span>KTÓRY</span></h2>
                            <h2 className="plmain__core-paragraph" data-link-alt="SZUKA"><span>SZUKA</span></h2>
                            <h2 className="plmain__core-paragraph" data-link-alt="OKAZJI"><span>OKAZJI</span></h2> 
                            <h2 className="plmain__core-paragraph" data-link-alt="ABY"><span>ABY</span></h2>                           
                            <h2 className="plmain__core-paragraph" data-link-alt="ROZPOCZĄĆ"><span>ROZPOCZĄĆ</span></h2>
                        </div>
                        <div className="plmain__core-div">
                            <h2 className="plmain__core-paragraph" data-link-alt="SWOJĄ"><span>SWOJĄ</span></h2>
                            <h2 className="plmain__core-paragraph" data-link-alt="PROGRAMISTYCZNĄ"><span>PROGRAMISTYCZNĄ</span></h2>
                            <h2 className="plmain__core-paragraph" data-link-alt="KARIERĘ"><span>KARIERĘ</span></h2>
                        </div>  
                        <Link to='/plprojects' style={{textAlign:"center", width:"fit-content"}}><button className="plmain__core-btn">MOJE PROJEKTY</button></Link>
                    </div>
                </div>
            </div>
            
            <div className="plfooter">
                <p className="plfooter__lets">SKONTAKTUJMY SIĘ!</p>
                <p className="plfooter__email">Email: damian.sawicki996@gmail.com</p>
                <p className="plfooter__paragraph">Tel: +48 730 683 313</p>
            </div>
        </div>
    )
}

export default HomePL
