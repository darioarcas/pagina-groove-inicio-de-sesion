
import './dj/DJ.css';
// import { TarjetasCursos } from './dj/TarjetasCursos';
// import { ArrayCursos } from './dj/ArraysCursos';

export const Videocursos = () => {
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
            {/* <TarjetasCursos ArrayCursos={ArrayCursos} inicio={true}/> */}
            <h2>Lista de cursos On-Demand...</h2>
        </body>
    </div>
  )
}
