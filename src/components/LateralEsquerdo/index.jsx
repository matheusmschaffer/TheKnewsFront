'use client';

import CardNoticia from "../CardNoticia";
import './style.css';

function truncateWithEllipses(text, max) {
    return text.substr(0, max - 1) + (text.length > max ? '...' : '');
}

export const LateralEsquerdo = () => {
    const noticia = {
        id: 1,
        titulo: 'OpenAI vai lançar seu próprio buscador para desbancar o Google',
        texto: 'A OpenAI está preparando <b>o lançamento da sua maior novidade desde que abriu o ChatGPT para o público<b>, lá em novembro de 2022 — quando você nem fazia ideia o que era AI ainda.',
        img: 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/aa1a8ed5-e726-4e09-b08d-3bf1c3cfd5e6/image.png?t=1715296771',
        createdAt: new Date()
    }
    noticia.texto = truncateWithEllipses(noticia.texto, 50);
    return (
        <div className="lateral-esquerdo">
            <div className="titulo-lateral-esquerdo">
                <h2>Notícias Populares</h2>
            </div>
            <CardNoticia noticia={noticia} />
        </div>
    );
}

export default LateralEsquerdo;