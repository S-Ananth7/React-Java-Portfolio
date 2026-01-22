import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import HomePage from "./pages/public/HomePage";
import ProductsPage from "./pages/public/ProductsPage";
import ProductDetailPage from "./pages/public/ProductDetailPage";
import ContactPage from "./pages/public/ContactPage";
import AboutPage from "./pages/public/AboutPage";
import LoginPage from "./pages/public/LoginPage";
import SignUpPage from "./pages/public/SignUpPage";
import CartPage from "./pages/public/CartPage";
import CheckoutPage from "./pages/public/CheckoutPage";
import ForgotPasswordPage from "./pages/public/ForgotPasswordPage";
import ResetPasswordPage from "./pages/public/ResetPasswordPage";
import VerifyEmailPage from "./pages/public/VerifyEmailPage";


import OrdersPage from "./pages/user/OrdersPage";
import ProfilePage from "./pages/user/ProfilePage";


import AdminDashboardPage from "./pages/admin/AdminDashboardPage";

import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="app-layout">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/verify-email" element={<VerifyEmailPage />} />
                <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
