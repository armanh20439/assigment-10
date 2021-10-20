import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div className='contact'>
           
           <div className='text-center'>
               <h1 className='text'> Contact Us</h1>
              <p className='text-white text-center'>Nisl nisi scelerisque eu ultrices vitae auctor <br/>eu. Nulla at volutpat diam ut venenatis tellus in metus vulputate. <br/> Ultricies mi quis hendrerit dolor magna.</p>
           </div>
           
           <div className="row bg-white carts ">
               <div className="col-md-4 text-center">
                   <h4 className='p-4'>Address</h4>
                   <p>Dhaka,Bangladesh</p>
                   <p>Dhaka,Bangladesh</p>
               </div>
               <div className="col-md-4 text-center">
                   <h4 className='p-4'>Email</h4>
                   <p>armanh20439@gmail.com</p>
                   <p>armanh20439@gmail.com</p>
               </div>
               <div className="col-md-4 text-center ">
                   <h4 className='p-4'>Contact us</h4>
                   <p>++85555</p>
                   <p>++85555</p>
               </div>
           </div>
        </div>
    );
};

export default Contact;