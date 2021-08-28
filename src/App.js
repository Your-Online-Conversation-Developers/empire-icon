import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
