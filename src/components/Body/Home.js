import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {

    return {
        dishes: state.dishes,
    }
}

export class Home extends Component {


    componentDidMount() {
        // console.log('Home State', this.state)
        // console.log('Home props', this.props)
    }
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Home)