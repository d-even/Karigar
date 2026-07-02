import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/SOULING/i);
  expect(headingElement).toBeInTheDocument();
});
