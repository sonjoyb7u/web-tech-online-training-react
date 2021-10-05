import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import CartList from '../../components/CartList/CartList';
import MiniBanner from '../../components/MiniBanner/MiniBanner';
import { getEnrollCourseFromLocalStorageDb } from '../../utilities/mydb';
import './ReviewOrder.css'

const ReviewOrder = (props) => {
    const history = useHistory()
    const handlePlaceOrder = () => {
        history.push('/place-order')
    }

    const [courses, setCourses] = useState([]);
    const [enrollCourse, setEnrollCourse] = useState([]);

    useEffect(() => {
        const url = '/courses.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCourses(data)
        })

    }, [])

    useEffect(() => {
        if (courses.length) {
            // get saved local storage data ... 
            const savedEnrollCourse = getEnrollCourseFromLocalStorageDb();
            const storedEnrollCourse = [];
            for (const key in savedEnrollCourse) {
                const matchedEnrollCourse = courses.find(course => course.key === key);
                if (matchedEnrollCourse) {
                    const quantity = savedEnrollCourse[key];
                    matchedEnrollCourse.quantity = quantity;
                    storedEnrollCourse.push(matchedEnrollCourse);
                }
            }
            setEnrollCourse(storedEnrollCourse);
        }
    }, [courses])

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
                                    <th>Course Name</th>
                                    <th>Instructor</th>
                                    <th>Course Price</th>
                                    <th>Video's</th>
                                    <th>Started At</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)</td>
                                    <td>Andrei Neagoie, Yihua Zhang</td>
                                    <td>$98</td>
                                    <td>55</td>
                                    <td>07-12-2021</td>
                                    <td><span class="badge bg-info">Pending</span></td>
                                    <td><Button className="btn btn-danger btn-sm">Remove</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={6} md={4}>
                        <CartList enrollCourse={enrollCourse}>
                            <Button onClick={handlePlaceOrder} className="place-order btn-sm">Place Order</Button>
                        </CartList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ReviewOrder;