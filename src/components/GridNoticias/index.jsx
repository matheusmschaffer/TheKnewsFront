'use client';
import CardNoticia from "../CardNoticia";
const GridNoticias = ({ noticias }) => {
    return (
        <div>
            {noticias.map((noticia) => (
                <CardNoticia noticia={noticia} key={noticia.id} />
            ))}
        </div>
    );
}
export default GridNoticias;