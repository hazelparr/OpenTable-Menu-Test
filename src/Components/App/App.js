import React from 'react';
import ReactDOM from 'react-dom';
import './Reset.css';
import './App.css';
import MenuData from '../../../menu-data.json';
import Dish from '../Dish/Dish.js';
import MenuList from '../MenuList/MenuList.js';
import OrderList from '../OrderList/OrderList.js';
import Jumbotron from '../Jumbotron/Jumbotron.js';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        menu: MenuData,
        orders: {
          dinerOne: {
            starters: {},
            mains: {},
            desserts: {}
          },
          dinerTwo: {
            starters: {},
            mains: {},
            desserts: {}
          }
          

        },

        activeDiner: "dinerOne",
        orderTotal: 0
      }

      this.addDish = this.addDish.bind(this);
      this.removeDish = this.removeDish.bind(this);
      this.changeDiner = this.changeDiner.bind(this);
      this.getTotal = this.getTotal.bind(this);
      this.confirmOrder = this.confirmOrder.bind(this);
    }



    addDish(dish) {
      //is triggered whenever "+" is clicked
      // checks to see if there is already a meal in a paticular course
      // As per restaurant policy, only one meal per course per person
      // Updated state of the order list
      let newOrderList = this.state.orders;
      let course = this.findCourse(dish);
      let diner = this.state.activeDiner;


      if (this.isOneOfSameCourse(course)) {
        alert('Per restaurant policy, you can\'t have more than one of the same course.' +
          ' Remove current selection if you have a change of heart.')

      } else if (dish.name === "Cheesecake" && this.isNoCheesecakeleft()) {
        alert("We've ran out of Cheesecake. Please choose something else.");

      } else if ((dish.name === "Prawn cocktail" || dish.name === "Salmon fillet") && 
              this.isPierreNotHappy()){
        alert("Salmon fillet & Prawn cocktail do not go together! Pierre knows best! Change your selection.")
      } else {
        newOrderList[diner][course] = dish;
      }
        this.setState({orders: newOrderList});

      
    }

    removeDish(dish) {
      let newOrderList = this.state.orders;

      newOrderList[dish.diner][dish.course] = "";
      this.setState({orders: newOrderList});
    }

    changeDiner(diner) {
      if (diner === "dinerOne") {
        this.setState({activeDiner: "dinerOne"});
      } else {
        this.setState({activeDiner: "dinerTwo"});
      }
    }

    getTotal() {
        let courses = ["starters", "mains", "desserts"];
        let newTotal = 0;
        
        let dinerOne = this.state.orders.dinerOne;
        let keys = []; // should return the courses
        let order = this.state.orders;


        let diners = Object.keys(order); //expected: array of diners re: dinerOne and dinerTwo


        courses.map(course =>{

          if (this.state.orders.dinerOne[course].price || 0) {
            newTotal += this.state.orders.dinerOne[course].price            
          }
          if (this.state.orders.dinerTwo[course].price || 0) {
            newTotal += this.state.orders.dinerTwo[course].price  
          }

        });

        this.setState({orderTotal: newTotal})
    }



    isOneOfSameCourse(course) {
      let diner = this.state.activeDiner;
      //Checks if course object is epmty to prevent cannot read property of undefined errors
      //Checks if user has selected more than one per course
      //As per restaurant rules, only one dish per course per person
      if (Object.keys(this.state.orders[diner][course]).length > 0) {
        return true
      }
    }

    isNoCheesecakeleft() {
      //Only one cheesecake left :(. Check if it has already been chosen
      if ((this.state.orders.dinerOne.desserts.name === "Cheesecake" || 0) || (
            this.state.orders.dinerTwo.desserts.name === "Cheesecake")) {
        return true;
      }
    }

    isPierreNotHappy() {
      //Pierre's rules! Salmon fillet and Prawn cocktail do not go together!
      //Check current choices if compliant
      let diner = this.state.activeDiner;
      if ((this.state.orders[diner].starters.name === "Prawn cocktail" || 0) || ( 
          this.state.orders[diner].mains.name === "Salmon fillet")) {
        return true;
      }
      
    }


    findCourse(dish) {
      // find the specific course the dish belongs to based o their id number
      if (dish.id <= 4) {
        return "starters"
      } else if (dish.id > 4 && dish.id < 9) {
        return "mains"
      } else {
        return "desserts"
      }
    }

    confirmOrder() {
      if (((this.state.orders.dinerOne.mains.name || 0) && 
          (this.state.orders.dinerOne.desserts.name || this.state.orders.dinerOne.starters)) &&
         ((this.state.orders.dinerTwo.mains.name || 0) && 
          (this.state.orders.dinerTwo.desserts.name || this.state.orders.dinerTwo.starters)))
          {alert('Your order is CONFIRMED! Sit back, relax and enjoy your meal.');
      } else {
        alert('Each person must have at least two courses, one of which must be a main.' + 
          ' Please change your selection.')
      }
      
    }

    render() {

      return (
          <div>
            <div className="App">
              <h1>OpenTable Menu Test</h1>
              <Jumbotron changeDiner={this.changeDiner}/>
              <div className="App-menulist">
                <MenuList menu={this.state.menu} onAdd={this.addDish} isRemoval={false} onRemove={this.removeDish} getTotal={this.getTotal} />
                <OrderList order={this.state.orders} isRemoval={true} onRemove={this.removeDish} getTotal={this.getTotal} orderTotal={this.state.orderTotal} onOrder={this.confirmOrder}/>
              </div>
            </div>
          </div>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root') || document.createElement('div'));
