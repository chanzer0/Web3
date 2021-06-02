import useAxios from 'axios-hooks';
import config from 'config-service';
import React, { useEffect } from 'react';
import { Card, CardHeader, CardTitle } from 'reactstrap';
import { Bar, BarChart, XAxis, YAxis, Tooltip } from 'recharts';

const MintStats = () => {
    const [{ data: balanceData }, executeUpdate] = useAxios(
        {
            url: `${config.coreApiUrl}/balance/top-10`,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        },
        { manual: true /*, useCache: false */ }
    );

    useEffect(() => {
        executeUpdate();
    }, [executeUpdate]);

    useEffect(() => {
        if (balanceData != null) {
            // console.log(balanceData);
        }
    }, [balanceData]);

    return (
        <Card className="mt-5 align-items-center">
            <CardHeader
                className="w-100"
                style={{
                    backgroundImage: 'url(corner-4.png)',
                    backgroundSize: 'cover',
                    boxShadow:
                        '0 7px 14px 0 rgb(59 65 94 / 1%), 0 3px 6px 0 rgb(0 0 0 / 7%)',
                }}
            >
                <CardTitle className="mb-0">Biggest Accounts</CardTitle>
            </CardHeader>

            <BarChart
                className="mt-3"
                width={900}
                height={392}
                data={balanceData}
            >
                <XAxis
                    dataKey="address"
                    interval={0}
                    tickFormatter={(val) =>
                        val.toString().substring(0, 4) + '...'
                    }
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amountCzt" fill="#82ca9d" radius={[5, 5, 0, 0]} />
            </BarChart>
        </Card>
    );
};

export default MintStats;
