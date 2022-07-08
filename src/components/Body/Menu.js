import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetail from './DishDetail'

export class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        showDishDetail: false
    }

    onDishSelect = dish => {
        this.setState({
            selectedDish: dish,
            showDishDetail: true
        })
    }

    onCloseDishDetail = () => {
        this.setState({
            showDishDetail: false
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
            dishDetail = < DishDetail
                onClose={this.onCloseDishDetail.bind(this)}
                dish={this.state.selectedDish}
            />
        }

        return (
            <div className="row pt-2">
                {menu}
                {this.state.showDishDetail ? dishDetail : ''}
            </div>

        )
    }
}

export default Menu