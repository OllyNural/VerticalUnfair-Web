import React, { useState } from 'react';
import Create from '../Create';
import Layout from '../Layout';
import Details from '../Details';
import { Grid } from '@material-ui/core';

const Container = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e) => {
        console.log('hello');
        console.log(e.target.value)
        setSubmitted(!submitted);
    }

    return (
        <Layout>
            <Grid container justify="center">
                {!submitted ? 
                    <Create onSubmit={onSubmit} /> :
                    <Details />}
            </Grid>
        </Layout>
    )
}

export default Container;
