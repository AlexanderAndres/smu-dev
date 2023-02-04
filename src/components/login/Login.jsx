import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../app/slicer/authSlice'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const auth = useSelector(state => state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setIsAuthenticating(true)

        dispatch(login(credentials))
            .then(data => {
                if (data.status === 'success') {
                    //console.log('If success')
                    dispatch(authSlice.actions.setUser(data.user))
                }
                //console.log('Then')
            })
            .finally(() => setIsAuthenticating(false))
    }

    useEffect(() => {
        if (!isAuthenticating && auth.status === 'succeeded') {
            //console.log('LOGGED IN')
            navigate(`/app`)
        }
    }, [isAuthenticating, auth.status, navigate])

    if (auth.status === 'loading' || isAuthenticating) {
        return <p>Cargando...</p>
    }

    if (auth.status === 'failed') {
        return <p>Error: {auth.error}</p>
    }

    return (
        <form onSubmit={handleSubmit} className='w-screen h-screen bg-slate-600 grid place-items-center'>
            <div className=' w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
                <h1 className='text-5xl font-semibold'>Bienvenido!</h1>
                <p className='font-medium text-lg text-gray-500 mt-4'>Por favor, ingresa tus datos.</p>
                <div className='mt-8'>
                    <div className='flex flex-col'>
                        <label className='text-lg font-medium'>Email</label>
                        <input
                            name='email'
                            onChange={handleChange}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your email" />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-lg font-medium'>Password</label>
                        <input
                            name='password'
                            onChange={handleChange}
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder="Enter your email"
                            type={"password"}
                        />
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
                        <div>
                            <input type="checkbox" id='remember' />
                            <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days</label>
                        </div>
                        <button className='font-medium text-base text-gray-900'>Forgot password?</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 text-gray-400 bg-slate-700 rounded-xl font-bold text-lg'>Sign in</button>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Don't have an account?</p>
                    </div>
                </div>
            </div>
        </form>
    )
}

/*
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
*/

export default Login
