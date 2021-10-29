import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './componets/Home/Home';
import About from './componets/About/About';
import Header from './componets/Header/Header';
import Login from './componets/Login/Login';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';
import OrderdDetails from './componets/OrderdDetails/OrderdDetails';
import MyOrder from './componets/MyOrders/MyOrder';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route
            path="/myorder/:item">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/orderdetails">
            <OrderdDetails></OrderdDetails>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
