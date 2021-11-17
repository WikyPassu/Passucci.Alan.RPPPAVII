import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Header from '../components/Header';

const Animales = () => {
    const {tipo} = useParams();
    const [lista, setLista] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:5500/mascotas/")
        .then(res=>res.ok?res.json():Promise.reject(res.status + ": " + res.statusText))
        .then(lista=>{
            setLista(lista.filter(tipo => tipo.tipo !== tipo));
            console.log(lista);
        })
        .catch(err=>console.error(err))
        .finally(() => setIsLoading(false));
    }, []);

    return (
        <>
            <Header titulo="CRUD Mascotas"/>
            <div className="centrado">
                {
                    isLoading?<Spinner/>:
                    <>
                        {
                            lista.map(mascota => {
                                return (
                                    <>
                                        <h2 className="title is-4">Mascotas que son {tipo}</h2>
                                        <div className="card">
                                            <div className="card-content">
                                                <div className="content">
                                                <p><b>Nombre:</b> {mascota.nombre}</p>
                                                <p><b>Edad:</b> {mascota.edad} años</p>
                                                <p><b>Tipo:</b> {mascota.tipo}</p>
                                                <p><b>Vacunado:</b> {mascota.vacunado?"Si":"No"}</p>
                                                <p><b>Observaciones:</b> {mascota.observaciones?mascota.observaciones:"No hay observaciones"}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ); 
                            })
                        }
                        
                        <br/>
                        <Link to="/">Volver</Link>
                    </>
                }
            </div>
        </>
    );
};

export default Animales;