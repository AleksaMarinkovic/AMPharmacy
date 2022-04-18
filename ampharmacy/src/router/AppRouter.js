import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'

const AppRouter = () => {
  return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route>
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
  )
}

export default AppRouter
