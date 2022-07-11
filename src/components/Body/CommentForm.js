import React, { Component } from 'react'
import { Form, Button, Input, Alert } from 'reactstrap'
import axios from 'axios'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    //  console.log(state)
    return {
        newCommentFailed: state.comments.newCommentFailed
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
                {
                    this.props.newCommentFailed ?
                        <Alert color="danger" ><h1>Submit failed</h1> </Alert>
                        : ''
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(CommentForm)
// export default connect()(CommentForm)