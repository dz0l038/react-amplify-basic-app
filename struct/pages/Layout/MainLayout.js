import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import ClearIcon from '@material-ui/icons/Clear'
import PersonIcon from '@material-ui/icons/Person'
import HomeIcon from '@material-ui/icons/Home'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Routing
import { HomeRoute, AccountRoute } from '../Routing'

// Css
import './MainLayout.scss';

// Import react router
import { Link } from "react-router-dom";

// Need to log out in the drawer
import { Auth, Hub } from 'aws-amplify';
import { Box } from '@material-ui/core';
import GeneralHelpers from '../../utils/Helpers/GeneralHelpers';

const drawerWidth = 300;

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: {
            main: '#17252A',
        },
    },
});

const styles = theme => ({
    root: {
        display: 'flex',
        backgroundColor: "transparent",
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        marginLeft: drawerWidth,
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },

    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(23, 37, 42, 1)",
        color: "#fefefe",
        border: "none",
        [theme.breakpoints.up('md')]: {
            backgroundColor: "rgba(23, 37, 42, 0.8)",
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        minHeight: "100vh",
    },
    icon: {
        color: "#fefefe",
    }
});

class MainLayout extends React.Component {
    state = {
        mobileOpen: false,
        isLogged: false,
    };

    constructor() {
        super();
        this.updateLoggedStatus = this.updateLoggedStatus.bind(this)
    }

    componentDidMount() {
        this.updateLoggedStatus();
        Hub.listen('auth', this.updateLoggedStatus);
    }

    componentWillUnmount() {
        Hub.remove('auth', this.updateLoggedStatus);
    }

    async updateLoggedStatus() {
        let isLogged = false;
        let sub = await GeneralHelpers.getCurrentUserSub();
        if (sub) {
            isLogged = true;
        }
        try {
            this.setState({ isLogged: isLogged });
        } catch (e) {
            console.log(e)
        }
    }

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    async onSignOutClick() {
        await Auth.signOut()
            .then(data => console.log(data))
            .catch(err => console.log(err));
        // Redirect to home
        window.location.replace(HomeRoute);
    }

    render() {
        const { classes } = this.props;
        const { isLogged } = this.state;
        const AppTitle = "My App";
        const drawer = (
            <div id="drawer-container">
                <div className="logo-drawer">
                    
                </div>
                <List>
                    <ListItem button component={Link} to={HomeRoute}>
                        <ListItemIcon><HomeIcon className={classes.icon}/></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </List>
                {
                    isLogged ?
                        <div>
                            <Divider />
                            <List>
                                <ListItem button component={Link} to={AccountRoute}>
                                    <ListItemIcon><PersonIcon className={classes.icon}/></ListItemIcon>
                                    <ListItemText primary="My Account" />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem>
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button onClick={() => this.onSignOutClick()}>
                                    <ListItemIcon><ClearIcon className={classes.icon}/></ListItemIcon>
                                    <ListItemText primary="Log out" />
                                </ListItem>
                            </List>
                            <Divider />
                        </div>
                        :
                        <div>
                            <Divider />
                            <List>
                                <ListItem>
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button component={Link} to={AccountRoute}>
                                    <ListItemIcon><PersonIcon className={classes.icon} /></ListItemIcon>
                                    <ListItemText primary="Log in" />
                                </ListItem>
                            </List>
                            <Divider />
                        </div>
                }
            </div>
        );
        return (
            <div>
                <div id="main-background" />
                <div id="main-layout">
                    <MuiThemeProvider theme={theme}>
                        <div className={classes.root}>
                            <CssBaseline />
                            <Hidden mdUp implementation="css">
                                <AppBar position="fixed" color="secondary" className={classes.appBar}>
                                    <Toolbar>
                                        <IconButton
                                            color="inherit"
                                            aria-label="Open drawer"
                                            onClick={this.handleDrawerToggle}
                                            className={classes.menuButton}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography variant="h6" color="inherit" className={classes.title}>
                                            { AppTitle }
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Hidden>
                            <nav className={classes.drawer}>
                                <Hidden mdUp implementation="css">
                                    <Drawer
                                        color="primary"
                                        className={classes.drawer}
                                        variant="temporary"
                                        open={this.state.mobileOpen}
                                        onClose={this.handleDrawerToggle}
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        anchor="left"
                                    >
                                        {drawer}
                                    </Drawer>
                                </Hidden>
                                <Hidden smDown implementation="css">
                                    <Drawer
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        variant="permanent"
                                        open
                                    >
                                        {drawer}
                                    </Drawer>
                                </Hidden>
                            </nav>
                            <main className={classes.content} >
                                <Hidden mdUp implementation="css"><div className={classes.toolbar} /></Hidden>
                                <Box width="100%" className="mainContent">{this.props.children}</Box>
                            </main>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainLayout);