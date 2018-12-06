import React from 'react';
import { render } from 'react-dom';
import './OrderList.css';
import Dish from '../Dish/Dish.js';

class OrderList extends React.Component {
  
  render() {
    let dinerOne = this.props.order.dinerOne;
    let dinerTwo = this.props.order.dinerTwo;
    return (
      
        <div className="Orderlist">
          <div>
            <h2>Your Order</h2>
              <h2>Diner One</h2>
              <h3>Starters:</h3>
              {Object.keys(dinerOne.starters).length > 0 && 
                    <Dish name={dinerOne.starters.name} 
                          price={dinerOne.starters.price} 
                          id={dinerOne.starters.id} 
                          onRemove={this.props.onRemove}
                          isRemoval={true} 
                          diner={"dinerOne"}
                          course={"starters"}
                          getTotal={this.props.getTotal} />}
                          
              <h3>Mains:</h3>
              {Object.keys(dinerOne.mains).length > 0 && 
                    <Dish name={dinerOne.mains.name} 
                          price={dinerOne.mains.price} 
                          id={dinerOne.mains.id} 
                          onRemove={this.props.onRemove}
                          isRemoval={true} 
                          diner={"dinerOne"}
                          course={"mains"} 
                          getTotal={this.props.getTotal} />}
              <h3>Dessert:</h3> 
              {Object.keys(dinerOne.desserts).length > 0 && 
                    <Dish name={dinerOne.desserts.name} 
                          price={dinerOne.desserts.price} 
                          id={dinerOne.desserts.id}  
                          onRemove={this.props.onRemove}
                          isRemoval={true} 
                          diner={"dinerOne"}
                          course={"desserts"} 
                          getTotal={this.props.getTotal} />}

                  
          </div>
          <div>
            <h2>Diner Two</h2>
            <h3>Starters:</h3>
            {Object.keys(dinerTwo.starters).length > 0 && 
                  <Dish name={dinerTwo.starters.name} 
                          price={dinerTwo.starters.price} 
                          id={dinerTwo.starters.id} 
                          onRemove={this.props.onRemove}
                          isRemoval={true}   
                          diner={"dinerTwo"}
                          course={"starters"}
                          getTotal={this.props.getTotal} />}     
            <h3>Mains:</h3>
            {Object.keys(dinerTwo.mains).length > 0 && 
                  <Dish name={dinerTwo.mains.name} 
                          price={dinerTwo.mains.price} 
                          id={dinerTwo.mains.id} 
                          onRemove={this.props.onRemove}
                          isRemoval={true} 
                          diner={"dinerTwo"}
                          course={"mains"} 
                          getTotal={this.props.getTotal} />}

            <h3>Dessert:</h3>
            {Object.keys(dinerTwo.desserts).length > 0 && 
                  <Dish name={dinerTwo.desserts.name} 
                          price={dinerTwo.desserts.price} 
                          id={dinerTwo.desserts.id} 
                          onRemove={this.props.onRemove}
                          isRemoval={true} 
                          diner={"dinerTwo"}
                          course={"desserts"} 
                          getTotal={this.props.getTotal} />}
          </div>
          <div className="Orderlist-total">
            {this.props.orderTotal > 0 && <h2> Total:  {this.props.orderTotal}</h2>}
          </div>
          <a className="Orderlist-save" onClick={this.props.onOrder}>ORDER</a>
        
      </div>
    );
  }
}


export default OrderList;