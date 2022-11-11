import React, {useState} from 'react'
import howToUseApp from '../API/HowUse'

const AfterSH = () => {
    const [useData, setUseData]=useState(howToUseApp);
  return (
    <>
     <section className='common-section our-services'>
       <div className='container mb-5'>
        <div className='row'>
            <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                <img src="./images/images.jpg" alt="" />
             </div>

             <div className='col-12 col-lg-7 our-services-list'>
                 <h3 className='mini-title'>--AVAILABLE @ GOOGLE IOS AND STORE ONLY</h3>
                 <h1 className='main-heading'> How to use the App?</h1>
              
                    {
                        useData.map((curElem)=>{
                            const {id,title,info}=curElem;
                            return(
                            <>
                               <div className='row our-services-info'>

                            <div className='col-1 our-services-number'>{id}</div>
                    <div className='col-10 our-service-data'>
                        <h2>{title}</h2>
                        <p className='main-hero-para'>{info}</p>
                    </div>
                    </div>
                            
                            </>
                            )
                        })
                    }
                    

              

                 <br />
                 <button className='btn-style btn-style-border'>Learn More</button>
             </div>


        </div>
        
        </div>    
        
    </section> 

    {/*right hand side same section */}
    <section className='common-section our-services our-services-rightside'>
       <div className='container mb-5'>
        <div className='row'>
            
             <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column'>
                 <h3 className='mini-title'>--SUPORT IN ANY LANGUAGE</h3>
                 <h1 className='main-heading'> World Class Support is <br/>Available 24X7</h1>
              
                    {
                        useData.map((curElem)=>{
                            const {id,title,info}=curElem;
                            return(
                            <>
                               <div className='row our-services-info'>

                            <div className='col-1 our-services-number'>{id}</div>
                    <div className='col-10 our-service-data'>
                        <h2>{title}</h2>
                        <p className='main-hero-para'>{info}</p>
                    </div>
                    </div>
                            
                            </>
                            )
                        })
                    }
                    

              

                 <br />
                 <button className='btn-style btn-style-border'>Learn More</button>
             </div>
         
             <div className='col-12 col-lg-5 text-center our-service-leftside-img'>
                <img src="./images/uff.webp" alt="" />
             </div>



        </div>
        
        </div>    
        
    </section> 
    </>
  )
}

export default AfterSH
