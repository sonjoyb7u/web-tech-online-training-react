import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Form, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CartList from '../../components/CartList/CartList';
import Course from '../../components/Course/Course';
import MiniBanner from '../../components/MiniBanner/MiniBanner';
import './AllCourses.css'

const AllCourses = () => {
    const history = useHistory()
    const [courses, setCourses] = useState([])
    const [searchCourses, setSearchCourses] = useState([])

    useEffect(() => {
        const url = '/courses.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setCourses(data)
            setSearchCourses(data)
        })

    }, [])
    // console.log(courses);

    const handleReviewOrder = () => {
        history.push('/review-order')
    }

    const handleSearchCourse = (event) => {
        const searchValue = event.target.value;
        const findSearchCourse = courses.filter(course => course.name.toLowerCase().includes(searchValue.toLowerCase()))
        setSearchCourses(findSearchCourse)
    }
    const handleSearchBtn = (event) => {
        event.preventDefault();
        // const searchValue = event.target.value;
        // console.log(searchValue);
        // const findSearchCourse = courses.filter(course => course.name.toLowerCase().includes(searchValue.toLowerCase()))
        // setSearchCourses(findSearchCourse)
    }
    return (
        <div className="courses">
            <Container>
                <Row>
                    <Col>
                        <MiniBanner title="All Courses"></MiniBanner>
                    </Col>
                </Row>
                <Row>
                    <div className="mt-4">
                        <Form className="d-flex justify-content-around align-items-center mx-auto w-50">
                            <FormControl
                                type="search"
                                placeholder="Search favorite course & enroll now ..."
                                className="mr-2 btn-outline-transparent h-100"
                                aria-label="Search"
                                onChange={handleSearchCourse}
                            />
                            <Button onClick={handleSearchBtn} className="course-search-btn">Search</Button>
                        </Form>
                    </div>
                </Row>
                <Row>
                   <section className="course-list mt-4">
                       <Row className="mb-5">
                            <Col xs={12} md={9}>
                                <Row xs={1} md={3} className="g-4">
                                    {
                                        searchCourses?.map(course => <Course key={course.key} course={course}></Course>)
                                    }
                                </Row>
                            </Col>
                            <Col xs={6} md={3}>
                                <CartList>
                                    <Button onClick={handleReviewOrder} className="review-order-btn mx-auto">Review For Order</Button>
                                </CartList>
                            </Col>
                       </Row>
                   </section>
                </Row>
            </Container>
        </div>
    );
};

export default AllCourses;