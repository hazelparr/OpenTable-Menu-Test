import React from 'react';
import { render } from 'react-dom';
import './MenuList.css';
import Course from '../Course/Course.js';

class MenuList extends React.Component {
  render() {
    return (
      <div className="MenuList">
          
          <Course starters={this.props.menu.starters} 
                  mains={this.props.menu.mains}
                  desserts={this.props.menu.desserts}
                  onAdd={this.props.onAdd} 
                  onRemove={this.props.onRemove}
                  isRemoval={false} 
                  getTotal={this.props.getTotal}
                  />
                 

      
      </div>
    );
  }
}


export default MenuList;