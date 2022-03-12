import React from 'react';
import LandingPageView from './LandingPage.view'

interface LandingPageProps {
    setRefreshLogin: () => void;
}

const LandingPage = (props: LandingPageProps): React.ReactElement => {
    return (
        <LandingPageView/>
    )
}

export default LandingPage