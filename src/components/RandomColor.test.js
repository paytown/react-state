import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('coloooor', () => {
  it('colors fade randomly', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
