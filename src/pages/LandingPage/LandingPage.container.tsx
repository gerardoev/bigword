import React from 'react';
import { useHistory } from 'react-router-dom';
import LandingPageView from './LandingPage.view'

interface LandingPageProps {
    setRefreshLogin: () => void;
}

const LandingPage = (props: LandingPageProps): React.ReactElement => {
    const history = useHistory();

    const  onSignUpClick = () => {
        history.push('/signup')
    }

    return (
        <LandingPageView onSignUpClick={onSignUpClick}/>
    )
}

export default LandingPage