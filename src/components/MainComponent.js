import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import  Menu  from "./MenuComponent";
import { DISHES } from "./shared/dishes";
import { DishDetaiLComponent } from './DishdetailComponent';

class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null 
      }
  }

  onDishSelect(dishId){
    this.setState({selectedDish: dishId})
    }
   
  render() {
    return (
      <div>
        <Navbar color="light">
          <div className="container">
            <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} 
            onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetaiLComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        {/* <DishDetaiLComponent dish={this.state.selectedDish} /> */}
      </div>
    );
  }
}


export default Main;
