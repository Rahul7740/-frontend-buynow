import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import TopDeals from "./pages/TopDeals";
import HotOffers from "./pages/HotOffers";
import Pages from "./pages/Pages";
import ProductsFilter from "./pages/ProductsFilter";
import HelpCenter from "./pages/HelpCenter";
import ContactUS from "./pages/ContactUS";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DeliveryAdress from "./pages/DeliveryAdress";
import OrderSummary from "./pages/OrderSummary";
import PaymentOption from "./pages/PaymentOption";
import MyAccount from "./pages/MyAccount";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import WishList from "./pages/WishList";
import ReturnOrder from "./pages/ReturnOrder";
import OrderDetail from "./pages/OrderDetail";
import Register from "./Login/Register";
import Login from "./Login/Login";
import VerifyEmail from "./Login/VerifyEmail";
import ResetPassword from "./Login/ResetPassword";
import PasswordResetOtp from "./Login/PasswordResetOtp";
import EnterNewPassword from "./Login/EnterNewPassword";
import ScrollToTop from "./snippets/ScrollToTop";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let user = localStorage.getItem("user");
  return (
    <>
      {/* <Header />
      <RouterProvider router={router} /> */}

      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topDeals" element={<TopDeals />} />
          <Route path="/hotOffers" element={<HotOffers />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/productsFilter" element={<ProductsFilter />} />
          <Route path="/helpCenter" element={<HelpCenter />} />
          <Route path="/contectUS" element={<ContactUS />} />
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/deliveryAdress" element={<DeliveryAdress />} />
          <Route path="/orderSummary" element={<OrderSummary />} />
          <Route path="/paymentOption" element={<PaymentOption />} />
          {/* <Route path="/myAccount" element={<MyAccount />} /> */}
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/returnOrder" element={<ReturnOrder />} />
          <Route path="/orderDetails/:id" element={<OrderDetail />} />
          {!user ? (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verifyEmail" element={<VerifyEmail />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/passwordResetOtp" element={<PasswordResetOtp />} />
              <Route path="/enterNewPassword" element={<EnterNewPassword />} />
              <Route path="/myAccount" element={<Login />} />
              <Route path="/profile" element={<Login />} />
            </>
          ) : (
            <>
              <Route path="/profile" element={<Profile />} />
            <Route path="/myAccount" element={<MyAccount />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// {
//   "title" : "title",
//   "price" : "232323","designRatting" : true ,  "designInstock" :true , "description" :"sdfbcsdgfujysegfw",
//   "size" : [{"size":"21" , "p" : "Fits 130-200mm wrists." } , {"size":"21" , "p" : "Fits 130-200mm wrists." }] ,
//   "colors" : ["#FFB400","#DCE775","#81C784","#4FC3F7"],
//   "styleName" :["GPS","GPS + Cellular"],
//   "speacialFeature" : "Email, GPS, Notifications",
//   "weight" :"40 Grams",
//   "conoatibleDevices" : "Smartphone",
//   "reviews" :["name"]
// }
