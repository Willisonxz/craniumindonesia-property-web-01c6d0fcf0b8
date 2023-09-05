import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Autocomplete, Collapse, InputAdornment, Stack, TextField } from '@mui/material';
import { top100Films } from '../dummy_data'

import SearchIcon from '@mui/icons-material/Search';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const drawerWidth = 240;

const styles = {
    autocompleteContainer: {
        border: '1px solid grey',
        borderRadius: '30px',
        // padding: '8px', // Adjust padding as needed
    },
};

const initialSections = [
    { title: 'Property News', open: true, items: ['Latest Property Trends', 'Home Decor Ideas', 'Celebrity Real Estate', 'The Block News'] },
    { title: 'Market Insight', open: true, items: ['Investment Strategies', 'Market Analysis'] },
    { title: 'Buying', open: true, items: ['Finding Your Dream Home', 'Home Loan Options', 'Property Inspections'] },
    { title: 'Renting', open: true, items: ['Rental Tips', 'Lease Agreements', 'Tenant Rights'] },
    { title: 'Selling', open: true, items: ['Preparing Your Home for Sale', 'Choosing a Real Estate Agent', 'Negotiation Tips'] },
    { title: 'Investing', open: true, items: ['Real Estate Investment Opportunities', 'Rental Property Management'] },
    { title: 'Moving', open: true, items: ['Packing and Moving Tips', 'Changing Utilities', 'Change of Address'] },
    { title: 'Extraordinary Home', open: true, items: ['Unique Architecture', 'Luxury Homes', 'Historical Properties'] },
    { title: 'LifeStyle & Living', open: true, items: ['Home DIY Projects', 'Interior Design', 'Gardening Tips'] },
    { title: 'Renovation & Building', open: true, items: ['Home Renovation Ideas', 'Choosing Contractors', 'DIY Remodeling'] },
];


function SideBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [sections, setSections] = useState(initialSections);

    const handleClick = (index) => {
        setSections(prevSections => {
            const updatedSections = [...prevSections];
            updatedSections[index].open = !updatedSections[index].open;
            return updatedSections;
        });
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Stack spacing={2} sx={{ width: '100%' }}>

                    <Typography sx={{ fontWeight: 'bold' }}>
                        ALL VIDEO
                    </Typography>
                    <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="freeSolo"
                                variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                style={{ ...styles.autocompleteContainer, ...params.InputProps.style }}
                            />
                        )}
                    />
                </Stack>
            </Toolbar>
            <Divider />
            {sections.map((section, index) => (
                <div key={index}>
                    <List>
                        <ListItemButton onClick={() => handleClick(index)}>
                            <ListItemText primary={section.title} />
                            {section.open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={section.open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {section.items.map((item, itemIndex) => (
                                    <ListItemButton key={itemIndex} sx={{ pl: 4 }}>
                                        <ListItemText primary={item} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>
                    </List>
                    {index !== sections.length - 1 && <Divider />}
                </div>
            ))}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', marginTop: '20px', overflow: 'hidden' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    marginTop: '225px', // Tambahkan margin atas langsung di sini
                    position: 'static',
                }}
            >
                <Toolbar sx={{
                    marginLeft: 0, // Tambahkan margin kiri di sini
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}

                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '0px', position: 'relative', },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', width: drawerWidth, marginTop: '0px', position: 'relative',
                            marginLeft: 0,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>

                </Typography>
                <Typography paragraph>

                </Typography>
            </Box>
        </Box>
    );
}

SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SideBar;