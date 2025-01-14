import React from 'react'
import { CERTS } from '../constants'
import { MdArrowOutward } from 'react-icons/md'

function Certificates() {
  return (
    <div id='certificates' className="border-b border-neutral-900 pb-12 px-4 sm:px-8 lg:px-32">
      <h1 className="my-10 text-center text-3xl sm:text-4xl">Certificates</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="flex-1">
              <h2 className="mb-2 text-lg sm:text-xl font-semibold text-white">{cert.title}</h2>
              <p className="mb-4 text-sm sm:text-base text-neutral-400">{cert.description}</p>
            </div>
            <div className="mt-auto">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-slate-500 px-4 py-2 text-sm sm:text-base text-white transition-colors hover:bg-blue-700"
              >
                <span className="mr-2">{cert.linkText}</span>
                <MdArrowOutward />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  
}

export default Certificates