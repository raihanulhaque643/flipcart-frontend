import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductListPage from './containers/ProductListPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isUerLoggedIn } from './actions';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUerLoggedIn());
    }
  }, [auth.autenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
