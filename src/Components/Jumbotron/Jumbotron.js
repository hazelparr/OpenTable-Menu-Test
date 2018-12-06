import React from 'react';
import { render } from 'react-dom';
import './Jumbotron.css';


class Jumbotron extends React.Component {
  constructor(props) {
    super(props)

    this.getSelectValue = this.getSelectValue.bind(this);

  }

  getSelectValue(event) {
    let selectedValue = document.getElementById("diners").value;
    this.props.changeDiner(selectedValue)
  }

  render() {
    return (
      <div className="Jumbotron">
        <h2>CHOOSE FROM OUR DELICIOUS MENU</h2>
        <div className="Selection">
          <select id="diners" onChange={this.getSelectValue}>
            <option value="dinerOne">Diner One</option>
            <option value="dinerTwo">Diner Two</option>
          </select>
        </div>
      </div>
          
    );
  }
}


export default Jumbotron;