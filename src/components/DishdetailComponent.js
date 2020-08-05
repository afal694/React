import React, {Component} from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, ListGroup, ListGroupItem } from "reactstrap";

export class DishDetaiLComponent extends Component {

    constructor(props){
        super(props);

    }

    renderComments(commentsPar){
        return commentsPar.map((comments) => {
            return(
                <ListGroupItem key={comments.id}>
                    <p className="text-secondary">"{comments.comment}"</p>
                    <p className="text-primary">{comments.author}</p>
                </ListGroupItem>
            );
        });
    }

    renderSelectedDish(dish){

        if(dish != null) {




            return(
    
                <div className="row">
                    <div className="col-md-5 col-12 m-1">
                        <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle className="text-info"> <h2>{dish.name}</h2></CardTitle>
                            <CardText className="text-secondary"> {dish.description} </CardText>   
                        </CardBody>
                        </Card>
                    </div>

                    <div className="col-md-5 col-12 m-1">
                        <Card>
                            <CardTitle>
                                <h4 className="text-info">Comments</h4>
                            </CardTitle>
                            <ListGroup>
                                {this.renderComments(dish.comments)}
                            </ListGroup>
                        </Card>
                    </div>
                </div>
            )

        } else {
            return(
                <div></div>
            )
        }
    }

    render() {
        return(
            <div className="col-12">
                {this.renderSelectedDish(this.props.dish)}
            </div>
        ); 
    }



}

export default DishDetaiLComponent;