import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DropZone = () => {
    
    const [selectedImages, setSelectedImages] = useState([]);
    const onDrop = useCallback(acceptedFiles => {
      setSelectedImages(acceptedFiles.map(file => 
        Object.assign(file,{
            preview: URL.createObjectURL(file)
        })
        ));
    }, []);

        const { getRootProps, getInputProps } = useDropzone({onDrop})
        const selected_images = selectedImages?.map(file => (
            <div>
                <img src={file.preview} style={{width:'150px', heigth: '150px'}} alt="" />
            </div>
    ))
      return (
        <div className='h-full' >
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className='flex justify-center w-full h-full'>
                    <label className='flex flex-col justify-center items-center w-11/12 h-96 bg-slate-50 rounded-lg border-2 border-slate-300 border-dashed cursor-pointer dark:hover:bg-slate-800 dark:bg-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-600'>
                        <div className='flex flex-col justify-center items-center pt-5 pb-6'>
                            <svg className='mb-3 w-10 h-10 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className='mb-2 text-xl text-white dark:text-white'><span className='font-bold'>Haz Click</span> o arrastra los archivos</p>
                        </div>
                    </label>
                </div>  
            </div>
                <div className='flex  justify-items-start p-2 space-x-0.5 > * + * '>
                    {selected_images}
                </div>
        </div>
      )
    }

export default DropZone;