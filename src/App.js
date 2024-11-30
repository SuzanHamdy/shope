
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Error from './pages/Error';
import Footer from './component/Footer';
import Cart from './pages/Cart';
import Products from './component/Products';
import Details from './pages/Details';
import Account from './pages/Account';
import WishList from './pages/WishList';
import CheckOut from './pages/CheckOut';
import Side from './component/Side';

import Shope from './pages/Shope';
import DetailsShope from './pages/DetailsShope';
import ProductsShope from './component/ProductsShope';
import Shope2 from './pages/Shope2';
import AllProducts from './pages/AllProducts';
import SearchItem from './component/SearchItem';





function App() {
  return (
   <>
   <BrowserRouter>
   <Header />
   <Routes>
<Route  path='/' element ={<Home/>}      />
<Route  path='/home' element ={<Home/>}      />
<Route  path='/Contact' element ={<Contact/>}      />
<Route  path='/About' element ={<About/>}      />
<Route  path='/SignUp' element ={<SignUp/>}      />
<Route  path='/login' element ={<Login/>}      />
<Route  path='/account' element ={<Account/>}      />
<Route  path='/WishList' element ={<WishList/>}/>
<Route  path='/CheckOut' element ={<CheckOut/>}/>
<Route  path='/cart' element ={<Cart/>}      />
<Route  path='/Products' element ={<Products/>}      />
<Route  path='/Products/:id' element ={<Details/>}      />
<Route  path='/Side' element ={<Side/>}  />
<Route  path='/AllProducts' element ={<AllProducts/>}  />
<Route  path='/shope/:id' element ={<DetailsShope/>}  />
<Route  path='/shope' element ={<Shope/>}  />
<Route  path='/shope2' element ={<Shope2/>}  />
<Route  path='//shope2/:id' element ={<Details/>}  />
<Route  path='/search/:term' element ={<SearchItem/>}      />

<Route  path='/productsShope' element ={<ProductsShope/>} />

<Route  path='*' element ={<Error/>}      />
   </Routes>
   <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
