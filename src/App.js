import './App.css';
import DropZone from './components/Dropzone';
import Button from './components/Button';
import Title from './components/Title';
import GoogleButton from './components/GoogleButton';

import React from 'react';


function App() {
  
  return (
    <div className='bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 h-screen w-full'>
      <div className='flex'>
        <section className='w-6/12'>
            <div className='w-full h-full pt-20'>
              <DropZone />
            </div >
            <div className='flex justify-center'>
              <Button />
            </div>
        </section>
        <section className='w-6/12'>
            <div className='w-full h-96 flex justify-center place-items-center'>
              <Title />
            </div >
            <div className='flex justify-center'>
              <GoogleButton />
            </div>
        </section>
      </div>
    </div>

    
  );
}
export default App;

