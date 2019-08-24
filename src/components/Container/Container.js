import React, { useState } from 'react';
import Create from '../Create';
import Layout from '../Layout';
import Details from '../Details';

const Container = () => {
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e) => {
        console.log('hello');
        console.log(e.target.value)
        setSubmitted(!submitted);
    }

    return (
        <Layout>
            {!submitted ? 
                <Create onSubmit={onSubmit} /> :
                <Details />}
        </Layout>
    )
}

export default Container;
