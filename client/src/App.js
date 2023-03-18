import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 
import { useSelector } from "react-redux";
import Favorite from "./pages/Favorite";
import './App.css'
function App() {

  const user = useSelector((state) => state.user.currentUser);

  return (
   <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products/:category">
        <ProductList />
      </Route>
      <Route exact path="/products">
        <ProductList />
      </Route>
      <Route exact path="/product/:id">
        <Product />
      </Route>
      <Route path="/cart">
        <Cart />
        </Route>
        <Route path="/favorite">
        <Favorite />
      </Route>
       <Route path="/register">
        {user ? <Redirect to= "/" /> : <Register />}
      </Route> 
      <Route path="/login">
        {user ? <Redirect to= "/" /> : <Login />}
      </Route>
    </Switch>
   </Router>
  );
}

export default App;
