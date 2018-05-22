import React, { Component } from 'react';
import Layout from './hoc/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/burger-builder';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Checkout from './containers/Checkout/checkout';
import Orders from './containers/Orders/orders';
import Auth from './containers/Auth/auth';
import Logout from './containers/Auth/Logout/logout';

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={BurgerBuilder} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/logout" component={Logout} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

/**** CONTAINER ****/

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(App);
