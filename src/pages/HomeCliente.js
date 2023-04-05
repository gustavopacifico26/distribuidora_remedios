import React from 'react';
import Navbar from '../components/NavbarCliente';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banner2-remedios.png';
import '../styles/Home.css';

function HomeCliente() {
  return (
    <div>
        <Navbar/>
        <div className='home'
        style = {{ backgroundImage: `url(${BannerImage})` }}>                
            <div 
            className = 'headerContainer' >
            <h1> Distribuidora SEMSA </h1>
            <p> Distribuindo remédios para toda Manaus  </p>
            <Link to = '/pesquisar'>
            <button> COMPRE AQUI </button>
            </Link>
            </div>
                
        </div>

        <Footer/>
    </div>
  )
}

export default HomeCliente
