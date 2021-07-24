import config from 'config-service';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    CardDeck,
    CardHeader,
    CardImg,
    CardTitle,
    Col,
    Container,
    Row,
} from 'reactstrap';
import { CollectionType } from './collection-view';
import useAxios from 'axios-hooks';

export interface Collection {
    id: number;
    collectionName: string;
    collectionId: CollectionType;
    headerImageUrl: string;
}

const Gallery = () => {
    const [{ data: collections }] = useAxios(
        `${config.coreApiUrl}/collections`
    );

    useEffect(() => {
        if (collections != null) {
            console.log(collections);
        }
    }, [collections]);

    return (
        <Container>
            <Row>
                <Col sm={12} className="my-4 d-flex justify-content-center">
                    <CardDeck>
                        {(collections || []).map((collection: Collection) => {
                            return (
                                <Card key={collection.collectionId}>
                                    <Link
                                        to={{
                                            pathname: `/collection/${collection.collectionId}`,
                                        }}
                                    >
                                        <CardImg
                                            top
                                            style={{ width: 400 }}
                                            src={collection.headerImageUrl}
                                        />
                                    </Link>
                                    <CardHeader
                                        className="w-100"
                                        style={{
                                            backgroundImage:
                                                'url(corner-4.png)',
                                            backgroundSize: 'cover',
                                            boxShadow:
                                                '0 7px 14px 0 rgb(59 65 94 / 1%), 0 3px 6px 0 rgb(0 0 0 / 7%)',
                                        }}
                                    >
                                        <Row className="d-flex align-items-center justify-content-around">
                                            <CardTitle className="mb-0">
                                                {collection.collectionName}
                                            </CardTitle>
                                        </Row>
                                    </CardHeader>
                                </Card>
                            );
                        })}
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
};

export default Gallery;
