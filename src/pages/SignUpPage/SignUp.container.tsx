import React, { useState } from 'react';
import SignUpView from './SignUp.view'
import { useHistory } from "react-router-dom";
import { signUp } from '../../api/auth';
import { toast } from 'react-toastify';

interface SignUpContainerProps {
    setRefreshLogin: () => void;
}

type FormDataType = {
    nombre: string,
    apellido: string,
    correo: string,
    password: string,
    rpassword: string,
}

const SignUp = (props: SignUpContainerProps): React.ReactElement => {
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
    const [apellidoMsg, setApellidoMsg] = useState<string>('')
    const [emailMsg, setEmailMsg] = useState<string>('')
    const [nombreMsg, setNombreMsg] = useState<string>('')
    const [passwordMsg, setPasswordMsg] = useState<string>('')
    const [rpasswordMsg, setRpasswordMsg] = useState<string>('')
    const [enviarLoading, setEnviarLoading] = useState<boolean>(false)

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

        if(apellido.length <= 3){
            setApellidoError(true);
            setApellidoMsg('Debe ser mayor a 3 caracteres');
            return false;
        }
        if(!validApellido.test(apellido)){
            setApellidoError(true);
            setApellidoMsg('Solo puede contener letras');
            return false;
        }
        setApellidoError(false);
        setApellidoMsg('');
        return true
    }

    const validateNombre = (nombre: string): boolean  => {
        const validName: RegExp = /^[a-z á-ú]*$/i;

        if(nombre.length <= 3){
            setNombreError(true);
            setNombreMsg('Debe ser mayor a 3 caracteres');
            return false;
        }
        if(!validName.test(nombre)){
            setNombreError(true);
            setNombreMsg('Solo puede contener letras');
            return false;
        }
        setNombreError(false);
        setNombreMsg('');
        return true
    }

    const validateEmail = (email: string): boolean  => {
        const validEmail: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if( validEmail.test(email) ){
            setEmailError(false);
            setEmailMsg('');
            return true;
        }else{
            setEmailError(true)
            setEmailMsg('Debe ser un email válido');
            return false;
        }

    }

    const validatePassword = (password: string): boolean  => {
        const containsNumbers: RegExp = /\d/;
        const containsLetters: RegExp = /[a-zá-ú]/;

        if(password.length < 6){
            setPasswordError(true);
            setPasswordMsg('Debe ser mayor o igual a 6 caracteres');
            return false;
        }
        if(!containsNumbers.test(password)){
            setPasswordError(true);
            setPasswordMsg('Debe contener números');
            return false;
        }   
        if(!containsLetters.test(password)){;
            setPasswordMsg('Debe contener letras');
            setPasswordError(true);
            return false;
        }
        setPasswordError(false);
        setPasswordMsg('');
        return  true;

    }

    const validateRpassword = (password: string, rpassword: string): boolean  => {

        if( password === rpassword ){
            setRpasswordError(false);
            setRpasswordMsg('');
            return true;
        }else{
            setRpasswordError(true);
            setRpasswordMsg('Las contraseñas deben coincidir');
            return false;
        }

    }

    const handleSend = async () => {
        const vApellido = validateApellido(formData.apellido);
        const vNombre = validateNombre(formData.nombre);
        const vEmail = validateEmail(formData.correo);
        const vPassword = validatePassword(formData.password);
        const vRpassword = validateRpassword(formData.password, formData.rpassword);

        if( vApellido && vNombre && vEmail && vPassword && vRpassword){
            setEnviarLoading(true);
            await signUp(formData.correo, formData.password)
            .then(() => {
                toast.success('Se ha creado la cuenta exitosamente')
            }).catch((error) => {
                toast.error(error);
                setEnviarLoading(false);
            })
        }
    }

    return (
        <SignUpView 
            goBackClick={() => history.push('/')} 
            onEnviar={handleSend}
            handleInputChange={handleInputChange}
            apellidoError={apellidoError}
            emailError={emailError}
            nombreError={nombreError}
            passwordError={passwordError}
            rpasswordError={rpasswordError}
            enviarLoading={enviarLoading}
            apellidoMsg={apellidoMsg}
            nombreMsg={nombreMsg}
            emailMsg={emailMsg}
            passwordMsg={passwordMsg}
            rpasswordMsg={rpasswordMsg}
        />
    )
}

export default SignUp