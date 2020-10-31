import React, { Component } from 'react'

class CartResult extends Component {
    render() {
        let { cart } = this.props
        return (
            <div>
                <tr>
                    <td colSpan={3} />
                    <td>
                        <h4>
                            <strong>Tổng Tiền</strong>
                        </h4>
                    </td>
                    <td>
                        <h4>
                            <strong>{this.showTotalAmout(cart)}$</strong>
                        </h4>
                    </td>
                    <td colSpan={3}>
                        <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                        >
                            Complete purchase
                          <i className="fa fa-angle-right right" />
                        </button>
                    </td>
                </tr>

            </div>
        )
    }

    showTotalAmout = (cart) => {
        // let total = 0;
        // if (cart.length > 0) {
        //     for (let i = 0; i < cart.length; i++) {
        //         total += cart[i].product.price * cart[i].quantity
        //     }
        // }
        // return total

        return cart.reduce((totalPrice, item) => {
            return totalPrice += item.product.price * item.quantity
        }, 0)
    }
}


export default CartResult