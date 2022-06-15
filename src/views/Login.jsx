import { useNavigate } from 'react-router-dom';

import { RiFacebookFill} from 'react-icons/ri';
import { RiGoogleFill } from 'react-icons/ri';
import { RiTwitterFill } from 'react-icons/ri';

const Login = () => {
    const navigate = useNavigate();

    
    return (
    <div className='h-screen min-h-screen max-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 flex justify-center items-center p-4'>
        <div className='bg-white shadow w-full p-4 rounded shadow-2xl text-gray-700 bg-gradient-to-b from-white via-green-400 to-gray-300 sm:w-96'>
                <div className='flex justify-end'>
                </div>
                    <p className='text-center pb-2 text-3xl'>
                        Te damos la bienvenida
                    </p>
                <form action='#' className='my-5'>
                    <div className='pb-5 text-sm text-center'>
                        <p>No tienes cuenta? 
                            <div  className='text-blue-500'>
                                Registrate!
                            </div>
                        </p>
                    </div>
                    <div className='pb-5'>
                        <input type='text'className='block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none' placeholder='Correo'/>
                    </div> 
                    <div className='pb-5'>
                        <input type='text' className='block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none' placeholder='Contraseña'/>
                    </div>
                    <div className='pb-5'>
                        <input type='checkbox'/>
                        <label className='pl-1' for=''>
                            Recordar contraseña
                        </label>
                    </div>
                    <div className='pb-5 text-right text-sm'>
                        <div  className='text-blue-500'>
                            Problemas con la contraseña?
                        </div>
                    </div>
                        <button type='submit' className='bg-blue-500 p-2 w-full text-white rounded' onClick={() => navigate("/home")}>
                            Entrar
                        </button>
                </form>
                <div className='mt-8 relative flex justify-around'>
                    <div className='bg-blue-800 h-12 w-12 flex justify-center items-center rounded-full text-white'>
                        <RiFacebookFill className='text-white h-8 w-8'/>
                </div>
                    <div className='bg-blue-500 h-12 w-12 flex justify-center items-center rounded-full text-white'>
                    <RiTwitterFill className='text-white h-8 w-8'/>
                    </div>
                    <div className='bg-red-500 h-12 w-12 flex justify-center items-center rounded-full text-white'>
                        <RiGoogleFill className='text-white h-8 w-8'/>
                    </div>
                </div>
        </div>
    </div>     
    );
}

export default Login