import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from "motion/react"

const Education = () => {
    return (
        <div id='education' className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>Education</h1>
            <div>
                {EDUCATION.map((qualification, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div 
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: -100}}
                        transition={{ duration: 1}}
                        className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{qualification.year}</p>
                        </motion.div>
                        <motion.div 
                        whileInView={{ opacity: 1, x: 0}}
                        initial={{ opacity: 0, x: 100}}
                        transition={{ duration: 1}}
                        className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{qualification.title} - <span className='text-sm text-purple-100'>{qualification.institute}</span></h6>
                            <p className='mb-4 text-neutral-400'>{qualification.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
      )
}

export default Education