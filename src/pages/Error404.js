import React from 'react'
import Header from '../components/Header';

const Error404 = () => {
    return (
        <>
            <Header titulo="CRUD Mascotas"/>
            <div className="centrado">
                <h1 className="title">Error 404: Página no encontrada :(</h1>
            </div>
        </>
    );
};

export default Error404;