/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";

// bootstrap
import { Col, Row } from "react-bootstrap";
import Shop from "./shop/Shop";

function ShoppingCard() {
    const { shoppingList, totalPrice, totalCount } = useSelector(
        (state) => state.shoppingList
    );

    return (
        <>
            <div className="shopping-title">
                <div className="container py-3">
                    <h3>Card</h3>
                </div>
            </div>

            <div className="products">
                <div className="container py-5">
                    <Row xs={1} className="g-4">
                        {totalCount === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            shoppingList.map((shop, index) => (
                                <React.Fragment key={index}>
                                    <Shop {...shop} />
                                </React.Fragment>
                            ))
                        )}
                    </Row>

                    <Row>
                        <Col className="ms-auto">
                            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default ShoppingCard;
