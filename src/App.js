import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component.tsx';
import Navigation from './routes/navigation/navigation.component.tsx';
import Authentication from './routes/authentication/authentication.component.tsx';
import Shop from './routes/shop/shop.component.tsx';
import Checkout from './routes/checkout/checkout.component.tsx';
import { checkUserSession } from './store/user/user.action.ts';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;