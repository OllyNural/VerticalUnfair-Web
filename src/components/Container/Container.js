import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Create from '../Create';
import Layout from '../Layout';

const Container = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <Layout>
            <Grid container >
                <Create />
            </Grid>
        </Layout>
    )
}

export default Container;
