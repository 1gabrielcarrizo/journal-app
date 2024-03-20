import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        // definimos como se vera el auth en el store
        status: 'not-authenticated', // not-authenticated, authenticated y checking
        uid: null, // cuando este autenticado tendra un uid
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        // todos los reducers tienen el state y action
        login: (state, {payload}) => {
            state.status = 'authenticated', // not-authenticated, authenticated y checking
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticated', // not-authenticated, authenticated y checking
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (state) => { // en caso de que haya tocado el boton de login
            state.status = 'checking'
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;