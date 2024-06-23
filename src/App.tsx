import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import SignupOrLogin from './pages/SignupOrLogin';
import CreateBlog from './pages/CreateBlog';
import Protected from './components/Protected';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import UserBlogs from './pages/UserBlogs';
import MoveToTop from './components/MoveToTop';
import PageNotFound from './pages/PageNotFound';
import UnderDev from './components/UnderDev';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/auth/signup' ||
      location.pathname === '/auth/login' ? (
        <Navbar show={false} />
      ) : (
        <Navbar show={true} />
      )}
      <MoveToTop />

      <MoveToTop />
      <Routes>
        <Route
          path='/'
          element={
            <>
              {/* <UnderDev /> */}
              <Hero />
            </>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth/:signOrLogin' element={<SignupOrLogin />} />
        <Route path='/:username/:blogTitle' element={<Blog />} />
        <Route
          path='/new'
          element={
            <Protected>
              <CreateBlog />
            </Protected>
          }
        />
        <Route
          // Later path will be user's name
          path='/profile'
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route
          // Later path will be user's name
          path='/myBlogs'
          element={
            <Protected>
              <UserBlogs />
            </Protected>
          }
        />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
