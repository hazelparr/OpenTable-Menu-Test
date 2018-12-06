import React from 'react';
import { render } from 'react-dom';
import './Course.css';
import Dish from '../Dish/Dish.js';

class Course extends React.Component {
  render() {
    return (
      <div>
        <div className="Course">
          <h2>Starters</h2>
            {this.props.starters.map(dish => <Dish key={dish.id} 
                                                  name={dish.name} 
                                                  price={dish.price} 
                                                  id={dish.id} 
                                                  onAdd={this.props.onAdd} 
                                                  onRemove={this.props.onRemove}
                                                  isRemoval={false}
                                                  getTotal={this.props.getTotal}/>)}
        </div>
        <div className="Course">
          <h2>Mains</h2> 
            {this.props.mains.map(dish => <Dish key={dish.id} 
                                                  name={dish.name}  
                                                  price={dish.price} 
                                                  id={dish.id} 
                                                  onAdd={this.props.onAdd} 
                                                  onRemove={this.props.onRemove}
                                                  isRemoval={false}
                                                  getTotal={this.props.getTotal}/>)}
                                                  
        </div>
        <div className="Course">
          <h2>Desserts</h2> 
            {this.props.desserts.map(dish => <Dish key={dish.id} 
                                                  name={dish.name} 
                                                  price={dish.price} 
                                                  id={dish.id} 
                                                  onAdd={this.props.onAdd} 
                                                  onRemove={this.props.onRemove}
                                                  isRemoval={false}
                                                  getTotal={this.props.getTotal}/>)}
        </div>
      </div>
    );
  }
}


export default Course;