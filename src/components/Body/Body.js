import React from 'react'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Routes, Route, Navigate } from 'react-router-dom'

const Body = () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    )
}

export default Body