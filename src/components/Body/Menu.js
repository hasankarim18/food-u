import React, { Component } from 'react'
import MenuItem from './MenuItem'
import DishDetail from './DishDetail'
import { connect } from 'react-redux/es/exports'

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

export class Menu extends Component {

    state = {
        selectedDish: null,
        showDishDetail: false,

    }

    onDishSelect = dishid => {
        const dishes = [...this.props.dishes]

        const dish = dishes.filter(item => {
            return item.id === dishid
        })

        this.setState({
            selectedDish: dish[0],
            showDishDetail: true,

        })
    }

    onCloseDishDetail = () => {
        this.setState({
            showDishDetail: false
        })
    }

    componentDidMount() {
        console.log('menu', this.props)
    }

    render() {
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem
                    onDishSelect={() => this.onDishSelect(item.id)}
                    dish={item} key={item.id} />
            )
        })

        let dishDetail = <div></div>

        if (this.state.selectedDish != null) {

            let selectedComments = this.props.comments.filter(item => {
                return item.dishId === this.state.selectedDish.id
            })


            dishDetail = < DishDetail
                onClose={this.onCloseDishDetail.bind(this)}
                dish={this.state.selectedDish}
                comments={selectedComments}
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

export default connect(mapStateToProps)(Menu)