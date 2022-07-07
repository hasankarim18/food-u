import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'

export class Menu extends Component {
    state = {
        dishes: DISHES
    }
    render() {
        const menu = this.state.dishes.map(item => {

            return (
                <MenuItem dish={item} key={item.id} />
            )
        })

        return (
            <div
                className="container"
            >
                <div className="row">
                    <div className="col-6">
                        {menu}
                        {menu}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu