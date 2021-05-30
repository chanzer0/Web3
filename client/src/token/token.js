import { crowdsaleDeployAbi, crowdsaleAbi, tokenAbi } from '../abi.ts';
import Web3 from 'web3';
import { useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';

const web3 = new Web3(Web3.givenProvider);
const crowdSaleDeployAddr = '0xA09D57a953D262a2541C49E5FD6AF0C9c710102C';
const contract = new web3.eth.Contract(crowdsaleDeployAbi, crowdSaleDeployAddr);

const Token = () => {
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

    const mintFunds = async (e) => {
        e.preventDefault();
        const contract = new web3.eth.Contract(crowdsaleAbi, crowdsaleAddress);
        const accounts = await window.ethereum.enable();
        const account = accounts[0];

        const value = web3.utils.toBN(web3.utils.toWei('1', 'ether'));
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
        const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
        const updatedBalance = await contract.methods.balanceOf(account).call();
        console.log(updatedBalance);
        setBalance(updatedBalance / 10 ** 18);
    };

    return (
        <Container>
            <Button onClick={mintFunds} type="button">
                Mint $CHAN
            </Button>
            <h5>Crowdsale Address: {crowdsaleAddress}</h5>
            <h5>Token Address: {tokenAddress}</h5>
            <h5>Balance: {balance} $CHAN</h5>
        </Container>
    );
};

export default Token;
