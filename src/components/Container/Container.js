import React, { useState, useEffect, useRef } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Create from '../Create';
import Layout from '../Layout';
import Details from '../Details';

import callApi from '../../utils/callApi';

const useStyles = () => makeStyles({
    CircularProgress: {
        marginTop: '200px',
    }
})

// I am assuming that we are passing in a singular client ID
// So that we can do a GET on /config/:clientId
// Otherwise I don't understand how a GET all /config/ will help us get a single value for fixed membership fee
const CLIENT_ID = 1;

const Container = () => {
    const classes = useStyles();
    const [data, setData] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(
        () => {
            (async () => {
                const { data } = await callApi({
                    endpoint: `config/${CLIENT_ID}`,
                    method: 'GET',
                });
                setData(data)
            })();
        },
        [],
    );
    const onSubmit = async (data) => {
        const res = await callApi({
            endpoint: `flatbond`,
            options: {
                method: 'POST',
                data: {
                    params: {
                        ...data,
                        clientId: CLIENT_ID
                    }
                }
            }
        });
        if (res.status === 201) {
            setSubmitted(true);
        }
    }

    return (
        <Layout>
            <Grid container justify="center">
                {data ?
                    (!submitted ?
                        <Create data={data} onSubmit={onSubmit} /> :
                        <Details />) :
                    <CircularProgress className={classes.CircularProgress} />
                }
            </Grid>
        </Layout>
    )
}

export default Container;
