import React, { PropTypes } from 'react';

const ProductDetail = ({ loading, product, onAddItem }) => {
    if (!loading && product) {
        const { _id, image, name, description, price, deliveryStimate, category } = product;
    }

    return (
        <section className="container">
            <div className="row">
                <figure className="figure col-lg_6">
                    <img src={image} alt={description} className="figure-img figure-thumbnail rounder"/>
                </figure>
                <div className="col-lg-6">
                <br/>
                <h4>{ name }</h4>
                </div>
            </div>
        </section>
    )
}