'use client';

import CardNoticia from "../CardNoticia";
import './style.css';
import { truncateWithEllipses } from "../../libs/truncateWithEllipses";

export const LateralEsquerdo = ({ noticia }) => {

    noticia.texto = truncateWithEllipses(noticia.texto, 50)
    return (
        <div className="lateral-esquerdo">
            <div className="titulo-lateral-esquerdo">
                <h2>Notícias Populares</h2>
            </div>
            <CardNoticia noticia={noticia} temHover={true} />
        </div>
    );
}

export default LateralEsquerdo;