import React, { useState } from 'react'
import { CauroselData as images } from './CauroselData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './Caurosel.css'


const Caurosel = (props) => {

    let { slides } = props
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1)
    }



    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }



    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div className="slider" >

            <FontAwesomeIcon onClick={prevSlide} icon={faArrowLeft} className="left_arrow text-warning" />
            <FontAwesomeIcon onClick={nextSlide} icon={faArrowRight} className="right_arrow text-warning" />

            {
                props.slides.map((item, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index} >
                            {index === current && (<img src={item.image} alt='restaurent image' className="image" />)}
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Caurosel