
import React from 'react'
import Input from './Input'

const Appbar = () => {
  return (
    <div className='flex justify-between mt-3'>
        <div className='ml-15'> 
            <img className = "w-25 h-15"src="YoutubeLogo.jpg" alt="" />
        </div>
        <div>
            <Input/>
        </div>
        <div className='mr-15'>
            SignIn
        </div>
      
    </div>
  )
}

export default Appbar
