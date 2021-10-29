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
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute PrivateRoute path="/myorder/:item">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/orderdetails">
            <OrderdDetails></OrderdDetails>
          </PrivateRoute>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
