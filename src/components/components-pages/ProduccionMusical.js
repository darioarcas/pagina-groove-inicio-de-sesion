import ProduccionImage from './dj/img/Produ-img-header.jpg';
import './dj/DJ.css';
import { TarjetasCursos } from './dj/TarjetasCursos';
import { ArrayProduccionMusical as ArrayCursos } from './produccion-musical/ArrayProduccionMusical';



export const ProduccionMusical = () => {
  return (
    <div>
      <header  
            // className='imagen' 
            style={{ 
                backgroundImage: `url(${ProduccionImage})`,
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
                <h1 className='mb-4 text-white'>FORMACIÓN EN PRODUCCIÓN MUSICAL</h1>
                <h6 className='fw-normal fs-6'>
                Ofrecemos una formación integral con cursos especializados en producción electrónica, producción urbana, teoría musical, mixing y mastering. Aprende a crear, mezclar y masterizar tus propios tracks con el acompañamiento de profesionales del sector, adquiriendo las habilidades necesarias para destacar en la industria musical.

                </h6>
            </div>
        </header>

        <body className='pt-5'>
            <TarjetasCursos ArrayCursos={ArrayCursos} inicio={true}/>
        </body>
    </div>
  )
}
