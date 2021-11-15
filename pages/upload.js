import React from 'react';

import Head from 'next/head';
import Navbar from '../Components/Navbar/Navbar';
import Backdrop from '../Components/Backdrop/Backdrop';
import UploadContainer from '../Containers/UploadContainer/UploadContainer';

const upload = (props) => {
    return ( 
        <>
            <Head>
                <link 
                rel="stylesheet" 
                href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" 
                integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" 
                crossOrigin="anonymous" 
                />
            </Head>
            <Navbar />
            <Backdrop elType='Grey'>
                <UploadContainer />
            </Backdrop>
        </>
     );
}
 
export default upload;