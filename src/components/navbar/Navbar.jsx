import React from 'react'
import './navbar.css'
import SmuLogo from '../../../public/SmuLogo'
import { Navigate } from 'react-router-dom';

const Navbar = () => {

    const handdleRedirect = () => {
        Navigate('/');
    }
    return (
        <div className='nav-container bg-gradient-to-r from-[#141414] via-gray-800 to-zinc-800'>
            <div className="nav-logo">
                <SmuLogo className='logo' />
            </div>
            <div className="nav-items">
                <ul className='font-sans text-sm font-light'>
                    <li><a onClick={handdleRedirect} href="">MAPA</a></li>
                    <li><a href="">ALERTAS</a></li>
                    <li><a href="">DASHBOARD</a></li>
                    <li><a href="">FILTROS</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar