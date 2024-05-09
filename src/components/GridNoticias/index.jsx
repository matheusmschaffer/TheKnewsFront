'use client';
import './style.css';
import CardNoticia from "../CardNoticia";
const GridNoticias = ({ noticias }) => {
    return (
        <div className='grid-noticias'>
            {noticias.map((noticia) => (
                <CardNoticia noticia={noticia} key={noticia.id} />
            ))}
        </div>
    );
}
export default GridNoticias;