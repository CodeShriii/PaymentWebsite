import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Error from './Pages/Error';
import Contact from './Pages/Contact';

import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';


const App = () => {
  return (
    <>
  <Routes>
  <Route exact path='/' element={<Home/>}></Route>
  <Route exact path='/about' element={<About/>}></Route>
  <Route exact path='/services' element={<Services/>}></Route>
  <Route   element={<Error/>}></Route>
  <Route exact path='/contact' element={<Contact/>}></Route>
  </Routes> 
 
    </>
  );
}

export default App;
