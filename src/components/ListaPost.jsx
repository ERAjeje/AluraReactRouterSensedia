import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../api/api";
import { normalizeUrl } from "../utils/normalize";

const ListaPost = ({ url }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => { search(url, setPosts) }, [url]);

    return (
        <section className="posts container">
            {
                posts.map(post =>
                    <Link to={`/posts/${post.id}/${normalizeUrl(post.title)}`}
                        key={post.id} className={`cartao-post cartao-post--${post.categoria}`}>
                        <article>
                            <h3 className="cartao-post__titulo">{post.title}</h3>
                            <p className="cartao-post__meta">{post.metadescription}</p>
                        </article>
                    </Link>
                )
            }
        </section>
    );
}

export default ListaPost;