import React, { PropTypes } from 'react';
import Product from './Product';

const ProductList = ({
    loading,
    products,
    onAddItem
}) => (
    <section className="container">
        { loading && <span>Cargando datos...</span> }
        <div className="row">
        {
            products.map(product => (
                <Product
                key={Product._id}
                onAddItem={onAddItem}
                {...product}
            />
            ))
        }
        </div>
    </section>
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    onAddItem: PropTypes.func.isRequired
};

export default ProductList;