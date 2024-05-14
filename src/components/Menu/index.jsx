'use client';
import './style.css'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faMugHot } from '@fortawesome/free-solid-svg-icons'


const Menu = () => {
    const [menuLateral, setMenuLateral] = useState(false);
    const router = useRouter()
    return (
        <>
            <nav className='menunav'>
                <button className='bars' onClick={() => setMenuLateral(!menuLateral)}><FontAwesomeIcon icon={faBars} size="1x" /></button>
                <div className='logo'><FontAwesomeIcon icon={faMugHot} />Logo</div>
                <button className='login' onClick={() => router.push('/login')}>Login</button>
            </nav>

            {menuLateral && <div className='menu_lateral' onMouseLeave={() => setMenuLateral(false)}>
                <div className='fechar' onClick={() => setMenuLateral(false)}><FontAwesomeIcon icon={faXmark} size='2x' color='#fccd07' /></div>
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