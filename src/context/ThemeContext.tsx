import { createContext, ReactNode, useState } from 'react';

export const ThemeContext = createContext({
  mode: 'dark',
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState('dark');

  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div className={mode}>{children}</div>
    </ThemeContext.Provider>
  );
};
