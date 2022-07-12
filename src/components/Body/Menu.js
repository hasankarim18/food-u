import React, { Component } from 'react'
import MenuItem from './MenuItem'
import DishDetail from './DishDetail'
import Loading from './Loading'
import { connect } from 'react-redux/es/exports'
import { addComment, fetchDishes, fetchComments, loadSelectedCommentsId } from '../../redux/actionCreators'
import { Alert } from 'reactstrap'


const mapStateToProps = state => {

    return {
        dishes: state.dishes.dishes,
        comments: state.comments.comments,
        dishIsLaoding: state.dishes.dishIsLaoding,
        commentIsLoading: state.comments.commentIsLoading,
        dishFailed: state.dishes.dishLoadingFailed,
        dishErrMsg: state.dishes.dishErrMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (comment) => dispatch(addComment(comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        // fetchComments: (dishId) => dispatch(fetchComments(dishId)),
        fetchComments: () => dispatch(fetchComments()),
        loadSelectedCommentsId: (dishId) => dispatch(loadSelectedCommentsId(dishId))

    }
}


export class Menu extends Component {

    state = {
        selectedDish: null,
        showDishDetail: false,

    }

    onDishSelect = dishid => {
        const dishes = [...this.props.dishes]
        //  this.props.loadSelectedCommentsId(dishid)

        const dish = dishes.filter(item => {
            return item.id === dishid
        })

        this.setState({
            selectedDish: dish[0],
            showDishDetail: true,

        })
        this.props.fetchComments()

    }

    onCloseDishDetail = () => {
        this.setState({
            showDishDetail: false
        })
    }

    componentDidMount() {
        this.props.fetchDishes()

    }


    render() {
        let menu = null

        if (this.props.dishIsLaoding === true) {
            menu = <Loading />
        } else if (this.props.dishIsLaoding === false) {
            menu = this.props.dishes.map(item => {
                return (
                    <MenuItem
                        onDishSelect={() => this.onDishSelect(item.id)}
                        dish={item} key={item.id} />
                )
            })
        }


        let dishDetail = <div></div>

        if (this.state.selectedDish != null) {

            let selectedComments = this.props.comments.filter(item => {
                return item.dishId === this.state.selectedDish.id
            })
            //  let selectedComments = this.props.comments

            dishDetail = < DishDetail
                onClose={this.onCloseDishDetail.bind(this)}
                dish={this.state.selectedDish}
                comments={selectedComments}
                addComment={this.props.addComment}
                commentIsLoading={this.props.commentIsLoading}
            />
        }



        return (
            <div className="container" >
                <div className="row pt-2">
                    {
                        this.props.dishFailed ? <Alert color="warning" > <h3>{this.props.dishErrMsg}</h3> </Alert> : ''
                    }

                    {menu}

                    {this.state.showDishDetail ? dishDetail : ''}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)