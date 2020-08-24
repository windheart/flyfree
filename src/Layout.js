import React from 'react';
import {makeStyles} from '@material-ui/core';
import Aside from './Aside';
import Main from './Main';
import {Grid} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: grey[200],

        '& > *': {
            padding: theme.spacing(4)
        }
    },
    aside: {
        backgroundColor: theme.palette.common.white,
    },
}));

function Layout(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={4} className={classes.aside}>
                <Aside/>
            </Grid>
            <Grid item xs>
                <Main/>
            </Grid>
        </Grid>
    );
}

export default Layout;