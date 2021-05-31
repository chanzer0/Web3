import useAxios from 'axios-hooks';
import config from 'config-service';
import React, { Fragment, useEffect } from 'react';

const MintStats = () => {
    const [{ data: mintData }, executeUpdate] = useAxios(
        {
            url: `${config.coreApiUrl}/mint`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
        { manual: true /*, useCache: false */ }
    );

    useEffect(() => {
        executeUpdate();
    }, [executeUpdate]);

    useEffect(() => {
        console.log(mintData);
    }, [mintData]);

    return (
        <Fragment>
            <h3>Stats: </h3>
        </Fragment>
    );
};

export default MintStats;
