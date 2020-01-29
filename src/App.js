import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./routes/Cart/Cart";
import Details from "./routes/Details/Details";
import Home from "./routes/Home/Home";
import Page404 from "./routes/Page404/Page404";
import store from "./store";

function App() {
  console.log("%c Espere!", "color: red; font-size: 3 rem;");
  console.log("%c ");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:product" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/sign_in" component={Cart} />
          <Route exact path="/sign_out" component={Cart} />
          <Route exact path="/register" component={Cart} />

          <Route component={Page404} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
