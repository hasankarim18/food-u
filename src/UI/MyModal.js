import React from 'react'
import ReactDom from 'react-dom'
import classes from './MyModal.module.css'


const Backdrop = props => {
    return (
        <div onClick={props.onClose} className={classes.backdrop} >

        </div>
    )
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                <div style={{ padding: "10px" }} >
                    {props.children}
                </div>

            </div>
        </div>
    )
}


const MyModal = (props) => {
    const overlay = document.getElementById('overlay')
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, overlay)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
        </React.Fragment>
    )
}

export default MyModal