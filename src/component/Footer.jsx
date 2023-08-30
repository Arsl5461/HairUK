import React from 'react'
import "./Footer.css"
import Logo from "../images/logo.png"

function Footer() {
  return (
    <>
    <div>
      
    </div>
    <div className="footer">
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center">
<img src={Logo} width={"100px"} height={"100px"}/>
<p className='fs-3 text-light'>Follow us on Social Media:<i class="fa-brands fa-facebook mx-2"></i> <i class="fa-brands fa-instagram mx-2"></i> <i class="fa-brands fa-twitter mx-2"></i></p>
</div>

<hr className='text-light'/>
<div className="row">
    <div className="col-lg-3 col-md-6 col-sm-6">
<ul className='text-light list-unstyled d-flex flex-column gap-3'>
<p><b>Hair Loss Solution</b></p>   
<li>Hair Transplant</li>
<li>Beard Transplant</li>
<li>Eyebrow Transplant</li>
<li>Micro Scalp pigmentation</li>
<li>Mesotherapy</li>
<li>Laser Cap</li>

</ul>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<ul className='text-light list-unstyled d-flex flex-column gap-3'>
<p><b>Hair Care Product</b></p>   
<li>Vitruvian Line</li>
<li>Maxogine Forte</li>
<li>Moxgine Women</li>

</ul>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<ul className='text-light list-unstyled d-flex flex-column gap-3'>
<p><b>Information</b></p>   
<li>Why Hair Reborn</li>
<li>Team member</li>
<li>Contact Us</li>

</ul>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">
<ul className='text-light list-unstyled d-flex flex-column gap-3'>
<p><b>Gallery</b></p>   
<li>Hair Transplant</li>
<li>Scalp pigmentation</li>

</ul>
</div>
</div>
</div>
    </div>
    </>
  )
}

export default Footer