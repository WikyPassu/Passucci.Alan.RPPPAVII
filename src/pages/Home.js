import React from 'react'
import Crud from '../components/Crud';
import Header from '../components/Header';
import Navegacion from '../components/Navegacion';

const Home = () => {
    return (
        <>
            <Header titulo="CRUD Mascotas"/>
            <Navegacion/>
            <div className="container">
                <Crud />
            </div>
        </>
    );
};

export default Home;
