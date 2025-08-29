import React from "react";
import { db } from "../../firebase/firebase";
import Swal from "sweetalert2";
import { useState } from "react";

export const CrearCursos = () => {
  const [cursosPrivados, setCursosPrivados] = useState([]);
  const cursos = [
  {
        cursoId: "49IDOMB1Y4Ggenk24eiJ",
        nombre: "Curso de Mezcla y Masterizacion Incial",
        descripcion: "",
        img: "",
      },
  {
        cursoId: "FDCOyzRIApEF6xgiS5N9",
        nombre: "Curso de DJ Urbano Inicial",
        descripcion: "",
        img: "",
      },
  {
        cursoId: "HNxJyZfHaJZqNjyFAuSN",
        nombre: "Curso de DJ con Traktor",
        descripcion: "",
        img: "",
      },
  {
        cursoId: "NA0adiIpNSZWAYHKuEb7",
        nombre: "Curso de DJ con CDJ Pioneer Avanzado",
        descripcion: "",
        img: "",
      },
  {
        cursoId: "l5PXiyL9cxMEn1OSHTv9",
        nombre: "Curso de Produccion Musical Electronica con Ableton Inicial",
        descripcion: "",
        img: "",
      },
  {
        cursoId: "o95L1ZtDuWeBfRf1AGJx",
        nombre: "Curso de Produccion Musical Electronica con Ableton Avanzado",
        descripcion: "",
        img: "",
      },
  {
        cursoId: "oCGt5o0drabaZz6az8nC",
        nombre: "Curso de DJ con CDJ Pioneer Inicial",
        descripcion: "",
        img: "",
      },
  {
        cursoId: "rJdF20ieqRgOHbyQ6dFI",
        nombre: "Curso de Progressive Avanzado Intensivo con Ableton",
        descripcion: "HOLAAAAAAAAA",
        img: "",
      },
  {
        cursoId: "ydPPmUt2Ukpyz2Anma1n",
        nombre: "Curso de Produccion Musical Urbana con Ableton",
        descripcion: "",
        img: "",
      }
]

  const generarTemario = (cantidad) => {
    const temario = [];
    for (let i = 1; i <= cantidad; i++) {
      temario.push({
        titulo: `Modulo ${i}`,
        descripcion: "",
      });
    }
    return temario;
  };

  const crearCursosEnFirestore = async () => {
    try {
      for (const curso of cursos) {
        // Usamos add() para generar ID automático
        await db.collection("cursos_publicos").add({
          nombre: curso.nombre,
          descripcion: curso.descripcion,
          temario: generarTemario(16),
          img: "",
          cursoId: curso.cursoId,
        });
        // console.log(`Curso creado: ${curso.nombre}`);
        // alert( `✅ Curso creado: ${curso.nombre}`);
        Swal.fire({
          toast: true,
          position: 'top-end',           // esquina superior derecha
          icon: 'success',               // ícono de éxito
          title: '✅ Curso creado: ' + curso.nombre,
          showConfirmButton: false,      // sin botón de OK
          timer: 5000,                   // 5 segundos
          timerProgressBar: true,        // barra de tiempo
          background: '#333',            // fondo oscuro
          color: '#fff',                 // texto claro
          iconColor: '#00e676',          // color del ícono
          customClass: {
            popup: 'small-toast'         // clase CSS personalizada (opcional)
          }
        });
      }

      // alert("✅ Cursos creados correctamente en Firestore.");
      Swal.fire({
        toast: true,
        position: 'top-end',           // esquina superior derecha
        icon: 'success',               // ícono de éxito
        title: "✅ Cursos creados correctamente en Firestore.",
        showConfirmButton: false,      // sin botón de OK
        timer: 3000,                   // 5 segundos
        timerProgressBar: true,        // barra de tiempo
        background: '#333',            // fondo oscuro
        color: '#fff',                 // texto claro
        iconColor: '#00e676',          // color del ícono
        customClass: {
          popup: 'small-toast'         // clase CSS personalizada (opcional)
        }
      });
    } catch (error) {
      console.error("❌ Error al crear cursos:", error);
    }
  };




  const leerCursosPrivados = async () => {
    try {
      const snapshot = await db.collection("cursos_privados").get();
      const cursosLeidos = snapshot.docs.map(doc => ({
        cursoId: doc.id,
        nombre: doc.data().nombre || "",
        descripcion: doc.data().descripcion || "",
        img:""
      }));

      setCursosPrivados(cursosLeidos);

      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: "✅ Cursos privados leídos",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        background: '#333',
        color: '#fff',
        iconColor: '#00e676',
        customClass: {
          popup: 'small-toast'
        }
      });
    } catch (error) {
      console.error("❌ Error al leer cursos privados:", error);
    }
  };

  const copiarArrayAlPortapapeles = async () => {
      try {
        const jsFormatted = cursosPrivados.map(curso => {
          return `  {
        cursoId: "${curso.cursoId}",
        nombre: "${curso.nombre}",
        descripcion: "${curso.descripcion}",
        img: "${curso.img}",
      }`;
        });

        const finalString = "[\n" + jsFormatted.join(",\n") + "\n]";

        await navigator.clipboard.writeText(finalString);

        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: "✅ Array copiado",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          background: '#333',
          color: '#fff',
          iconColor: '#00e676',
          customClass: {
            popup: 'small-toast'
          }
        });
      } catch (err) {
        console.error("❌ Error al copiar array:", err);
      }
  };







  return (
    <div style={{ padding: "2rem" }}>
      <h2>.</h2>
      <h2>.</h2>
      <h2>.</h2>
      <h2>.</h2>
      <h2>CREAR CURSOS EN FIREBASE</h2>
      <button onClick={crearCursosEnFirestore}>Crear estructura</button>



      <hr style={{ margin: "2rem 0" }} />

      <h2>LEER CURSOS PRIVADOS</h2>
      <button onClick={leerCursosPrivados}>Leer cursos privados</button>

      {cursosPrivados.length > 0 && (
        <>
          <pre
            style={{
              background: "#222",
              color: "#0f0",
              padding: "1rem",
              marginTop: "1rem",
              maxHeight: "300px",
              overflowY: "auto",
              fontSize: "0.85rem",
              borderRadius: "5px",
            }}
          >
            {JSON.stringify(cursosPrivados, null, 2)}
          </pre>
          <button onClick={copiarArrayAlPortapapeles} style={{ marginTop: "1rem" }}>
            Copiar array
          </button>
        </>
      )}



    </div>
  );
};

export default CrearCursos;



