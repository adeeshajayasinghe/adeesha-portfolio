import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div id='contact' className='border-b border-neutral-900 pb-20'>
        <h4 className='my-10 text-center text-3xl'>Get in Touch</h4>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.email}</p>
        </div>
    </div>
  )
}

export default Contact