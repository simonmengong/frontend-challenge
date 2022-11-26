import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Menu from '@mui/icons-material/Menu';
import { Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import makeStyles from '@mui/styles/makeStyles';
import { ReactElement } from 'react';
import SplitButton from '@customizations/ButtonCustomization';

interface INavBarProps {
  toggleTheme: (index: number) => void;
  themeType: string;
  handleToggleSidebarMobile: () => void;
  handleToggleSidebar: () => void;
  sidebarOpen: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    width: '100%',
    height: theme.custom.size.navBarHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    padding: '0 15px 0 15px',
    position: 'relative',
    zIndex: 100,
  },
  flexContainer: {},
  menuButton: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export const NavBar = (props: INavBarProps): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <div className={classes.flexContainer}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          className={classes.menuButton}
          onClick={() => {
            props.handleToggleSidebarMobile();
            props.handleToggleSidebar();
          }}
        >
          <Menu />
        </IconButton>
      </div>
      <div>
        <SplitButton
            toggleTheme={props.toggleTheme}
            themeType={props.themeType}
          />
        {/*<IconButton
          color="inherit"
          aria-label="Toggle Theme"
          onClick={() => {
            props.toggleTheme();
          }}
        >
          {props.themeType === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>*/}
      </div>
    </div>
  );
};
