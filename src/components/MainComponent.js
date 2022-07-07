import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const MainComponent = (props) => {
    return (
        <div style={{ marginBottom: "50px" }} >
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default MainComponent