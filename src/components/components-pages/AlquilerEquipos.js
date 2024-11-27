import { ArrayAlquileres } from './alquiler-equipos/ArrayAlquileres';
import AlquilerImage from './alquiler-equipos/img/Alquiler-img-header.jpg';
import './dj/DJ.css';
import './alquiler-equipos/Alquileres.css';
import imagenFondo from './produccion-musical/img/04.jpg';

export const AlquilerEquipos = () => {
  return (
    <div>
      <header  
            // className='imagen' 
            style={{ 
                backgroundImage: `url(${AlquilerImage})`,
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
                <h1 className='mb-4 text-white'>ALQUILER DE SALA DJ</h1>
                <h6 className='fw-normal fs-6'>
                Disfruta de un espacio profesional para practicar o grabar tus sets en audio y video. Con equipamiento de última generación, que incluye CDJ 2000 NEXUS, XDJ 1000 MK2, DJM900 NEXUS, XONE 92 y 96, RMX 1000, tendrás todo lo necesario para mejorar tu técnica y creatividad. Ofrecemos packs de prácticas para quienes buscan entrenar con frecuencia, además de combos con descuentos exclusivos.

                </h6>
            </div>
        </header>

        <body>
            

            {ArrayAlquileres.map((alquiler, index) => {
              return  <div className="alquileres-ancho">
                        {/* <img src={alquiler.img} className="card-img opacity-50" alt={`${alquiler.img} ${index}`}/> */}
                        <div className="border border-secondary rounded mx-auto m-3 color-fondo" style={{backgroundImage:`url(${imagenFondo})`}}>
                          <div className='overlay-img2 p-5'>
                            <h5 className="text-center fw-bold" style={{color:""}}>{alquiler.titulo}</h5>
                            <p className="z-4 lista">
                              {alquiler.informacionAlquiler.map(items=>{
                                return <>
                                  <h3 className='fs-6 fw-normal' style={{color:""}}>{items.titulo}</h3>
                                  { (items.titulo === "COSTOS POR HORA" || items.titulo === "COSTOS") ?
                                    <ol style={{color:""}}>
                                      {items.descripcion.map(item=>{
                                        return <li><p className='fw-semibold' style={{fontSize:"14px"}}>{item}</p></li>
                                      })}
                                    </ol>
                                    : ""
                                  }
                                  { (items.titulo === "ACLARACIÓN") ?
                                    <ul style={{color:""}}>
                                      {items.descripcion.map(item=>{
                                        return <li><p className='fw-semibold' style={{fontSize:"14px"}}>{item}</p></li>
                                      })}
                                    </ul>
                                    : ""
                                  }
                                </>
                              })}
                            </p>
                            {/* <p className="card-text"><small>Last updated 3 mins ago</small></p> */}
                          </div>
                        </div>
                      </div>
            })}
        </body>
    </div>
  )
}
