import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as productActions from '../actions/productActions';

class ProductAddContainer extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    render() {
        return (
            <section className="container">
                <form className="offset-lg-3.col-lg-6" onSubmit={this.handleSubmit}>
                    <legend>Añade un nuevo producto</legend>ç
                    <div className="form-group">
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" name="name" className="form-control" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="description">Descripción: </label>
                        <input type="text" name="description" className="form-control" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="image">Imagen: </label>
                        <input type="text" name="image" className="form-control" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="price">Precio: </label>
                        <input type="number" name="price" className="form-control" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="deliveryStimate">Tiempo de entrega: </label>
                        <input type="text" name="deliveryStimate" className="form-control" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="category">Categoría: </label>
                        <input type="text" name="category" className="form-control" />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Guardar" />
                    </div>
                    <br />
                </form>
            </section>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch);
    }
}

export default connect(null, mapDispatchToProps)(ProductAddContainer);