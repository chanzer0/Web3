import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TableBody, TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { Table } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Container,
    Row,
} from 'reactstrap';

const hrefMap: any = {
    'bonsai.gif':
        'https://opensea.io/assets/0xec9c519d49856fd2f8133a0741b4dbe002ce211b/1652',
    'bonsai2.gif':
        'https://opensea.io/assets/0xec9c519d49856fd2f8133a0741b4dbe002ce211b/8555',
    'ape.png':
        'https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/542',
    'ape2.png':
        'https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/9381',
    'meebit.png': 'https://meebits.larvalabs.com/meebits/detail?index=19173',
    'frammenti.png': 'https://api.artblocks.io/generator/72000202',
};
const sources = [
    'bonsai.gif',
    'bonsai2.gif',
    'ape.png',
    'ape2.png',
    'meebit.png',
    'frammenti.png',
];

const About = () => {
    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        const random = Math.floor(Math.random() * sources.length);
        setImgSrc(sources[random]);
    }, []);

    setInterval(() => {
        const random = Math.floor(Math.random() * sources.length);
        setImgSrc(sources[random]);
    }, 15 * 1000);

    return (
        <Container>
            <Row className="my-5">
                <Col sm={3}>
                    <Card className="align-items-center">
                        <CardHeader
                            className="w-100"
                            style={{
                                height: '240px',
                                backgroundImage: 'url(corner-4.png)',
                                backgroundSize: 'cover',
                                boxShadow:
                                    '0 7px 14px 0 rgb(59 65 94 / 1%), 0 3px 6px 0 rgb(0 0 0 / 7%)',
                            }}
                        />
                        <CardBody className="w-100 justify-content-center">
                            <div
                                style={{
                                    background: 'white',
                                    marginTop: '-240px',
                                    marginLeft: '46px',
                                    marginBottom: '50px',
                                    borderRadius: '100px',
                                    height: '200px',
                                    width: '200px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow:
                                        '0 0px 10px 0 rgb(59 65 94 / 10%), 0 0px 10px 0 rgb(0 0 0 / 20%)',
                                }}
                            >
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={hrefMap[imgSrc]}
                                >
                                    <img
                                        src={imgSrc}
                                        alt="a"
                                        height="190px"
                                        width="190px"
                                        style={{
                                            borderRadius: '100px',
                                        }}
                                    />
                                </a>
                            </div>
                            <Row>
                                <Col sm={12}>
                                    <h5>Name</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>chanZERO</Col>
                            </Row>
                            <Row className="mt-4">
                                <Col sm={12}>
                                    <h5>Contact</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <a
                                        style={{ color: 'inherit' }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="mailto: chan@chanzero.io"
                                    >
                                        chan@chanzero.io
                                    </a>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col sm={12}>
                                    <h5>Description</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    My name is Sean, but most on the internet
                                    know me as chanZERO, or just chan for short.
                                    I'm a full-time developer who is passionate
                                    about the new and flourishing decentralized
                                    world. <br />
                                    <br /> This website is a manifestation of my
                                    passion for engineering and the Ethereum
                                    ecosystem. In it, I hope to provide basic
                                    information about the decentralized world,
                                    as well as let you interact with it through
                                    a test network, risk-free. <br />
                                    <br /> In my leisure time, I enjoy exploring
                                    new NFT projects and dApps or playing games
                                    like chess, geoguessr, and the occasional
                                    FPS.
                                </Col>
                            </Row>
                            <hr style={{ marginTop: '30px' }} />
                            <Row className="d-flex">
                                <Col sm={4}>
                                    <h6>
                                        <a
                                            style={{ color: 'inherit' }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://twitter.com/chan0_"
                                        >
                                            Twitter
                                            <FontAwesomeIcon
                                                className="ml-2"
                                                icon={faExternalLinkAlt}
                                            />
                                        </a>
                                    </h6>
                                </Col>
                                <Col sm={4}>
                                    <h6>
                                        <a
                                            style={{ color: 'inherit' }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://github.com/chanzer0"
                                        >
                                            Github
                                            <FontAwesomeIcon
                                                className="ml-2"
                                                icon={faExternalLinkAlt}
                                            />
                                        </a>
                                    </h6>
                                </Col>
                                <Col sm={4}>
                                    <h6>
                                        <a
                                            style={{ color: 'inherit' }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://opensea.io/FC3308"
                                        >
                                            OpenSea
                                            <FontAwesomeIcon
                                                className="ml-2"
                                                icon={faExternalLinkAlt}
                                            />
                                        </a>
                                    </h6>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm={9}>
                    <Card className="align-items-center">
                        <CardHeader
                            className="w-100"
                            style={{
                                backgroundImage: 'url(corner-4.png)',
                                backgroundSize: 'cover',
                                boxShadow:
                                    '0 7px 14px 0 rgb(59 65 94 / 1%), 0 3px 6px 0 rgb(0 0 0 / 7%)',
                            }}
                        >
                            <CardTitle className="mb-0">About</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col sm={12}>
                                    <h5>What is a "Token"?</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    A "token" is a term broadly used to refer to
                                    assets on the Ethereum blockchain. The most
                                    common token type is ERC-20 — it's what most
                                    people think of when they think of
                                    "cryptocurrency". Other common token types
                                    include ERC-721, which is very similar to
                                    ERC-20 — but whereas ERC-20 tokens are
                                    indistinguishable (and therefore
                                    interchangeable) from one another, ERC-721
                                    tokens are purposely built such that each
                                    one is unique and therefore non-fungible
                                    (non-interchangeable) even though they may
                                    be minted and share a common contract.{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://medium.com/linum-labs/ethereum-tokens-explained-ffe9df918008"
                                    >
                                        Read More About This Topic
                                    </a>
                                </Col>
                                <Col sm={6} style={{ top: '-42px' }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    Token Type
                                                </TableCell>
                                                <TableCell align="left">
                                                    Description
                                                </TableCell>
                                                <TableCell align="left">
                                                    Example
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    align="left"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: 'inherit',
                                                        }}
                                                        href="https://eips.ethereum.org/EIPS/eip-20"
                                                    >
                                                        ERC-20 ↪
                                                    </a>
                                                </TableCell>
                                                <TableCell align="left">
                                                    Fungible, Divisible
                                                </TableCell>
                                                <TableCell align="left">
                                                    $SUSHI, $CZT
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    align="left"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: 'inherit',
                                                        }}
                                                        href="https://eips.ethereum.org/EIPS/eip-721"
                                                    >
                                                        ERC-721 ↪
                                                    </a>
                                                </TableCell>
                                                <TableCell align="left">
                                                    Non-Fungible, Non-Divisible
                                                </TableCell>
                                                <TableCell align="left">
                                                    CryptoPunks
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    align="left"
                                                    component="th"
                                                    scope="row"
                                                >
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            color: 'inherit',
                                                        }}
                                                        href="https://eips.ethereum.org/EIPS/eip-1155"
                                                    >
                                                        ERC-1155 ↪
                                                    </a>
                                                </TableCell>
                                                <TableCell align="left">
                                                    Fungible or Non-Fungible
                                                </TableCell>
                                                <TableCell align="left">
                                                    Ethlings Wearables
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col sm={12}>
                                    <h5>What Are Tokens Used For?</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    The use-cases for tokens on the Ethereum
                                    blockchain are nearly endless, and too much
                                    to go into in this short briefing. Different
                                    token types can provide different use cases.
                                    For example, ERC-20 tokens are used for
                                    deploying smart contracts, which are
                                    immutable pieces of logic stored on the
                                    blockchain. ERC-20 tokens are also useful in
                                    representing ownership of money in
                                    decentralized financial platforms, voting in
                                    governance protocols, and the most simple —
                                    transfer of funds from one entity to
                                    another. ERC-721 tokens are great at proving
                                    ownership of a specific asset, due to their
                                    non-fungibility. This makes them great for
                                    digital art, which can both prove ownership,
                                    authenticity, AND store the containing art
                                    all in the same token/contract.{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://blog.enjincoin.io/erc-1155-the-final-token-standard-on-ethereum-a83fce9f5714"
                                    >
                                        ERC-1155
                                    </a>{' '}
                                    combines the fungibility of ERC-20 with the
                                    non-fungibility of ERC-721. This use-case is
                                    great for on-chain video games. For example,
                                    a user's in-game character could be a
                                    non-fungible avatar, while also having
                                    fungible tokens that represent armor,
                                    clothing, styles, attributes, etc... that
                                    can be applied or removed with ease.{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://medium.com/morpheus-labs/decentralized-applications-dapps-explained-5a67c6763ffa"
                                    >
                                        Read More About This Topic
                                    </a>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col sm={12}>
                                    <h5>Smart Contracts? Huh?</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    Smart contracts are the backbone of the
                                    Ethereum ecosystem. The beauty of them is
                                    that they're completely transparent,
                                    decentralized, and governed only by their
                                    contained logic. Since anybody can interact
                                    with any smart contract from anywhere, this
                                    makes them less susceptible to corruption or
                                    bad actors when compared to the traditional
                                    world where contracts often have
                                    intermediaries (lawyers, bankers, notaries,
                                    etc...) who can taint, corrupt or otherwise
                                    provide layers of friction not present in
                                    the digital world.{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://medium.com/swlh/what-are-smart-contracts-6c13f6c725d7"
                                    >
                                        Read More About This Topic
                                    </a>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Col sm={12}>
                                    <h5>How Do I Interact With The Website?</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <ol type="1">
                                        <li>
                                            As with Ethereum mainnet, you will
                                            need to use MetaMask to store,
                                            receive, and transfer funds and
                                            interact with smart contracts.
                                            MetaMask is a secure browser
                                            extension that most dApps use to
                                            interact. To learn how to install
                                            and use MetaMask, I reccommend{' '}
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://medium.com/publicaio/a-complete-guide-to-using-metamask-updated-version-cd0d6f8c338f"
                                            >
                                                this article
                                            </a>
                                            .
                                        </li>
                                        <li>
                                            All interactions on this website are
                                            done through the{' '}
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://medium.com/swlh/what-are-smart-contracts-6c13f6c725d7"
                                            >
                                                Görli Testnet
                                            </a>
                                            . To use the Görli Testnet, you will
                                            have to select it in the list of
                                            networks in your MetaMask. This
                                            network behaves in the same exact
                                            manner as the Ethereum mainnet,
                                            giving you good experience in using
                                            Ethereum without the risk of losing
                                            rela money. This means the funds you
                                            receive and spend are NOT "real", in
                                            the sense that they are not on the
                                            Ethereum Mainnet. I would reccommend
                                            creating a new address in MetaMask
                                            solely for use on this and any other
                                            testnet. You can request "faucet
                                            funds" to your wallet at any of the
                                            following websites:
                                            <ul>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://goerli-faucet.slock.it/"
                                                    >
                                                        Simple Faucet
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://faucet.goerli.mudit.blog/"
                                                    >
                                                        Social Faucet
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Now that you have a MetaMask set up
                                            and connected to the Görli Testnet,
                                            with funds from a faucet, you are
                                            free to interact with any of the
                                            contracts found on this website. The
                                            "Token" page will allow you to mint
                                            my custom ERC-20 token,
                                            "ChanZeroToken ($CZT)". On the "NFT"
                                            page you can mint a one-of-a-kind
                                            generative NFT. These are cool
                                            because the NFT is made
                                            algorithmically <i>during</i> the
                                            process of minting. It's provably
                                            yours, and unique from all other
                                            NFTs!
                                        </li>
                                    </ol>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default About;
