import {API_HOST} from "../utils/constants";

export function signInApi(user){
    const url = `${API_HOST}/login`;

    //arreglos a los datos del usuario previo a enviarlos al servidor
    const userTemp = user;
    const data = {
        ...userTemp,
        email: user.email.toLowerCase()
    };

    //datos requeridos en la perición
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    return fetch(url, params).then(response =>{
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }
        return {message: "Usuario o contraseña incorrectos"};
    })
    .then(result =>{
        return result
    })
    .catch(err => {
        return err;
    })
}