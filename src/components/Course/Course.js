import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUser, faBook, faEye } from '@fortawesome/free-solid-svg-icons'
import { Card, Col, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Course.css'

const Course = (props) => {
    const faArrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />
    const faUserIcon = <FontAwesomeIcon icon={faUser} />
    const faLessonIcon = <FontAwesomeIcon icon={faBook} />
    const faEyeIcon = <FontAwesomeIcon icon={faEye} />

    const {key, category, name, instructor, img, price, star, startedAt, students, lesson} = props.course

    return (
        <div> 
            <Col className="course">
                <Card className="course-card">
                    <Card.Img variant="top" src={img.thumb_1} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <div>
                                <p><strong>Category:</strong> {category}</p>
                                <p><strong>Instructor:</strong> {instructor}</p>
                                <p>
                                    <strong>Ranging: </strong>
                                    <Rating
                                    initialRating={star}
                                    emptySymbol="far fa-star half-star"
                                    fullSymbol="fas fa-star full-star"
                                    className="text-center course-rating"
                                    readonly 
                                    />({star})
                                </p>
                                <p><strong>Price: $</strong>{price}</p>
                                <p><strong>Started: </strong>{startedAt}</p>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between">
                                <span>{faUserIcon} {students}</span>
                                <span>{faLessonIcon} {lesson}</span>
                            </div>                                 
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="overlay">
                    <NavLink to={`/course-detail/${key}`} className="icon" title="View Course">
                        {faEyeIcon}
                    </NavLink>
                    <Button onClick={()=>props.handleEnrollCourse(props.course)} className="course-btn mx-auto btn-sm">Enroll This Course &nbsp; {faArrowRightIcon}</Button>
                </div>
            </Col>
        </div>
    );
};

export default Course;