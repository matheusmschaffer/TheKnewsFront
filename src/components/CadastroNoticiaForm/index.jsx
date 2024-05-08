'use client';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CadastroNoticiaForm = () => {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [img, setImg] = useState('');
    const [categoria, setCategoria] = useState('');
    const router = useRouter();

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        const formulario = {
            titulo,
            img,
            texto,
            categoria
        }
        try {
            const result = axios.post('http://localhost:8080/noticias', formulario)
            alert('Notícia cadastrada com sucesso');
            router.push('/home');
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    const aoAlterarValores = (evento) => {
        const { name, value } = evento.target;
        if (name === 'titulo') {
            setTitulo(value);
        }
        if (name === 'texto') {
            setTexto(value);
        }
        if (name === 'img') {
            setImg(value);
        }
        if (name === 'categoria') {
            setCategoria(value);
        }
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor='titulo'>Título</label>
                <input type='text' name='titulo' onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor='img'>Imagem</label>
                <input type='text' name='img' onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor='categoria'>Categoria</label>
                <select name='categoria' onChange={aoAlterarValores} >
                    <option value='politica'>Política</option>
                    <option value='esporte'>Esporte</option>
                    <option value='entretenimento'>Entretenimento</option>
                    <option value='tecnologia'>Tecnologia</option>
                </select>
            </div>
            <div>
                <label htmlFor='texto'>Texto</label>
                <textarea id='texto' name='texto' onChange={aoAlterarValores} />
            </div>
            <button type='submit'>Cadastrar Notícia</button>
        </form>
    );
}
export default CadastroNoticiaForm;