import React from 'react';

import { shallow } from 'enzyme';
import { findByTestAttr} from './test/testUtils';
import App from './App';
const defaultProps ={};
const setup = (props={})=>{
  const setupProps = {...defaultProps, ...props};
  return shallow(<App {...setupProps}/>)
}
test('renders without fucking dying', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
