import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Spinner = (props) => {
    const classes = props.className
    const size = props.size
    return (
        <div>
            <FontAwesomeIcon
                className={`${classes}`}
                size={`${size}`}
                pulse
                icon={faSpinner} />
        </div>
    )
}

export default Spinner