import { createTheme, CssBaseline, StyledEngineProvider, ThemeOptions, ThemeProvider, useTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import PageNotFound from '@views/PageNotFound';
import { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { userRoutes } from './routes';
import { darkTheme, lightTheme, specialTheme } from './theme';
import UserView from './UserView';

const useStyles = makeStyles(() => ({
  app: {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    WebkitFontSmoothing: 'antialised',
    MozOsxFontSmoothing: 'grayscale',
    fontWeight: 300,
    lineHeight: '1.5em',

    '& a': {
      textDecoration: 'none',
    },
  },
}));

const useDarkMode = (): [ThemeOptions, (index: number) => void] => {
  const options = [lightTheme, darkTheme, specialTheme];
  const [theme, setTheme] = useState(lightTheme);

  /*const toggleTheme = (): void => {
    setTheme(theme.palette?.mode === 'light' ? darkTheme : lightTheme);
  };*/

  const toggleTheme = (index: number) => {
    setTheme(options[index]);
  };

  return [theme, toggleTheme];
};

const App = (props: { toggleTheme: (index: number) => void }): ReactElement => {
  const { toggleTheme } = props;
  const theme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" element={<UserView toggleTheme={toggleTheme} themeType={`${theme.name}`} />}>
          {userRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          <Route path="/" element={<Navigate replace to={userRoutes[0].path} />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

const Wrapper = (): ReactElement => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <BrowserRouter>
          <App toggleTheme={toggleTheme} />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById('root'));
