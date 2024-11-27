import CDJImage from './dj/img/CDJ-2000Nexus_FRONT.jpg';
import './dj/DJ.css';
import { TarjetasCursos } from './dj/TarjetasCursos';
import { ArrayCursos } from './dj/ArraysCursos';

export const DJ = () => {
  return (
    <div>
        <header  
            // className='imagen' 
            style={{ 
                backgroundImage: `url(${CDJImage})`,
                backgroundSize: "cover", 
                backgroundPosition: "center",
                width:"100%",
                height:"600px",
                position:"relative",
            }}
        >

            {/* Overlay oscuro con opacidad al 10% */}
            <div className='overlay-img'></div>

            <div className='texto-header'>
                <h1 className='mb-4 text-white'>FORMACIÓN EN DJ</h1>
                <h6 className='fw-normal fs-6'>
                Te ofrecemos una formación integral para DJs, abarcando todos los niveles y estilos. Desde las bases esenciales con CDJs Pioneer hasta técnicas avanzadas de mezcla y manejo de cabina profesional. También exploramos el potencial creativo del software Traktor Pro y mantenemos viva la esencia del DJing clásico con vinilos, combinando lo analógico y lo digital. Nuestro objetivo es brindarte las herramientas y conocimientos necesarios para que destaques en cualquier escenario y desarrolles tu propio estilo.

                </h6>
            </div>
        </header>

        <body className='pt-5'>
            <TarjetasCursos ArrayCursos={ArrayCursos} inicio={true}/>
        </body>
    </div>
  )
}
