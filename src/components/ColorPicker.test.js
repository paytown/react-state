import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('Color Picker buttons', () => {
  it('renders clickable buttons', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
