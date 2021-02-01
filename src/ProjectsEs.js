import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./ProjectsEs.css"
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
function ProjectsEs() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false)
    const [modalIsOpen2, setModalIsOpen2] = useState(false)
    const [modalIsOpen3, setModalIsOpen3] = useState(false)
    const [modalIsOpen4, setModalIsOpen4] = useState(false)
    return (
        <div>
            <div className="espmain__nav">
            <Link style={{width:"fit-content", cursor:"default"}} to='/es'><button className="espmain__nav-button">HOME</button></Link>
            <div className="espmain__nav-bar">
                <Link to='/projects' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="espmain__nav-bar-en">en</p></Link>
                <p>/</p>
                <p className="espmain__nav-bar-es">es</p>
                <p>/</p>
                <Link to='/plprojects' style={{textDecoration: "none", color:"whitesmoke", width:"fit-content"}}><p className="espmain__nav-bar-en">pl</p></Link>
            </div> 
            </div>
            <div className="espcontainer"> 
                <div className="espmain__icons">
                    <a className="espmain__icons-icon-a" target="_blank" href="https://www.linkedin.com/in/damian-sawicki-3a50a7179/">
                        <FaLinkedinIn className="espmain__icons-icon"/>
                    </a>
                    <a className="espmain__icons-icon-a" target="_blank" href="https://github.com/damian996s/">
                        <FaGithub className="espmain__icons-icon"/>
                    </a>
                    <a className="espmain__icons-icon-a" href="mailto: damian.sawicki996@gmail.com">
                        <FaRegEnvelope className="espmain__icons-icon"/>
                    </a>
                    <a className="espmain__icons-icon-a" target="_blank" href="https://drive.google.com/file/d/1x3lQFuZWagmL86p1rPjDUh2T7rvi0sCY/view?usp=sharing">
                        <FaPortrait className="espmain__icons-icon"/>
                    </a>
                </div>
                <div className="espmain__projects">
                    <div className="espmain__projects-text">
                        <h1>Mis Proyectos</h1>
                        <p>// aquí están mis últimos proyectos, échales un vistazo y asegúrate de contactarme!</p>
                    </div>
                    <div className="espmain__projects-imgRow espmain__projects-imgRow1">
                        <div className="espmain__projects-imgRowDiv">
                            <img src={amazon} className="espmain__projects-imgRowDiv-img" />
                            <div className="espmain__projects-imgRowDiv-div">
                                <p className="espmain__projects-imgRowDiv-p">CLON DE AMAZON</p>
                                <button onClick={() => setModalIsOpen1(true)} className="espmain__projects-imgRowDiv-btn">VER PROYECTO</button>
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
                                    <div className="espmodal__container">
                                        <img 
                                        className="espmodal__img"                                        
                                        src={amazon2}
                                        />
                                        <div className="espmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen1(false)}
                                            className="espmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="espmodal__project">PROYECTO</h2>
                                            <h4 className="espmodal__title">CLON DE AMAZON</h4>
                                            <div className="espmodal__technologies">
                                                <h3 className="espmodal__technology">REACT</h3>
                                                <h3 className="espmodal__technology">CSS</h3>
                                                <h3 className="espmodal__technology">NODE</h3>
                                                <h3 className="espmodal__technology">UI & UX</h3>
                                                <h3 className="espmodal__technology">FIREBASE</h3>
                                                <h3 className="espmodal__technology">STRIPE</h3>
                                            </div>
                                            <h3 className="espmodal__about">SOBRE EL PROYECTO</h3>
                                            <div className="espmodal__textDiv">
                                                <p>ESTE ES MI ÚLTIMO PROYECTO Y EN MI OPINIÓN EL MÁS EMOCIONANTE. ES UN CLON DE AMAZON - UNA PÁGINA WEB FULL-STACK DE COMERCIO ELECTRÓNICO.</p>
                                                <p>PARA FRONT-END HE USADO REACT Y PARA BACK-END HE USADO FIREBASE DE GOOGLE. HE MANEJADO EL PAGO CON STRIPE.</p>
                                            </div>
                                            <div className="espmodal__buttons">
                                                <a className="espmodal__button" target="_blank" href="https://clone-a8085.web.app">Proyecto</a>
                                                <a className="espmodal__button" target="_blank" href="https://github.com/damian996s/amazon-clone">Código</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div className="espmain__projects-imgRowDiv">
                            <img src={netflix} className="espmain__projects-imgRowDiv-img" />
                            <div className="espmain__projects-imgRowDiv-div">
                                <p className="espmain__projects-imgRowDiv-p">CLON DE NETFLIX</p>
                                <button onClick={() => setModalIsOpen2(true)} className="espmain__projects-imgRowDiv-btn">VER PROYECTO</button>
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
                                    <div className="espmodal__container">
                                        <img 
                                        className="espmodal__img"                                        
                                        src={netflix2}
                                        />
                                        <div className="espmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen2(false)}
                                            className="espmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="espmodal__project">PROYECTO</h2>
                                            <h4 className="espmodal__title">CLON DE NETFLIX</h4>
                                            <div className="espmodal__technologies">
                                                <h3 className="espmodal__technology">REACT</h3>
                                                <h3 className="espmodal__technology">CSS</h3>
                                                <h3 className="espmodal__technology">NODE</h3>
                                                <h3 className="espmodal__technology">UI & UX</h3>
                                                <h3 className="espmodal__technology">FIREBASE</h3>
                                                <h3 className="espmodal__technology">API</h3>
                                            </div>
                                            <h3 className="espmodal__about">SOBRE EL PROYECTO</h3>
                                            <div className="espmodal__textDiv">
                                                <p>ESTE ES UNA APP DE PELÍCULAS, UN CLON DE NETFLIX. EN LUGAR DE PELÍCULAS REALES, HE PUESTO TRAILERS ALLÍ. LO QUE ME GUSTA MÁS EN ESTE PROYECTO ES EL DISEÑO. CREO QUE LAS APPS OSCURES SON LO MÍO.</p>
                                                <p>PARA FRONT-END HE USADO REACT Y PARA BACK-END HE USADO FIREBASE DE GOOGLE.</p>
                                            </div>
                                            <div className="espmodal__buttons">
                                                <a className="espmodal__button" target="_blank" href="https://netflix-clone-a6583.web.app/">Proyecto</a>
                                                <a className="espmodal__button" target="_blank" href="https://github.com/damian996s/netflix-clone">Código</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <div className="espmain__projects-imgRow espmain__projects-imgRow2">
                        <div className="espmain__projects-imgRowDiv">
                            <img src={recipe} className="espmain__projects-imgRowDiv-img" />
                            <div className="espmain__projects-imgRowDiv-div">
                                <p className="espmain__projects-imgRowDiv-p">APP DE RECETAS</p>
                                <button onClick={() => setModalIsOpen3(true)} className="espmain__projects-imgRowDiv-btn">VER PROYECTO</button>
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
                                    <div className="espmodal__container">
                                        <img 
                                        className="espmodal__img"                                        
                                        src={recipe2}
                                        />
                                        <div className="espmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen3(false)}
                                            className="espmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="espmodal__project">PROYECTO</h2>
                                            <h4 className="espmodal__title">APP DE RECETAS</h4>
                                            <div className="espmodal__technologies">
                                                <h3 className="espmodal__technology">REACT</h3>
                                                <h3 className="espmodal__technology">CSS</h3>
                                                <h3 className="espmodal__technology">UI & UX</h3>
                                                <h3 className="espmodal__technology">JSX</h3>
                                                <h3 className="espmodal__technology">API</h3>
                                                <h3 className="espmodal__technology">RECEPTIVA</h3>
                                            </div>
                                            <h3 className="espmodal__about">SOBRE EL PROYECTO</h3>
                                            <div className="espmodal__textDiv">
                                                <p>ESTE ES UNA APP DE BUSCAR RECETAS. EN ESTE PROYCTO HE TRABAJADO CON API POR LA PRIMERA VEZ QUE FUE UNA EXPERIENCIA EMOCIONANTE. TAMBIÉN ESTOY INTERESADO EN COCINAR, ASÍ QUE PUDE COMBINAR ESTO CON MI PASIÓN DE PROGRAMACIÓN, QUE CREO QUE ES GENIAL.</p>
                                                <p>PARA CONSTRUIR ESTA APP HE USADO REACT, CSS Y API. LA APP TAMBIÉN ES RECEPTIVA.</p>
                                            </div>
                                            <div className="espmodal__buttons">
                                                <a className="espmodal__button" target="_blank" href="https://recipe-finder-e4247.web.app">Proyecto</a>
                                                <a className="espmodal__button" target="_blank" href="https://github.com/damian996s/recipe-app">Código</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div className="espmain__projects-imgRowDiv">
                            <img src={quote} className="espmain__projects-imgRowDiv-img" />
                            <div className="espmain__projects-imgRowDiv-div">
                                <p className="espmain__projects-imgRowDiv-p">generador de cotizaciones</p>
                                <button onClick={() => setModalIsOpen4(true)} className="espmain__projects-imgRowDiv-btn">VER PROYECTO</button>
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
                                    <div className="espmodal__container">
                                        <img 
                                        className="espmodal__img"                                        
                                        src={quote2}
                                        />
                                        <div className="espmodal__div">
                                            <FaRegWindowClose onClick={() => setModalIsOpen4(false)}
                                            className="espmodal__close"
                                            >
                                            </FaRegWindowClose>
                                            <h2 className="espmodal__project">PROYECTO</h2>
                                            <h4 className="espmodal__title">GENERADOR DE COTIZACIONES</h4>
                                            <div className="espmodal__technologies">
                                                <h3 className="espmodal__technology">REACT</h3>
                                                <h3 className="espmodal__technology">CSS</h3>
                                                <h3 className="espmodal__technology">JSX</h3>
                                                <h3 className="espmodal__technology">UX & UI</h3>
                                                <h3 className="espmodal__technology">RECEPTIVA</h3>
                                            </div>
                                            <h3 className="espmodal__about">SOBRE EL PROYECTO</h3>
                                            <div className="espmodal__textDiv">
                                                <p>ESTE ES UN GENERADOR DE COTIZACIONES - UNO DE MIS PRIMEROS PROYECTOS Y EL PRIMER DE REACT. NO ES MUY COMPLEJO PERO DESPUÉS DE ALGÚN TIEMPO, ES GENIAL VER EL PROGRESO QUE HICE.</p>
                                                <p>PARA CONSTRUIR ESTA APP HE USADO REACT Y CSS. LA APP TAMBIÉN ES RECEPTIVA.</p>
                                            </div>
                                            <div className="espmodal__buttons">
                                                <a className="espmodal__button1" target="_blank" href="https://codepen.io/damiansawicki996/full/NWrpOJY">Proyecto & Código</a>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>                                 
            <div className="espfooter">
                <p className="espfooter__lets">CONTÁCTAME!</p>
                <p className="espfooter__email">Email: damian.sawicki996@gmail.com</p>
                <p className="espfooter__paragraph">Tel: +48 730 683 313</p>
            </div>
        </div>
    )
}

export default ProjectsEs
