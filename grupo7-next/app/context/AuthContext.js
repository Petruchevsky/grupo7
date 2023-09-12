'use client'
import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('authToken'));

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
