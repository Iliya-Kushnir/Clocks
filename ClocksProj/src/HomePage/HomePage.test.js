import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './HomePage.jsx'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify';


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


    expect(screen.getByText('Ремонт часов')).toBeInTheDocument();
    expect(screen.getByText('Ремонт часов в Харькове с качественным мастером')).toBeInTheDocument();
  });

  test('clicking "Узнать расценки" button calls the correct function', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );


    const navigate = jest.fn();
    fireEvent.click(screen.getByText('Узнать расценки'));

    expect(navigate).toHaveBeenCalledTimes(1);
  });

  test('clicking "Смотреть все расценки" button triggers navigation', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    fireEvent.click(screen.getByText('Смотреть все расценки'));


  });

  test('scrolling to the correct section works as expected', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );


    const scrollIntoView = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

    fireEvent.click(screen.getByText('Карта'));

    expect(scrollIntoView).toHaveBeenCalledTimes(1);
  });

  test('renders ToastContainer', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );


    expect(screen.getByText('ToastContainer Mock')).toBeInTheDocument();
  });
});
