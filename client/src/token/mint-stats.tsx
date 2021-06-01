import useAxios from 'axios-hooks';
import config from 'config-service';
import { useEffect } from 'react';
import { Card, CardTitle } from 'reactstrap';

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
        <Card
            style={{
                backgroundImage: 'url(corner-4.png)',
                backgroundSize: 'cover',
                width: '100%',
                height: '33.33334%',
            }}
        >
            <CardTitle>Minting Mints</CardTitle>
        </Card>
    );
};

export default MintStats;
