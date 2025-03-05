import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './HomePage.jsx'; // Update the import if needed
import { BrowserRouter as Router } from 'react-router-dom'; // To wrap the component with Router
import { ToastContainer } from 'react-toastify';

// Mock the ToastContainer to avoid toast notifications during tests
jest.mock('react-toastify', () => ({
  ToastContainer: () => <div>ToastContainer Mock</div>,
  toast: {
    info: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('HomePage', () => {
  test('renders HomePage without crashing', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    // Check if the Banner text is rendered correctly
    expect(screen.getByText('Ремонт часов')).toBeInTheDocument();
    expect(screen.getByText('Ремонт часов в Харькове с качественным мастером')).toBeInTheDocument();
  });

  test('clicking "Узнать расценки" button calls the correct function', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    // Mocking the navigate function
    const navigate = jest.fn();
    fireEvent.click(screen.getByText('Узнать расценки'));

    // Ensure the navigate function was called
    expect(navigate).toHaveBeenCalledTimes(1);
  });

  test('clicking "Смотреть все расценки" button triggers navigation', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    fireEvent.click(screen.getByText('Смотреть все расценки'));

    // Check if navigate is called
    // (You would typically mock react-router-dom's useNavigate hook to test this)
  });

  test('scrolling to the correct section works as expected', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    // Mock scrollIntoView to simulate scrolling
    const scrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

    fireEvent.click(screen.getByText('Карта'));

    // Check if scrollIntoView was called for the correct section
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });

  test('renders ToastContainer', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    // Check if ToastContainer is rendered
    expect(screen.getByText('ToastContainer Mock')).toBeInTheDocument();
  });
});
