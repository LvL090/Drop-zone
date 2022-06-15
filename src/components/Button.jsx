import React from 'react';
import swal from 'sweetalert';


function Button () {

const showAlert = () => {
    swal ({
        title: "Upps..",
        text: "Parece que algo falla :(",
        icon: "error",
        button: "Aceptar",
    });
}

    return (
        <button onClick={()=>showAlert()} className=' w-11/12 text-white bg-gradient-to-br from-gray-400 to-green-600 hover:bg-gradient-to-bl 00  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
            Subir Archivos
        </button>
    );
}

export default Button;