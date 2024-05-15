'use client';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Noticia from "../../../components/Noticia";
import './style.css';
import { LateralEsquerdo } from '../../../components/LateralEsquerdo';
import { LateralDireito } from '../../../components/LateralDireito';

const HomePage = () => {
    const [noticias, setNoticias] = useState([]);
    const getNoticias = async () => {
        try {
            const result = await axios.get('http://localhost:8080/noticias');
            setNoticias(result.data);
        } catch (error) {
            alert(error.response.data.message);
        }

    }

    useEffect(() => {
        getNoticias();
    }, []);
    return (
        <div className="home">
            <div className="esquerda">
                {noticias[0] && <LateralEsquerdo noticia={noticias[0]} />}
            </div>
            <div>
                {noticias.map(noticia => (
                    <Noticia key={noticia.id} noticia={noticia} />
                ))}
            </div>
            {getNoticias() && <LateralDireito noticias={noticias} />}
        </div>
    );
}

export default HomePage;