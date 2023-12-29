import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Details from "./Pages/Details";
import Product from "./Pages/Product";
import PageNotFound from "./Pages/PageNotFound";
import { IconContext } from "react-icons";
import GlobalStyles from "./ui/GlobalStyles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }} />
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            element={<About />}
            path="about"
          />
          <Route
            element={<Product />}
            path="product"
          />
          <Route
            element={<Cart />}
            path="cart"
          />
          <Route
            element={<Details />}
            path="Details"
          />
          <Route
            element={<PageNotFound />}
            path="*"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
