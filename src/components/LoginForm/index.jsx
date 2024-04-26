'use client';

import { useState } from "react";

const LoginForm = () => {
    const [formulario, setFormulario] = useState({
        email: '',
        senha: ''
    });

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        console.log('Formulário enviado', formulario)
    }

    const aoAlterarValores = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" onChange={aoAlterarValores} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" onChange={aoAlterarValores} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default LoginForm;