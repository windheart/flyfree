import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {Close} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

function Main(props) {
    const classes = useStyles();

    return (
        <>
            <Grid container justify="space-between">
                <Grid item>
                    <Typography variant="h5">Просмотр</Typography>
                </Grid>
                <Grid item>
                    <IconButton size="small">
                        <Close/>
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
}

export default Main;