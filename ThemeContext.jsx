import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'light'; } catch(e){ return 'light'; }
  });

  useEffect(() => {
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${theme}`);
    try { localStorage.setItem('theme', theme); } catch(e){}
  }, [theme]);

  function toggleTheme(){ setTheme(t => t === 'light' ? 'dark' : 'light'); }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(){ return useContext(ThemeContext); }

export default ThemeContext;
