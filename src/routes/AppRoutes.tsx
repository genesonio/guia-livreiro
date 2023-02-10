import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { SuspenseLoader } from '@/components/feedback/SuspenseLoader'

const HomePage = lazy(() => import('@/pages/Home/Home'))

function AppRoutes() {
    return (
        <SuspenseLoader>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </SuspenseLoader>
    )
}

export default AppRoutes
