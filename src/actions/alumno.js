// Contiene las acciones que puedes realizar en un alumno



/*
  // Configuracion de las reglas de la base de datos en firebase

  rules_version = '2';

  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if request.auth != null;
      }
    }
  }

*/




// import Swal from "sweetalert2";
// import { db } from "../firebase/firebase-config";
// import { cargarAlumnos } from "../helpers/cargarAlumnos";
import { types } from "../types/types"











export const setearAlumnos = (alumnos)=>{
  return {
      type: types.alumnoLoad,
      payload: [...alumnos]
  }
}



export const cierraFormulario = ()=>{
  return{
    type: types.cerrarFormulario
  }
}








export const activarAlumno = (id, alumno)=>{

  return{
    
    type: types.alumnoActive,
    payload: {
      id,
      ...alumno
    }
  }
}







export const cerrarSesionAlumno = ()=>{
  return {
      type: types.alumnoLogoutCleaning
  }
}