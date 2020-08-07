import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import { DishDetaiLComponent } from "./DishdetailComponent";

class Menu extends Component {
    
    constructor(props) {
        super(props);

         console.log('Menu component constructor() is invoked');
    }

    componentDidMount(){
        console.log('Menu component componentDidMount() is invoked');

    }



    renderDish(dish){
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5">
                    <Card onClick={() => this.props.onClick(dish.id)} >                      
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log('Menu component reder() is invoked');


        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>

                {/* <DishDetaiLComponent dish={this.state.selectedDish} /> */}
                
            </div>
        );

        
    }
}

export default Menu;