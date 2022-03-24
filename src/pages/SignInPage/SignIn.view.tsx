import React, {useRef} from 'react';
import './SignIn.scss';
import { Icon, TextField } from '@mui/material';
import Logo from "../../assets/images/logo_icon.png";
import ButtonComponent from '../../components/ButtonComponent'

interface SignInViewProps {
    goBackClick: () => void;
    onEnviar: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignInView = (props: SignInViewProps): React.ReactElement => {
    const { goBackClick, onEnviar, handleInputChange } = props;

    return (
        <div className='signInPage'>
            <div className='leftSide'>
                <Icon onClick={goBackClick}>arrow_back</Icon>
                <img src={Logo} alt='Bigword'/>
                <h1>Registrarse</h1>
            </div>
            <div className='rightSide'>
                <div className='customRow'>
                    <Input label={'Nombre'} name={'nombre'} onChange={handleInputChange}/>
                    <Input label={'Apellido'} name={'apellido'} onChange={handleInputChange}/>
                </div>
                <div className='customRow'>
                    <Input label={'Correo'} type={'email'} name={'email'} onChange={handleInputChange}/>
                </div>
                <div className='customRow'>
                    <Input label={'Contraseña'} type={'password'} name={'password'} onChange={handleInputChange}/>
                    <Input label={'Repetir contraseña'} type={'password'} name={'rpassword'} onChange={handleInputChange}/>
                </div>
                <div className='customRow' style={{marginTop: '30vh'}}>
                    <ButtonComponent onClick={onEnviar}>
                        Enviar
                    </ButtonComponent>
                </div>
            </div>
        </div>
    )
}


interface InputProps {
    label : string,
    type? : string,
    name  : string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps): React.ReactElement => {
    const { label, type, name, onChange } = props;
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
            onChange={onChange}
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
            name={name}
        />
    );
}

export default SignInView