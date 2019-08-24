import React from 'react';
import { makeStyles, Card, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        // backgroundColor: theme.palette.primary.secondary
    },
}))

/**
 * Code that calculates the membership fee
 * Formula is: <fee> + VAT
 * 
 * VAT = 20% (of something, assuming rent per week)
 * 
 * If fixedMembershipFee is set, <fee> = fixedMembership fee
 * Else <fee> is equal to 1 weeks rent OR £120, whichever is greater. 
 * 
 * @param {fixedMembershipFee, rentType, rentValue} param0 
 */
const MembershipFee = ({ fixedMembershipFee, rentType, rentValue }) => {
    const classes = useStyles();

    let membershipFee

    if (fixedMembershipFee) {
        membershipFee = fixedMembershipFee;
    } else {
        // Going to use/assume 4.34524 weeks per month (bc Google told me so)
        rentValue = rentType == 'week' ? rentValue : (rentValue / 4.34524)
        if (rentValue < 120) rentValue = 120
        membershipFee = rentValue
    }

    membershipFee = Math.floor(membershipFee + (0.2 * membershipFee))
    return (
        <Box component='div' className={classes.container} >
            <Typography variant='h6'>
                Your membership fee: £{membershipFee}
            </Typography>
        </Box>
    )
}

export default MembershipFee;