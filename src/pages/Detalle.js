import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router";
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Header from '../components/Header';

const Detalle = () => {
    const {id} = useParams();
    const [pet, setPet] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {nombre, edad, tipo, vacunado, observaciones} = pet;
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:5500/mascotas/"+id)
        .then(res=>res.ok?res.json():Promise.reject(res.status + ": " + res.statusText))
        .then(mascota=>{
            setPet(mascota);
        })
        .catch(err=>{
            console.error(err);
            history.push("/404");
        })
        .finally(() => setIsLoading(false));
    }, [id, history]);

    return (
        <>
            <Header titulo="CRUD Mascotas"/>
            <nav className="navbar">
                <Link to="/" className="navbar-item">Volver</Link>
            </nav>
            <div className="centrado">
                {
                    isLoading?<Spinner/>:
                    <>
                        <h2 className="title is-4">Información de la Mascota</h2>
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                <p><b>Nombre:</b> {nombre}</p>
                                <p><b>Edad:</b> {edad} años</p>
                                <p><b>Tipo:</b> {tipo}</p>
                                <p><b>Vacunado:</b> {vacunado?"Si":"No"}</p>
                                <p><b>Observaciones:</b> {observaciones?observaciones:"No hay observaciones"}</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
};

export default Detalle;