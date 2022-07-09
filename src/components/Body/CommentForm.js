import React, { Component } from 'react'
import { Form, Button, Input } from 'reactstrap'

export class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: '',
            rating: '',
            comment: ''
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.setState({
            author: '',
            rating: '',
            comment: ''
        })
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
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

export default CommentForm