
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './MyComponents/Navbar';
import Header from './MyComponents/Header';
import HowWorks from './MyComponents/HowWorks';
import AfterSH from './MyComponents/AfterSH';
import SendMoney from './MyComponents/SendMoney';
import ContactUs from './MyComponents/ContactUs';
import Footer from './MyComponents/Footer';


const Home = () => {
  return (
    <>
    
     <Navbar/>
     <Header/>
    <HowWorks/>
    <AfterSH/>
    <SendMoney/>
    <ContactUs/>
    <Footer/>
    
     

    
    </>
  );
}

export default Home;
