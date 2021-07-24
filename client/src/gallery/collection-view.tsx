import config from 'config-service';
import React, { useEffect } from 'react';
import Masonry from 'react-masonry-component';
import useAxios from 'axios-hooks';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardImg,
    CardTitle,
    Col,
    Container,
    Row,
} from 'reactstrap';

export enum CollectionType {
    Nature = 1,
    Street = 2,
}

export interface Image {
    id: number;
    name: string;
    url: string;
    collecionId: number;
}

const CollectionView = (props: any) => {
    const [{ data: images }] = useAxios(
        `${config.coreApiUrl}/images/${props.match.params.id}`
    );

    useEffect(() => {
        if (images != null) {
            console.log(images);
        }
    }, [images]);

    return (
        <Container>
            <Row className="mt-3" style={{ textAlign: 'center' }}>
                <h2>{CollectionType[props.match.params.id]}</h2>
            </Row>
            <Row>
                <Col sm={12} className="my-2 d-flex justify-content-center">
                    <Masonry
                        className={'grid'}
                        elementType={'div'}
                        options={{
                            fitWidth: true,
                            columnWidth: 600,
                            gutter: 35,
                        }}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                    >
                        {(images || []).map((image: Image) => (
                            <Card
                                className="align-items-center mb-4"
                                key={image.id}
                            >
                                <CardImg
                                    top
                                    style={{ width: 600 }}
                                    src={image.url}
                                />
                                <CardHeader
                                    className="w-100"
                                    style={{
                                        backgroundImage: 'url(corner-4.png)',
                                        backgroundSize: 'cover',
                                        boxShadow:
                                            '0 7px 14px 0 rgb(59 65 94 / 1%), 0 3px 6px 0 rgb(0 0 0 / 7%)',
                                    }}
                                >
                                    <Row className="d-flex align-items-center justify-content-around">
                                        <CardTitle className="mb-0">
                                            {image.name}
                                        </CardTitle>
                                    </Row>
                                </CardHeader>
                                <CardBody></CardBody>
                            </Card>
                        ))}
                    </Masonry>
                </Col>
            </Row>
        </Container>
    );
};
export default CollectionView;
