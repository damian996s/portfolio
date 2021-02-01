import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./ProjectsPl.css"
import { FaLinkedinIn, FaGithub, FaRegEnvelope, FaPortrait, FaRegWindowClose, FaBlackberry } from 'react-icons/fa'
import amazon from "./amazon-image.png"
import amazon2 from "./amazon-image2.png"
import netflix from "./netflix-image.png"
import netflix2 from "./netflix-image2.png"
import recipe from "./recipe-image.png"
import recipe2 from "./recipe-image2.png"
import quote from "./quote-image.png"
import quote2 from "./quote-image2.png"
import Modal from 'react-modal'

Modal.setAppElement('#root')
function ProjectsPl() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false)
    const [modalIsOpen2, setModalIsOpen2] = useState(false)
    const [modalIsOpen3, setModalIsOpen3] = useState(false)
    const [modalIsOpen4, setModalIsOpen4] = useState(false)
    return (
        <div>
            <div className="plpmain__nav">
                        <Link style={{width:"fit-content", cursor:"default"}} to='/pl'><button className="plpmain__nav-button">HOME</button></Link>
                        <div className="plpmain__nav-bar">
                            <Link to='/projects' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plpmain__nav-bar-en">en</p></Link>
                            <p>/</p>
                            <Link to='/esprojects' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plpmain__nav-bar-es">es</p></Link>
                            <p>/</p>
                            <p className="plpmain__nav-bar-pl">pl</p>
                        </div> 
            </div>
            <div className="plpcontainer"> 
                <div className="plpmain__icons">
                    <a className="plpmain__icons-icon-a" target="_blank" href="https://www.linkedin.com/in/damian-sawicki-3a50a7179/">
                        <FaLinkedinIn className="plpmain__icons-icon"/>
                    </a>
                    <a className="plpmain__icons-icon-a" target="_blank" href="https://github.com/damian996s/">
                        <FaGithub className="plpmain__icons-icon"/>
                    </a>
                    <a className="plpmain__icons-icon-a" href="mailto: damian.sawicki996@gmail.com">
                        <FaRegEnvelope className="plpmain__icons-icon"/>
                    </a>
                    <a className="plpmain__icons-icon-a" target="_blank" href="https://drive.google.com/file/d/1x3lQFuZWagmL86p1rPjDUh2T7rvi0sCY/view?usp=sharing">
                        <FaPortrait className="plpmain__icons-icon"/>
                    </a>
                </div>
                <div className="plpmain__projects">
                    <div className="plpmain__projects-text">
                        <h1>Moje projekty</h1>
                        <p>// Tutaj są moje najnowsze projekty, sprawdź je i skontaktujmy się!</p>
                    </div>
                    <div className="plpmain__projects-imgRow plpmain__projects-imgRow1">
                        <div className="plpmain__projects-imgRowDiv">
                            <img src={amazon} className="plpmain__projects-imgRowDiv-img" />
                            <div className="plpmain__projects-imgRowDiv-div">
                                <p className="plpmain__projects-imgRowDiv-p">KLON AMAZONA</p>
                                <button onClick={() => setModalIsOpen1(true)} className="plpmain__projects-imgRowDiv-btn">Zobacz Projekt</button>
                                <Modal
                                 
                                isOpen={modalIsOpen1} 
                                onRequestClose={() => setModalIsOpen1(false)}
                                style={
                                    {
                                        overlay: {
                                            backgroundColor: "rgba(0, 0, 0, 0.7)"
                                            
                                        },
                                        content: {
                                            backgroundColor: "transparent",
                                            top:"0",
                                            height:"100%",
                                            width:"100%",
                                            display:"flex",
                                            justifyContent:"center",
                                            border: "none",
                                            padding: 0                        
                                            }
                                        }
                                    }
                                    >
                                    <div className="plpmodal__container">
                                        <img 
                                        className="plpmodal__img"                                        
                                        src={amazon2}
                                        />
                                        <div className="plpmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen1(false)}
                                            className="plpmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="plpmodal__project">PROJEKT</h2>
                                            <h4 className="plpmodal__title">KLON AMAZONA</h4>
                                            <div className="plpmodal__technologies">
                                                <h3 className="plpmodal__technology">REACT</h3>
                                                <h3 className="plpmodal__technology">CSS</h3>
                                                <h3 className="plpmodal__technology">NODE</h3>
                                                <h3 className="plpmodal__technology">UI & UX</h3>
                                                <h3 className="plpmodal__technology">FIREBASE</h3>
                                                <h3 className="plpmodal__technology">STRIPE</h3>
                                            </div>
                                            <h3 className="plpmodal__about">O PROJEKCIE</h3>
                                            <div className="plpmodal__textDiv">
                                                <p>JEST TO MÓJ NAJNOWSZY I MOIM ZDANIEM NAJBARDZIEJ EKSCYTUJĄCY PROJEKT. JEST TO KLON AMAZONA - FULL-STACK STRONA E-COMMERCE.</p>
                                                <p>DO FRONT-ENDU UŻYŁEM REACTA I DO BACK-ENDU UŻYŁEM FIREBASE GOOGLA. DO PŁATNOŚCI WYKORZYSTAŁEM STRIPE.</p>
                                            </div>
                                            <div className="plpmodal__buttons">
                                                <a className="plpmodal__button" target="_blank" href="https://clone-a8085.web.app">Projekt</a>
                                                <a className="plpmodal__button" target="_blank" href="https://github.com/damian996s/amazon-clone">Kod</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div className="plpmain__projects-imgRowDiv">
                            <img src={netflix} className="plpmain__projects-imgRowDiv-img" />
                            <div className="plpmain__projects-imgRowDiv-div">
                                <p className="plpmain__projects-imgRowDiv-p">KLON NETFLIXA</p>
                                <button onClick={() => setModalIsOpen2(true)} className="plpmain__projects-imgRowDiv-btn">Zobacz Projekt</button>
                                <Modal
                                 
                                isOpen={modalIsOpen2} 
                                onRequestClose={() => setModalIsOpen2(false)}
                                style={
                                    {
                                        overlay: {
                                            backgroundColor: "rgba(0, 0, 0, 0.7)"
                                            
                                        },
                                        content: {
                                            backgroundColor: "transparent",
                                            top:"0",
                                            height:"100%",
                                            width:"100%",
                                            display:"flex",
                                            justifyContent:"center",
                                            border: "none",
                                            padding: 0                        
                                            }
                                        }
                                    }
                                    >
                                    <div className="plpmodal__container">
                                        <img 
                                        className="plpmodal__img"                                        
                                        src={netflix2}
                                        />
                                        <div className="plpmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen2(false)}
                                            className="plpmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="plpmodal__project">PROJEKT</h2>
                                            <h4 className="plpmodal__title">KLON NETFLIXA</h4>
                                            <div className="plpmodal__technologies">
                                                <h3 className="plpmodal__technology">REACT</h3>
                                                <h3 className="plpmodal__technology">CSS</h3>
                                                <h3 className="plpmodal__technology">NODE</h3>
                                                <h3 className="plpmodal__technology">UI & UX</h3>
                                                <h3 className="plpmodal__technology">FIREBASE</h3>
                                                <h3 className="plpmodal__technology">API</h3>
                                            </div>
                                            <h3 className="plpmodal__about">O PROJEKCIE</h3>
                                            <div className="plpmodal__textDiv">
                                                <p>JEST TO APKA Z FILMAMI, KLON NETFLIXA. ZAMIAST PRAWDZIWYCH FILMÓW SĄ TUTAJ TRAILERY. TO, CO NAJBARDZIEJ LUBIĘ W TYM PROJEKCIE TO DESIGN. MYŚLĘ, ŻE CIEMNE APKI TO MOJA RZECZ.</p>
                                                <p>DO FRONT-ENDU UŻYŁEM REACTA I DO BACK-ENDU UŻYŁEM FIREBASE GOOGLA.</p>
                                            </div>
                                            <div className="plpmodal__buttons">
                                                <a className="plpmodal__button" target="_blank" href="https://netflix-clone-a6583.web.app/">Projekt</a>
                                                <a className="plpmodal__button" target="_blank" href="https://github.com/damian996s/netflix-clone">Kod</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="plpmain__projects-imgRow plpmain__projects-imgRow2">
                        <div className="plpmain__projects-imgRowDiv">
                            <img src={recipe} className="plpmain__projects-imgRowDiv-img" />
                            <div className="plpmain__projects-imgRowDiv-div">
                                <p className="plpmain__projects-imgRowDiv-p">APKA DO PRZEPISÓW</p>
                                <button onClick={() => setModalIsOpen3(true)} className="plpmain__projects-imgRowDiv-btn">Zobacz Projekt</button>
                                <Modal
                                
                                isOpen={modalIsOpen3} 
                                onRequestClose={() => setModalIsOpen3(false)}
                                style={
                                    {
                                        overlay: {
                                            backgroundColor: "rgba(0, 0, 0, 0.7)"
                                            
                                        },
                                        content: {
                                            backgroundColor: "transparent",
                                            top:"0",
                                            height:"100%",
                                            width:"100%",
                                            display:"flex",
                                            justifyContent:"center",
                                            border: "none",
                                            padding: 0                        
                                            }
                                        }
                                    }
                                    >
                                    <div className="plpmodal__container">
                                        <img 
                                        className="plpmodal__img"                                        
                                        src={recipe2}
                                        />
                                        <div className="plpmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen3(false)}
                                            className="plpmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="plpmodal__project">PROJEKT</h2>
                                            <h4 className="plpmodal__title">APKA DO PRZEPISÓW</h4>
                                            <div className="plpmodal__technologies">
                                                <h3 className="plpmodal__technology">REACT</h3>
                                                <h3 className="plpmodal__technology">CSS</h3>
                                                <h3 className="plpmodal__technology">UI & UX</h3>
                                                <h3 className="plpmodal__technology">JSX</h3>
                                                <h3 className="plpmodal__technology">API</h3>
                                                <h3 className="plpmodal__technology">RESPONSYWNA</h3>
                                            </div>
                                            <h3 className="plpmodal__about">O PROJEKCIE</h3>
                                            <div className="plpmodal__textDiv">
                                                <p>JEST TO APKA DO SZUKANIA PRZEPISÓW. PODCZAS TEGO PROJEKTU PRACOWAŁEM Z API PO RAZ PIERWSZY, CO BYŁO EKSCYTUJĄCYM DOŚWIADCZENIEM. JESTEM TAKŻE ZAINTERESOWANY GOTOWANIEM, WIĘC MOGŁEM Z  TYM POŁĄCZYĆ MOJĄ PROGRAMISTYCZNĄ PASJĘ, CO MOIM ZDANIEM JEST ŚWIETNE.</p>
                                                <p>DO ZBUDOWANIA TEJ APKI UŻYŁEM REACTA, CSS I API. APKA JEST TAKŻE RESPONSYWNA.</p>
                                            </div>
                                            <div className="plpmodal__buttons">
                                                <a className="plpmodal__button" target="_blank" href="https://recipe-finder-e4247.web.app">Projekt</a>
                                                <a className="plpmodal__button" target="_blank" href="https://github.com/damian996s/recipe-app">Kod</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div className="plpmain__projects-imgRowDiv">
                            <img src={quote} className="plpmain__projects-imgRowDiv-img" />
                            <div className="plpmain__projects-imgRowDiv-div">
                                <p className="plpmain__projects-imgRowDiv-p">GENERATOR CYTATÓW</p>
                                <button onClick={() => setModalIsOpen4(true)} className="plpmain__projects-imgRowDiv-btn">Zobacz Projekt</button>
                                <Modal
                                
                                isOpen={modalIsOpen4} 
                                onRequestClose={() => setModalIsOpen4(false)}
                                style={
                                    {
                                        overlay: {
                                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                                            animation: "1s ease-out" 
                                        },
                                        content: {
                                            backgroundColor: "transparent",
                                            top:"0",
                                            height:"100%",
                                            width:"100%",
                                            display:"flex",
                                            justifyContent:"center",
                                            border: "none",
                                            padding: 0                        
                                            }
                                        }
                                    }
                                    >
                                    <div className="plpmodal__container">
                                        <img 
                                        className="plpmodal__img"                                        
                                        src={quote2}
                                        />
                                        <div className="plpmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen4(false)}
                                            className="plpmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="plpmodal__project">PROJEKT</h2>
                                            <h4 className="plpmodal__title">GENERATOR CYTATÓW</h4>
                                            <div className="plpmodal__technologies">
                                                <h3 className="plpmodal__technology">REACT</h3>
                                                <h3 className="plpmodal__technology">CSS</h3>
                                                <h3 className="plpmodal__technology">JSX</h3>
                                                <h3 className="plpmodal__technology">UX & UI</h3>
                                                <h3 className="plpmodal__technology">RESPONSYWNA</h3>
                                            </div>
                                            <h3 className="plpmodal__about">ABOUT THE PROJECT</h3>
                                            <div className="plpmodal__textDiv">
                                                <p>JEST TO GENERATOR CYTATÓW. TO JEST JEDEN Z MOICH PIERWSZYCH PROJEKTÓW I PIERWSZY Z WYKORZYSTANIEM REACTA. NIE JEST BARDZO SKOMPLIKOWANY, ALE PO CZASIE FAJNIE JEST NA NIEGO SPOJRZEĆ I ZOBACZYĆ JAK SIĘ ROZWINĄŁEM.</p>
                                                <p>DO ZBUDOWANIA TEJ APKI UŻYŁEM REACTA I CSS. APKA JEST TAKŻE RESPONSYWNA.</p>
                                            </div>
                                            <div className="plpmodal__buttons">
                                                <a className="plpmodal__button1" target="_blank" href="https://codepen.io/damiansawicki996/full/NWrpOJY">Projekt & Kod</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>                                 
            <div className="plpfooter">
                <p className="plpfooter__lets">SKONTAKTUJMY SIĘ!</p>
                <p className="plpfooter__email">Email: damian.sawicki996@gmail.com</p>
                <p className="plpfooter__paragraph">Tel: +48 730 683 313</p>
            </div>
        </div>
    )
}

export default ProjectsPl
