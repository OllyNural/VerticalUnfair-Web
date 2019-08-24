import React from 'react';
import { Grid, Button, makeStyles, Card, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    formGridContainer: {
        width: '50%',
        paddingTop: '50px',
    },
    cardContainer: {
        padding: '40px',
        width: '100%',
        textAlign: 'center',
    },
    headerTitle: {
        marginBottom: '20px',
    },
    typography: {
        marginBottom: '30px',
    }
}));

const Details = ({ data: { rent, membershipFee, postcode}, handleOnClick }) => {
    const classes = useStyles();

    return (
        <Grid item container className={classes.formGridContainer}>
            <Card className={classes.cardContainer} >
                <Typography variant='h4' className={`${classes.headerTitle} ${classes.typography}`} >
                    Congratulations!
                </Typography>
                <p variant='body' className={classes.typography} >
                    You have signed up for a Flatbond! <br />
                    Courtesy of VerticalUnfair ltd.
                </p>
                <p variant='body' className={classes.typography} >
                    Your Membership fee is: £{membershipFee / 100}
                </p>
                <p variant='body' className={classes.typography} >
                    This is calculated from your rent: £{rent / 100}
                </p>
                <Button onClick={handleOnClick} variant="contained" color="secondary" className={classes.button}>
                    Go back
                </Button>
            </Card>
        </Grid>
    )
}

export default Details;
