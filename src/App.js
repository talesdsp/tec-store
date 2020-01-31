import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CartPage from "./routes/Cart/Cart";
import DetailsPage from "./routes/Details/Details";
import HomePage from "./routes/Home/Home";
import Page404 from "./routes/Page404/Page404";
import store from "./store";

function App() {
  console.log("%cEspere!", "color: red; font-size: 3rem; font-weight: bold;");
  console.log(
    "%cEste e um recurso de navegador voltado para desenvolvedores. Se alguem disse para voce copiar e colar algo aqui para ativar um recurso ou 'invadir' a conta de outra pessoa, isso e uma fraude e voce dara a ele acesso a sua conta. ",
    "color: #aaa; font-size: 1.6rem; font-weight: bold"
  );
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details/:product" component={DetailsPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route component={Page404} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
