import { Card, CardHeader, CardTitle } from 'reactstrap';
import { Bar, BarChart, XAxis, YAxis, Tooltip } from 'recharts';

export interface IBalanceStatsProps {
    data: any[];
}

const BalanceStats = (props: IBalanceStatsProps) => {
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
                data={props.data}
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

export default BalanceStats;
