import React from 'react';
import { Button, Image } from 'react-bootstrap';

const ReviewCourseItem = (props) => {
    const { key, img, name, quantity, instructor, price, lesson, startedAt } = props.enrollCourse
    const {handleRemoveCourseItem} = props

    return (
        <tr>
            <td>1</td>
            <td><Image className="w-100" src={img.thumb_1}></Image></td>
            <td>{name}</td>
            <td>{quantity}</td>
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