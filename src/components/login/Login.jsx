import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../app/slicer/authSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const auth = useSelector(state => state.auth)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        setIsAuthenticating(true)
        dispatch(login({ username, password }))
            .then(data => {
                if (data.status === 'success') {
                    console.log('If success')
                    dispatch(authSlice.actions.setUser(data.user))
                }
                console.log('Then')
            })
            .finally(() => setIsAuthenticating(false))
    }

    useEffect(() => {
        if (!isAuthenticating && auth.status === 'succeeded') {
            navigate(`/map`)
        }
    }, [isAuthenticating, auth.status, navigate])

    if (auth.status === 'loading' || isAuthenticating) {
        return <p>Cargando...</p>
    }

    if (auth.status === 'failed') {
        return <p>Error: {auth.error}</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Usuario:
                <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </label>
            <label>
                Contraseña:
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Ingresar</button>
        </form>
    )
}

export default Login
