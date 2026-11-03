import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import React, { useEffect } from "react";
import RequireRole from './routes/RequireRole';

// Layouts
import UserLayout from './layout/UserLayout';
import LibraryLayout from './layout/LibraryLayout';
import SellerLayout from './pages/seller/SellerLayout';
import { AppContextProvider } from './context/AppContext.jsx';
import { useSellerContext, SellerContextProvider } from './context/SellerContext.jsx';

// User Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import AllBooks from './pages/AllBooks';
import Contact from './pages/Contact';
import About from './pages/About';
import BookCategory from './pages/BookCategory';
import BookDetails from './pages/BookDetails';
import BookReader from './pages/BookReader';
import BookViewer from './pages/BookViewer';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
import MyBooks from './pages/MyBooks';
import Loading from './components/Loading';

//Library Pages
import LibraryHome from './pages/LibraryHome';
import Pricing from './pages/membership/Pricing';
import Form from './pages/membership/Form';
import Membership from './pages/library/Membership';
import MembershipPlan from './pages/library/MembershipPlan.jsx';
import Gallery from './pages/library/Gallery';
import LibraryAbout from './pages/library/About';
import LibraryContact from './pages/library/Contact';
import LibraryBooks from './pages/library/Books';
import Faqs from './pages/library/Faqs.jsx';
import Services from './pages/library/Services.jsx';
import Testimonials from './pages/library/Testimonials.jsx';
import Events from './pages/library/Events.jsx';
import News from './pages/library/News.jsx';
import WhatsNew from './pages/library/WhatsNew.jsx';
import Blogs from './pages/library/Blogs.jsx';
import DGMessage from './pages/library/DGMessage.jsx';
import DirectorMessage from './pages/library/DirectorMessage.jsx';
import Rules from './pages/library/Rules.jsx';
import DosAndDonts from './pages/library/DosAndDonts.jsx';
import EventsAndActivities from './pages/library/EventsAndActivities.jsx';
import PrivacyPolicy from './pages/library/PrivacyPolicy.jsx';
import CopyrightPolicy from './pages/library/CopyrightPolicy.jsx';
import HyperLinkPolicy from './pages/library/HyperLinkPolicy.jsx';
import TermsAndConditions from './pages/library/TermsAndConditions.jsx';
import QuickLinks from './pages/library/QuickLinks.jsx';
import Disclaimer from './pages/library/Disclaimer.jsx';
// import Rules from './pages/library/Rules.jsx';
import Sitemap from './pages/library/Sitemap.jsx';



// Seller Pages
import SellerLogin from './components/seller/SellerLogin';
import Dashboard from './pages/seller/Dashboard';
import AddBook from './pages/seller/book/AddForm';
import AddQuestion from './pages/seller/question/AddQuestion';
import ViewQuestion from './pages/seller/question/ViewQuestion';
import QuestionList from './pages/seller/question/QuestionList.jsx';
import AddCategory from './pages/seller/category/AddForm';
import AddUser from './pages/seller/user/AddForm';
import BookList from './pages/seller/book/Lists';
import BookCategoryList from './pages/seller/category/Lists';
import EditUser from './pages/seller/user/EditForm';
import PaymentList from './pages/seller/payment/Lists';
import Orders from './pages/seller/order/Lists';
import UserList from './pages/seller/user/Lists';
import UpdatePassword from './pages/seller/UpdatePassword';

// Route Guards
import ProtectedSellerRoute from './routes/ProtectedSellerRoute';
import ProtectedUserRoute from './routes/ProtectedUserRoute';

//Policy Pages
import Privacy from './pages/policy/Privacy.jsx';
import Faq from './pages/policy/Faq.jsx';
import Terms from './pages/policy/Terms.jsx';

// NotFound Page
import NotFound from './pages/NotFound';
import Maintenance from './pages/Maintenance';

const RedirectIfSellerLoggedIn = () => {
  const { isSeller, authLoading } = useSellerContext();

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return isSeller ? <Navigate to="/seller/dashboard" replace /> : <Outlet />;
};




