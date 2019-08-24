import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Create from '../Create';

const Container = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <Grid container >
            <Create />
        </Grid>
    )
}

export default Container;
