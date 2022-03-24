import React, { useEffect, useState } from 'react';
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const name: string = event.target.name;
        const value: string = event.target.value;
        const c_formD:FormDataType  = {...formData};
        switch(name){
            case 'nombre':
                c_formD.nombre = value;
                break;
            case 'apellido':
                c_formD.apellido = value;
                break;
            case 'email':
                c_formD.correo = value;
                break;
            case 'password':
                c_formD.password = value;
                break;
            case 'rpassword':
                c_formD.rpassword = value;
                break;
        }
        setFormData(c_formD);
    }

    return (
        <SignInView 
            goBackClick={() => history.push('/')} 
            onEnviar={() => console.log('hola')}
            handleInputChange={handleInputChange}
        />
    )
}

export default SignIn