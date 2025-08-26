//src/actions/auth.js

import { types } from "../types/types";
import { firebase, googleAuthProvider, db } from "../firebase/firebase";
import { uiFinishLoading, uiStartLoading } from "./ui";

import Swal from "sweetalert2";
import { cerrarSesionAlumno } from "./alumno";



export const startLoginEmailPassword = (email, password)=>{
    return (dispatch)=>{

        dispatch(uiStartLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {

                dispatch(login(user.uid, user.displayName, user.email));

                dispatch(uiFinishLoading());
                
            })
            .catch(e=> {
                console.log(e);
                dispatch(uiFinishLoading());
                Swal.fire("Error", "No hay usuarios con ese correo y contraseña", "error");
            });

        
    }
}



export const startRegisterEmailPasswordName = (email, password, name)=>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user}) => {

                await user.updateProfile({displayName: name});
                dispatch(login(user.uid, user.displayName, user.email));

            })
            .catch(e=>{ 
                console.log(e);
            });
    }
}











export const startGoogleLogin = () => {
    return async (dispatch) => {
        try {
            const result = await firebase.auth().signInWithPopup(googleAuthProvider);
            const user = result.user;

            const userRef = db.collection("users").doc(user.uid);
            const docSnap = await userRef.get();

            if (docSnap.exists) {
                const userData = docSnap.data();
                if (userData.isRegistered) {
                    // El usuario existe, se procede a hacer el login
                    dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.cursosComprados));
                    return true;
                } else {
                    // El usuario existe pero no estaba marcado como registrado
                    await userRef.set({
                        uid: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                        isRegistered: true,
                        cursosComprados: []
                    });
                    dispatch(login(user.uid, user.displayName, user.email, user.photoURL, user.cursosComprados));
                    Swal.fire("El Registro", "fue exitoso");
                }
            } else {
                // El usuario no existe en Firestore, lo creamos
                await userRef.set({
                    uid: user.uid,
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    isRegistered: true,
                    cursosComprados: []
                });
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
                Swal.fire("El Registro", "fue exitoso");
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error", "Ocurrió un error con el Registro.", "error");
            await firebase.auth().signOut();
        }
    };
};








export const login = (uid, displayName, email, photoURL, cursosComprados=[])=>{
    return{
        type: types.login,
        payload:{
            uid,
            displayName,
            email,
            photoURL,
            cursosComprados,
        }
    }
}





export const startLogout = ()=>{
    
    // se hace la consulta a firebase
    return async(dispatch)=>{
        await firebase.auth().signOut();
        
        // Se desloguea, reiniciando el arreglo
        dispatch(cerrarSesionAlumno());
        dispatch(logout());
    }
}









export const logout = ()=>{
    return{
        type: types.logout
    }
}










// Acción que escucha en tiempo real los cursos comprados y despacha al store
export const startUserCoursesListener = (uid) => {
    return (dispatch) => {
        const userRef = db.collection("users").doc(uid);
        
        const unsubscribe = userRef.onSnapshot(async (doc) => {
            if (doc.exists) {
                const data = doc.data();
                const cursoIds = data.cursosComprados || [];
                
            // Obtener los nombres de los cursos desde cursos_privados
            const cursoPromises = cursoIds.map(async (cursoId) => {
                const cursoSnap = await db.collection("cursos_privados").doc(cursoId).get();
          if (cursoSnap.exists) {
            const cursoData = cursoSnap.data();
            return {
              id: cursoId,
              nombre: cursoData.nombre || "Curso sin nombre",
            };
          } else {
              return { id: cursoId, nombre: "Curso no encontrado" };
            }
        });

        const cursos = await Promise.all(cursoPromises);
        
        dispatch({
            type: types.userCoursesUpdated, // 👈 este es el nuevo tipo
            payload: cursos, // cursos con nombre + id
        });
    }
    });
    
    // Es buena práctica devolver el unsubscribe por si querés cancelarlo
    return unsubscribe;
};
};



































/////////////////////////////////////////////////////////////////////////////// BORRAR


// Accede Cualquiera
// export const startGoogleLogin = ()=>{
//     return (dispatch)=>{
//         firebase.auth().signInWithPopup(googleAuthProvider)
//             .then(({user}) => {
//                 dispatch(login(user.uid, user.displayName, user.email));
//             }).catch(e=>{ 
//                 console.log(e);
//                 Swal.fire("Error", "No hay usuarios con ese correo y contraseña", "error");
//             });
//     }
// }


// export const startLogout = ()=>{
    //     return async (dispatch)=>{
//         await firebase.auth().signOut();
//         dispatch(logout());
//     }
// }

// <-------------------------BORRAR
// Acción asíncrona para cargar los datos del usuario desde Firestore
// export const startLoadUserData = (uid) => {
    //   return async (dispatch) => {
        //     try {
//       const docRef = db.collection("users").doc(uid);
//       const docSnap = await docRef.get();

//       if (docSnap.exists) {
//         const { cursosComprados } = docSnap.data();

//         if (cursosComprados && cursosComprados.length > 0) {
//           // Obtener todos los cursos comprados en paralelo
//           const cursosPromises = cursosComprados.map(async (cursoId) => {
//             const cursoRef = db.collection("cursos_privados").doc(cursoId);
//             const cursoSnap = await cursoRef.get();
//             if (cursoSnap.exists) {
//               return { id: cursoId, ...cursoSnap.data() };
//             } else {
//               return null; // curso no encontrado
//             }
//           });

//           // Esperar todos los cursos
//           const cursosData = (await Promise.all(cursosPromises)).filter(Boolean); // Filtra nulos

//           dispatch(loadUserData(cursosData)); // Enviás todos los cursos comprados al reducer
//         } else {
    //           dispatch(loadUserData([])); // Usuario sin cursos
//         }
//       } else {
    //         dispatch(loadUserData([])); // Documento no existe
    //       }
//     } catch (error) {
    //       console.error("❌ Error al cargar datos del usuario", error);
//       dispatch(loadUserData([]));
//     }
//   };
// };


// // Acción sincronizada
// export const loadUserData = (cursosComprados) => ({
    //   type: types.userLoadData,
    //   payload: cursosComprados,
    // });
    
    
    
    
    
    

    

    


    
    
    
    
















///////////////////////////////////////// BORRAR

// export const saveCode = (code)=>{
//     // Guarda el código con una fecha de expiración (24 horas)
//     const saveCode = {
//         code: code,
//         usado: false,
//         expiracion: firebase.firestore.Timestamp.fromDate(new Date(Date.now() + 24 * 60 * 60 * 1000)), // Expira en 24 horas
//     }
//     return async(dispatch)=>{
//         // const {uid} = getState().auth;
        
//         await db.collection(`STUDENT_CODE_ONE_TIME_PUB/code/code`).add(saveCode);
//         // await db.collection(`${uid}/code/code`).add(saveCode);

//         dispatch(saveCodeReducer(code));
//     }
// }


// export const saveCodeReducer = (code)=>{
//     return{
//         type: types.saveCode,
//         payload: code
//     }
// }