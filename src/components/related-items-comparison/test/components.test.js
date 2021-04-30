import React, { children } from 'react';
import renderer from 'react-test-renderer';
import RelatedItem from '../RelatedItem.jsx';
import RelatedProductCard from '../RelatedProductCard.jsx';
import { render, screen } from '@testing-library/react';


describe('RelatedItem', () => {

  test('renders RelatedItem component', () => {
    render(<RelatedItem />);
    screen.debug();
  });

  test('mathes snapshot', () => {
    const tree = renderer.create(<RelatedItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});