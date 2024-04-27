'use client';
import './style.css'
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

            {menuLateral && <div className='menu_lateral'>
                <div className='fechar' onClick={() => setMenuLateral(false)}>X</div>
                <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Contato</li>
                </ul>
            </div>
            }
        </>
    );

};

export default Menu;