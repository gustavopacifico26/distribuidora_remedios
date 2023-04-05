import React from 'react';
import Image from '../assets/hospital2.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/NavbarADM';
import '../styles/CadastrarHospital.css';

function CadastrarHospital(){
    return(

        <div className = 'page'>
            <Navbar />
            <div className = 'cadastrarHospital'>

                <div className = 'leftSide' style = {{ backgroundImage: `url(${Image})` }}>

                </div>

                <div className = 'rightSide'>
                    <h1> Faça o cadastro do hospital aqui </h1>
                    <form id='nomeHospital' method="POST">
                        <label hrmlfor = 'name'> Nome do hospital: </label>
                        <input name='name' placeholder = 'insira o texto' type='text'/>
                        <label hrmlfor = 'email'> Email: </label>
                        <input name='email' placeholder = 'insira o texto' type='email'/>
                        <label hrmlfor = 'number'> Número de celular: </label>
                        <input name='number' placeholder = 'insira o texto' type='text'/>
                        <label hrmlfor = 'cnes'> CNES: </label>
                        <input name='cnes' placeholder = 'insira o texto' type='text'/>
                        <label hrmlfor = 'leitos'> Número de leitos: </label>
                        <input name='leitos' placeholder = 'insira o texto' type='text'/>

                        <button type = 'submit'> Cadastrar Hospital </button>

                    </form>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default CadastrarHospital;