import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetail from './DishDetail'

export class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onDishSelect = dish => {

        this.setState({
            selectedDish: dish
        })
    }


    render() {
        const menu = this.state.dishes.map(item => {

            return (
                <MenuItem
                    onDishSelect={() => this.onDishSelect(item)}
                    dish={item} key={item.id} />
            )
        })

        let dishDetail = <div></div>

        if (this.state.selectedDish != null) {
            dishDetail = < DishDetail dish={this.state.selectedDish} />
        }

        return (
            <div
                className="container"
            >
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDetail}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu