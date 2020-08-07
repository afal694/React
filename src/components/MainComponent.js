import React from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import  Menu  from "./components/MenuComponent";
import { DISHES } from "./components/shared/dishes";
import { DishDetaiLComponent } from './components/DishdetailComponent';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null 
      }
  }

  render() {
    return (
      <div>
        <Navbar color="light">
          <div className="container">
            <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
        <DishDetaiLComponent dishes= {}/>
      </div>
    );
  }
}


export default App;
