import React from 'react';
import './LandingPage.scss';
import Logo from "../../assets/images/logo.png";
import Foto from "../../assets/images/lp_foto.png";
import Foto2 from "../../assets/images/lp_foto2.png";
import Figure1 from "../../assets/images/lp_figure1.png"
import Figure2 from "../../assets/images/lp_figure2.png"
import Figure3 from "../../assets/images/lp_figure3.png"
import Figure4 from "../../assets/images/lp_figure4.png"
import Figure5 from "../../assets/images/lp_figure5.png"
import { auth } from '../../firebase';

interface LandingPageViewProps {
    onSignUpClick: () => void;
}

const LandingPageView = (props: LandingPageViewProps): React.ReactElement => {
    const { onSignUpClick } = props;

    return (
        <div className='landingPage'>
            <div className='menu'>
                <ul>
                    <li><a href='#inicio'>Inicio</a></li>
                    <li><a href='#description'>Descripción</a></li>
                    <li><a href='#caracteristicas'>Características</a></li>
                    <li><a href='#contacto'>Contacto</a></li>
                    <li onClick={() => auth.signInWithEmailAndPassword('gerardoerick@outlook.com', 'geva1397')}><a>SignIn</a></li>
                </ul>
            </div>
            <div className='presentationFlexContainer' id='inicio'>
                <div className='leftSide'>
                    <img src={Logo} alt={'Bigword'}/>
                    <p>Registro de vocabulario</p>
                    <button onClick={onSignUpClick}>Registrarse</button>
                </div>
                <div className='rightSide'>
                    <img src={Foto} alt='Foto'/>
                </div>
            </div>
            <div className='descriptionContainer' id='description'>
                <img src={Figure1} alt='Figure1' id='fig1'/>
                <h1>Descripción</h1>
                <p>
                    Bigword es una aplicación que te permitirá llevar un registro de las palabras que vayas aprendiendo, permitiéndote además,
                    añadirle más información como: una imagen que te ayude a recordarla, un ejemplo que te de el contexto, y el significado.
                    Toda esta información extra te será muy útil para repasar tus palabras todos los días. Además incluye juegos que se genern
                    automáticamente con tus palabras para que te facilite el aprendizaje de estas.
                </p>
                <img src={Figure2} alt='Figure2' id='fig2'/>
            </div>
            <div className='caracteristicasContainer' id='caracteristicas'>
                <h1>Características</h1>
                <div className='columnsContainer'>
                    <div className='descColumn'>
                        <img src={Figure3} alt='Figure3' id='fig3'/>
                        <h1>Flexible</h1>
                        <p>No está enfocado a un solo idioma, puedes aprender palabras en tu idioma nativo o cualquier idioma que estés aprendiendo</p>
                    </div>
                    <div className='descColumn'>
                        <img src={Figure4} alt='Figure4' id='fig4'/>
                        <h1>Juegos</h1>
                        <p>Contiene juegos que te ayudarán a acelerar tu aprendizaje</p>
                    </div>
                    <div className='descColumn'>
                        <img src={Figure5} alt='Figure5' id='fig5'/>
                        <h1>Fácil de usar</h1>
                        <p>La aplicación es muy simple y está pensada para que sólo te enfoques en su objetivo</p>
                    </div>
                </div>
            </div>
            <div className='contactoContainer' id='contacto'>
                <div className='column'>
                    <img src={Foto2} alt='Foto2' id='foto2'/>
                </div>
                <div className='column'>
                    <h1>Saluda al desarrollador</h1>
                    <h4>Email</h4>
                    <p>gerardoerick@outlook.com</p>
                    <h4>Linkedin</h4>
                    <p>linkedin.com/in/gerardoerickv</p>
                    <h4>Teléfono</h4>
                    <p>+52 (231) 322 28 80</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPageView