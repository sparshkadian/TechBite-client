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
import MoveToTop from './components/MoveToTop';
import PageNotFound from './pages/PageNotFound';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === '/' && <Navbar show={true} />}
      <MoveToTop />
      <Routes>
        <Route path='/' element={<Hero />} />
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
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
