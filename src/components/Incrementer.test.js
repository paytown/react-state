import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from './Incrementer';

describe('incrememnter', () => {
  it('adds a number when button clicked', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('increments on click', () => {
    const wrapper = shallow(<Incrementer />);
    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state('count')).toEqual(1);
  });
});
