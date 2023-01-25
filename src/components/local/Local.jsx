import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserMarkers } from '../../services/getUserMarkers';
import Loader from '../loader/Loader';
import Navbar from '../navbar/Navbar';

const Local = () => {
    let { ceco } = useParams();
    const [local, setLocal] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserMarkers().then((data) => {
            //console.log('data',data)
            const filter = data.filter(local => local.ceco == ceco)
            setLocal(filter[0])
        })

    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [local])

    return (
        <div>
            {/*<Navbar/>*/}
            {<Loader show={(loading == true) ? true : false} />}
            Local #{local.ceco}
            <p><b>Local Name: </b>{local.name}</p>
            <p><b>Local City: </b>{local.city}</p>
            <p><b>Local Region: </b>{local.region}</p>
            <p><b>Local Alert: </b>{(local.alert == false) ? 'No tiene alerta' : 'Tiene alerta, revisa!'}</p>
        </div>
    )
}

export default Local