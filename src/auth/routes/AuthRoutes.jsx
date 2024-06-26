import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            {/* redireccionar a una ruta establecida */}
            <Route path='/*' element={<Navigate to='/auth/login'/>}/>
        </Routes>
    )
}

export default AuthRoutes