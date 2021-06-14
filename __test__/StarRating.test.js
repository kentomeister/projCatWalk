/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import StarRating from '../src/components/shared/StarRating.jsx';

describe('Star Rating Component with no click handler', () => {
  beforeEach(() => {
    render(
      <StarRating
        rating="3"
        handleRatingClick={() => { }}
      />,
    );
  });

  it('should render a Rating component', () => {
    expect(screen.getByTitle('ratings')).toBeInTheDocument;
  });

  it('should render 5 stars', () => {
    expect(screen.queryAllByTestId('star').length).toBe(5);
  });

  it('should set the correct number of dark stars', () => {
    const stars = screen.queryAllByTestId('star');
    expect(stars[0]).toHaveClass('star');
    expect(stars[0]).not.toHaveClass('dark');
    expect(stars[1]).toHaveClass('star');
    expect(stars[1]).not.toHaveClass('dark');
    expect(stars[2]).toHaveClass('star');
    expect(stars[2]).not.toHaveClass('dark');
    expect(stars[3]).toHaveClass('star dark');
    expect(stars[4]).toHaveClass('star dark');
  });
});