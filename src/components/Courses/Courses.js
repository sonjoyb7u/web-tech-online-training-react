import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Course from '../Course/Course';
import './Courses.css'
import { addToDb, getEnrollCourseFromLocalStorageDb } from '../../utilities/mydb';


const Courses = () => {
    const faEyeIcon = <FontAwesomeIcon icon={faEye} />
    const history = useHistory()
    const [courses, setCourses] = useState([])
    useEffect(() => {
        const url = '/courses.JSON'
        fetch(url)
        .then(res => res.json())
        .then(data => setCourses(data.slice(0, 4)))

    }, [])
    // console.log(courses);
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

    const handleViewAllCourse = () => {
        history.push('/all-courses')
    }
    return (
        /* Start Popular Courses section ... */ 
        <div className="courses">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading"><span>P</span>opuler <span>C</span>ourses</h2>
                        <p className="para">Browse Our Top Courses</p>
                    </Col>
                </Row>
                <Row>
                   <section className="course-list mt-4">
                       <Row className="mb-5">
                            <Col xs={12} md={12}>
                                <Row xs={1} md={4} className="g-3">
                                    {
                                        courses?.map(course => <Course key={course.key} course={course} handleEnrollCourse={handleEnrollCourse}></Course>)
                                    }
                                </Row>
                            </Col>
                       </Row>
                       <Row>
                           <Col xs={12} md={12}>
                               <Button onClick={handleViewAllCourse} className="all-course-btn mx-auto"><span>{faEyeIcon}</span>&nbsp; View All</Button>
                           </Col>
                       </Row>
                   </section>
                </Row>
            </Container>
        </div>
        /* End Courses section ... */
    );
};

export default Courses;