import React, { PropTypes } from 'react';
import Product from './Product';

const ProductList = ({
    loading,
    products
}) => (
    <section className="container">
        { loading && <span>Cargando datos...</span> }
        <iv className="row">
        {
            products.map(product => (
                <Product
                key={Product._id}
                {...product}
            />
            ))
        }
        </div>
    </section>
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired
};

export default ProductList;