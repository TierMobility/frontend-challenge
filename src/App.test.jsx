import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
    render(<App />);
    const punchline = screen.getByText(/Change mobility for good/i);
    expect(punchline).toBeInTheDocument();
});
