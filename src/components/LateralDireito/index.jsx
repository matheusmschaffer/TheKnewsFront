'use client';

import CardNoticia from "../CardNoticia";
import './style.css';
import { truncateWithEllipses } from "../../libs/truncateWithEllipses";

export const LateralDireito = ({ noticias }) => {
    const noticiasComElipse = () => {
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
        <div className="lateral-direito">
            <div className="titulo-lateral-direito">
                Últimas notícias
            </div>
            <div>
                {noticias.length && noticiasComElipse()}
            </div>
        </div>
    );
}

export default LateralDireito;