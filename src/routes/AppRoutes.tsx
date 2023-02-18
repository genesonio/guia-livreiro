import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { SuspenseLoader } from '@/components/feedback/SuspenseLoader'
import ResultsPage from '@/pages/Results/Results'
import BookPage from '@/pages/Book/book'

const HomePage = lazy(() => import('@/pages/Home/Home'))

function AppRoutes() {
    return (
        <SuspenseLoader>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/results/:id" element={<ResultsPage />} />
                <Route path="/book/:name" element={<BookPage />} />
            </Routes>
        </SuspenseLoader>
    )
}

export default AppRoutes
