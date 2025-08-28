//src/components/components-pages/PerfilUsuario.js

import { useSelector } from "react-redux"
import Dashboard from './perfil-usuario/Dashboard';

export const PerfilUsuario = ({handleLogout}, checking) => {

    const auth = useSelector(store=>{return store.auth});

    const handleLogout2 = ()=>{
        handleLogout();
    }



    if(!checking){
        return (
            <>
                <h1>CARGANDO...</h1>
            </>
        )
    }

  return (
    <div>
        <header>    
            <div className='texto-header d-flex flex-row justify-content-center align-items-center'>
                <div className="d-flex flex-row justify-content-start w-75">
                    <img 
                        className="foto-perfil rounded-circle me-3" 
                        src={auth.photoURL} 
                        alt="Foto de perfil"
                        style={{ width: '60px', height: '60px', margin:"10px"}}
                    />
                    {/* <h3 className='my-auto text-white' style={{marginRight:"auto"}}>{auth.name}</h3> */}
                    <div class="dropdown my-auto">
                        <info class="dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {auth.name}
                        </info>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            {/* <li><a class="dropdown-item active" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li> */}
                            <li className='fw-normal fs-6 mx-0 my-auto'>
                                <button onClick={()=>{handleLogout2()}} className="btn btn text-white" >Cerrar Sesion</button>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </header>

        <body className='pt-5 d-flex flex-column justify-content-center w-75 mx-auto'>
            <Dashboard/>
        </body>
    </div>
  )
}
