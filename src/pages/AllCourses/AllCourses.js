import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Col, Container, Row, Button, Form, FormControl } from 'react-bootstrap';
import CartList from '../../components/CartList/CartList';
import Course from '../../components/Course/Course';
import MiniBanner from '../../components/MiniBanner/MiniBanner';
import { addToDb, getEnrollCourseFromLocalStorageDb } from '../../utilities/mydb';
import './AllCourses.css'

const AllCourses = () => {
    const [courses, setCourses] = useState([])
    const [enrollCourse, setEnrollCourse] = useState([]);
    const [searchCourses, setSearchCourses] = useState([])

    const history = useHistory()
    const handleReviewOrder = () => {
        history.push('/review-order')
    }

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
    }, [courses, searchCourses])

    // input field search course ... 
    const handleSearchCourse = (event) => {
        const searchValue = event.target.value;
        const findSearchCourse = courses.filter(course => course.name.toLowerCase().includes(searchValue.toLowerCase()))
        setSearchCourses(findSearchCourse)
    }
    // button search course ... 
    const handleSearchBtn = (event) => {
        event.preventDefault();
    }

    const handleEnrollCourse = (course) => {
        // console.log(course.key);
        const newEnrollCourse = [...enrollCourse];
        const isCourseExists = enrollCourse.find(enroll => enroll.key === course.key)
        if(isCourseExists) {
            course.quantity += 1
        }
        else {
            course.quantity = 1
            newEnrollCourse.push(course)
        }
        setEnrollCourse(newEnrollCourse)
        // save to local storage (browser)
        addToDb(course.key)

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
                            <Button className="course-search-btn">Search</Button>
                        </Form>
                    </div>
                </Row>
                <Row>
                   <section className="course-list mt-4">
                       <Row className="mb-5">
                            <Col xs={12} md={8}>
                                <Row xs={1} md={3} className="g-2">
                                    {
                                        searchCourses?.map(course => <Course key={course.key} course={course} handleEnrollCourse={handleEnrollCourse}></Course>)
                                    }
                                </Row>
                            </Col>
                            <Col xs={6} md={4}>
                                <CartList enrollCourse={enrollCourse}>
                                    <Button onClick={()=>handleReviewOrder()} className="review-order-btn mx-auto">Review For Order</Button>
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