import {ReactNode, createContext, useState} from 'react';
import {THEMES} from '../utils';
import {lightTheme} from '../themes/ligth';
import {darkTheme} from '../themes';

interface ThemeContextProps {
  name: 'default' | 'dark';
  updateTheme: (value: 'default' | 'dark') => void;
}
const themes = {
  default: lightTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext<ThemeContextProps>({
  name: THEMES.default as 'default',
  updateTheme: () => {},
});

export const ThemesProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState<ThemeContextProps>({
    name: 'default',
    updateTheme: (value: 'default' | 'dark') => updateTheme(value),
  });

  const updateTheme = (value: 'default' | 'dark') => {
    setTheme(prevTheme => ({...prevTheme, name: value}));
  };

  return (
    <ThemeContext.Provider
      value={{...theme, updateTheme, themes: themes[theme?.name]}}>
      {children}
    </ThemeContext.Provider>
  );
};
