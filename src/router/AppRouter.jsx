import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

const AppRouter = () => {
    return (
        <Routes>
            {/* login y registro */}
            <Route path='/auth/*' element={<AuthRoutes/>}/>

            {/* jornalapp */}
            <Route path='/*' element={<JournalRoutes/>}/>
        </Routes>
    )
}

export default AppRouter