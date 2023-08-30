import React from 'react'
import "./Cards.css"
function Cards() {
  return (
    <>
   
   <div className="py-4 cards">
  <div className="container">
    <h1 className='mt-5'>Treatments & Services</h1>
    <div>Look your best!</div>
    <div className='row gy-5 mt-4 cards-wrapper justify-content-evenly mx-5'> {/* Added justify-content-center */}
      <div className='col-lg-4 col-md-6 col-sm-12 px-5'>
        <div className="card">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://www.vincihairclinic.com/wp-content/uploads/2021/11/HT-Icon.svg" width={"80px"} height={"80px"} alt="Hair Transplant Icon" />
            <p className='mt-1'><b>Hair Transplant</b></p>
            <p>Natural Hair Restoration</p>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 px-5'>
        <div className="card"> 
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://www.vincihairclinic.com/wp-content/uploads/2021/11/MSP-Icon.svg" width={"80px"} height={"80px"} alt="Micro Scalp Pigmentation Icon" />
            <p className='mt-1'><b>Micro Scalp Pigmentation</b></p>
            <p>Non surgical hair solution</p>
          </div>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12 px-5'>
        <div className="card">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src="https://www.vincihairclinic.com/wp-content/uploads/2021/11/Medical-Icon.svg" width={"80px"} height={"80px"} alt="Medical Treatments Icon" />
            <p className='mt-1'><b>Medical Treatments</b></p>
            <p>PRP, Mesotherapy, among others</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Cards