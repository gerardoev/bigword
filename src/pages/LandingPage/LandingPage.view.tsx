import React from 'react';
import './LandingPage.scss';
import Logo from "../../assets/images/logo.png";
import Foto from "../../assets/images/lp_foto.png";

interface LandingPageViewProps {

}

const LandingPageView = (props: LandingPageViewProps): React.ReactElement => {
    return (
        <div className='landingPage'>
            <div className='landingPageFlexContainer'>
                <div className='leftSide'>
                    <img src={Logo}/>
                    <p>Registro de vocabulario</p>
                    <button>Registrarse</button>
                </div>
                <div className='rightSide'>
                    <ul>
                        <li><a>Descripción</a></li>
                        <li><a>Características</a></li>
                        <li><a>Contacto</a></li>
                        <li><a>SignIn</a></li>
                    </ul>
                    <img src={Foto}/>
                </div>
            </div>
        </div>
    )
}

export default LandingPageView