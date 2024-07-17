export interface Theme {
  direction: string;
  palette: {
    mode: string;
    primary: {
      main: string;
      light: string;
      radius: number;
      secondary: string;
    };
    background: {
      main: string;
      tertiary: string;
      secondary: string;
      white: string;
      tertiary1: string;
      primary: string;
      light: string;
    };
    border: {
      main: string;
      error: string;
      secondary: string;
    };
    color: {
      main: string;
      tertiary: string;
      error: string;
      secondery: string;
      tertiary1: string;
      white: string;
      bottom_text_color: string;
      primary: string;
    };
  };
}

export const lightTheme: Theme = {
  direction: 'ltr',
  palette: {
    mode: 'light',
    primary: {
      main: '#5AC782',
      light: '#fff',
      radius: 4,
      secondary: '#252525',
    },
    background: {
      main: '#fff',
      tertiary: '#F2F4F7',
      secondary: '#F1F1F1',
      white: '#fff',
      tertiary1: '#fff',
      primary: '#5AC782',
      light: '#EBF8F0',
    },
    border: {
      main: '#E4E8EE',
      error: '#ff4b4b',
      secondary: '#F8F8F8',
    },
    color: {
      main: '#000',
      tertiary: '#F2F4F7',
      error: '#ff4b4b',
      secondery: '#091B29',
      tertiary1: '#BFBFBF',
      white: '#000',
      bottom_text_color: '#fff',
      primary: '#5AC782',
    },
  },
};
