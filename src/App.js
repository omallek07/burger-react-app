import React, { Component } from 'react';
import Layout from './hoc/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/burger-builder';
import { Route, Switch } from 'react-router-dom';
import Checkout from './containers/Checkout/checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
