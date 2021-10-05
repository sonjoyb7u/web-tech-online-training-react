import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import CartList from '../../components/CartList/CartList';
import MiniBanner from '../../components/MiniBanner/MiniBanner';
import ReviewCourseItem from '../../components/ReviewCourseItem/ReviewCourseItem';
import { clearEnrollCourse, getEnrollCourseFromLocalStorageDb } from '../../utilities/mydb';
import './ReviewOrder.css'

const ReviewOrder = (props) => {
    const history = useHistory()
    const handlePlaceOrder = () => {
        history.push('/place-order')
    }

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const url = '/courses.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCourses(data)
        })

    }, [])

    const [enrollCourse, setEnrollCourse] = useState([]);
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

    const handleRemoveCourseItem = (key) => {
        const newEnrollCourseItem = enrollCourse.filter(course => course.key !== key)
        setEnrollCourse(newEnrollCourseItem)
        clearEnrollCourse(key)
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
                                {
                                   enrollCourse.map(course => <ReviewCourseItem key={course.key} enrollCourse={course} handleRemoveCourseItem={handleRemoveCourseItem}></ReviewCourseItem>) 
                                }
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