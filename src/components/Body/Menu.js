import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import COMMENTS from '../../data/comments'
import MenuItem from './MenuItem'
import DishDetail from './DishDetail'

export class Menu extends Component {
    state = {
        dishes: DISHES,
        comments: COMMENTS,
        selectedDish: null,
        showDishDetail: false,
        selectedComments: null
    }

    onDishSelect = dishid => {
        const dishes = [...this.state.dishes]
        const comments = [...this.state.comments]
        const dish = dishes.filter(item => {
            return item.id === dishid
        })

        const selectedComments = comments.filter(item => {
            return item.dishId === dishid
        })

        this.setState({
            selectedDish: dish[0],
            showDishDetail: true,
            selectedComments: selectedComments
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
                    onDishSelect={() => this.onDishSelect(item.id)}
                    dish={item} key={item.id} />
            )
        })

        let dishDetail = <div></div>

        if (this.state.selectedDish != null) {
            dishDetail = < DishDetail
                onClose={this.onCloseDishDetail.bind(this)}
                dish={this.state.selectedDish}
                comments={this.state.selectedComments}
            />
        }



        return (
            <div className="row pt-2">
                {menu}
                {menu}
                {this.state.showDishDetail ? dishDetail : ''}
            </div>

        )
    }
}

export default Menu