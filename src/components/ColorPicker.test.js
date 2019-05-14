import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('ColorPicker', () => {
  it('render color', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
  
  it('change color to red', () => {
    const wrapper = shallow(<ColorPicker />);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('color')).toEqual('red');
  });
});
