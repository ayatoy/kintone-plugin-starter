import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './Message';

test('renders default message paragraph', () => {
  render(<Message />);
  const paragraphElement = screen.getByText(/hello, world!/);
  expect(paragraphElement).toBeInTheDocument();
});
