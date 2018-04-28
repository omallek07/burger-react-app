import React, { Component } from 'react';
import Layout from './hoc/Layout/layout'
import BurgerBuilder from './containers/BurgerBuilder/burger-builder'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
      </div>
    );
  }
}

export default App;
