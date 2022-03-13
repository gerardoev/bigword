import React from 'react';
import SignInView from './SignIn.view'
//import { useNavigate } from "react-router-dom";

interface SignInContainerProps {
    setRefreshLogin: () => void;
}

const SignIn = (props: SignInContainerProps): React.ReactElement => {
    //const navigate = useNavigate();

    return (
        <SignInView/>
    )
}

export default SignIn