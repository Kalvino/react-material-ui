import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup)
test('renders the app', () => {
  render(<App />);
  const appName = screen.queryByTestId('app-name')
  expect(appName).toBeInTheDocument();
});
