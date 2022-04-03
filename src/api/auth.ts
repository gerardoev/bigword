import {API_HOST, TOKEN} from "../utils/constants";
//import jwtDecode from "jwt-decode";
import {auth} from "../firebase";

export const signUp = async (email: string, password: string) => {
    return await auth.createUserWithEmailAndPassword(email,password)
            .then((userCredential) => {
                return userCredential;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                switch(errorCode){
                    case 'auth/email-already-in-use':
                        errorMessage = 'El correo ya existe';
                        break;
                }
                return  Promise.reject(`Error:  ${errorMessage}`);
            });
}

export const signIn = async (email: string, password: string) => {
    return await auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        return userCredential.user;
        // ...
    })
    .catch((error) => {
        return Promise.reject(error.message)
    });
}

// export function signInApi(user: any){
//     const url = `${API_HOST}/login`;

//     //arreglos a los datos del usuario previo a enviarlos al servidor
//     const userTemp = user;
//     const data = {
//         ...userTemp,
//         email: user.email.toLowerCase()
//     };

//     //datos requeridos en la perición
//     const params = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     };

//     return fetch(url, params).then(response =>{
//         if(response.status >= 200 && response.status < 300){
//             return response.json();
//         }
//         return {message: "Usuario o contraseña incorrectos"};
//     })
//     .then(result =>{
//         return result
//     })
//     .catch(err => {
//         return err;
//     })
// }

export function setTokenApi(token: any){
    localStorage.setItem(TOKEN,token);
}

//obtiene el token del local storage (si existe, ni no, devuelve none)
export function getTokenApi(){
    return localStorage.getItem(TOKEN);
}

//elimina el token del local storage
export function logoutApi(){
    localStorage.removeItem(TOKEN)
}


// export function isUserLoggedApi(){
//     const token = getTokenApi();

//     if(!token){ //Si no existe el token
//         logoutApi(); //por si acaso está dañado
//         return null;
//     }
//     //comprobar si el token ha caducado
//     if(isExpired(token)){
//         logoutApi();
//     }
//     return jwtDecode(token);
// }

// function isExpired(token: any){
//     //Decodificamos el token (verlo en un navegador y obtener las variables que se desean, en este caso exp)
//     const {exp}  = jwtDecode(token);
//     const expire = exp * 1000;
//     const timeout = expire - Date.now();

//     if(timeout < 0){
//         return true;
//     }
//     return false;
// }