import React from "react";
import { db } from "../../firebase/firebase";

export const CrearCursos = () => {
  const cursos = [
    {nombre: "Curso de DJ con CDJ Pioneer Inicial", id: "un id unico"},
    {nombre: "Curso de DJ Urbano Inicial", id: ""},
    {nombre: "Curso de DJ con CDJ Pioneer Avanzado", id: ""},
    {nombre: "Curso de DJ con Traktor", id: ""},
    {nombre: "Curso de Produccion Musical Electronica con Ableton Inicial", id: ""},
    {nombre: "Curso de Produccion Musical Electronica con Ableton Avanzado", id: ""},
    {nombre: "Curso de Mezcla y Masterizacion Incial", id: ""},
    {nombre: "Curso de Produccion Musical Urbana con Ableton", id: ""},
    {nombre: "Curso de Progressive Avanzado Intensivo con Ableton", id: ""},
  ];

  const generarClases = (cantidad) => {
    const clases = [];
    for (let i = 1; i <= cantidad; i++) {
      clases.push({
        titulo: `Modulo ${i}`,
        descripcion: "",
      });
    }
    return clases;
  };

  const crearCursosEnFirestore = async () => {
    try {
      for (const curso of cursos) {
        // Usamos add() para generar ID automático
        await db.collection("cursos_publicos").add({
          nombre: curso.nombre,
          descripcion: "",
          clases: generarClases(16),
          imagen: "",
          cursoId: curso.id,
        });
        console.log(`Curso creado: ${curso.nombre}`);
      }

      alert("✅ Cursos creados correctamente en Firestore.");
    } catch (error) {
      console.error("❌ Error al crear cursos:", error);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>CREAR CURSOS EN FIREBASE</h2>
      <h2>CREAR CURSOS EN FIREBASE</h2>
      <h2>CREAR CURSOS EN FIREBASE</h2>
      <h2>CREAR CURSOS EN FIREBASE</h2>
      <h2>CREAR CURSOS EN FIREBASE</h2>
      <button onClick={crearCursosEnFirestore}>Crear estructura</button>
    </div>
  );
};

export default CrearCursos;
