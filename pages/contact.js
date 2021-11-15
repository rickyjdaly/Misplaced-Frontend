import React from 'react';

import Head from 'next/head';
import Navbar from '../Components/Navbar/Navbar';
import Backdrop from '../Components/Backdrop/Backdrop';
// import AboutContainer from '../Container/AboutContainer/AboutContainer';
import Footer from '../Components/Footer/Footer';
import ContactContainer from '../Containers/ContactContainer/ContactContainer';
// import MyProfileContainer from '../Container/MyProfileContainer/MyProfileContainer';


const Contact = (props) => {
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
            <Backdrop elType='Grey' NoPadding>

                <ContactContainer />
                
            </Backdrop>
            <Footer />
        </>
     );
}
 
export default Contact;