import React from 'react';

import Head from 'next/head';


import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Backdrop from '../Components/Backdrop/Backdrop';
import CategoryContainer from '../Containers/CategoryContainer/CategoryContainer';
import Title from '../Components/Title/Title';
import Button from '../Components/Buttons/Button';
import AdvertContainer from '../Containers/AdvertContainer/AdvertContainer';
import Footer from '../Components/Footer/Footer';

const Home = () => {
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
      <Header />
      <Backdrop elType='White'>
        <Title title='Popular Categories' />
        <CategoryContainer elType='short'/>
        <Button elType='Category'/>
      </Backdrop>

      <Backdrop elType='Grey'>
        <Title title='Recent Uploads' />
        <AdvertContainer />
        <Button elType='Advert'/>
      </Backdrop>

      <Footer />
      
    </>
   );
}
 
export default Home;