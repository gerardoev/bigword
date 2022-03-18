import React, {useRef} from 'react';
import './SignIn.scss';
import { Icon, TextField } from '@mui/material';
import Logo from "../../assets/images/logo_icon.png";
import { width } from '@mui/system';

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
                <div className='customRow'>
                    <Input label={'Nombre'}/>
                    <Input label={'Apellido'}/>
                </div>
                <div className='customRow'>
                    <Input label={'Correo'} type={'email'}/>
                </div>
                <div className='customRow'>
                    <Input label={'Contraseña'} type={'password'}/>
                    <Input label={'Repetir contraseña'} type={'password'}/>
                </div>
            </div>
        </div>
    )
}


interface InputProps {
    label : string,
    type? : string,
}

const Input = (props: InputProps): React.ReactElement => {
    const { label, type } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        if(key === 'Enter'){
            if(inputRef.current){
                inputRef.current.blur();
            }
        }
    }

    return (
        <TextField
            label={label} 
            inputRef={inputRef} 
            onKeyDown={handleKeyDown} 
            InputProps={{
                sx:{
                    backgroundColor: 'white',
                },
            }}
            sx={{
                width: '100%',
                margin: '1em'
            }}
            type={type}
        />
    );
}

export default SignInView