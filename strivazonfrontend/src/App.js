import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyProducts from "./components/MyProducts";
import ProductDetails from "./components/ProductDetails";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <Router>
        <MyNav />
        {/*<Route path="/" exact component={MyProducts} />
        <Route path="/product/:productId" exact component={ProductDetails} />*/}
        <MyProducts />

        <MyFooter />
      </Router>
    </div>
  );
}

export default App;
