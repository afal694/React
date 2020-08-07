import React, {Component} from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";

export class DishDetaiLComponent extends Component {

    constructor(props){
        super(props);

    }

    renderComments(commentsPar){
        const comments = commentsPar.map((comments) => {
            return(
                <li key={comments.id}>
                    <p className="text-secondary">"{comments.comment}"</p>
                    <p className="text-primary">{comments.author}  - - 
                        {/* {comments.date.substring(0,10)} */}
                    {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
                    </p>

                </li>
            );
        });

        return comments
    }

    renderDish(dish){

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
                        <h4 className="text-info">Comments</h4>
                        <ul>
                            {this.renderComments(dish.comments)}
                        </ul>
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
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                </div>
            </div>

        ); 
    }



}

export default DishDetaiLComponent;