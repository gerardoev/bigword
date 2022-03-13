import React from 'react';
import './SignIn.scss';
import { Icon } from '@mui/material';
import Logo from "../../assets/images/logo_icon.png";

interface SignInViewProps {
    goBackClick: () => void;
}

const SignInView = (props: SignInViewProps): React.ReactElement => {
    const { goBackClick } = props;

    return (
        <div className='signInPage'>
            <div className='leftSide'>
                <Icon onClick={goBackClick}>arrow_back</Icon>
                <img src={Logo} alt='Bigword'/>
                <h1>Registrarse</h1>
            </div>
            <div className='rightSide'>

            </div>
        </div>
    )
}

export default SignInView