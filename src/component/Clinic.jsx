import React from 'react'
import "./Clinic.css"

function Clinic() {
  return (
    <>
    
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-6'>
          <img src="https://www.vincihairclinic.com/wp-content/webp-express/webp-images/uploads/2023/06/Matheus-Lisboa-Digital-Influencer-1536x1245.png.webp" className="img-fluid"/>

          </div>
          <div className='col-lg-6 mt-2 section-2'>
          <h1 className='mt-3'>Why should I choose </h1>
            <h1><b>Hair Rebirth Clinic?</b></h1>
            <p className='mx-5 mt-4 px-5'>We recognize that you have a wide variety of providers to choose from. So what sets us apart from others in the field?
</p>
<li className='list-unstyled mx-5 mt-4 px-5' style={{color:"#AC8A50"}}> - State of the art operating rooms & equipment</li>
    <li className='list-unstyled mx-5 px-5' style={{color:"#AC8A50"}}> - Resident doctors & specialists</li>
    <li className='list-unstyled' style={{color:"#AC8A50"}}> - Dedicated after care service</li>
    <li className='list-unstyled' style={{color:"#AC8A50"}}> - One of the highest patient satisfaction ratings in the industry</li>
    <li className='list-unstyled' style={{color:"#AC8A50"}}> - Finance available</li>
         
          </div>

        </div>
        </div>
        </>
      )
}

export default Clinic