import './App.css';
import Nav from './component/Nav'
import Footer from './component/Footer';
import Signup from './component/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PrivateComp from './component/PrivateComp';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateComp from './component/UpdateComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Nav/>
      <Routes>
        <Route element={<PrivateComp/>}>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateComp/>}/>
        <Route path='/logout' element={<h1>Logout component</h1>}/>
        <Route path='/profile' element={<h1>Profile component</h1>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
