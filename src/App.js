import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import ManageUsers from './components/Admin/ManageUsers';
import ManageProducts from './components/Admin/ManageProducts';
import ManageInventory from './components/Artisan/ManageInventory';
import ViewOrders from './components/Artisan/ViewOrders';
import Cart from './components/Buyer/Cart';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import NotFound from './components/Shared/NotFound';
import MainBanner from './components/Home/MainBanner'; // Importing MainBanner
import CottonSarees from './components/Buyer/CottonSarees'; // Importing CottonSarees
import SilkSarees from './components/Buyer/SilkSarees';
import Apparels from './components/Buyer/Apparels';
import Lungies from './components/Buyer/Lungies';
import Kurta from './components/Buyer/Kurta';
import Cushions from './components/Buyer/Cushions';
import Rugs from './components/Buyer/Rugs';
import Wishlist from './components/Buyer/Wishlist';
import PaymentPage from './components/Buyer/PaymentPage';
import OrderSummary from './components/Buyer/OrderSummary';
import OrderConfirmation from './components/Buyer/OrderConfirmation';
import OrderDetails from './components/Buyer/OrderDetails';
import Navbar from './components/Artisan/Navbar';
import TrackOrders from './components/Artisan/TrackOrders';
import Profile from './components/Artisan/Profile';
import UserProfile from './components/Buyer/UserProfile';
import AdminNavbar from './components/Admin/AdminNavbar';
import AdminHome from './components/Admin/AdminHome';
import AdminViewOrders from './components/Admin/AdminViewOrders';
import SellerHome from './components/Artisan/SellerHome';
import SalesOverview from './components/Admin/SalesOverview';



function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
         
            {/* Admin Routes */}
            <Route path="/admin/manageusers" element={<><AdminNavbar/><ManageUsers /></>} />
            <Route path="/admin/manageproducts" element={<><AdminNavbar/><ManageProducts /></>} />
            <Route path="/admin/adminhome" element={<><AdminNavbar/><AdminHome /></>} />
            <Route path="/admin/adminvieworders" element={<><AdminNavbar/><AdminViewOrders /></>} />
            <Route path="/admin/salesoverview" element={<><AdminNavbar/><SalesOverview /></>} />

            {/* Artisan Routes */}
            <Route path="/artisan/manageinventory" element={<><Navbar/><ManageInventory /></>} />
            <Route path="/artisan/vieworders" element={<><Navbar/><ViewOrders /></>} />
            <Route path="/artisan/trackorders" element={<><Navbar/><TrackOrders /></>} />
            <Route path="/artisan/profile" element={<><Navbar/><Profile /></>} />
            <Route path="/artisan/home" element={<><Navbar/>< SellerHome/></>} />


            {/* Buyer Routes */}
            <Route path="/home" element={ <>       <Header /> 
               <MainBanner/> </>} /> {/* Default route */}
            <Route path="/buyer/cart" element={<><Header/><Cart /></>} />
            <Route path="/buyer/wishlist" element={<><Header/><Wishlist /></>} />
            <Route path="/buyer/cottensarees" element={<> <Header />  <CottonSarees /></> } />
            <Route path="/buyer/silksarees" element={<> <Header />  <SilkSarees /></> } />
            <Route path="/apparels" element={<> <Header />  <Apparels /></> } />
            <Route path="/buyer/lungies" element={<> <Header />  <Lungies /></> } />
            <Route path="/buyer/kurta" element={<> <Header />  <Kurta /></> } />
            <Route path="/buyer/cushions" element={<> <Header />  <Cushions /></> } />
            <Route path="/buyer/rugs" element={<> <Header />  <Rugs /></> } />
            <Route path="/buyer/paymentpage" element={<> <Header />  <PaymentPage /></> } />
            <Route path="/buyer/ordersummary" element={<> <Header />  <OrderSummary /></> } />
            <Route path="/buyer/orderconfirmation" element={<> <Header />  <OrderConfirmation /></> } />
            <Route path="/buyer/orderdetails" element={<> <Header />  <OrderDetails /></> } />
            <Route path="/buyer/userprofile" element={<> <Header />  <UserProfile /></> } />


            {/* Authentication */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
