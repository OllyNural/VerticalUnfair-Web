import React from 'react';
import { Grid, Button, makeStyles } from "@material-ui/core";

const useStyles = () => makeStyles(() => {
    button: {

    };
});

const Details = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Button variant="contained" color="secondary" className={classes.button}>
                Secondary
            </Button>
        </Grid>
    )
}

export default Details;
