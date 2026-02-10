// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BundleMin title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BundleMin/i);
    expect(titleElement).toBeInTheDocument();
});
