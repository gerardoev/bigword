import React from 'react'
import { Button, CircularProgress } from '@mui/material'

interface CustomButtonProps {
    children: string;
    onClick: () => void;
    loadingProp?: boolean;
}

const CustomButton = (props: CustomButtonProps): React.ReactElement => {
    const { children, onClick, loadingProp } = props;
    const loading = loadingProp === undefined ? false : loadingProp === false? false :  true;

    if(loading === false){
        return (
            <Button 
                variant="contained"
                style={{backgroundColor: '#FFC107', width: '100%', height: '100%', fontSize: 'x-large', fontFamily: 'Solway'}}
                onClick={onClick}
            >
                {children}
            </Button>
        );
    }else{
        return(<CircularProgress />)
    }
}

export default CustomButton;
