import { Link } from "react-router-dom"


export const Registro = () => {
  return (
    <>
          <hr className='opacity-0 my-5' />
    
          <section className='bg-white my-5 p-3 rounded m-auto ' style={{maxWidth:"300px"}}>
    
            <h3 className='text-center text-black mb-4 fw-semibold'>Registrarse</h3>
    
            <form>
              <label className='d-block mb-4'>
    
                <p className='my-auto mx-2 text-black'>Nombre</p>            
    
                <input
                  className='form-control p-1'
                  type='text'
                  name='name'
                  placeholder='Tu nombre...'
                />
              </label>
              
              <label className='d-block mb-4'>
    
                <p className='my-auto mx-2 text-black'>Mail</p>            
    
                <input
                  className='form-control p-1'
                  type='email'
                  name='email'
                  placeholder='email@email.com...'
                />
              </label>
    
              <label className='d-block mb-4'>
    
                <p className='my-auto mx-2 text-black'>Contraseña</p>            
    
                <input
                  className='form-control p-1'
                  type='password'
                  name='password'
                  placeholder=''
                />
              </label>
              
              <label className='d-block mb-4'>
    
                <p className='my-auto mx-2 text-black'>Confirmar contraseña</p>            
    
                <input
                  className='form-control p-1'
                  type='password'
                  name='confirm'
                  placeholder=''
                />
              </label>
    
    
    
              <button type='submit' className='btn btn-primary w-100 mb-4'>Registrarse</button>
    
    
              <Link to="/iniciar-sesion">
                iniciar sesión
              </Link>
            </form>
          </section>
        </>
  )
}
