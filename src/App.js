import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import ManageSellers from './components/Admin/ManageSellers';
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
import OrderConfirmation from './components/Buyer/OrderConfirmation';
import OrderDetails from './components/Buyer/OrderDetails';
import Navbar from './components/Artisan/Navbar';
import TrackOrders from './components/Artisan/TrackOrders';
import Profile from './components/Artisan/Profile';
import UserProfile from './components/Buyer/UserProfile';
import AdminNavbar from './components/Admin/AdminNavbar';
import AdminHome from './components/Admin/AdminHome';
import SellerHome from './components/Artisan/SellerHome';
import SalesOverview from './components/Admin/SalesOverview';
import Feedback from './components/Buyer/Feedback';
import ContactUs from './components/Buyer/ContactUs';
import FeedbackReport from './components/Artisan/FeedbackReport';
import ContactReport from './components/Admin/ContactReport';
import ContactAdmin from './components/Artisan/ContactAdmin';
import AddSeller from './components/Admin/AddSeller';
import AddProduct from './components/Artisan/AddProduct';
import ViewProducts from './components/Artisan/ViewProduct';
import Orders from './components/Buyer/orders';
import TrackOrder from './components/Buyer/trackorder';
import ForgotPassword from './components/Auth/forgetpassword';



function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
         
            {/* Admin Routes */}
            <Route path="/admin/ManageSellers" element={<><AdminNavbar/><ManageSellers /></>} />
            <Route path="/admin/adminhome" element={<><AdminNavbar/><AdminHome /></>} />
            <Route path="/admin/salesoverview" element={<><AdminNavbar/><SalesOverview /></>} />
            <Route path="/admin/ContactReport" element={<><AdminNavbar/><ContactReport /></>}/>
            <Route path="/admin/add-seller" element={<><AdminNavbar/><AddSeller /></>
            } />
            {/* Artisan Routes */}
            <Route path="/artisan/manageinventory" element={<><Navbar/><ManageInventory /></>} />
            <Route path="/artisan/vieworders" element={<><Navbar/><ViewOrders /></>} />
            <Route path="/artisan/trackorders" element={<><Navbar/><TrackOrders /></>} />
            <Route path="/artisan/profile" element={<><Navbar/><Profile /></>} />
            <Route path="/artisan/home" element={<><Navbar/>< SellerHome/></>} />
            <Route path="/artisan/feedbackreport" element={<><Navbar/><FeedbackReport /></>} />
            <Route path="/artisan/contactadmin" element={<><Navbar/><ContactAdmin/></>}/>
            <Route path="/artisan/addproduct" element={<><Navbar/><AddProduct/></>}/>
            <Route path="/artisan/viewproducts" element={<><Navbar/><ViewProducts/> </>}/>



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
            <Route path="/buyer/orderconfirmation" element={<> <Header />  <OrderConfirmation /></> } />
            <Route path="/buyer/orderdetails" element={<> <Header />  <OrderDetails /></> } />
            <Route path="/buyer/feedback" element={<> <Header /> <Feedback /> </>}/>
            <Route path="/buyer/contactus" element={<><Header/><ContactUs/> </>} />
            <Route path="/buyer/userprofile" element={<> <Header />  <UserProfile /></> } />
            <Route path="/buyer/orders" element={<> <Header /> <Orders/> </> } />
            <Route path="/buyer/trackorder/:orderid" element={<> <Header /> <TrackOrder/> </> } />
            


            {/* Authentication */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgetpassword" element={<ForgotPassword />} />

            {/* Not Found Route */}
            <Route path="*" element={<><Header/><NotFound /></>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

