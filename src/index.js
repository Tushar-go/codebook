import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Mockman from "mockman-js";
import Layout from "./Layout";
import { CartPage , Login, PageNotFound, ProductDetail, ProductList, Register } from "./pages";
import ProtectedRoute from "./routes/ProtectedRoute";
import { OrderPage } from "./pages/OrderPage";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts";
import { FilterContextProvider } from "./contexts/FilterContext";







// Call make Server
makeServer();







const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="mockman" element={<Mockman />} />
      <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute> } />
      <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute> } />
      <Route path="productlist" element={<ProductList />} />
      <Route path="products/:productId" element={<ProductDetail />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

const root = createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <AuthProvider>
  <CartProvider>
  <FilterContextProvider>
    <RouterProvider router={router} />
    </FilterContextProvider>
    </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
)
 

