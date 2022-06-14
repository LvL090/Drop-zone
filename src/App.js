import './App.css';
import DropZone from './components/Dropzone';

import React from 'react';


function App() {
  
  return (
    <div className='bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 h-screen w-full'>
      <div>
        <section className='w-3/6 h-full pt-20'>
          <DropZone />
        </section>
        <section>

        </section>
      </div>
    </div>
  );
}
export default App;

