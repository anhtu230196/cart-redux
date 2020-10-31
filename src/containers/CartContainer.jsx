import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import * as messages from '../constants/Message'
import * as actions from '../actions/index'

class CartContainer extends Component {
    render() {
        let { cart } = this.props
        return (
            <div>
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </Cart>
            </div>
        )
    }

    showCartItem = (cart) => {
        let result = <tr>
            <td>{messages.MSG_CART_EMPTY}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem onUpdateProductInCart={this.props.onUpdateProductInCart} key={index} item={item} onChangeMessage={this.props.onChangeMessage} onDeleteCartItem={this.props.onDeleteCartItem} />
                )
            })
        }
        return result
    }

    showTotalAmount = (cart) => {
        let result = null;

        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }

        return result
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteCartItem: (item) => {
            dispatch(actions.actRemoveProductInCart(item))
        },
        onChangeMessage: message => {
            dispatch(actions.actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actions.updateProductInCart(product, quantity))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)