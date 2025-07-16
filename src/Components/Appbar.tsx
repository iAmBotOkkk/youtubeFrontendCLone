
import React from 'react'
import Input from './Input'

const Appbar = () => {
  return (
    <div className='flex justify-between'>
        <div>
            Youtube
        </div>
        <div>
            <Input/>
        </div>
        <div>
            SignIn
        </div>
      
    </div>
  )
}

export default Appbar
