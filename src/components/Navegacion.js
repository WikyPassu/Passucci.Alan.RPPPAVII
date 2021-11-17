import React from 'react';
import BotonRuta from './BotonRuta';

const Navegacion = () => {
    return (
        <div>
            <nav className="navbar">
                <BotonRuta tipo="Perro"/>
                <BotonRuta tipo="Gato"/>
                <BotonRuta tipo="Reptil"/>
                <BotonRuta tipo="Pez"/>
                <BotonRuta tipo="Roedor"/>
            </nav>
        </div>
        
    );
};

export default Navegacion;
