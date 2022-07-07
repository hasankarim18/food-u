import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

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
        </div>
    )
}

export default DishDetail