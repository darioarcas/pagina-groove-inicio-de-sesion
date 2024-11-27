import '../dj/DJ.css';
import '../alquiler-equipos/Alquileres.css';


const SeccionFondo = ({titulo="Titulo", contenido="Contenido", imagenFondo=""}) => {
    return  <div className="inicio-seccion-ancho">
        {/* <img src={alquiler.img} className="card-img opacity-50" alt={`${alquiler.img} ${index}`}/> */}
        <div className="mx-auto m-3 color-fondo" style={{backgroundImage:`url(${imagenFondo})`}}>
            <div className='overlay-img3'>
                <h5 className="text-center fw-bold mb-5 text-uppercase" style={{padding:"30px 3px"}}>{titulo}</h5>
                <p className="z-4 lista">
                {contenido}
                </p>
            </div>
        </div>
    </div>
}

export default SeccionFondo
