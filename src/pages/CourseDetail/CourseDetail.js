import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUser, faBook } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Container, Button, Row } from 'react-bootstrap';
import CartList from '../../components/CartList/CartList';
import './CourseDetail.css'
import MiniBanner from '../../components/MiniBanner/MiniBanner';
import { useHistory, useParams } from 'react-router';
import { getEnrollCourseFromLocalStorageDb, removeFromDb } from '../../utilities/mydb';

const CourseDetail = () => {
    const faArrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />
    const faUserIcon = <FontAwesomeIcon icon={faUser} />
    const faLessonIcon = <FontAwesomeIcon icon={faBook} />
    const {courseId} = useParams()
    // console.log(courseId);
    
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const url = '/courses.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => setCourses(data))

    }, [])

    const [course, setCourse] = useState({})
    useEffect(() => {
        const matchedCourse = courses.find(course => course.key === courseId)
        setCourse(matchedCourse)

    }, [courses])
    // console.log(course);

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

    const history = useHistory()
    const handleReviewOrder = () => {
        history.push('/review-order')
    }

    return (
        <div className="course">
            <Container>
                <Row>
                    <Col>
                        <MiniBanner title="Course details"></MiniBanner>
                    </Col>
                </Row>
                <Row className="mt-5 mb-4">
                    <Col className="course" xs={12} sm={12} md={8} lg={8}>
                        <Row xs={12} sm={12} md={8} lg={8}>
                            <Card className="course-card">
                                <Card.Img variant="top" src={course?.img?.thumb_1} />
                                <Card.Body>
                                    <Card.Title>{course?.name}</Card.Title>
                                    <Card.Text>
                                        <p><strong>Category:</strong> {course?.category}</p>
                                        <p><strong>Instructor:</strong> {course?.instructor}</p>
                                        <p><strong>Price: $</strong>{course?.price}</p>
                                        <p>
                                        <strong>Ranging: </strong>
                                        <Rating
                                        initialRating={course?.star}
                                        emptySymbol="far fa-star half-star"
                                        fullSymbol="fas fa-star full-star"
                                        className="text-center course-rating"
                                        readonly 
                                        />({course?.star})
                                        </p>
                                        <p><strong>What you'll learn: </strong>
                                        <ul>
                                            {
                                                course?.courseContent?.map(content => <li key={content}>{content}</li>)
                                            }
                                        </ul>
                                        
                                        </p>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <span>{faUserIcon} {course?.students}</span>
                                            <span>{faLessonIcon} {course?.lesson}</span>
                                        </div>                                 
                                    </Card.Text>
                                    <Button className="enroll-btn mx-auto btn-sm">Enroll &nbsp; {faArrowRightIcon}</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4}>
                        <CartList enrollCourse={enrollCourse}>
                            <Button  onClick={handleReviewOrder} className="review-order-btn btn-sm mx-auto">Review For Order</Button>
                        </CartList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetail;