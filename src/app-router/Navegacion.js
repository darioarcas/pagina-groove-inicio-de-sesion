import { Link } from 'react-router-dom';
import logo from './LOGO NUEVO.png';
import { useSelector } from 'react-redux';

export const Navegacion = () => {
    const auth = useSelector(store=>{return store.auth});
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="mx-auto" style={{width:"75%"}}>
            {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row align-items-center fw-normal text-center"> */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row justify-content-between fw-normal text-center" style={{width:"100%"}}>
                {/* <li className="nav-item mx-0 p-0 position-absolute top-25 start-0" style={{width:"80px"}}> */}
                <li className="nav-item" style={{marginRight:"40px"}}>
                    <Link className="nav-link fw-semibold" to="/dj">DJ</Link>
                </li>
                <li className="nav-item" style={{marginRight:"40px"}}>
                    <Link className="nav-link fw-semibold" to="/produccion-musical">PRODUCCIÓN</Link>
                </li>
                <li className="nav-item mx-4" style={{width:"80px"}}>
                    <Link className="nav-link w-100" to="/">
                        <img src={logo} style={{width:"55px"}} alt='logo groove'></img>
                    </Link>
                </li>
                <li className="nav-item" style={{marginLeft:"40px"}}>
                    <Link className="nav-link fw-semibold" to="/alquiler-sala">ALQUILER SALA</Link>
                </li>
                <li className="nav-item" style={{marginLeft:"40px"}}>
                    <Link className="nav-link fw-semibold" to="/tutoriales">TUTORIALES</Link>
                </li>

                <li className="nav-item mx-4">
                    <Link className="nav-link fw-semibold" to="/iniciar-sesion">
                        {   
                            //Si el alumno inicio sesion en el navegador se muestra "Perfil" y no "Ingresar"
                            Object.keys(auth).length !== 0
                            ? "PERFIL" :"INGRESAR"
                        }
                    </Link>
                </li>

                {/* <li className="nav-item mx-2">
                    <Link className="nav-link" to="/que-es-groove">Sobre Groove</Link>
                </li> */}
            </ul>
        </div>
    </nav>
  )
}
