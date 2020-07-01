import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './utils';

function App() {

  const isSeller = true;
  const authorised = true;

  return (
    <React.Fragment>
      <nav>This is a Nav Barr</nav>

      {/* Please replace render with component down below */}
      <Router>
        <Switch>

          <Route path="/" exact render={() => <h1>This is Home page</h1>} />
          <Route path="/s/cart" exact render={() => <h1>This is Home's cart </h1>} />

          <PrivateRoute access={authorised} path='/s/orders' exact component={(props) => <h1>This is Orders page</h1>} />
          <PrivateRoute access={authorised} path='/s/account' exact component={(props) => <h1>This is Account page</h1>} />
          
          <PrivateRoute access={isSeller} path='/s/seller' exact component={(props) => <h1>This is Seller page if it exist</h1>} />

          <Route path="/:id" exact render={() => <h1>This is Customer's Store </h1>} />

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
