import React from 'react'

const Header = () => {
  return (
   <>
   <header>
    <section className='container main-hero-container'>
        <div className='row'>
             {/*-------------main header left side--------------- */}
            <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last'>
                <h1 className='display-2'>Online Payment Mode <br /> Easy for You</h1>
                <p className='main-hero-para'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti autem expedita necessitatibus ducimus fugiat, perspiciatis officia deserunt, ratione voluptatibus placeat incidunt, vel officiis reprehenderit eius earum! Non est quis maxime.
                </p>
                <h3>Get Early access for you</h3>
                <div className='input-group mt-3'>
                  <input type="text" className='rounded-pill w-75 me-3 p-2 form-controlled-text' placeholder='enter your email'/>
                  <div className='input-group-button'>Get it now</div>
                </div>

            </div>
             {/*-------------main header right side--------------- */}
            <div className='col-12 col-lg-6 header-right-side justify-content-center flex-column align-items-center main-herosection-images order-md-first order-sm-first '>
               <img src="./images/ss.jpg" alt="heroimg" className='img-fluid' />
               <img src="./images/tt.jpg" alt="heroimg" className='img-fluid main-hero-img2' />
            </div>
        </div>

    </section>
   </header>
   </>
  )
}

export default Header
