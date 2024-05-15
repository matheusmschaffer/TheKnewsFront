'use client';
import './style.css';
import { useState } from 'react';

const CardNoticia = ({ noticia, temHover = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='card-noticia'>
            <div style={{ position: 'relative' }} onMouseEnter={() => setIsHovered(temHover ? true : false)} onMouseLeave={() => setIsHovered(false)}>
                <div className='popular' style={{ opacity: isHovered ? '0.75' : '0' }}>Clique aqui</div>
                <div className='imagem' style={{ backgroundImage: `url(${noticia.img})` }} />
            </div>

            <h2>{noticia.titulo}</h2>
            <div className='publicado-em'>{new Date(noticia.createdAt).toLocaleDateString('pt-BR')}</div>
            <p dangerouslySetInnerHTML={{ __html: noticia.texto }} />

        </div>
    );
}
export default CardNoticia;