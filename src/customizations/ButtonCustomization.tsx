import * as React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { ButtonGroup, Paper, Popper, Theme, ClickAwayListener, Grow, MenuItem, MenuList } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ISplitButtonProps {
    toggleTheme: (index: number) => void;
    themeType: string;
  }

const options = ['light', 'dark', 'special'];

export default function SplitButton(props: ISplitButtonProps){
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(options.indexOf(props.themeType));

    const handleClick = () => {
        //toggleTheme
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
        props.toggleTheme(index);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    }

    return(
        <React.Fragment>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" disableElevation>
                <IconButton
                    size="small"
                    color="inherit"
                    aria-label="Toggle Theme"
                    onClick={() => {
                        //props.toggleTheme();
                    }}
                    >
                    {props.themeType === 'light' ? <Brightness7Icon /> : 
                    <>
                        {props.themeType === 'dark' ? <Brightness4Icon /> : <AutoAwesomeIcon />}
                    </>
                    }
                </IconButton>
                <IconButton
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanden={open ? 'true' : undefined}
                    aria-label="light"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                    color='inherit'
                >
                    <ArrowDropDownIcon />
                </IconButton>
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex: 1
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option, index) =>(
                                        <MenuItem
                                            key={option}
                                            /*disabled={index === 2}*/
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option === 'light' ? <Brightness7Icon /> : 
                                            <>
                                                {option === 'dark' ? <Brightness4Icon /> : <AutoAwesomeIcon />}
                                            </>}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>

                    </Grow>
                )}

            </Popper>
        </React.Fragment>
    )
}