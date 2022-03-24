import React from 'react'
import { Button } from '@mui/material'

interface CustomButtonProps {
    children: string;
    onClick: () => void;
}

const CustomButton = (props: CustomButtonProps): React.ReactElement => {
    const { children, onClick } = props;

    return (
        <Button 
            variant="contained"
            style={{backgroundColor: '#FFC107', width: '100%', height: '100%', fontSize: 'x-large', fontFamily: 'Solway'}}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

export default CustomButton;
