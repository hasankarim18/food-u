import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap'

const MenuItem = (props) => {
    //  console.log(props)
    //  console.log(process.env.PUBLIC_URL)
    const imageLink = process.env.PUBLIC_URL + '/' + props.dish.image
    return (
        <div style={{ margin: "20px", cursor: "pointer", textAlign: 'center' }} >
            <Card
                //onClick={() => props.onDishSelect(props.dish)}
                onClick={props.onDishSelect}
            >
                <CardBody className="p-0" >
                    <CardImg width="100%" alt={props.dish.name} src={imageLink} />
                    <CardImgOverlay style={{ zIndex: "10" }} >
                        <CardTitle>
                            <h3 className="text-white" >{props.dish.name}</h3>
                        </CardTitle>
                    </CardImgOverlay>
                    <CardImgOverlay style={{ zIndex: "2", backgroundColor: "black", opacity: "0.5" }} ></CardImgOverlay>

                </CardBody>
            </Card>
        </div>

    )
}

export default MenuItem