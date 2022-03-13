import React from 'react';
import './LandingPage.scss';
import Logo from "../../assets/images/logo.png";
import Foto from "../../assets/images/lp_foto.png";

interface LandingPageViewProps {

}

const LandingPageView = (props: LandingPageViewProps): React.ReactElement => {
    return (
        <div className='landingPage'>
            <div className='menu'>
                <ul>
                    <li><a href='#inicio'>Inicio</a></li>
                    <li><a href='#description'>Descripción</a></li>
                    <li><a href='#caracteristicas'>Características</a></li>
                    <li><a>Contacto</a></li>
                    <li><a href='/signin'>SignIn</a></li>
                </ul>
            </div>
            <div className='presentationFlexContainer' id='inicio'>
                <div className='leftSide'>
                    <img src={Logo}/>
                    <p>Registro de vocabulario</p>
                    <button>Registrarse</button>
                </div>
                <div className='rightSide'>
                    <img src={Foto}/>
                </div>
            </div>
            <div className='descriptionContainer' id='description'>
                <h1>Descripción</h1>
                <p>it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className='caracteristicasContainer' id='caracteristicas'>
                <h1>Características</h1>
            </div>
        </div>
    )
}

export default LandingPageView