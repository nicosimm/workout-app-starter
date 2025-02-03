import { useState } from 'react';
import { useAuthenticationContext } from './useAuthenticationContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthenticationContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/workouts`
      )

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      localStorage.setItem('user', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
