import { TableRow } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { Table } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { Card, CardBody, CardHeader, CardTitle } from 'reactstrap';

export interface IRecentMintsProps {
    data: any[];
}

const RecentMints = (props: IRecentMintsProps) => {
    return (
        <Card className="mt-5 mb-10 align-items-center">
            <CardHeader
                className="w-100"
                style={{
                    backgroundImage: 'url(corner-4.png)',
                    backgroundSize: 'cover',
                    boxShadow:
                        '0 7px 14px 0 rgb(59 65 94 / 1%), 0 3px 6px 0 rgb(0 0 0 / 7%)',
                }}
            >
                <CardTitle className="mb-0">Recent Mints</CardTitle>
            </CardHeader>
            <CardBody className="w-100 p-0">
                {props.data && (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Address</TableCell>
                                <TableCell align="right">Amount $ETH</TableCell>
                                <TableCell align="right">Amount $CZT</TableCell>
                                <TableCell align="right">Timestamp</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data.map((row) => (
                                <TableRow key={row.timestamp}>
                                    <TableCell component="th" scope="row">
                                        {row.address}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.amountEth}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.amountCzt}
                                    </TableCell>
                                    <TableCell align="right">
                                        {moment(
                                            moment.utc(row.timestamp).toDate()
                                        )
                                            .local()
                                            .format('MMMM Do YYYY, h:mm:ss a')}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardBody>
        </Card>
    );
};

export default RecentMints;
