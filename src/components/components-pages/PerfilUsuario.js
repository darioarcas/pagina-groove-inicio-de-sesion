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
                <div className="container">
                    <img 
                        className="foto-perfil rounded-circle me-3" 
                        src={auth.photoURL} 
                        alt="Foto de perfil"
                        style={{ width: '60px', height: '60px', margin:"10px"}}
                    />
                    <h3 className='my-auto text-white' style={{marginRight:"auto"}}>{auth.name}</h3>
                    <h6 className='fw-normal fs-6 mx-0 my-auto'>
                        <button onClick={()=>{handleLogout2()}} className="btn btn-outline-success mx-0" >Cerrar Sesion</button>
                    </h6>
                </div>
            </div>
        </header>

        <body className='pt-5'>
            <Dashboard/>
        </body>
    </div>
  )
}
