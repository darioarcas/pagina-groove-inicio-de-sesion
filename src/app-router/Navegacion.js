import { Link } from 'react-router-dom';
import logo from './LOGO NUEVO.png';

export const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="mx-auto">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-row align-items-center fw-normal text-center">
                <li className="nav-item mx-0 p-0 position-absolute top-25 start-0" style={{width:"80px"}}>
                    <Link className="nav-link w-100" to="/">
                        <img src={logo} style={{width:"80%"}} alt='logo groove'></img>
                    </Link>
                </li>
                <li className="nav-item mx-4">
                    <Link className="nav-link fw-semibold" to="/dj">DJ</Link>
                </li>
                <li className="nav-item mx-4">
                    <Link className="nav-link fw-semibold" to="/produccion-musical">PRODUCCIÓN</Link>
                </li>
                <li className="nav-item mx-4">
                    <Link className="nav-link fw-semibold" to="/alquiler-sala">ALQUILER SALA</Link>
                </li>
                <li className="nav-item mx-4">
                    <Link className="nav-link fw-semibold" to="/tutoriales">TUTORIALES</Link>
                </li>
                {/* <li className="nav-item mx-2">
                    <Link className="nav-link" to="/que-es-groove">Sobre Groove</Link>
                </li>
                <li className="nav-item mx-2">
                    <Link className="nav-link" to="/iniciar-sesion">Iniciar sesión</Link>
                </li> */}
            </ul>
        </div>
    </nav>
  )
}
