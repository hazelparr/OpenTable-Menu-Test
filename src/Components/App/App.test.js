import React from 'react';
import App from './App.js';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Dish from '../Dish/Dish.js';
import Jumbotron from '../Jumbotron/Jumbotron.js';
import Course from '../Course/Course.js';
import MenuList from '../MenuList/MenuList.js';
import OrderList from '../OrderList/OrderList.js';


describe('App', () => {
  let wrapper;
  before(() => {
    wrapper = mount(<App />)
  });

  it('check if dish clicked will be added to order state', () => {
    //expect(wrapper.find(".App")).to.have.lengthOf(1);
    wrapper.find('.Dish-action').first().simulate('click')
    const orders = wrapper.state('orders');
    expect(orders.dinerOne.starters.name).to.equal('Soup')
  });

  it('renders <App /> component', () => {
    //const wrapper = shallow(<App />);
    expect(wrapper.find(App)).to.have.lengthOf(1);
  });

  it('renders 13 <Dish /> component', () => {
    expect(wrapper.find(Dish)).to.have.lengthOf(13); // 12 dishes + 1 "clicked"
  });

  it('console logs your whole html doc', () => {
  
    console.log(wrapper.html());
  });

  it('renders 1 <Jumbotron /> component', () => {
    expect(wrapper.find(Jumbotron)).to.have.lengthOf(1); 
  });

  it('renders 1 <Course /> component', () => {
    expect(wrapper.find(Course)).to.have.lengthOf(1); 
  });

  it('renders 1 <MenuList /> component', () => {
    expect(wrapper.find(MenuList)).to.have.lengthOf(1); 
  });

 it('renders 1 <OrderList /> component', () => {
    expect(wrapper.find(OrderList)).to.have.lengthOf(1); 
  });

});


