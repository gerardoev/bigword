import React from 'react';
import './SignIn.scss';
import { Icon } from '@mui/material';
import Logo from "../../assets/images/logo_icon.png";

interface SignInViewProps {

}

const SignInView = (props: SignInViewProps): React.ReactElement => {
    return (
        <div className='signInPage'>
            <div className='leftSide'>
                <Icon>arrow_back</Icon>
                <img src={Logo} />
                <h1>Registrarse</h1>
            </div>
            <div className='rightSide'>

            </div>
        </div>
    )
}

export default SignInView