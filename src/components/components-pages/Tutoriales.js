import headerTutoriales from './tutoriales/img/headerTutoriales.jpg';
import './dj/DJ.css';
import YouTubePlaylist from './tutoriales/img/YoutubePlaylist';

export const Tutoriales = () => {
  return (
    <div>
        <header  
            // className='imagen' 
            // style={{ 
            //     backgroundImage: `url(${headerTutoriales})`,
            //     backgroundSize: "cover", 
            //     backgroundPosition: "center",
            //     width:"100%",
            //     height:"600px",
            //     position:"relative",
            // }}
        >

            {/* Overlay oscuro con opacidad al 10% */}
            {/* <div className='overlay-img'></div> */}

            <div className='texto-header'>
                <h1 className='mb-4 text-white'>TUTORIALES</h1>
                <h6 className='fw-normal fs-6'>
                Te presentamos una amplia variedad de videos diseñados para mejorar tus habilidades como DJ y productor musical. Desde técnicas de mezcla hasta lecciones de producción electrónica y urbana, nuestros tutoriales te guiarán paso a paso en el uso de las herramientas. Ya seas principiante o avanzado, nuestros videos están pensados para ayudarte a llevar tu talento al siguiente nivel.

                </h6>
            </div>
        </header>

        <body>
            <YouTubePlaylist playlistId={'PL2a32sHFSitvcGFIEdnC2BVDnJTmkoFnj'} YouTubePlaylist={1} inicio={false}/>
            {/* <TarjetasCursos ArrayCursos={ArrayCursos} /> */}
        </body>
    </div>
  )
}
