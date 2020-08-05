import React, {Component} from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";

export class DishDetaiLComponent extends Component {

    constructor(props){
        super(props);

    }

    renderSelectedDish(dish){

        if(dish != null) {

            const comments = dish.comments.map((comments) => {
                return(
                    <CardText key={comments.id}>
                            {comments.comment}
                    </CardText>
                );
            });


            return(
    
                <div className="row">
                    <div className="col-md-5 col-12">
                        <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle className="text-info"> <h2>{dish.name}</h2></CardTitle>
                            <CardText className="text-secondary"> {dish.description} </CardText>   
                        </CardBody>
                        </Card>
                    </div>

                    <div className="col-md-5 col-12">
                        <Card>
                            <CardTitle>
                                Comments
                            </CardTitle>

                            {comments}

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