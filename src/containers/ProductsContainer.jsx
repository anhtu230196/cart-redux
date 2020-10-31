import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from '../components/Product'
import Products from '../components/Products'
import * as actions from '../actions/index'

class ProductsContainer extends Component {
    render() {
        let { products } = this.props
        return (
            <div>
                <Products>
                    {this.showProducts(products)}
                </Products>
            </div>
        )
    }

    showProducts(products) {
        let { onAddToCart, onChangeMessage } = this.props
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            })
        }
        return result
    }
}



const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1))
        },

        onChangeMessage: message => {
            dispatch(actions.actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)