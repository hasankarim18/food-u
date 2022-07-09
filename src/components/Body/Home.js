import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actionTypes.js'
import { Button } from 'reactstrap'

const mapStateToProps = state => {

    return {
        homeTitle: state.homeTitle,
    }
}

export class Home extends Component {
    state = {
        isTitleAdded: false
    }

    changeTitle = () => {
        this.setState({
            ...this.state,
            isTitleAdded: true
        })
        this.props.dispatch({
            type: actions.HEADING_CHANGE,
            payload: ' and have unlimited fun with food'
        })
    }


    componentDidMount() {
        // console.log('Home State', this.state)
        console.log('Home props did mount', this.props)
    }
    componentDidUpdate() {
        console.log('Home props did update', this.props)
    }
    render() {
        return (
            <div className="pt-3">
                <h2 >
                    {this.props.homeTitle}
                </h2>
                {
                    this.state.isTitleAdded ?
                        <h2 className="text-danger" >Title added</h2>
                        :
                        ''
                }

                <div>
                    <Button disabled={this.state.isTitleAdded} onClick={this.changeTitle}>
                        Change Title
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home)