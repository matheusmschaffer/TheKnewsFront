'use client';

import './style.css';
import CardNoticia from "../CardNoticia";
import { truncateWithEllipses } from "../../libs/truncateWithEllipses";

const GridNoticias = ({ noticias }) => {
    const noticiasPorCategoria = () => {
        return noticias.map((noticia, index) => {
            noticia.texto = truncateWithEllipses(noticia.texto, 50);
            return (
                <div style={{ marginBottom: '20px' }} key={index}>
                    <CardNoticia key={index} noticia={noticia} temHover={false} />
                </div>
            );
        })
    }
    return (
        <div className='grid-noticias'>

            {noticias.length && noticiasPorCategoria()}

        </div>
    );
}
export default GridNoticias;