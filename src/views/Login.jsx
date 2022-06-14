



const Login = () => {
    return (
    <div className='h-screen min-h-screen max-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 flex justify-center items-center p-4'>
        <div className='bg-white shadow w-full p-4 rounded shadow-2xl text-gray-700 sm:w-96'>
            <div className='flex justify-end'>
                <img src='https://www.ns-logo.com/wp-content/uploads/2020/07/logo-icon-png-8.png' alt="" class="w-8"/> 
             </div>
                <p class='text-center pb-2 text-3xl'>Hola!</p>
                <form action='#' class="my-5">
                <div class="pb-5 text-sm text-center">
                    <p>No tienes cuenta? <div  className='text-blue-500'>Registrate!</div>
                    </p>
                </div>
                <div className='pb-5'>
                    <input type='text'className='block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none' placeholder='Correo'/>
                </div> 
                <div class="pb-5">
                    <input type="text" className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none" placeholder="Contraseña"/>
                </div>
                <div class="pb-5">
                    <input type="checkbox"/>
                    <label className="pl-1" for="">Recordar contraseña</label>
                </div>
                <div class="pb-5 text-right text-sm">
                    <div  class="text-blue-500">Problemas con la contraseña?</div>
                </div>
                    <button type="submit" class="bg-blue-500 p-2 w-full text-white rounded">Entrar
                    </button>
                </form>

                <hr></hr>

                <div className='mt-8 relative flex justify-around'>
                    <div class="bg-blue-800 h-12 w-12 flex justify-center items-center rounded-full text-white">
                        <i class="fab fa-facebook text-3xl"></i>
                    </div>
                        <div class="bg-blue-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
                            <i class="fab fa-twitter text-3xl"></i>
                        </div>
                        <div class="bg-red-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
                            <i class="fab fa-google text-3xl"></i>
                        </div>
                    </div>
                </div>
            </div>     
    );
}

export default Login