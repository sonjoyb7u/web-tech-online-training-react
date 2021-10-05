import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CartList from '../../components/CartList/CartList';
import MiniBanner from '../../components/MiniBanner/MiniBanner';
import './ReviewOrder.css'

const ReviewOrder = () => {
    const history = useHistory()

    const handlePlaceOrder = () => {
        history.push('/place-order')
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <MiniBanner title="Review Order"></MiniBanner>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="meal" xs={12} md={8}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={6} md={4}>
                        <CartList>
                            <Button onClick={handlePlaceOrder} className="place-order btn-sm">Place Order</Button>
                        </CartList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReviewOrder;