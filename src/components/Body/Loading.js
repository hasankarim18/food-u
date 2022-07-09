import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
    return (
        <div className="w-100 text-center" >
            <FontAwesomeIcon
                className="text-warning"
                size="6x"
                pulse
                icon={faSpinner} />
        </div>
    )
}

export default Loading