import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {

    const classList = `${classes.footer}`

    return (
        <div className={classList}>
            All right reserved &copy;<span> </span>
            <a className={classes['footer-link']} href="https://hasankarim18.github.io/food-u/">food-u</a> corp.
        </div>
    )
}

export default Footer