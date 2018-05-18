import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/order';
import axios from '../../axios-orders';
import withErrorHandling from '../../hoc/withErrorHandling/withErrorHandling';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/spinner';

class Orders extends Component {


  componentDidMount() {
    this.props.onFetchOrders()
  }

  render () {
    let orders = <Spinner />;
    if (this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price} />
        ))
      }
    return (
      <div>
        {orders}
      </div>
    );
  }
}

/*** CONTAINER ***/

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandling(Orders, axios));
