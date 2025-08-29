
import { useEffect, useState } from 'react';
import './dj/DJ.css';
import { db } from "../../firebase/firebase";
import { TarjetasCursos } from './dj/TarjetasCursos';
// import { ArrayCursos } from './dj/ArraysCursos';

export const Videocursos = () => {
    const [cursosPrivados, setCursosPrivados] = useState([]);

    useEffect(() => {
        
        const leerCursosPrivados = async () => {
            try {
            const snapshot = await db.collection("cursos_privados").get();
            const cursosLeidos = snapshot.docs.map(doc => ({
                cursoId: doc.id,
                titulo: doc.data().nombre || "",
                descripcion: doc.data().descripcion || "",
                img:""
            }));
    
            setCursosPrivados(cursosLeidos);
            } catch (error) {
            console.error("❌ Error al leer cursos privados:", error);
            }
        };

        leerCursosPrivados();
    }, []);



  return (
    <div>
        <header>
            <div className='texto-header'>
                <h1 className='mb-4 text-white'>Videocursos On-Demand</h1>
                <h6 className='fw-normal fs-6'>
                    Accede a una formación completa para DJs, disponible cuando y donde quieras. Aprende desde los fundamentos con CDJs Pioneer hasta técnicas avanzadas de mezcla y control de cabina profesional. Descubre cómo llevar tu creatividad al siguiente nivel con Traktor Pro, sin dejar de lado la esencia del DJing clásico con vinilos. Domina tanto lo digital como lo analógico a tu ritmo.

                    Nuestros videocursos están diseñados para que desarrolles tu propio estilo y estés listo para destacar en cualquier escenario.
                </h6>
            </div>
        </header>

        <body className='pt-5'>
            {cursosPrivados.length === 0 ? (
                <div className="mx-auto w-100 d-flex justify-content-center">
                    <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <h3 style={{ margin: 'auto', padding:"0"}}>CARGANDO CURSOS</h3>
                        <div className="spinner-border text-white mx-2 my-auto" role="status"></div>
                    </div>
                </div>
            ) : (
                <TarjetasCursos ArrayCursos={cursosPrivados} onDemand={true} inicio={true} />
            )}
        </body>

    </div>
  )
}
