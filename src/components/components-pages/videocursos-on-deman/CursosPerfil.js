import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { db, firebase } from "../../../firebase/firebase";
import { convertirASlug } from "../../helpers/convertirASlug";
import "./CursosDinamicos.css";
import "../dj/DJ.css";
import { ArrayCursos } from '../dj/ArraysCursosOnDemand';
import CustomYouTubePlayer from "../../helpers/CustomYouTubePlayer";

export const CursosPerfil = () => {
    const { slug } = useParams();
    const [curso, setCurso] = useState(null);
    const [cargando, setCargando] = useState(true);
    const { state } = useLocation();
    const { nombreSlug } = useParams();
    const navigate = useNavigate();
  


  useEffect(() => {
    const obtenerCurso = async () => {
        try {
            const docRef = db.collection("cursos_privados").doc(state.id);
            const docSnap = await docRef.get();

            if (docSnap.exists) {
                const cursoData = { id: docSnap.id, ...docSnap.data() };
                setCurso(cursoData);
            } else {
            console.warn("⚠️ No se encontró el curso.");
            }

            setCargando(false);
        } catch (error) {
            console.error("❌ Error al cargar el curso:", error);
            setCargando(false);
        }
    };

    obtenerCurso();
  }, [slug, state.id]);




    // Hook para detectar cambios en el tamaño de la ventana
    const [width2, setWidth] = useState(window.innerWidth);

    // Actualizar el ancho cuando la ventana cambia de tamaño
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);





    useEffect(() => {
        if (!state?.id) {
        // El usuario entró directamente escribiendo la URL, sin pasar por <Link />
        // Redireccionamos o mostramos un error
        navigate("/perfil/videocursos", { replace: true });
        }
    }, [state, navigate]);

    if (!state?.id) return null; // O un mensaje: "Curso no encontrado"






    // const getEmbedUrl = (url) => {
    //     const videoId = url.split("youtu.be/")[1];
    //     return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&disablekb=1`;
    // };

        const getEmbedUrl = (url) => {
            const match = url.match(/\/file\/d\/([^/]+)\//);
            if (!match || !match[1]) return "";
            return `https://drive.google.com/file/d/${match[1]}/preview`;
        };










    // Función para obtener los estilos dinámicos
    const dynamicHeight = ()=> {
        const width = width2;

        const style = {
            height: width < 490 ? "500px" : "300px",
            // maxHeight: "800px",
            width: "100%",
            // position: "relative"
        };

        return style;
    }







    return (
        <div className="app-wrapper position-relative">
            
            {/* Fondo con círculos animados */}
            <div className="background-gradient position-fixed w-100 h-100 top-0 start-0 z-n1"></div>

            {/* Contenido principal */}
            <div className="content position-relative">
                <header 
                    className="position-relative" 
                    // style={dynamicHeight()}
                    style={{
                        width: "100%",
                        height: "300px",
                        position: "relative",
                    }}
                >
                    {/* Imagen de fondo en Header */}
                    <div
                        className="background-img"
                        style={{backgroundImage: `url(${curso?.imagen})`}}
                    >
                    </div>
                    {/* Overlay oscuro con opacidad al 10% */}
                    <div className='overlay-img'></div>
                    {/* Capa transparente que desenfoca lo de atrás */}
                    {/* <div className="blur-overlay"></div> */}

                    {/* Contenido encima */}
                    <div className="texto-header w-100 text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
                        <h1 className="mb-2">{curso?.nombre}</h1>
                        <h1 className="fw-light mt-2 fs-6">{curso?.descripcion}</h1>
                    </div>
                </header>



                <main>
                    <section className="contenedor-body" style={{display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center", width:"70%"}}>
                        <h1 className="titulo-body text-center">{curso?.tituloBody}</h1>
                        <ul key={curso?.id} className="p-0" style={{listStyle:"none", width:"100%"}}>
                        {curso?.clases?.map((clase, index) => (
                            <li key={index} className="mb-4">
                                <h4>{clase?.titulo}</h4>
                                <p>{clase?.descripcion}</p>

                                <div style={{ position: 'relative', minWidth: '300px', maxWidth: '800px', height: '360px' , margin:"0 auto"}}>
                                    <iframe
                                        src={getEmbedUrl(clase.videoUrl)}
                                        width="100%"
                                        height="360"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        title={`Clase ${index + 1}`}
                                        onContextMenu={(e) => e.preventDefault()} // Bloquea clic derecho
                                    />

                                    {/* Capa para bloquear el botón emergente */}
                                    <div
                                        style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: '100px',
                                        height: '100px',
                                        backgroundColor: 'transparent',
                                        pointerEvents: 'auto',
                                        zIndex: 10,
                                        }}
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        console.log("🔒 Botón emergente bloqueado");
                                        }}
                                    />                                              
                                    {/* <CustomYouTubePlayer videoId={clase.videoUrl} /> */}
                                </div>


                            </li>
                        ))}
                        </ul>
                    </section>
                </main>

            </div>

        </div>
    );                      
};
