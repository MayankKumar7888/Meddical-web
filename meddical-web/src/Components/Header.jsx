import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AdbIcon from '@mui/icons-material/Adb';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink } from 'react-router-dom';

const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
];
export default function Header() {
    const [open, setOpen] = React.useState(false);
    const [showSearch, setShowSearch] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerContent = (
        <Box className='menu-drawer' sx={{ width: { xs: 240, sm: 300 } }}>
            <Box className='menu-drawer-header' sx={{ p: 2 }} >
                <Typography className='logo' variant="h6" noWrap ><span className='logo-text'>Med</span><span>dical</span></Typography>
                <IconButton className='menu-drawer-close' onClick={toggleDrawer(false)}> <CloseIcon /> </IconButton>
            </Box>

            <Divider />

            <List>
                {pages.map((page) => (
                    <ListItem className='menu-drawer-links-box' key={page.name} disablePadding >
                        <ListItemButton className='menu-drawer-links' component={NavLink} to={page.path} onClick={toggleDrawer(false)}>
                            <ListItemText primary={page.name} />
                        </ListItemButton>
                    </ListItem>
                ))}

                <ListItem className='menu-drawer-links-box' disablePadding>
                    <ListItemButton className='menu-drawer-btn' onClick={toggleDrawer(false)}>
                        <ListItemText primary="Appointment" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            {/* <Box className='header-section' sx={{ py: 1, flexGrow: 1 }}> */}
            <Container maxWidth="xl" className='header-section' sx={{ py: 1, flexGrow: 1 }}>
                {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <marquee>
                        <PhoneInTalkIcon className='header-icon' /> Emergency: (237) 681-812-255 &nbsp;&nbsp;&nbsp;&nbsp;
                        <AccessTimeIcon className='header-icon' /> Work Hour: 09:00 - 20:00 Everyday &nbsp;&nbsp;&nbsp;&nbsp;
                        <LocationOnIcon className='header-icon' /> Location: 0123 Some Place
                    </marquee>
                </Box> */}

                <Box className='header-marquee-box' sx={{ display: { xs: 'block', md: 'none' } }}>
                    <marquee className="header-marquee" behavior="scroll" direction="left" scrollamount="3" loop="infinite">
                        <PhoneInTalkIcon className='header-icon' />&nbsp;&nbsp;&nbsp; Emergency: (237) 681-812-255 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <AccessTimeIcon className='header-icon' />&nbsp;&nbsp;&nbsp; Work Hour: 09:00 - 20:00 Everyday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <LocationOnIcon className='header-icon' />&nbsp;&nbsp;&nbsp; Location: 0123 Some Place
                        <PhoneInTalkIcon className='header-icon' />&nbsp;&nbsp;&nbsp; Emergency: (237) 681-812-255 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <AccessTimeIcon className='header-icon' />&nbsp;&nbsp;&nbsp; Work Hour: 09:00 - 20:00 Everyday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <LocationOnIcon className='header-icon' />&nbsp;&nbsp;&nbsp; Location: 0123 Some Place
                    </marquee>
                </Box>
                <Grid container sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {/* Logo Section */}
                    <Grid size={{ sm: 4, md: 2, lg: 4 }} sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <Box className='header-itembox'>
                            <Typography className='header-logo' variant="h6" noWrap sx={{ justifyContent: { xs: 'start', sm: 'center', md: 'start' }, fontWeight: 700 }}>
                                <span className='header-logo-text'>Med</span><span>dical</span>
                            </Typography>
                        </Box>
                        {/* <Typography className=''  */}
                    </Grid>

                    {/* Address */}
                    <Grid size={{ xs: 12, sm: 6, md: 3.4, lg: 2.5 }} >
                        <Box className='header-itembox' sx={{ px: 2 }}>
                            <Box className='header-innerbox' sx={{ display: 'flex', gap: 1 }} >
                                <PhoneInTalkIcon className='header-icon' />
                                <Box>
                                    <Typography variant="h6" className="header-subheading" sx={{ fontWeight: 500 }}>
                                        Emergency
                                    </Typography>
                                    <Typography variant="body2" className='header-para' sx={{ fontWeight: 500 }}>
                                        (237) 681-812-255
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Phone */}
                    <Grid size={{ xs: 12, sm: 6, md: 3.6, lg: 3 }} >
                        <Box className='header-itembox' sx={{ px: 2 }}>
                            <Box className='header-innerbox' sx={{ display: 'flex', gap: 1 }}>
                                <AccessTimeIcon className='header-icon' />
                                <Box>
                                    <Typography variant="h6" className="header-subheading" sx={{ fontWeight: 500 }}>
                                        Work Hour
                                    </Typography>
                                    <Typography variant="body2" className='header-para' sx={{ fontWeight: 500 }}>
                                        09:00 - 20:00 Everyday
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Email */}
                    <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.5 }} >
                        <Box className='header-itembox' sx={{ px: 2 }}>
                            <Box className='header-innerbox' sx={{ display: 'flex', gap: 1 }}>
                                <LocationOnIcon className='header-icon' />
                                <Box>
                                    <Typography variant="h6" className="header-subheading" sx={{ fontWeight: 500 }}>
                                        Location
                                    </Typography>
                                    <Typography variant="body2" className='header-para' sx={{ fontWeight: 500 }}>
                                        0123 Some Place
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='xl' disableGutters>
                <AppBar position="static" className='header'>
                    <Toolbar className='navbar'>
                        <Box className='logo-box' sx={{ display: { xs: 'flex', md: 'none' } }} >
                            <Typography className='logo' variant="h6" noWrap ><span className='logo-text'>Med</span><span>dical</span></Typography>
                        </Box>

                        <Box className='menu-box' sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }} >
                            {pages.map((page) => (
                                <Button className='menu' key={page.name} color="inherit" component={NavLink} to={page.path} disableRipple disableTouchRipple disableFocusRipple>
                                    {page.name}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        <Box className='search-icon-box' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} >
                            {!showSearch && (
                                <IconButton color="inherit" onClick={() => setShowSearch(true)} ><SearchIcon /></IconButton>
                            )}
                            <Collapse
                                className="search-icon-box-inner"
                                in={showSearch}
                                orientation="horizontal"
                                timeout={{ enter: 500, exit: 500 }}
                                easing={{ enter: 'cubic-bezier(0.4, 0, 0.2, 1)', exit: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
                                unmountOnExit >
                                <Typography varient='div' className='search'>
                                    <Box className="search-icon"><SearchIcon /></Box>
                                    <InputBase className='search-input' autoFocus placeholder="Search..." inputProps={{ 'aria-label': 'search' }} onBlur={() => setShowSearch(false)} />
                                </Typography>
                            </Collapse>
                        </Box>

                        <Typography className='navbar-btn' variant="button" component={NavLink} to="#" sx={{
                            display: { xs: 'none', md: 'inline-flex' }, ml: 2, px: 3, py: 1
                        }}>
                            Appointment
                        </Typography>

                        <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}> {DrawerContent} </Drawer>
                </AppBar>
            </Container>
        </>
    );
}