import React, { useEffect } from 'react';
import { Grid, makeStyles, Button, Slider, Input, Radio, Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import MembershipFee from '../MembershipFee';

const useStyles = makeStyles(theme => ({
    rootGridContainer: {
        margin: '0 auto',
    },
    formGridContainer: {
        width: '50%',
        paddingTop: '50px',
    },
    formContainer: {
        width: '100%',
    },
    cardContainer: {
        padding: '40px',
    },
    rentInputTitle: {
        paddingBottom: '70px'
    },
    radioBoxContainer: {
        paddingBottom: '40px'
    },
    sliderContainer: {
        paddingBottom: '50px'
    },
    membershipFeeContainer: {
        paddingBottom: '50px'
    }
}));

const Create = ({ onSubmit }) => {
    const classes = useStyles();

    const [rentType, setRentType] = React.useState('week');
    const [rentValue, setRentValue] = React.useState(400);

    // https://material-ui.com/components/slider/
    const handleSliderChange = (event, newValue) => {
        setRentValue(newValue);
    };

    const handleSliderInputChange = event => {
        setRentValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    function handleRadioChange(event) {
        setRentType(event.target.value);
    }

    return (
        <Grid item container className={classes.formGridContainer}>
            <Card className={classes.cardContainer} >
                <form onSubmit={onSubmit} className={classes.formContainer}>
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.rentInputTitle} >Rent Input</Typography>
                        <Grid container justify="between" className={classes.radioBoxContainer} >
                            <Grid item xs={6}>
                                Rent By <b>Week</b>:
                                <Radio
                                    checked={rentType === 'week'}
                                    onChange={handleRadioChange}
                                    value="week"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'Week' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                Rent By <b>Month</b>:
                                <Radio
                                    checked={rentType === 'month'}
                                    onChange={handleRadioChange}
                                    value="month"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'Month' }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} alignItems="center" className={classes.sliderContainer} >
                            <Grid item xs>
                                <Slider
                                    value={typeof rentValue === 'number' ? rentValue : 0}
                                    min={rentType === 'week' ? 25 : 110}
                                    max={rentType === 'week' ? 2000 : 8660}
                                    onChange={handleSliderChange}
                                    aria-labelledby="input-slider"
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    className={classes.input}
                                    value={rentValue}
                                    onChange={handleSliderInputChange}
                                    inputProps={{
                                        min: rentType === 'week' ? 25 : 110,
                                        max: rentType === 'week' ? 2000 : 8660,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.membershipFeeContainer} >
                        <MembershipFee fixedMembershipFee={false} rentType={rentType} rentValue={rentValue} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" type="submit" color="primary" className={classes.button}>
                            Submit
                    </Button>
                    </Grid>
                </form>
            </Card>
        </Grid>
    )
}

export default Create;
