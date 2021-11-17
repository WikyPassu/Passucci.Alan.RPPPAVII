import React from 'react'
import Crud from '../components/Crud';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header titulo="CRUD Mascotas"/>
            <div className="container">
                <Crud />
            </div>
        </>
    );
};

export default Home;
