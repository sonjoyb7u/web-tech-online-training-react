import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './CartList.css'

const CartList = (props) => {
    const { enrollCourse } = props;

    let totalQty = 0;
    let totalPrice = 0;
    let taxPrice = 0;
    let grandTotal = 0;
    for (const enrCourse of enrollCourse) {

        if(!enrCourse.quantity) {
            enrCourse.quantity = 1
        }
        else {
            totalPrice = totalPrice + enrCourse.price * enrCourse.quantity
            totalQty = totalQty + enrCourse.quantity
        }
        // console.log(totalQty);
        taxPrice = (totalPrice * 10) / 100
    }
    grandTotal = (totalPrice + taxPrice).toFixed(2)

    return (
        <div className="cart">
            <h2>Enroll Course Details</h2>
            <Table  responsive="sm md lg xl">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Total Enrolled Course:</th>
                  <td><span className="badge bg-info text-dark">{totalQty}</span></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Price:</th>
                  <td>$ <span>{totalPrice?.toFixed(2)}</span></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Tax(10%):</th>
                  <td>$ <span>{taxPrice?.toFixed(2)}</span></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$ <span>{grandTotal}</span></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <div>
              {
                props.children
              }
            </div>
        </div>
    );
};

export default CartList;