import React, { Children } from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
    header: {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
    },
    title: {
        marginLeft: theme.spacing(5),
        flexGrow: 1,
        padding: '10px 0px',
    },
}))

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="static">
                <Typography variant="h4" className={classes.title}>
                    <Link href={`/`} color="inherit" className={classes.link}>
                        VerticalUnfair
                    </Link>
                </Typography>
            </AppBar>
            {children}
        </React.Fragment>
    )
}

export default Layout;
