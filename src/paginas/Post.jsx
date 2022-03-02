import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { search } from '../api/api';
import '../assets/css/post.css';


const Post = () => {
    let history = useHistory();
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        search(`/posts/${id}`, setPost).catch(() => {
            history.push('/404');
        })
    }, [id])
    return (
        <main className="conteiner flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    );
}

export default Post;