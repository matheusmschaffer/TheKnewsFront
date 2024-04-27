'use client';
import { useState } from "react";

const CadastroNoticiaForm = () => {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [imagem, setImagem] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        console.log('Formulário submetido');
    }

    const aoAlterarValores = (evento) => {
        const { name, value } = evento.target;
        if (name === 'titulo') {
            setTitulo(value);
        }
        if (name === 'texto') {
            setTexto(value);
        }
        if (name === 'imagem') {
            setImagem(value);
        }
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor='titulo'>Título</label>
                <input type='text' name='titulo' onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor='imagem'>Imagem</label>
                <input type='text' name='imagem' onChange={aoAlterarValores} />
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