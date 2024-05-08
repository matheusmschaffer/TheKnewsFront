'use client';
import './style.css'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation'


const Menu = () => {
    const [menuLateral, setMenuLateral] = useState(false);
    const router = useRouter()
    return (
        <>
            <nav className='menu'>
                <button onClick={() => setMenuLateral(!menuLateral)}>Menu</button>
                <div>Logo</div>
                <button onClick={() => router.push('/login')}>Login</button>
            </nav>

            {menuLateral && <div className='menu_lateral' onMouseLeave={() => setMenuLateral(false)}>
                <div className='fechar' onClick={() => setMenuLateral(false)}>X</div>
                <ul>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/noticias/produto">Produto</Link></li>
                    <li><Link href="/noticias/tecnologia">Tecnologia</Link></li>
                    <li><Link href="/noticias/vendas">Vendas</Link></li>
                    <li><Link href="/noticias/rh">RH</Link></li>
                </ul>
            </div>
            }
        </>
    );

};

export default Menu;