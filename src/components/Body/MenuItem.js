import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap'
import * as url from '../../redux/urls'

const MenuItem = (props) => {
    //  console.log(props)
    //  console.log(process.env.PUBLIC_URL)
    const imageLink = props.dish.image

    return (
        <div className="col-12 col-sm-6 col-md-4 mb-2" style={{ margin: "0px", cursor: "pointer", textAlign: 'center' }} >
            <Card
                //onClick={() => props.onDishSelect(props.dish)}
                onClick={props.onDishSelect}
            >
                <CardBody className="p-0" >
                    <CardImg width="95%" height="250px" alt={props.dish.name} src={imageLink} />
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