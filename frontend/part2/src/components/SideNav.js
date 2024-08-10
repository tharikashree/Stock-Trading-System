import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import FeedIcon from '@mui/icons-material/Feed';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LogoutIcon from '@mui/icons-material/Logout';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };

    return (
        <>
            <IconButton
                sx={{ ml: 1 }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
                sx={{
                     width: 240,
                     flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: '240px',
                        boxSizing: 'border-box',
                        backgroundColor: '#6a1b9a', // Dark purple
                        color: '#ffffff' // Adjust the width of the drawer
                    },
                }}
            >
                <List>
                    <ListItem button component={Link} to="/userprofile" onClick={toggleDrawer(false)}>
                        <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                        <ListItemText primary="UserProfile" />
                    </ListItem>
                    <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/portfolio" onClick={toggleDrawer(false)}>
                        <ListItemIcon><AssessmentIcon /></ListItemIcon>
                        <ListItemText primary="Portfolio" />
                    </ListItem>
                    <ListItem button component={Link} to="/chart" onClick={toggleDrawer(false)}>
                        <ListItemIcon><InsertChartIcon /></ListItemIcon>
                        <ListItemText primary="Chart" />
                    </ListItem>
                    <ListItem button component={Link} to="/news" onClick={toggleDrawer(false)}>
                        <ListItemIcon><FeedIcon /></ListItemIcon>
                        <ListItemText primary="News" />
                    </ListItem>
                    <ListItem button component={Link} to="/financials" onClick={toggleDrawer(false)}>
                        <ListItemIcon><MonetizationOnIcon /></ListItemIcon>
                        <ListItemText primary="Financials" />
                    </ListItem>
                    <ListItem button component={Link} to="/logout">
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default SideNav;
