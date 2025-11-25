import Carrusel from "./curso/carrusel/Carrusel.js";
import { ArrayCursos } from "./dj/ArraysCursos";
import { ArrayInicio } from "./inicio/ArrayInicio.js";
import './inicio/Inicio.css';
import SeccionFondo from "./inicio/SeccionFondo.js";
import TarjetasCursosSlider from "./inicio/TarjetasCursosSlider.js";
import { ArrayProduccionMusical } from "./produccion-musical/ArrayProduccionMusical";
import YouTubePlaylist from "./tutoriales/img/YoutubePlaylist.js";
import fondoSeccion1 from './dj/img/Produ-img-header.jpg';






export const Inicio = () => {
  // const imagenesGaleria = [...ArrayCursos[0].imgGaleria, ...ArrayProduccionMusical[0].imgGaleria];
  const imagenesGaleria = [...ArrayInicio[1]];
  const todosLosCursos = [...ArrayProduccionMusical, ...ArrayCursos];
  return (
    <div className="app-wrapper position-relative">

      {/* Fondo con círculos animados */}
      <div className="background-gradient position-fixed w-100 h-100 top-0 start-0 z-n1"></div>

      <div className="content position-relative">

        <SeccionFondo titulo={<h2 className="fw-semibold">Conoce nuestra Academia</h2>} contenido={<Carrusel imagenes={imagenesGaleria} />} imagenFondo={fondoSeccion1}/>


        <SeccionFondo titulo="Descubrí la formación que se adapte perfectamente a los que buscas y necesitas" contenido={<TarjetasCursosSlider ArrayCursos={todosLosCursos}/>} imagenFondo={fondoSeccion1}/>



        <SeccionFondo titulo="TUTORIALES Y NOVEDADES" contenido={<YouTubePlaylist playlistId={'PL2a32sHFSitvcGFIEdnC2BVDnJTmkoFnj'} resultados={1} inicio={true}/>} imagenFondo={fondoSeccion1}/>
      </div>


    </div>
  )
}
