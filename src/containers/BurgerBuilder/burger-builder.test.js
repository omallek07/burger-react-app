import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BurgerBuilder } from './burger-builder';
import BuildControls from '../../components/Burger/BuildControls/build-controls';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />)
  });

  it('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({ ingredients: {salad:0} });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
