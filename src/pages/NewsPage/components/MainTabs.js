import { styled } from '@mui/material/styles';
import { Box, Tab, Tabs } from "@mui/material";
import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RoutesPage from '../../../Routes';

const MTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#EF3B3A',
    },
});

const MTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    textAlign: 'left',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 18,
    marginRight: theme.spacing(1),
    color: '#6C6C6C',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        color: '#F00',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#EF3B3A',  // Change the color for the selected tab
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#6C6C6C',
    },
}));

const MainTabs = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine the selected tab based on the current route
    const getSelectedTab = () => {
        if (location.pathname.includes(RoutesPage.RouteInsignts)) {
            return 1;
        } else if (location.pathname.includes(RoutesPage.RouteGuides)) {
            return 2;
        } else if (location.pathname.includes(RoutesPage.RouteLifeStyle)) {
            return 3;
        } else if (location.pathname.includes(RoutesPage.RouteVideo)) {
            return 4;
        }
        return 0; // Default to the first tab for other routes
    };

    const [value, setValue] = React.useState(getSelectedTab());

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ bgcolor: '#ffff' }}>
                <MTabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <MTab label="News" onClick={() => navigate(RoutesPage.RouteNews)}/>
                    <MTab label="Insights" onClick={() => navigate(RoutesPage.RouteInsignts)}/>
                    <MTab label="Guides" onClick={() => navigate(RoutesPage.RouteGuides)}/>
                    <MTab label="Lifestyle" onClick={() => navigate(RoutesPage.RouteLifeStyle)}/>
                    <MTab label="Video" onClick={() => navigate(RoutesPage.RouteVideo)} />
                </MTabs>
                
            </Box>
        </div>
    );
}

export default MainTabs;
