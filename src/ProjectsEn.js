import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./ProjectsEn.css"
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
function ProjectsEn() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false)
    const [modalIsOpen2, setModalIsOpen2] = useState(false)
    const [modalIsOpen3, setModalIsOpen3] = useState(false)
    const [modalIsOpen4, setModalIsOpen4] = useState(false)
    return (
        <div>
            <div className="enpmain__nav">
                <Link style={{width:"fit-content", cursor:"default"}} to='/'><button className="enpmain__nav-button">HOME</button></Link>
                <div className="enpmain__nav-bar">
                    <p className="enpmain__nav-bar-en">en</p>
                    <p>/</p>
                    <Link to='/esprojects' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plpmain__nav-bar-en">es</p></Link>
                    <p>/</p>
                    <Link to='/plprojects' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="plpmain__nav-bar-en">pl</p></Link>
                </div> 
            </div>
            <div className="enpcontainer"> 
                <div className="enpmain__icons">
                    <a className="enpmain__icons-icon-a" target="_blank" href="https://www.linkedin.com/in/damian-sawicki-3a50a7179/">
                        <FaLinkedinIn className="enpmain__icons-icon"/>
                    </a>
                    <a className="enpmain__icons-icon-a" target="_blank" href="https://github.com/damian996s/">
                        <FaGithub className="enpmain__icons-icon"/>
                    </a>
                    <a className="enpmain__icons-icon-a" href="mailto: damian.sawicki996@gmail.com">
                        <FaRegEnvelope className="enpmain__icons-icon"/>
                    </a>
                    <a className="enpmain__icons-icon-a" target="_blank" href="https://drive.google.com/file/d/1x3lQFuZWagmL86p1rPjDUh2T7rvi0sCY/view?usp=sharing">
                        <FaPortrait className="enpmain__icons-icon"/>
                    </a>
                </div>
                <div className="enpmain__projects">
                    <div className="enpmain__projects-text">
                        <h1>My projects</h1>
                        <p>// Here are my latest projects, check them out and make sure to hit me up!</p>
                    </div>
                    <div className="enpmain__projects-imgRow enpmain__projects-imgRow1">
                        <div className="enpmain__projects-imgRowDiv">
                            <img src={amazon} className="enpmain__projects-imgRowDiv-img" />
                            <div className="enpmain__projects-imgRowDiv-div">
                                <p className="enpmain__projects-imgRowDiv-p">AMAZON-CLONE</p>
                                <button onClick={() => setModalIsOpen1(true)} className="enpmain__projects-imgRowDiv-btn">View Project</button>
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
                                >   <div className="enpmodal__container">
                                        <img 
                                        className="enpmodal__img"                                        
                                        src={amazon2}
                                        />
                                        <div className="enpmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen1(false)}
                                            className="enpmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="enpmodal__project">PROJECT</h2>
                                            <h4 className="enpmodal__title">AMAZON-CLONE</h4>
                                            <div className="enpmodal__technologies">
                                                <h3 className="enpmodal__technology">REACT</h3>
                                                <h3 className="enpmodal__technology">CSS</h3>
                                                <h3 className="enpmodal__technology">NODE</h3>
                                                <h3 className="enpmodal__technology">UI & UX</h3>
                                                <h3 className="enpmodal__technology">FIREBASE</h3>
                                                <h3 className="enpmodal__technology">STRIPE</h3>
                                            </div>
                                            <h3 className="enpmodal__about">ABOUT THE PROJECT</h3>
                                            <div className="enpmodal__textDiv">
                                                <p>THIS IS MY LATEST AND IN MY OPINION MY THE MOST EXCITING PROJECT. IT'S A CLONE OF AMAZON - A FULL-STACK E-COMMERCE WEBSITE.</p>
                                                <p>FOR FRONT-END I'VE USED REACT AND FOR BACK-END I'VE USED GOOGLE'S FIREBASE. I'VE HANDLED THE PAYMENT WITH STRIPE.</p>
                                            </div>
                                            <div className="enpmodal__buttons">
                                                <a className="enpmodal__button" target="_blank" href="https://clone-a8085.web.app">Project</a>
                                                <a className="enpmodal__button" target="_blank" href="https://github.com/damian996s/amazon-clone">Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div className="enpmain__projects-imgRowDiv">
                            <img src={netflix} className="enpmain__projects-imgRowDiv-img" />
                            <div className="enpmain__projects-imgRowDiv-div">
                                <p className="enpmain__projects-imgRowDiv-p">NETFLIX-CLONE</p>
                                <button onClick={() => setModalIsOpen2(true)} className="enpmain__projects-imgRowDiv-btn">View Project</button>
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
                                    <div className="enpmodal__container">
                                        <img 
                                        className="enpmodal__img"                                        
                                        src={netflix2}
                                        />
                                        <div className="enpmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen2(false)}
                                            className="enpmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="enpmodal__project">PROJECT</h2>
                                            <h4 className="enpmodal__title">NETFLIX-CLONE</h4>
                                            <div className="enpmodal__technologies">
                                                <h3 className="enpmodal__technology">REACT</h3>
                                                <h3 className="enpmodal__technology">CSS</h3>
                                                <h3 className="enpmodal__technology">NODE</h3>
                                                <h3 className="enpmodal__technology">UI & UX</h3>
                                                <h3 className="enpmodal__technology">FIREBASE</h3>
                                                <h3 className="enpmodal__technology">API</h3>
                                            </div>
                                            <h3 className="enpmodal__about">ABOUT THE PROJECT</h3>
                                            <div className="enpmodal__textDiv">
                                                <p>IT'S A MOVIE APP, A CLONE OF NETFLIX. INSTEAD OF REAL MOVIES I'VE PUT TRAILERS THERE. WHAT I LIKE THE MOST IN THIS PROJECTS IS THE DESIGN. I THINK THAT THE DARKISH APPS ARE MY THING.</p>
                                                <p>FOR FRONT-END I'VE USED REACT AND FOR BACK-END I'VE USED GOOGLE'S FIREBASE.</p>
                                            </div>
                                            <div className="enpmodal__buttons">
                                                <a className="enpmodal__button" target="_blank" href="https://netflix-clone-a6583.web.app/">Project</a>
                                                <a className="enpmodal__button" target="_blank" href="https://github.com/damian996s/netflix-clone">Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="enpmain__projects-imgRow enpmain__projects-imgRow2">
                        <div className="enpmain__projects-imgRowDiv">
                            <img src={recipe} className="enpmain__projects-imgRowDiv-img" />
                            <div className="enpmain__projects-imgRowDiv-div">
                                <p className="enpmain__projects-imgRowDiv-p">RECIPE APP</p>
                                <button onClick={() => setModalIsOpen3(true)} className="enpmain__projects-imgRowDiv-btn">View Project</button>
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
                                    <div className="enpmodal__container">
                                        <img 
                                        className="enpmodal__img"                                        
                                        src={recipe2}
                                        />
                                        <div className="enpmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen3(false)}
                                            className="enpmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="enpmodal__project">PROJECT</h2>
                                            <h4 className="enpmodal__title">RECIPE APP</h4>
                                            <div className="enpmodal__technologies">
                                                <h3 className="enpmodal__technology">REACT</h3>
                                                <h3 className="enpmodal__technology">CSS</h3>
                                                <h3 className="enpmodal__technology">UI & UX</h3>
                                                <h3 className="enpmodal__technology">JSX</h3>
                                                <h3 className="enpmodal__technology">API</h3>
                                                <h3 className="enpmodal__technology">RESPONSIVE</h3>
                                            </div>
                                            <h3 className="enpmodal__about">ABOUT THE PROJECT</h3>
                                            <div className="enpmodal__textDiv">
                                                <p>IT'S AN APP FOR FINDING RECIPES. IN THIS PROJECT I'VE WORKED WITH API FOR THE FIRST TIME WHICH WAS AN EXCITING EXPERIENCE. I'M ALSO INTERESTED IN COOKING SO I COULD COMBINE MY PROGRAMMING PASSION WITH IT WHICH I THINK IS GREAT.</p>
                                                <p>TO BUILD THIS APP I'VE USED REACT, CSS AND API. THE APP IS ALSO RESPONSIVE.</p>
                                            </div>
                                            <div className="enpmodal__buttons">
                                                <a className="enpmodal__button" target="_blank" href="https://recipe-finder-e4247.web.app">Project</a>
                                                <a className="enpmodal__button" target="_blank" href="https://github.com/damian996s/recipe-app">Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div className="enpmain__projects-imgRowDiv">
                            <img src={quote} className="enpmain__projects-imgRowDiv-img" />
                            <div className="enpmain__projects-imgRowDiv-div">
                                <p className="enpmain__projects-imgRowDiv-p">QUOTE GENERATOR</p>
                                <button onClick={() => setModalIsOpen4(true)} className="enpmain__projects-imgRowDiv-btn">View Project</button>
                                <Modal
                                
                                isOpen={modalIsOpen4} 
                                onRequestClose={() => setModalIsOpen4(false)}
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
                                    <div className="enpmodal__container">
                                        <img 
                                        className="enpmodal__img"                                        
                                        src={quote2}
                                        />
                                        <div className="enpmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen4(false)}
                                            className="enpmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="enpmodal__project">PROJECT</h2>
                                            <h4 className="enpmodal__title">QUOTE GENERATOR</h4>
                                            <div className="enpmodal__technologies">
                                                <h3 className="enpmodal__technology">REACT</h3>
                                                <h3 className="enpmodal__technology">CSS</h3>
                                                <h3 className="enpmodal__technology">JSX</h3>
                                                <h3 className="enpmodal__technology">UX & UI</h3>
                                                <h3 className="enpmodal__technology">RESPONSIVE</h3>
                                            </div>
                                            <h3 className="enpmodal__about">ABOUT THE PROJECT</h3>
                                            <div className="enpmodal__textDiv">
                                                <p>IT'S A QUOTE GENERATOR. THIS IS ONE OF MY FIRST PROJECTS AND THE FIRST REACT ONE. IT'S NOT VERY COMPLEX BUT AFTER SOME TIME IT'S COOL TO SEE THE PROGRESS THAT I MADE.</p>
                                                <p>TO BUILD THIS APP I'VE USED REACT AND CSS. THE APP IS ALSO RESPONSIVE.</p>
                                            </div>
                                            <div className="enpmodal__buttons">
                                                <a className="enpmodal__button1" target="_blank" href="https://codepen.io/damiansawicki996/full/NWrpOJY">Project & Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>                                 
            <div className="enpfooter">
                <p className="enpfooter__lets">LET'S GET IN TOUCH!</p>
                <p className="enpfooter__email">Email: damian.sawicki996@gmail.com</p>
                <p className="enpfooter__paragraph">Tel: +48 730 683 313</p>
            </div>
        </div>
    )
}

export default ProjectsEn
