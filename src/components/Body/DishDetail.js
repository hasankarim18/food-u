import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import LoadComments from './LoadComments'

const DishDetail = (props) => {

    return (
        <div style={{ marginTop: "20px" }} >
            <CardImg src={process.env.PUBLIC_URL + '/' + props.dish.image} alt={props.dish.name} />
            <h1>{props.dish.name}</h1>
            <p>
                {props.dish.description}
            </p>
            <h5>
                Price: {props.dish.price}/- BDT
            </h5>
            <hr />
            <LoadComments comments={props.dish.comments} />
        </div>
    )
}

export default DishDetail