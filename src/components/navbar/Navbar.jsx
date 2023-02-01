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
            <div className="nav-items d-flex sm:flex-col lg:flex-row">
                <ul className='font-sans text-sm font-light sm:text-center'>
                    <li className='sm:mb-2 lg:mb-0'><a onClick={handdleRedirect} href="">MAPA</a></li>
                    <li className='sm:mb-2 lg:mb-0'><a onClick={handdleRedirect} href="">ALERTAS</a></li>
                    <li className='sm:mb-2 lg:mb-0'><a onClick={handdleRedirect} href="">DASHBOARD</a></li>
                    <li className='sm:mb-2 lg:mb-0'><a onClick={handdleRedirect} href="">FILTROS</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar