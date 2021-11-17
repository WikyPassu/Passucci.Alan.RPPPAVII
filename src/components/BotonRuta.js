import React from 'react';
import { NavLink } from 'react-router-dom';

const BotonRuta = ({tipo}) => {
    return (
        <>
            <NavLink exact to={`/animales/${tipo}`}>{tipo}</NavLink>
        </>
    );
};

export default BotonRuta;
