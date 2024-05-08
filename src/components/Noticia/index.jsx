'use client';
import Link from "next/link";
const Noticia = (props) => {
    return (
        <div>
            <div>{props.noticia.titulo}</div>
            <h4><Link href={`/noticias/${props.noticia.categoria}`}>{props.noticia.categoria}</Link></h4>
            <img src={props.noticia.img} alt="noticia" />
            <div dangerouslySetInnerHTML={{ __html: props.noticia.texto }} />
        </div>
    );
}
export default Noticia;