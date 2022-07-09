import React from 'react'
import { Card, CardImg, CardBody } from 'reactstrap'
import LoadComments from './LoadComments'
import MyModal from '../../UI/MyModal'
import { Button } from 'reactstrap'
import CommentForm from './CommentForm'
import Loading from './Loading'

const DishDetail = (props) => {


    let showComments = null

    if (props.commentIsLoading === true) {
        showComments = <Loading />
    } else if (props.commentIsLoading === false) {
        showComments = <LoadComments comments={props.comments} />
    }


    return (
        <MyModal onClose={props.onClose} >
            <Card style={{ marginTop: "20px" }} >
                <CardBody>
                    <div className="row" >
                        <div className="col-sm-5 col-12 pb-2" >
                            <CardImg src={process.env.PUBLIC_URL + '/' + props.dish.image} alt={props.dish.name} />
                        </div>
                        <div className="col-sm-7 col-12">
                            <h1>{props.dish.name}</h1>
                            <p>
                                {props.dish.description}
                            </p>
                        </div>
                    </div>
                    <h5 className="pt-2" >
                        Price: {props.dish.price}/- BDT
                    </h5>
                    <h6>DishId : {props.dish.id} </h6>
                </CardBody>
                <hr />
                {
                    showComments
                }

            </Card>
            <CardBody className="d-flex justify-content-end" >
                <Button className="btn-danger" onClick={props.onClose} > Close </Button>
            </CardBody>
            <CardBody>
                <h2>Give your comment</h2>
                <CommentForm
                    addComment={props.addComment}
                    dishId={props.dish.id} />
            </CardBody>
        </MyModal>
    )
}

export default DishDetail