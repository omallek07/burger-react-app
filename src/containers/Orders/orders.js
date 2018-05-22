import React, { Component } from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/order';
import axios from '../../axios-orders';
import withErrorHandling from '../../hoc/withErrorHandling/withErrorHandling';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/spinner';

class Orders extends Component {

  componentDidMount() {
    this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render () {
    let orders = <Spinner />;
    if (this.props.orders) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price} />
        ))
      };
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
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandling(Orders, axios));
