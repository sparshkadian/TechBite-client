import SignupOrLogin from './pages/SignupOrLogin';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/auth/:signOrLogin' element={<SignupOrLogin />} />
      </Routes>
    </>
  );
};

export default App;
