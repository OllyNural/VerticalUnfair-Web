import React, { useEffect, useRef } from 'react';
import { Grid, makeStyles, Button, Slider, Input, Radio, Card, Box, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { MembershipFee, convertMonthToWeek } from '../../utils/calcMembershipFee';

const useStyles = makeStyles(theme => ({
    formGridContainer: {
        width: '50%',
        paddingTop: '50px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    formContainer: {
        width: '100%',
    },
    cardContainer: {
        padding: '40px',
        width: '100%',
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

const Create = ({ data, onSubmit }) => {
    const classes = useStyles();

    const [rentType, setRentType] = React.useState('week');
    const [rentValue, setRentValue] = React.useState(400);
    const [membershipFee, setMembershipFee] = React.useState('');
    const [postcode, setPostcode] = React.useState('');

    useEffect(() => {
        setMembershipFee(MembershipFee({
            fixedMembershipFee: data.fixedMembershipFee,
            fixedMembershipFeeAmount: data.fixedMembershipFeeAmount,
            rentType,
            rentValue,
        }))
    }, [rentType, rentValue, membershipFee])

    // https://material-ui.com/components/slider/
    const handleSliderChange = (event, newValue) => {
        setRentValue(newValue);
    };

    const handleSliderInputChange = event => {
        setRentValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleRadioChange = (event) => {
        setRentType(event.target.value);
    };

    const handlePostcodeChange = event => {
        setPostcode(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // rent, membership fee, postcode, clientid
        // if morentType is month, convert to week
        let rent = rentType === 'month' ? convertMonthToWeek(rentValue) : rentValue
        onSubmit({
            rent: rent * 100,
            membershipFee: membershipFee * 100,
            postCode: postcode
        })
    }

    return (
        <Grid item container className={classes.formGridContainer}>
            <Card className={classes.cardContainer} >
                <form onSubmit={handleSubmit} className={classes.formContainer}>
                    <Grid item xs={12} >
                        <Typography variant='h4' className={classes.rentInputTitle} >Rent Input</Typography>
                        <Grid container justify="space-between" className={classes.radioBoxContainer} >
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
                                £<Input
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
                        <Box component='div' className={classes.container} >
                            <Typography variant='h6'>
                                Your membership fee: £{membershipFee}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="postcode-input"
                            label="Postcode"
                            className={classes.textField}
                            value={postcode}
                            onChange={handlePostcodeChange}
                            margin="normal"
                        />
                    </Grid>
                    <Grid container item xs={12} justify="flex-end" >
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
