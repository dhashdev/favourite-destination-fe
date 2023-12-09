// useAutheticate.ts
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * useAutheticate Hook:
 * Redirects to the home page if the user is not logged in.
 * It is used to ensure authentication before rendering certain views.
 */
export const useAutheticate = () => {
  const navigate = useNavigate();

  // Effect to check if the user is logged in; if not, redirect to the login page
  useEffect(() => {
    const doesUserExist = localStorage.getItem('userName');
    if (!doesUserExist) {
      navigate('/');
    }
  }, [navigate]);
};
