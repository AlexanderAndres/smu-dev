import React, { useEffect, useState } from 'react'
import Arquitecture from '../arquitecture/Arquitecture';
import Mantencion from '../mantencion/Mantencion';

const ViewLocal = () => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [page, setPage] = useState('Arq')

    const handlePage = (name) => {
        console.log('Name page:', name)
        setPage(name)
    }


    return (
        <div className="flex relative dark:bg-main-dark-bg">
            {activeMenu ? (
                <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-slate-50'>
                    <button onClick={()=> handlePage('Mant')}>next page</button>
                </div>
            ) : (
                <div className='w-0'>
                    sidevar inactive
                </div>
            )}
            <div className={
                activeMenu
                    ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full'
                    : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2'
            }>
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    NavBar
                </div>
                <div className="h-screen">
                </div>
            </div>
        </div>
    )
}

export default ViewLocal