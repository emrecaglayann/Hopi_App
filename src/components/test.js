import React from 'react';
import { render } from '@testing-library/react-native';
import Tag from './Tag';

test('renders "Hepsi Senin için"', () => {
  const { getByText } = render(<Tag />);
  const textElement = getByText('Hepsi Senin için');
  expect(textElement).toBeDefined();
});
