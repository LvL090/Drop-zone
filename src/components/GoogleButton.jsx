import React from 'react';
import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";

function GoogleButton () {

    const [openPicker, data, ] = useDrivePicker();
    
    const handleOpenPicker = () => {
      openPicker({
        clientId:"1021087990906-n43a6oaefq2huljf3mnmg2ujhpvan9cc.apps.googleusercontent.com",
        developerKey:"AIzaSyC48GV6h05oTAR53bFSxd2TYXI6wJuhyOk",
        viewId:"DOCS",
        token:"ya29.a0ARrdaM_tx4eqmUR-cDnzJszk8QtOUeFM8npOZI47ImJ18vzdL7QF86oJVIbTTTK35-rXu37iEn2E-J6nyp-9rfZHzOEVfzXKmWlGkV4gUBe3fHzYCfszJ0njCkRYtUj1m6NDxwXxGc3ywNJmz-e0MMVWB9LI",
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: true,
        
      });
    };
   
    useEffect(() => {
      
      if (data) {
        data.docs.map((i) => console.log(i));
      }
    }, [data]);

    return (
        <button onClick={() => handleOpenPicker()} type="button" className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'>
            <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                </path>
            </svg>
           GoogleDrive
      </button>
    );
}

export default GoogleButton;