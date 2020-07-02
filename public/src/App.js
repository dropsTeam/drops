import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './utils';
import GoogleBtn from './container/GoogleBtn';

export default class App extends React.Component {

  isSeller = false;
  authorised = false;


  render() {
    return (
      <React.Fragment>

        <nav>
          This is a Nav Bar only visible for large devices
          <GoogleBtn/>
          {/* {!authorised && <div className='g-signin2' data-onsuccess={onSignIn}> </div>} */}
        </nav>

        <div>This is sidebar only visible for mobile</div>

        {/* Please replace render with component down below */}
        <Router>
          <Switch>

            <Route path="/" exact render={() => <h1>This is Home page</h1>} />
            <Route path="/s/cart" exact render={() => <h1>This is Home's cart </h1>} />

            {/* Use PrivateRoute to protect a route */}
            <PrivateRoute access={this.authorised} path='/s/orders' exact component={(props) => <h1>This is Orders page</h1>} />
            <PrivateRoute access={this.authorised} path='/s/account' exact component={(props) => <h1>This is Account page</h1>} />
            <PrivateRoute access={this.isSeller} path='/s/seller' exact component={(props) => <h1>This is Seller page if it exist</h1>} />

            <Route path="/:id" exact render={() => <h1>This is Customer's Store </h1>} />

            {/* and so on .........  */}

          </Switch>
        </Router>
      </React.Fragment >
    );
  }


}

