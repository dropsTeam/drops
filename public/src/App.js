import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './utils';
<<<<<<< HEAD
import { connect } from 'react-redux';

=======
>>>>>>> c6db5283377cd7fc7c2b4ab4e666a17fe1fc3b95
import GoogleBtn from './container/GoogleBtn';
<<<<<<< HEAD
=======
import NavBar from './components/Navigationbar'
import * as authActions from './Redux/Actions/AuthActions';

<<<<<<< HEAD
=======
>>>>>>> 6832b97bc1f1806701f84d23ca4f1f99bc856ab9
import 'antd/dist/antd.css';
>>>>>>> c6db5283377cd7fc7c2b4ab4e666a17fe1fc3b95
// import '~antd/lib/style/core/index.less';
import 'antd/dist/antd.css';
import '../src/css/App.css';
<<<<<<< HEAD

=======
import * as authActions from './Redux/Actions/AuthActions';
import Navbar from '../src/components/Navigationbar.js';
import { connect } from 'react-redux';
>>>>>>> c6db5283377cd7fc7c2b4ab4e666a17fe1fc3b95

class App extends React.Component {

  isSeller = false;

  componentDidMount() {
    this.props.$setUser();
  }


  render() {
   
    return (
      <React.Fragment>

        <nav>
<<<<<<< HEAD
          <Navbar />
=======
          <NavBar />
>>>>>>> 6832b97bc1f1806701f84d23ca4f1f99bc856ab9
          This is a Nav Bar only visible for large devices
          <GoogleBtn visible={true} />
          
          
          
          
          {/* {!authorised && <div className='g-signin2' data-onsuccess={onSignIn}> </div>} */}
        </nav>

        <div>This is sidebar only visible for mobile</div>

        {/* Please replace render with component down below */}
        <Router>
            <Switch>

              <Route path="/" exact render={(props) => <h1>This is Home page</h1>} />
              <Route path="/s/cart" exact render={(props) => <h1>This is Home's cart </h1>} />

              {/* Use PrivateRoute to protect a route */}
              <PrivateRoute access={this.props.authorised} path='/s/orders' exact component={(props) => <h1>This is Orders page</h1>} />
              <PrivateRoute access={this.props.authorised} path='/s/account' exact component={(props) => <h1>This is Account page</h1>} />
              <PrivateRoute access={this.isSeller} path='/s/seller' exact component={(props) => <h1>This is Seller page if it exist</h1>} />

              <Route path="/:id" exact render={(props) => <h1>This is Customer's Store </h1>} />

              {/* and so on .........  */}

            </Switch>
        </Router>
      </React.Fragment>
    );
  }
  
}

const mapStateToProps = store => {
  return {
    isAuthorised: store.isAuthorised
  }
}

const mapDispatchToProps = dispatch => {
  return {
    $setUser: () =>  dispatch(authActions.setUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
