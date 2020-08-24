import React, {useState} from 'react';
import {Grid, makeStyles, Typography} from '@material-ui/core';
import {red, blue, grey} from '@material-ui/core/colors';
import lime from '@material-ui/core/colors/lime';
import teal from '@material-ui/core/colors/teal';
import yellow from '@material-ui/core/colors/yellow';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {},
    icon: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        borderRadius: '50%',
        border: `2px solid ${theme.palette.common.white}`
    },
    iconList: {
        marginTop: theme.spacing(0.5),
    },
}));

const items = [
    ['red', red[600]],
    ['blue', blue[600]],
    ['yellow', yellow[600]],
    ['lime', lime[600]],
    ['teal', teal[600]],
]

function ColorScheme(props) {
    const classes = useStyles();
    const [value, setValue] = useState(items[0][0])

    const handleClick = (name) => () => {
        setValue(name)
    }

    return (
        <Box mt={3}>
            <Typography variant="h6">Цветовая схема</Typography>
            <Grid container spacing={1} className={classes.iconList}>
                {items.map(([itemValue, color]) =>
                    <Grid item key={itemValue}>
                        <IconButton disableRipple size="small" edge="start" onClick={handleClick(itemValue)} style={{ backgroundColor: itemValue === value ? grey[300] : undefined }}>
                            <div className={classes.icon} style={{ backgroundColor: color  }} />
                        </IconButton>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default ColorScheme;