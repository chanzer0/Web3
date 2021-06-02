import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import {
    faArrowDown,
    faCoins,
    faRedoAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { crowdsaleAbi, tokenAbi, crowdsaleDeployAbi } from './abi';
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap';
import Row from 'reactstrap/es/Row';
import Web3 from 'web3';
import config from 'config-service';
import useAxios from 'axios-hooks';
import React from 'react';

declare let window: any;

const web3 = new Web3(Web3.givenProvider);
const crowdSaleDeployAddr = '0xA09D57a953D262a2541C49E5FD6AF0C9c710102C';
// @ts-ignore
const contract = new web3.eth.Contract(crowdsaleDeployAbi, crowdSaleDeployAddr);

const MintToken = () => {
    const [ethAmount, setEthAmount] = useState(1);
    const [crowdsaleAddress, setCrowdsaleAddress] = useState('');
    const [tokenAddress, setTokenAddress] = useState('');
    const [balance, setBalance] = useState(0);

    const [, postMint] = useAxios(
        {
            url: `${config.coreApiUrl}/mint`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        },
        { manual: true }
    );

    const [, postBalance] = useAxios(
        {
            url: `${config.coreApiUrl}/balance`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        },
        { manual: true }
    );

    useEffect(() => {
        const getUserBalance = async () => {
            const accounts = await window.ethereum.enable();
            const account = accounts[0];
            // @ts-ignore
            const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
            const updatedBalance = await contract.methods
                .balanceOf(account)
                .call();
            const convertedBalance = updatedBalance / 10 ** 18;
            setBalance(convertedBalance);

            const newBalance = {
                address: account,
                currentBalance: convertedBalance,
                timestamp: new Date(),
            };
            postBalance({ data: newBalance });
        };
        if (tokenAddress !== '' && tokenAddress != null) {
            getUserBalance();
        }
    }, [tokenAddress, postBalance]);

    useEffect(() => {
        const getCrowdsaleAddress = async () => {
            const result = await contract.methods.getCrowdsaleAddress().call();
            console.log(result);
            setCrowdsaleAddress(result);
        };
        const getTokenAddress = async () => {
            const result = await contract.methods.getTokenAddress().call();
            console.log(result);
            setTokenAddress(result);
        };

        getCrowdsaleAddress();
        getTokenAddress();
    }, []);

    const mintFunds = async (e: any) => {
        e.preventDefault();
        // @ts-ignore
        const contract = new web3.eth.Contract(crowdsaleAbi, crowdsaleAddress);
        const accounts = await window.ethereum.enable();
        const account = accounts[0];

        const value: any = web3.utils.toBN(
            web3.utils.toWei(ethAmount.toString(), 'ether')
        );
        const gas = await contract.methods.buyTokens(account).estimateGas({
            from: account,
            value: value,
            gas: 4712388,
        });

        const result = await contract.methods.buyTokens(account).send({
            from: account,
            value: value,
            gas: gas,
        });

        if (result.status === true) {
            const amountEth = +(value / 10 ** 18);
            const amountCzt = +((value * 100) / 10 ** 18);

            updateBalance();

            const newMint = {
                address: account,
                amountEth: amountEth,
                amountCzt: amountCzt,
                timestamp: new Date(),
            };
            postMint({ data: newMint });
        }
    };

    const updateBalance = async () => {
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        // @ts-ignore
        const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
        const updatedBalance = await contract.methods.balanceOf(account).call();
        const convertedBalance = updatedBalance / 10 ** 18;
        setBalance(convertedBalance);

        const newBalance = {
            address: account,
            currentBalance: convertedBalance,
            timestamp: new Date(),
        };
        postBalance({ data: newBalance });
    };

    const updateMintAmount = (e: any) => {
        console.log(!isNaN(+e.target.value));
        if (!isNaN(+e.target.value)) {
            setEthAmount(+e.target.value);
        }
    };

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
                <CardTitle className="mb-0">Mint $CZT</CardTitle>
            </CardHeader>
            <img
                className="mt-3"
                src="token.png"
                height="200"
                width="200"
                alt=""
            />
            <Row className="d-flex justify-content-around py-2 w-50">
                <InputGroup className="px-0 my-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <FontAwesomeIcon icon={faEthereum} />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        type="text"
                        defaultValue={ethAmount}
                        onChange={(e) => updateMintAmount(e)}
                    />
                </InputGroup>
                <Button
                    className="my-1"
                    disabled={isNaN(ethAmount) || ethAmount === 0}
                    onClick={mintFunds}
                >
                    <span className="fa-align-left mr-3">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </span>
                    Exchange
                    <span className="fa-align-right ml-3">
                        <FontAwesomeIcon icon={faArrowDown} />
                    </span>
                </Button>
                <InputGroup className="px-0 my-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <FontAwesomeIcon icon={faCoins} />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        key={ethAmount}
                        type="text"
                        defaultValue={ethAmount * 100}
                    />
                </InputGroup>
            </Row>
            <CardTitle>Your Balance: {balance} $CZT</CardTitle>
        </Card>
    );
};

export default MintToken;
