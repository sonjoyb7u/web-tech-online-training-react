import React from 'react';
import { Table } from 'react-bootstrap';
import './CartList.css'

const CartList = (props) => {
    return (
        <div className="cart">
            <h2>Cart Details</h2>
            <Table  responsive="sm md lg xl">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Total Add To Cart:</th>
                  <td><span className="badge bg-info text-dark">0</span></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Price:</th>
                  <td>$ <span>0</span></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Delivery-Charge:</th>
                  <td>$ <span>20</span></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Total-Tax:</th>
                  <td>$ <span>0</span></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$ <span>0</span></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <div>
              {props.children}
            </div>
        </div>
    );
};

export default CartList;