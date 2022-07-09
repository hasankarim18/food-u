import React, { Component } from 'react'
import { Form, Button, Input } from 'reactstrap'
import { connect } from 'react-redux'
import * as actions from '../../redux/actionTypes'
import { addComment } from '../../redux/actionCreators'

const mapDispatchToProps = dispatch => {
    return {
        addComment: (comment) => dispatch(addComment(comment))
    }
}


export class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newComment: {
                author: '',
                rating: '',
                comment: ''
            }
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        let comment = this.state.newComment

        comment.dishId = this.props.dishId
        comment.date = new Date().toISOString()

        // this.props.dispatch({
        //     type: actions.NEW_COMMENT,
        //     payload: comment
        // })

        this.props.addComment(comment)

        this.setState({
            newComment: {
                author: '',
                rating: '',
                comment: ''
            }
        })

    }

    onChangeHandler = event => {
        this.setState({
            newComment: {
                ...this.state.newComment,
                [event.target.name]: event.target.value
            }
        })
    }

    componentDidMount() {
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler} >
                    <Input
                        type='text'
                        name="author"
                        value={this.state.author}
                        onChange={this.onChangeHandler}
                        placeholder="Your Name"
                    />
                    <br />
                    <Input
                        type='select'
                        name="rating"
                        value={this.state.rating}
                        onChange={this.onChangeHandler}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type='textarea'
                        name='comment'
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.onChangeHandler}
                    />
                    <br />
                    <Button className="btn-success" type='submit' >Submit Comment</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CommentForm)
// export default connect()(CommentForm)