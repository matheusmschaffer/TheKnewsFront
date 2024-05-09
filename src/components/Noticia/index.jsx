'use client';
import './style.css';
import Link from "next/link";
const Noticia = (props) => {
    return (
        <div className='noticia'>
            <div className='imagem' style={{ backgroundImage: `url(${props.noticia.img})` }} />
            <h2>{props.noticia.titulo}</h2>
            <h4><Link href={`/noticias/${props.noticia.categoria}`}>{props.noticia.categoria}</Link></h4>
            <h6 className='publicado-em'>{new Date(props.noticia.createdAt).toLocaleDateString('pt-BR')}</h6>
            <div className='texto' dangerouslySetInnerHTML={{ __html: props.noticia.texto }} />
        </div>
    );
}
export default Noticia;