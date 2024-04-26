'use client';

import { useState } from "react";

const CadastroForm = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        //todo: enviar dados para o backend
        console.log('Formulário enviado', nome, email, senha)
    }

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'nome':
                setNome(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'senha':
                setSenha(value);
                break;
            default:
                break;
        }
    }
    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" onChange={aoAlterarValores} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
};
export default CadastroForm;