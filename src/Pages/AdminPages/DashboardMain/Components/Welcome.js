import React from 'react'
import Button from"../../../../Shared/Button/Button.jsx"

function Welcome() {
  return (
    <div className='col-sm-12 p-5 welcome_background'>
        <div className='row'>
            <div className='col-sm-6 pt-4'>
          <p className='welcome_text_heading'>  Welcome Back! <span className='text_welcome_user'><b> Ahmed  </b></span> </p> 
            </div>
            <div className='col-sm-6 text-end'>
           <span>  <Button className="button_welcome px-4" size={"sm"}
                                    variant="outline">
                                    Buy &nbsp;&nbsp;&nbsp; <i class="fas fa-chevron-down" id='icon_size_welcome'></i>
                                </Button></span>
                                <span className='mx-4'>  <Button className="button_welcome px-4" size={"sm"}
                                    variant="outline">
                                    Sell &nbsp;&nbsp;&nbsp; <i class="fas fa-chevron-down" id='icon_size_welcome'></i>
                                </Button></span>
            </div>
        </div>
    </div>
  )
}

export default Welcome