import React, { useState } from 'react';
import SignInView from './SignIn.view'
import { useHistory } from "react-router-dom";
import { signIn } from '../../api/auth';
import { toast } from 'react-toastify';

interface SignInContainerProps {
}

type FormDataType = {
    correo: string,
    password: string,
}

const SignIn = (props: SignInContainerProps): React.ReactElement => {
    const history = useHistory();
    const [formData, setFormData] = useState<FormDataType>({
        correo: '',
        password: '',
    })
    const [enviarLoading, setEnviarLoading] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [emailMsg, setEmailMsg] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const name: string = event.target.name;
        const value: string = event.target.value;
        const c_formD:FormDataType  = {...formData};
        switch(name){
            case 'email':
                c_formD.correo = value;
                validateEmail(value);
                break;
            case 'password':
                c_formD.password = value;
                break;
        }
        setFormData(c_formD);
    }

    const handleSend = async () => {
        const vEmail = validateEmail(formData.correo);
        if( vEmail ){
            setEnviarLoading(true);
            await signIn(formData.correo, formData.password)
            .then(() => {
                console.log('success')
                toast.success('¡Bienvenido!')
            }).catch((error: any) => {
                toast.error(error);
                setEnviarLoading(false);
            })
        }
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

    return (
        <SignInView 
            goBackClick={() => history.push('/')} 
            onEnviar={handleSend}
            handleInputChange={handleInputChange}
            enviarLoading={enviarLoading}
            emailValid={emailError}
            emailMsg={emailMsg}
        />
    )
}

export default SignIn