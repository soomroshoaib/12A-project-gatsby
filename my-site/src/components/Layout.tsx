import React from 'react'
import Nav from './Nav'
import Footer from './footer'

function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout