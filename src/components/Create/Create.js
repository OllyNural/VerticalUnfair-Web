import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
    },
}));

const Create = () => {
    const classes = useStyles();
    console.log(classes);
    return (
        'Hello'
    )
}

export default Create;
