import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductListPage from './containers/ProductListPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUerLoggedIn, updateCart } from './actions';
import ProductDetailsPage from './containers/ProductDetailsPage';
import CartPage from './containers/CartPage';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUerLoggedIn());
    }
  }, [auth.autenticate]);

  useEffect(() => {
    console.log('App.js - updateCart')
    dispatch(updateCart())
  }, [auth.autenticate])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
