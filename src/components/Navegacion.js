import React from 'react';
import BotonRuta from './BotonRuta';

const Navegacion = () => {
    return (
        <div>
            <nav className="navbar">
                <BotonRuta className="navbar-item" tipo="Perro"/>
                <BotonRuta className="navbar-item"  tipo="Gato"/>
                <BotonRuta className="navbar-item"  tipo="Reptil"/>
                <BotonRuta className="navbar-item"  tipo="Pez"/>
                <BotonRuta className="navbar-item"  tipo="Roedor"/>
            </nav>
        </div>
        
    );
};

export default Navegacion;
