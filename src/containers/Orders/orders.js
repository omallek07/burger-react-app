import React, { Component } from 'react';

import Order from '../../components/Order/order';
import axios from '../../axios-orders';
import withErrorHandling from '../../hoc/withErrorHandling/withErrorHandling';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios.get('/orders.json')
    .then(res => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({
          ...res.data[key],
          id: key
        });
      }
      this.setState({ loading: false, orders: fetchedOrders })
    })
    .catch(err => {
      this.setState({ loading: false })
    });
  }

  render () {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default withErrorHandling(Orders,axios);
