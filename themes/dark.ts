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
    };
    border: {
      main: string;
      error: string;
    };
    color: {
      main: string;
      tertiary: string;
      error: string;
      secondery: string;
      tertiary1: string;
      white: string;
      bottom_text_color: string;
    };
  };
}

export const darkTheme: Theme = {
  direction: 'ltr',
  palette: {
    mode: 'dark',
    primary: {
      main: '#000',
      light: '#fff',
      radius: 4,
      secondary: '#252525',
    },
    background: {
      main: '#1D1D1D',
      tertiary: '#F2F4F7',
      secondary: '#F1F1F1',
      white: '#fff',
      tertiary1: '#3E3E3E',
      primary: '#1D1D1D',
    },
    border: {
      main: '#E4E8EE',
      error: '#ff4b4b',
    },
    color: {
      main: '#FFA02A',
      tertiary: '#F2F4F7',
      error: '#ff4b4b',
      secondery: '#A0A0A0',
      tertiary1: '#BFBFBF',
      white: '#fff',
      bottom_text_color: '#FFA02A',
    },
  },
};
