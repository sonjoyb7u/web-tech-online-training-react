import React from 'react';
import { Button } from 'react-bootstrap';

const ReviewCourseItem = (props) => {
    const { key, name, instructor, price, lesson, startedAt } = props.enrollCourse
    const {handleRemoveCourseItem} = props

    return (
        <tr>
            <td>1</td>
            <td>{name}</td>
            <td>{instructor}</td>
            <td>{price}</td>
            <td>{lesson}</td>
            <td>{startedAt}</td>
            <td><span class="badge bg-info">Pending</span></td>
            <td><Button onClick={()=>handleRemoveCourseItem(key)} className="btn btn-danger btn-sm">Remove</Button></td>
        </tr>
    );
};

export default ReviewCourseItem;