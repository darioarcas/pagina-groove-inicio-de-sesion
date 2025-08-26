import { db } from '../../../firebase/firebase'; // Asegúrate de que la ruta sea correcta

export const getRoomRentalData = async (route) => {
  try {
    // Referencia al documento
    const docRef = db.collection('ROOM_RENTAL_VIDEO_SET').doc(route);
    
    // Obtener el documento
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      // El documento existe, accedemos a los datos
      console.log('Datos del documento:', docSnap.data());
      // Aquí puedes acceder a los campos específicos del documento
      const data = docSnap.data(); // Devuelve un objeto con los campos
      // Ejemplo de cómo acceder a un campo específico
      // const videoUrl = data.videoUrl;

      return data;
    } else {
      console.log('No se encontró el documento');
      return false;
    }
  } catch (error) {
    console.error('Error al obtener el documento:', error);
  }

};
