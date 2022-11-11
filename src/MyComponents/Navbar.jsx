import React , {useState }from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [show, setShow]=useState(false);
  return (
    <>
    <section className='navbar-bg'>
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#">SomePay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show": ""}`} id="">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to='/services'>Services</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to='/contact'>Contact</NavLink>
        </li>

       

       
      </ul>
      <form className="d-flex" role="search">
       
        <button className="btn  btn-style" type="submit">Sign Up</button>
        <button className="btn  btn-style" type="submit">Log In</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}
