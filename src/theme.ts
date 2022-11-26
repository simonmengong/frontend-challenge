import { ThemeOptions } from '@mui/material/';

export const lightTheme: ThemeOptions = {
  palette: {
    primary: {
      light: '#5c667a',
      main: '#323c4e',
      dark: '#0b1626',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9bb1ff',
      main: '#6482f5',
      dark: '#2156c1',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#f6f6f6',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    mode: 'light',
  },
  typography: {
    fontFamily: ['Arial'].join(','),
  },
  name: 'light',
  custom: {
    palette: {
      graphColorOne: {
        light: '#5c667a',
        main: '#323c4e',
        dark: '#0b1626',
      },
      graphColorTwo: {
        light: '#9bb1ff',
        main: '#6482f5',
        dark: '#2156c1',
      },
      history: {
        summaryBorder: '#e0e0e0',
      },
    },
    size: {
      drawerWidthOpen: 260,
      drawerWidthClosed: 70,
      navBarHeight: 60,
    },
    transition: {
      drawerTransition: 'all 0.25s cubic-bezier(0.685, 0.0473, 0.346, 1)',
    },
  },
};

export const darkTheme: ThemeOptions = {
  ...lightTheme,
  palette: {
    primary: {
      light: '#9bb1ff',
      main: '#6482f5',
      dark: '#2156c1',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#000',
    },
    background: {
      paper: '#383838',
      default: '#181818',
    },
    mode: 'dark',
  },
  name: 'dark',
  custom: {
    ...lightTheme.custom,
    palette: {
      graphColorOne: {
        light: '#9bb1ff',
        main: '#6482f5',
        dark: '#2156c1',
      },
      graphColorTwo: {
        light: '#9bb1ff',
        main: '#6482f5',
        dark: '#2156c1',
      },
      history: {
        summaryBorder: '#515151',
      },
    },
  },
};

export const specialTheme: ThemeOptions = {
  ...lightTheme,
  palette: {
    primary: {
      light: '#014D4E',
      main: '#317773',
      dark: '#2156c1',
      contrastText: '#fff',
    },
    secondary: {
      light: '#317773',
      main: '#317773',
      dark: '#317773',
      contrastText: '#fff',
    },
    background: {
      paper: '#FFF',
      default: '#FFFFFF',
    },
    mode: 'light',
  },
  name: "special",
  custom: {
    ...lightTheme.custom,
    palette: {
      graphColorOne: {
        light: '#31777373',
        main: '#317773',
        dark: '#2156c1',
      },
      graphColorTwo: {
        light: '#31777373',
        main: '#317773',
        dark: '#2156c1',
      },
      history: {
        summaryBorder: '#515151',
      },
    },
  },
};
