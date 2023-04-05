import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner2-remedios.png';
import '../styles/Home.css';
import Footer from '../components/Footer';
import Navbar from '../components/NavbarADM';

function Home(){
    return(
        <div>
            <Navbar />
            <div className='home'
            style = {{ backgroundImage: `url(${BannerImage})` }}>                
                <div 
                className = 'headerContainer' >
                <h1> Distribuidora SEMSA </h1>
                <p> Distribuindo remédios para toda Manaus  </p>
                <Link to = '/estoque'>
                <button> COMPRE AQUI </button>
                </Link>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Home;