import React from 'react'
import Loading from './Loading'
import Caurosel from '../UI/Caurosel'
import { CauroselData } from '../UI/CauroselData'



const Home = () => {
    return (
        <div style={{ paddingTop: "60px" }} >

            <Caurosel slides={CauroselData} />

        </div>
    )
}

export default Home