import React from 'react'
import { Link } from "react-router-dom"
import "./HomeEs.css"
import { FaLinkedinIn, FaGithub, FaRegEnvelope, FaPortrait } from 'react-icons/fa'

function HomeEs() {
    
    return (
        <div className="es__all">
            <div className="esmain__nav">
                <Link style={{width:"fit-content", cursor:"default"}} to='/es'><button className="esmain__nav-button">HOME</button></Link>
                <div className="esmain__nav-bar">
                    <Link to='/' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plpmain__nav-bar-en">en</p></Link>
                    <p>/</p>
                    <p className="esmain__nav-bar-es">es</p>
                    <p>/</p>
                    <Link to='/pl' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plpmain__nav-bar-en">pl</p></Link>
                </div> 
            </div>
            <div className="escontainer"> 
                <div className="esmain__icons">
                    <a className="esmain__icons-icon-a" target="_blank" href="https://www.linkedin.com/in/damian-sawicki-3a50a7179/">
                        <FaLinkedinIn className="esmain__icons-icon"/>
                    </a>
                    <a className="esmain__icons-icon-a" target="_blank" href="https://github.com/damian996s/">
                        <FaGithub className="esmain__icons-icon"/>
                    </a>
                    <a className="esmain__icons-icon-a" href="mailto: damian.sawicki996@gmail.com">
                        <FaRegEnvelope className="esmain__icons-icon"/>
                    </a>
                    <a className="esmain__icons-icon-a" target="_blank" href="https://drive.google.com/file/d/1x3lQFuZWagmL86p1rPjDUh2T7rvi0sCY/view?usp=sharing">
                        <FaPortrait className="esmain__icons-icon"/>
                    </a>
                </div>
                <div className="esmain">                        
                    <div className="esmain__core">
                        <div className="esmain__core-title">
                            <h1>Hola! Soy,
                                <div className="esmain__core-title-rotate">
                                    <span>
                                        desarrollador<br></br>
                                        diseñador<br></br>
                                        &amp;
                                        creador
                                    </span>
                                </div>
                            </h1>
                        </div>
                        <div className="esmain__core-div">
                            <h2 className="esmain__core-paragraph" data-link-alt="SOY"><span>SOY</span></h2>                           
                            <h2 className="esmain__core-paragraph" data-link-alt="DAMIAN"><span>DAMIAN</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="SAWICKI,"><span>SAWICKI,</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="UN"><span>UN</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="ENTHUSIASTA"><span>ENTHUSIASTA</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="DE"><span>DE</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="LA"><span>LA</span></h2>                           
                            <h2 className="esmain__core-paragraph" data-link-alt="TECNOLOGÍA"><span>TECNOLOGÍA</span></h2> 
                        </div>
                        <div className="esmain__core-div">
                            <h2 className="esmain__core-paragraph" data-link-alt="QUIEN"><span>QUIEN</span></h2>                           
                            <h2 className="esmain__core-paragraph" data-link-alt="ESTA"><span>ESTA</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="BUSCANDO"><span>BUSCANDO</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="UNA"><span>UNA</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="OPORTUNIDAD"><span>OPORTUNIDAD</span></h2>
                        </div>
                        <div className="esmain__core-div">
                            <h2 className="esmain__core-paragraph" data-link-alt="COMO"><span>COMO</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="DESARROLLADOR"><span>DESARROLLADOR</span></h2>
                            <h2 className="esmain__core-paragraph" data-link-alt="WEB"><span>WEB</span></h2> 
                        </div>  
                        <Link to='/esprojects' style={{textAlign:"center", width:"fit-content"}}><button className="esmain__core-btn">MIS PROYECTOS</button></Link>
                    </div>
                </div>
            </div>
            
            <div className="esfooter">
                <p className="esfooter__lets">CONTÁCTAME!</p>
                <p className="esfooter__email">Email: damian.sawicki996@gmail.com</p>
                <p className="esfooter__paragraph">Tel: +48 730 683 313</p>
            </div>
        </div>
    )
}

export default HomeEs
