import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Caurosel from '../UI/Caurosel'
import { connect } from 'react-redux'
import { fetchSlider } from '../../redux/actionCreators'
import { Alert } from 'reactstrap'

const mapStateToProps = state => {

    return {
        slides: state.slider.slides,
        isSlideLoading: state.slider.isSlideLoading,
        slideLoadingErrMess: state.slider.slideLoadingErrMess,
        slideLoadingFailed: state.slider.slideLoadingFailed
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSlider: () => dispatch(fetchSlider())
    }
}



const Home = (props) => {

    useEffect(() => {
        props.fetchSlider()
    }, [])

    const slideList = props.slides

    let showCaurosel = null

    if (props.isSlideLoading) {
        showCaurosel = <Loading />
    } else if (props.slideLoadingFailed) {

        showCaurosel = <div className="container">
            <Alert color="warning" > <h4>{props.slideLoadingErrMess}</h4> </Alert>
        </div>
    } else {
        showCaurosel = <Caurosel slides={slideList} />
    }

    return (
        <div style={{ paddingTop: "60px" }} >

            {showCaurosel}

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)