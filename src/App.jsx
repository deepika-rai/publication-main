import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import React, { useEffect } from "react";
import RequireRole from './routes/RequireRole';

// Layouts
import UserLayout from './layout/UserLayout';
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

// Seller Pages
import SellerLogin from './components/seller/SellerLogin';
import Dashboard from './pages/seller/Dashboard';
import AddBook from './pages/seller/book/AddForm';
import AddQuestion from './pages/seller/question/AddQuestion';
import QuestionList from './pages/seller/question/QuestionList.jsx';
import AddCategory from './pages/seller/category/AddForm';
import AddUser from './pages/seller/user/AddForm';
import BookList from './pages/seller/book/Lists';
import BookCategoryList from './pages/seller/category/Lists';
import EditUser from './pages/seller/user/EditForm';
import PaymentList from './pages/seller/payment/Lists';
import Orders from './pages/seller/order/Lists';
import UserList from './pages/seller/user/Lists';

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

            {/* Roles 3,4 can access */}
            <Route element={<RequireRole allowedRoles={[3, 4]} />}>
              <Route path="add-book" element={<AddBook />} />
              <Route path="edit-book/:bookId" element={<AddBook />} />
              <Route path="book-list" element={<BookList />} />
              <Route path="add-book-category" element={<AddCategory />} />
              <Route path="category-list" element={<BookCategoryList />} />
              <Route path="orders" element={<Orders />} />
            </Route>

            {/* Role 2 access only */}
            <Route element={<RequireRole allowedRoles={[2]} />}>              
              <Route path="question-list" element={<QuestionList />} />
              <Route path="add-question" element={<AddQuestion />} />
              <Route path="edit-question/:questionId" element={<AddQuestion />} />
            </Route>

            {/* Superadmin Only (role 4) */}
            <Route element={<RequireRole allowedRoles={[4]} />}>
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
