import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [ data, setData ] = useState(null);


  const signIn = async ({ email, password }) => {

    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token, isAdmin } = response.data;

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user));
      localStorage.setItem('@foodexplorer:token', token);

      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;
      setData({ user, token, isAdmin })
      
    } catch( error ) {
      if (error.response) {
        alert( error.response.data.message );
      } else {
        alert('Não foi possível fazer o login, tente novamente.');
      }
    }
  }

  const signOut = () => {
    localStorage.removeItem('@foodexplorer:user');
    localStorage.removeItem('@foodexplorer:token');
    setData(null);
    window.location.href = '/'
  }

  useEffect( () => {
    const user = localStorage.getItem('@foodexplorer:user');
    const token = localStorage.getItem('@foodexplorer:token');

    if ( user && token ) {
      api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

      setData({ 
        user: JSON.parse(user), 
        token
     });

    }
  }, [])

  return (
    <AuthContext.Provider value = {{ 
      signIn, 
      signOut, 
      user: data?.user,
      signed: Boolean(data)
    }}>
      
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}