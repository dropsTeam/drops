import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as authActions from './Redux/Actions/AuthActions';
// import Navbar from './components/Navigationbar';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../src/css/Navbar.css';
import '../src/css/cart.css';
import '../src/css/checkout.css';


import ProductBlock from "./components/ProductsBlock/ProductsBlock.js";
import { PrivateRoute } from './utils';
// import GoogleBtn from './container/GoogleBtn';
import NavBar from './components/Navbar/Navigationbar';
import SubNav from './components/Navbar/subnav';
import Cartcheckout from './container/checkout/checkout';
import Loading from './components/Loading/Loading';
import { Skeleton } from 'antd';
const ProductView = React.lazy(() => import('./container/ProductView/ProductView'));
const Cart = React.lazy(() => import('./container/cart/cart'));
const Checkout = React.lazy(() => import('./container/checkout/checkout'));



class App extends React.Component {

  isSeller = false;

  componentDidMount() {
    this.props.$setUser();
  }


  render() {

    return (
      <React.Fragment>

        <NavBar />
        <SubNav />
        {/* <GoogleBtn visible={true} /> */}

        
        <Loading/>


        <React.Suspense fallback={<div><Skeleton active /> <br /> <Skeleton active /> <br /> <Skeleton active /> <br /><Skeleton active /> </div>}>
          <Router>
            <Switch>

              <Route path="/card" exact component={ProductBlock} />
              {/* <Route path="/" exact render={(props) => <h1>This is Home page</h1>} /> */}
              
              <Route path="/cart" exact render={() => <Cart />} />
              <Route path="/Checkout" exact render={() => <Cartcheckout />} />
              <Route path="/:id" exact render={() => <ProductView />} />

              <Route path="/s/cart" exact render={(props) => <h1>This is Home's cart </h1>} />
              



              <PrivateRoute access={this.props.authorised} path='/s/orders' exact component={(props) => <h1>This is Orders page</h1>} />
              <PrivateRoute access={this.props.authorised} path='/s/account' exact component={(props) => <h1>This is Account page</h1>} />
              <PrivateRoute access={this.isSeller} path='/s/seller' exact component={(props) => <h1>This is Seller page if it exist</h1>} />


            </Switch>
          </Router>
        </React.Suspense>

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
    $setUser: () => dispatch(authActions.setUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



