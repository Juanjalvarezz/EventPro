import React from "react";
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../src/contexts/AuthContext';
import Login from '../src/Views/Login';
import { toast } from 'react-toastify';
import axios from 'axios';

// Mockea axios y react-toastify
jest.mock('axios');
jest.mock('react-toastify', () => {
  const actualToast = jest.requireActual('react-toastify');
  return {
    ...actualToast,
    toast: {
      ...actualToast.toast,
      success: jest.fn(() => 'mock-toast-id'),
      dismiss: jest.fn()
    }
  };
});

describe('Login Component', () => {
  test('El toast de éxito se muestra después de iniciar sesión', async () => {
    axios.post.mockResolvedValue({ data: { token: 'fake-token' } });

    const { getByLabelText, getByText } = render(
      <Router>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>
    );

    fireEvent.change(getByLabelText('Email'), { target: { value: 'test1@gmail.com' } });
    fireEvent.change(getByLabelText('Contraseña'), { target: { value: 'test1234' } });

    fireEvent.click(getByText(/Iniciar Sesion/i));

    // Espera a que se muestre el toast de éxito
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith("Iniciando sesión...");
    });
  });
});
