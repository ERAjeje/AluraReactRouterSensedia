import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/api";
import '../assets/css/blog.css';

const ListaCategorias = () => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        search('/categorias', setCategorias);
    }, []);

    return (
        <ul className="lista-categorias container flex">
            {
                categorias.map(categoria =>
                    <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
                        <li className={`${window.location.href.includes(categoria.id) ? 'active-link' : ''} lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                )
            }
        </ul>
    );
}

export default ListaCategorias;