const App = () => {

  if (process.env.NODE_ENV === "production") {
    useEffect(() => {

      // Disable Right Click
      document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
      });

      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      document.addEventListener("keydown", (e) => {
        if (
          e.key === "F12" ||
          (e.ctrlKey && e.shiftKey && e.key === "I") ||
          (e.ctrlKey && e.shiftKey && e.key === "J") ||
          (e.ctrlKey && e.key === "u")
        ) {
          e.preventDefault();
        }

      });

    }, []);
  }

  return (
    <Routes>

      {/* NEW LAYOUT FOR LIBRARY HOME PAGE */}
      <Route element={<LibraryLayout />}>
        <Route path="/libraryhome" element={<LibraryHome />} />
        <Route path="/library/membership-form" element={<Form />} />
        <Route path="/library/membership" element={<Membership />} />
        <Route path="/library/membership-plan" element={<MembershipPlan />} />
        <Route path="/library/membership-pricing" element={<Pricing />} />
        <Route path="/library/gallery" element={<Gallery />} />
        <Route path="/library/about"   element={<LibraryAbout />} />
        <Route path="/library/contact" element={<LibraryContact />} />
        <Route path="/library/faq" element={<Faqs />} />
        <Route path="/library/services" element={<Services />} />
        <Route path="/library/whats-new" element={<WhatsNew />} />
        <Route path="/library/news" element={<News />} />
        <Route path="/library/testimonials" element={<Testimonials />} />
        <Route path="/library/blogs" element={<Blogs />} />
        <Route path="/library/events-activities" element={<Events />} />
        <Route path="/library/director-message" element={<DirectorMessage />} />
        <Route path="/library/dg-message" element={<DGMessage />} />
        <Route path="/library/rules" element={<Rules />} />
        <Route path="/library/dos-and-donts" element={<DosAndDonts />} />
        <Route path="/library/events-and-activities" element={<EventsAndActivities />} />
        <Route path="/library/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/library/copyright-policy" element={<CopyrightPolicy />} />
        <Route path="/library/hyperlink-policy" element={<HyperLinkPolicy />} />
        <Route path="/library/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/library/quick-links" element={<QuickLinks />} />
        <Route path="/library/disclaimer" element={<Disclaimer />} />
        <Route path="/library/sitemap" element={<Sitemap />} />
        <Route path="/library/books"   element={<AppContextProvider><LibraryBooks /></AppContextProvider>} />
      </Route>

      {/* User Layout + App Context */}
      <Route
        path="/"
        element={
          <AppContextProvider>
            <UserLayout />
          </AppContextProvider>
        }
      >
        <Route index element={<Home />} />
        <Route path="books" element={<AllBooks />} />
        <Route path="books/:slug/:id" element={<BookCategory />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="book-reader/:id" element={<BookReader />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="loader" element={<Loading />} />
        <Route path="cart" element={<Cart />} />

        {/* Policy Routes */}
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms-&-conditions" element={<Terms />} />
        <Route path="faq" element={<Faq />} />

        {/* Protected User Routes */}
        <Route element={<ProtectedUserRoute />}>
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="my-books" element={<MyBooks />} />
          <Route path="add-address" element={<AddAddress />} />
        </Route>

        {/* 404 for User Routes */}
        <Route path="*" element={<NotFound />} />
        <Route path="maintenance" element={<Maintenance />} />
      </Route>

      {/* Seller Section (Login + Protected Routes) wrapped in SellerContextProvider */}
      <Route
        path="/"
        element={
          <SellerContextProvider>
            <Outlet />
          </SellerContextProvider>
        }
      >
        {/* Seller Login (redirect if already logged in) */}
        <Route element={<RedirectIfSellerLoggedIn />}>
          <Route path="login" element={<SellerLogin />} />
        </Route>



        {/* Seller Layout + Protected Seller Routes */}
        <Route path="seller" element={<ProtectedSellerRoute />}>
          <Route element={<AppContextProvider>
            <SellerLayout />
          </AppContextProvider>}>

            <Route path="dashboard" element={<Dashboard />} />

            {/* Roles 4,5 can access */}
            <Route element={<RequireRole allowedRoles={[4, 5]} />}>
              <Route path="add-book" element={<AddBook />} />
              <Route path="edit-book/:bookId" element={<AddBook />} />
              <Route path="book-list" element={<BookList />} />
              <Route path="add-book-category" element={<AddCategory />} />
              <Route path="category-list" element={<BookCategoryList />} />
              <Route path="orders" element={<Orders />} />
            </Route>

            {/* Role 2, 3 access only */}
            <Route element={<RequireRole allowedRoles={[2,3]} />}>              
              <Route path="question-list" element={<QuestionList />} />
              <Route path="add-question" element={<AddQuestion />} />
              <Route path="edit-question/:questionId" element={<AddQuestion />} />
              <Route path="view-question/:questionId" element={<ViewQuestion />} />
            </Route>
            {/* Role 2 access only */}
            <Route element={<RequireRole allowedRoles={[2]} />}>              
              <Route path="update-password" element={<UpdatePassword />} />
            </Route>

            {/* Superadmin Only (role 5) */}
            <Route element={<RequireRole allowedRoles={[5]} />}>
              <Route path="add-user" element={<AddUser />} />
              <Route path="edit-user/:userId" element={<EditUser />} />
              <Route path="user-list" element={<UserList />} />
              <Route path="payments" element={<PaymentList />} />
            </Route>

            {/* 404 for Seller Routes */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>


      </Route>

      {/* Global fallback for unmatched root paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
