import React from 'react';
import { render } from 'react-dom';
import './Dish.css'

class Dish extends React.Component {
  constructor(props) {
    super(props);

    this.addDish = this.addDish.bind(this);
    this.removeDish = this.removeDish.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <a className="Dish-action" onClick={this.removeDish}>-</a>
      );
    } else {
      return (
        <a className="Dish-action" onClick={this.addDish}>+</a>
      );
    }
  }

  addDish(event) {
    this.props.onAdd(this.props)
    this.props.getTotal()
  }
  
  removeDish(event) {
    this.props.onRemove(this.props)
    this.props.getTotal()
  }


  render() {
    return (
      <div className="Dish">
        <div className="Dish-information">
          <h3>{this.props.name}</h3>
          <p>£ {this.props.price}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}


export default Dish;
