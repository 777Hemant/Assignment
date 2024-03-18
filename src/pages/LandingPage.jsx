import React from 'react';
import Img1 from './Group.jpg'; // Assuming LandingPage.jsx is in src
import RoundedButton from './RoundedButton';
import img2 from './Img.png'; // Assuming LandingPage.jsx is
function LandingPage() {
  return (
  <div className="flex flex-col justify-center items-center">
    <img src={img2} alt="" />
    <img src={Img1} alt="Image 1" className='h-64' />
    <p className='text-center'>Book Tests and find the best Labs near you at a suitable price</p>
    <div><RoundedButton /></div>
    <div className='mt-32'> <button className='text-blue-600'>Skip</button></div>

    
</div>

  );
}

export default LandingPage;
