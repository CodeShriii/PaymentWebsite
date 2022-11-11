import React from 'react'
import { NavLink } from 'react-router-dom';

const Error404 = () => {
  return (
    <>
     <div id='not found'>
        <div className='notfound'>
            <div className='notfound-404'>
                <h1>404</h1>
            </div>
            <h2> WE ARE SORRY, PAGE NOT FOUND!!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quis neque nisi, molestiae expedita suscipit, quia enim officia et repudiandae nulla aspernatur minus tenetur tempora? Ipsam reprehenderit hic maiores neque!</p>
            <NavLink to="/">Back to Home Page</NavLink>
       
        </div>
     </div>
    </>
  );
};

export default Error404
