import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState } from 'react';
import { crowdsaleAbi, tokenAbi, crowdsaleDeployAbi } from './abi';
import {
    Button,
    CardTitle,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap';
import Row from 'reactstrap/es/Row';
import Web3 from 'web3';

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

    useEffect(() => {
        const getCrowdsaleAddress = async () => {
            const result = await contract.methods.getCrowdsaleAddress().call();
            setCrowdsaleAddress(result);
        };
        const getTokenAddress = async () => {
            const result = await contract.methods.getTokenAddress().call();
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

        const value = web3.utils.toBN(
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
        console.log(result);
        getBalance();
    };

    const getBalance = async () => {
        const accounts = await window.ethereum.enable();
        const account = accounts[0];
        // @ts-ignore
        const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
        const updatedBalance = await contract.methods.balanceOf(account).call();
        console.log(updatedBalance);
        setBalance(updatedBalance / 10 ** 18);
    };

    const updateMintAmount = (e: any) => {
        console.log(!isNaN(+e.target.value));
        if (!isNaN(+e.target.value)) {
            setEthAmount(+e.target.value);
        }
    };

    return (
        <Fragment>
            <img src="token.png" height="200" width="200" alt="" />
            <Row className="d-flex justify-content-around py-3 w-50">
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
        </Fragment>
    );
};

export default MintToken;
