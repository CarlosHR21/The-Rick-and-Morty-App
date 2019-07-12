import React from 'react';
import '../App.css';
import Boton from '../components/Boton';

const Home = () => {
    return(
        <div className = "App">
            <header className = "App-header">
                <img src={process.env.PUBLIC_URL + '/images/logoRM.png'} width='400' alt='RM'/>
                <Boton>Ingresar</Boton>
            </header>
        </div>
    );
}

export default Home;
