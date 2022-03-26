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

    const validateApellido = (apellido: string): boolean  => {
        const validApellido: RegExp = /^[a-z á-ú]*$/i;

        if( apellido.length > 3 && validApellido.test(apellido)){
            setApellidoError(false)
            return true;
        }else{
            setApellidoError(true)
            return false;
        }

    }

    const validateNombre = (nombre: string): boolean  => {
        const validName: RegExp = /^[a-z á-ú]*$/i;

        if( nombre.length > 3 && validName.test(nombre)){
            setNombreError(false)
            return true;
        }else{
            setNombreError(true)
            return false;
        }

    }

    const validateEmail = (email: string): boolean  => {
        const validEmail: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if( validEmail.test(email) ){
            setEmailError(false)
            return true;
        }else{
            setEmailError(true)
            return false;
        }

    }

    const validatePassword = (password: string): boolean  => {
        const containsNumbers: RegExp = /\d/;
        const containsLetters: RegExp = /[a-zá-ú]/;

        if( password.length >= 6 && containsNumbers.test(password) && containsLetters.test(password) ){
            setPasswordError(false)
            return true;
        }else{
            setPasswordError(true)
            return false;
        }

    }

    const validateRpassword = (password: string, rpassword: string): boolean  => {

        if( password === rpassword ){
            setRpasswordError(false)
            return true;
        }else{
            setRpasswordError(true)
            return false;
        }

    }

    const handleSend = () => {
        const vApellido = validateApellido(formData.apellido);
        const vNombre = validateNombre(formData.nombre);
        const vEmail = validateEmail(formData.correo);
        const vPassword = validatePassword(formData.password);
        const vRpassword = validateRpassword(formData.password, formData.rpassword);

        if( vApellido && vNombre && vEmail && vPassword && vRpassword){
            console.log("register");
        }
    }

    return (
        <SignInView 
            goBackClick={() => history.push('/')} 
            onEnviar={handleSend}
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