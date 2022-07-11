import React from 'react'
import dateFormat from "dateformat";
import classes from './LoadComments.module.css'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

const mapStateToProps = state => {
    return {
        commentLoadFailed: state.comments.commentLoadFailed
    }
}

const LoadComments = (props) => {

    return (
        <div className={classes['load-comments']} >
            <h3>Comments:</h3>
            {
                props.commentLoadFailed ?
                    <Alert > <h5>Comment Loading failed</h5> </Alert>
                    :
                    ''
            }
            {
                props.comments.map(item => {
                    return (
                        <div className={classes['map-comments'] + ' p-3'} key={item.id} >
                            <h5>Autthor:  {item.author} </h5>
                            <p className="mb-0">
                                <strong>Comment:</strong>
                                {item.comment}</p>
                            <h6>
                                Rating: {item.rating}
                            </h6>
                            <p><strong>Publish Date:</strong> {dateFormat(item.date, "d-mmm-yyyy")} </p>
                            <div className="d-flex justify-content-between">
                                <span>
                                    <strong>DishId: </strong> {item.dishId}
                                </span>
                                <span>
                                    <strong>CommentId: </strong> {item.id}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default connect(mapStateToProps)(LoadComments)