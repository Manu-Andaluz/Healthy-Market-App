import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import About from "./components/About";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/userSlice";
import CardDetail from "./components/CardDetail";
import Error from "./components/Error";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ReviewForm from "./components/ReviewForm";
import Dashboard from "./components/admin/Dashboard";
import Summary from "./components/admin/Summary";
import ProductsList from "./components/admin/list/ProductsList";
import CreateProduct from "./components/admin/CreateProduct";
import UserList from "./components/admin/list/UsersList";
import OrderList from "./components/admin/list/OrderList";
import Reviews from "./components/Reviews";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/detail/:productId" element={<CardDetail />} />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reviewform" element={<ReviewForm />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="summary" element={<Summary />} />
            <Route path="products" element={<ProductsList />}>
              <Route index element={<ProductsList />} />
              <Route path="create-product" element={<CreateProduct />} />
            </Route>
            <Route path="users" element={<UserList />}>
              <Route index element={<UserList />} />
              <Route path="create-user" element={<CreateProduct />} />
            </Route>
            <Route path="orders" element={<OrderList />}>
              <Route index element={<OrderList />} />
              <Route path="create-order" element={<CreateProduct />} />
            </Route>
          </Route>
          <Route path="/detail/:productId" element={<CardDetail />} />
          <Route path="*" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reviewform" element={<ReviewForm />} />
          <Route path="/reviews/:productId" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
