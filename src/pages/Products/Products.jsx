/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axiosInstance from "./../../api/config";

import Product from "./Product/Product";
import { Alert, Row, Spinner } from "react-bootstrap";

function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    // const [pageSize, setPageSize] = useState(30);

    // fetch all products
    useEffect(() => {
        setLoading(true);

        axiosInstance
            .get(`products`)
            .then((respons) => {
                // console.log(respons.data.products);
                setProducts(respons.data.products);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className="products">
                <div className="container py-5">
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </Spinner>
                        ) : products ? (
                            <>
                                {products.map((prod) => (
                                    <React.Fragment key={prod.id}>
                                        <Product {...prod} />
                                    </React.Fragment>
                                ))}
                            </>
                        ) : (
                            <Alert variant={"danger"}>
                                Error Fetching Data
                            </Alert>
                        )}
                    </Row>
                </div>
            </div>
        </>
    );
}

export default Products;
