import React from 'react';
import { Grid, makeStyles, Button, Slider, Input, Radio } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    rootGridContainer: {
        margin: '0 auto',
    },
    formGridContainer: {
        width: '50%',
        paddingTop: '50px',
    },
    formContainer: {
        width: '100%',
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
        <Grid container className={classes.rootGridContainer} justify="center">
            <Grid item container className={classes.formGridContainer}>
                <form onSubmit={onSubmit} className={classes.formContainer}>
                    <Grid item xs={12} >
                        <Typography variant='h6' >Rent Input</Typography>
                        <Grid container justify="between">
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
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} alignItems="center">
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
                                        step: 100,
                                        min: rentType === 'week' ? 25 : 110,
                                        max: rentType === 'week' ? 2000 : 8660,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Button variant="contained" type="submit" color="primary" className={classes.button}>
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default Create;
