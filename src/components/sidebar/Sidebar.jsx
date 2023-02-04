import React, { useEffect, useState } from 'react'
import { GoAlert, GoTriangleRight } from "react-icons/go";
import SmuLogo from '../../../public/SmuLogo'
import './sidebar.css'

const Sidebar = () => {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        console.log('Selected:', selected)
    }, [selected])

    const handdleSelected = (item) => {
        setSelected(item)
    }
    return (
        <div>
            <div className="fixed flex flex-col items-center w-60 max-h-screen h-screen overflow-hidden text-gray-400 bg-gray-900">
                <a className="flex items-center w-full px-3 mt-3" href="#">
                    <SmuLogo />
                    <span className="ml-2 text-sm font-bold">SMU</span>
                </a>
                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        <a onClick={() => handdleSelected(1)} className={`relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 ${selected === 1 ? 'text-gray-200 bg-gray-700' : ''}`} href="#">
                            <GoAlert className='w-4 h-4' />
                            <span className="ml-2 text-sm font-medium">EVENTOS</span>
                            <span className="absolute top-0 left-0 w-2 h-2 mt-3 ml-3 bg-red-500 rounded-full pin"></span>
                        </a>
                        <a onClick={() => handdleSelected(2)} className={`relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 ${selected === 2 ? 'text-gray-200 bg-gray-700' : ''}`} href="#">
                            <GoTriangleRight className='w-4 h-4' />
                            <span className="ml-2 text-sm font-medium">DATOS TECNICOS DE ARQUITECTURA</span>
                        </a>
                        <a onClick={() => handdleSelected(3)} className={`relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 ${selected === 3 ? 'text-gray-200 bg-gray-700' : ''}`} href="#">
                            <GoTriangleRight className='w-4 h-4' />
                            <span className="ml-2 text-sm font-medium">SISTEMA DE EXTINCION DE INCENDIOS</span>
                        </a>
                        <a onClick={() => handdleSelected(4)} className={`relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 ${selected === 4 ? 'text-gray-200 bg-gray-700' : ''}`} href="#">
                            <GoTriangleRight className='w-4 h-4' />
                            <span className="ml-2 text-sm font-medium">MANTENIMIENTO</span>
                        </a>
                        <a onClick={() => handdleSelected(5)} className={`relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 ${selected === 5 ? 'text-gray-200 bg-gray-700' : ''}`} href="#">
                            <GoTriangleRight className='w-4 h-4' />
                            <span className="ml-2 text-sm font-medium">ILUMINACION SALA DE VENTAS</span>
                        </a>
                        <a onClick={() => handdleSelected(6)} className={`relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300 ${selected === 6 ? 'text-gray-200 bg-gray-700' : ''}`} href="#">
                            <GoTriangleRight className='w-4 h-4' />
                            <span className="ml-2 text-sm font-medium">CUBIERTA</span>
                        </a>
                        <a onClick={() => handdleSelected(7)} className={`relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300${selected === 7 ? 'text-gray-200 bg-gray-700' : ''}`} href="#">
                            <GoTriangleRight className='w-4 h-4' />
                            <span className="ml-2 text-sm font-medium">CLIMATIZACION</span>
                        </a>
                    </div>
                </div>
                <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300" href="#">
                    <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium">Account</span>
                </a>
            </div>
        </div>
    )
}

export default Sidebar