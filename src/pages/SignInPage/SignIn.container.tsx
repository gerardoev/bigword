import React, { useState } from 'react';
import SignInView from './SignIn.view'
import { useHistory } from "react-router-dom";

interface SignInContainerProps {
    setRefreshLogin: () => void;
}

type FormDataType = {
    nombre: string,
    apellido: string,
    correo: string,
    password: string,
    rpassword: string,
}

const SignIn = (props: SignInContainerProps): React.ReactElement => {
    const history = useHistory();
    const [formData, setFormData] = useState<FormDataType>({
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        rpassword: '',
    })
    const [apellidoError, setApellidoError] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [nombreError, setNombreError] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState<boolean>(false)
    const [rpasswordError, setRpasswordError] = useState<boolean>(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const name: string = event.target.name;
        const value: string = event.target.value;
        const c_formD:FormDataType  = {...formData};
        switch(name){
            case 'nombre':
                c_formD.nombre = value;
                validateNombre(value);
                break;
            case 'apellido':
                c_formD.apellido = value;
                validateApellido(value);
                break;
            case 'email':
                c_formD.correo = value;
                validateEmail(value);
                break;
            case 'password':
                c_formD.password = value;
                validatePassword(value)
                break;
            case 'rpassword':
                c_formD.rpassword = value;
                validateRpassword(formData.password, value)
                break;
        }
        setFormData(c_formD);
    }

    const validateApellido = (apellido: string) => {
        const validApellido: RegExp = /^[a-z á-ú]*$/i;

        if( apellido.length > 3 && validApellido.test(apellido)){
            setApellidoError(false)
        }else{
            setApellidoError(true)
        }

    }

    const validateNombre = (nombre: string) => {
        const validName: RegExp = /^[a-z á-ú]*$/i;

        if( nombre.length > 3 && validName.test(nombre)){
            setNombreError(false)
        }else{
            setNombreError(true)
        }

    }

    const validateEmail = (email: string) => {
        const validEmail: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if( validEmail.test(email) ){
            setEmailError(false)
        }else{
            setEmailError(true)
        }

    }

    const validatePassword = (password: string) => {
        const containsNumbers: RegExp = /\d/;
        const containsLetters: RegExp = /[a-zá-ú]/;

        if( password.length >= 6 && containsNumbers.test(password) && containsLetters.test(password) ){
            setPasswordError(false)
        }else{
            setPasswordError(true)
        }

    }

    const validateRpassword = (password: string, rpassword: string) => {

        if( password === rpassword ){
            setRpasswordError(false)
        }else{
            setRpasswordError(true)
        }

    }

    return (
        <SignInView 
            goBackClick={() => history.push('/')} 
            onEnviar={() => console.log('hola')}
            handleInputChange={handleInputChange}
            apellidoError={apellidoError}
            emailError={emailError}
            nombreError={nombreError}
            passwordError={passwordError}
            rpasswordError={rpasswordError}
        />
    )
}

export default SignIn