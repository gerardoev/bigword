import React from 'react';
import { useHistory } from 'react-router-dom';
import LandingPageView from './LandingPage.view'

interface LandingPageProps {
}

const LandingPage = (props: LandingPageProps): React.ReactElement => {
    const history = useHistory();

    const  onSignUpClick = () => {
        history.push('/signup')
    }

    const  onSignInClick = () => {
        history.push('/signin')
    }

    return (
        <LandingPageView onSignUpClick={onSignUpClick} onSignInClick={onSignInClick}/>
    )
}

export default LandingPage