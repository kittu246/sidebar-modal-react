import React from 'react';

import { getGlobalContext } from './GobalContext';

const Modal = () => {
const {isModal,closeModal} = getGlobalContext(); 
  return (
   
isModal && 
       
    <section className='modalBody'>
        <div className='modalContent'>
            <p>Modal Content</p> 

            <button onClick={closeModal}>Close</button>

        </div>
    </section> 

    
  )
}

export default Modal