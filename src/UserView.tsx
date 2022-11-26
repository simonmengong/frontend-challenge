import { NavBar } from '@components/navigation/Navbar';
import { SideBar } from '@components/navigation/Sidebar';
import { Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { ReactElement, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Outlet } from 'react-router-dom';

import { userRoutes } from './routes';

interface IUserViewProps {
  toggleTheme: (index: number) => void;
  themeType: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
    fontFamily: theme.typography.fontFamily,
  },
  mainPanel: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    position: 'absolute',
    right: 0,
    left: theme.custom.size.drawerWidthOpen,
    transition: theme.custom.transition.drawerTransition,
    [theme.breakpoints.down('md')]: {
      left: theme.custom.size.drawerWidthClosed,
    },
  },
  mainPanelSideBarClosed: {
    left: theme.custom.size.drawerWidthClosed,
  },
  scrollbars: {
    height: `calc(100% - ${theme.custom.size.navBarHeight}px) !important`,
  },
  content: {
    width: '100%',
    padding: '20px 30px',
  },
}));

const UserView = (props: IUserViewProps): ReactElement => {
  const classes = useStyles();
  const [showSideBar, setShowSideBar] = useState(true);
  const [showSideBarMobile, setShowSideBarMobile] = useState(false);

  const theme = useTheme();
  const mediaQuery = window.matchMedia(`(min-width: ${theme.breakpoints.values.md}px)`);

  const handleToggleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  const handleToggleSidebarMobile = () => {
    if (mediaQuery.matches) {
      setShowSideBarMobile(false);
    } else {
      setShowSideBarMobile(!showSideBarMobile);
    }
  };

  return (
    <div className={classes.root}>
      <SideBar
        routes={userRoutes}
        handleToggleSidebar={handleToggleSidebar}
        handleToggleSidebarMobile={handleToggleSidebarMobile}
        open={showSideBar}
        openMobile={showSideBarMobile}
      />
      <div className={clsx(classes.mainPanel, { [classes.mainPanelSideBarClosed]: !showSideBar })}>
        <NavBar
          handleToggleSidebar={handleToggleSidebar}
          handleToggleSidebarMobile={handleToggleSidebarMobile}
          toggleTheme={props.toggleTheme}
          themeType={props.themeType}
          sidebarOpen={showSideBar || showSideBarMobile}
        />
        <Scrollbars hideTracksWhenNotNeeded={true} className={classes.scrollbars}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default UserView;
