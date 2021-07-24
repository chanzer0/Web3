import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TableBody, TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { Table } from '@material-ui/core';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Container,
    Row,
} from 'reactstrap';

const About = () => {
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
                                    href={
                                        'https://opensea.io/assets/0x1a92f7381b9f03921564a437210bb9396471050c/8048'
                                    }
                                >
                                    <img
                                        src={'cat.png'}
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
                                    ecosystem and its intersection with art and
                                    creativity. In it, I hope to provide basic
                                    information about the decentralized world,
                                    as well as let you explore the art I like to
                                    create as a hobbyist photographer.
                                </Col>
                            </Row>
                            <hr className="my-4" />
                            <Row className="d-flex">
                                <Col sm={4}>
                                    <small>
                                        <a
                                            style={{ color: 'inherit' }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://twitter.com/chan0_"
                                        >
                                            Twitter
                                            <FontAwesomeIcon
                                                className="ml-1"
                                                icon={faExternalLinkAlt}
                                            />
                                        </a>
                                    </small>
                                </Col>
                                <Col sm={4}>
                                    <small>
                                        <a
                                            style={{ color: 'inherit' }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://github.com/chanzer0"
                                        >
                                            Github
                                            <FontAwesomeIcon
                                                className="ml-1"
                                                icon={faExternalLinkAlt}
                                            />
                                        </a>
                                    </small>
                                </Col>
                                <Col sm={4}>
                                    <small>
                                        <a
                                            style={{ color: 'inherit' }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href="https://opensea.io/chanzero-vault"
                                        >
                                            OpenSea
                                            <FontAwesomeIcon
                                                className="ml-1"
                                                icon={faExternalLinkAlt}
                                            />
                                        </a>
                                    </small>
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
                                    (non-interchangeable).{' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://medium.com/linum-labs/ethereum-tokens-explained-ffe9df918008"
                                    >
                                        Read More About This Topic
                                    </a>
                                </Col>
                                <Col sm={6}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                    className="pt-0"
                                                    style={{ color: '#9da9bb' }}
                                                >
                                                    Token Type
                                                </TableCell>
                                                <TableCell
                                                    className="pt-0"
                                                    align="left"
                                                    style={{ color: '#9da9bb' }}
                                                >
                                                    Description
                                                </TableCell>
                                                <TableCell
                                                    className="pt-0"
                                                    align="left"
                                                    style={{ color: '#9da9bb' }}
                                                >
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
                                                    style={{ color: '#9da9bb' }}
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
                                                <TableCell
                                                    style={{ color: '#9da9bb' }}
                                                    align="left"
                                                >
                                                    Fungible, Divisible
                                                </TableCell>
                                                <TableCell
                                                    style={{ color: '#9da9bb' }}
                                                    align="left"
                                                >
                                                    $SUSHI, $CZT
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    style={{ color: '#9da9bb' }}
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
                                                <TableCell
                                                    style={{ color: '#9da9bb' }}
                                                    align="left"
                                                >
                                                    Non-Fungible, Non-Divisible
                                                </TableCell>
                                                <TableCell
                                                    style={{ color: '#9da9bb' }}
                                                    align="left"
                                                >
                                                    CryptoPunks
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    align="left"
                                                    component="th"
                                                    scope="row"
                                                    style={{ color: '#9da9bb' }}
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
                                                <TableCell
                                                    style={{ color: '#9da9bb' }}
                                                    align="left"
                                                >
                                                    Fungible or Non-Fungible
                                                </TableCell>
                                                <TableCell
                                                    style={{ color: '#9da9bb' }}
                                                    align="left"
                                                >
                                                    Ethlings Wearables
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row>
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
                                            You will need to use MetaMask to
                                            store, receive, and transfer funds
                                            and interact with the smart
                                            contracts on this website. MetaMask
                                            is a secure browser extension that
                                            most dApps use to interact. To learn
                                            how to install and use MetaMask, I
                                            recommend{' '}
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
                                            Now that you have a MetaMask set up
                                            and connected - you are free to
                                            interact with any of the contracts
                                            found on this website. On the
                                            "Gallery" page, you will find my
                                            work that is minted on my own custom
                                            smart contract. This smart contract
                                            means the artwork you're buying is
                                            provably yours and that the piece is
                                            authentic!
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
