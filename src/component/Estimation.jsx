import React from 'react'
import { useLocation } from 'react-router-dom'
function Estimation() {
const location = useLocation();
const cal = location?.state?.cal;
  return (
    <div>
    
  <h1>Estimation:{cal}</h1>
    </div>
  )
}

export default Estimation
