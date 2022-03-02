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
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subCategoria.map(subcategoria =>
                        <Link to={`${url}/${subcategoria}`} key={subcategoria}>
                            <li className={`${window.location.href.includes(subcategoria) ? 'active-link' : ''} lista-categorias__categoria lista-categorias__categoria--${id}`}>
                                {subcategoria}
                            </li>
                        </Link>
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