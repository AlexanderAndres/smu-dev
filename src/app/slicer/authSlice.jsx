import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('auth/login', async (credentials) => {
    console.log('Credentials authSlice:', credentials)

    const response = await axios.get(`https://smu-api.herokuapp.com/api/login/${credentials.email}/${credentials.password}`)

    return response.data
    //const response = await axios.post('/api/login', credentials)
})


const authSlice = createSlice({
    name: 'auth',
    initialState: { status: 'idle', error: null },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
                //console.log('succeeded send to act:', action.payload)
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
                //console.log('failed send to act:', action.error.message)
            })
    }
})

export default authSlice.reducer