import React, { useEffect, useState } from "react";
import { Link, Switch, useRouteMatch } from "react-router-dom";
import { Route, useParams } from "react-router-dom";
import { search } from "../api/api";
import '../assets/css/blog.css';
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";
import SubCategoria from "../components/SubCategoria";

const Categoria = () => {
    const { id } = useParams();
    const { path, url } = useRouteMatch();

    const [subCategoria, setSubCategoria] = useState([]);

    useEffect(() => {
        search(`/categorias/${id}`, (categoria) => {
            setSubCategoria(categoria.subcategorias);
        })
    }, [id]);

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Noticias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subCategoria.map(subcategoria =>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                            key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
                        </li>
                    )
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    );
}

export default Categoria;