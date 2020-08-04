import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import  Menu  from "./components/MenuComponent";
import './App.css';
import { DISHES } from "./components/shared/dishes";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
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
      </div>
    );
  }
}


export default App;
