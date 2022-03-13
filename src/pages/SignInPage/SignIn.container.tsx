import React from 'react';
import SignInView from './SignIn.view'
import { useHistory } from "react-router-dom";

interface SignInContainerProps {
    setRefreshLogin: () => void;
}

const SignIn = (props: SignInContainerProps): React.ReactElement => {
    const history = useHistory();

    return (
        <SignInView goBackClick={() => history.push('/')}/>
    )
}

export default SignIn