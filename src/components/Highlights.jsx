import React from 'react'
import { HIGHLIGHTS } from '../constants'

const Highlights = () => {
  return (
    <div id="highlights" className="border-b border-neutral-900 pb-12 px-4 sm:px-8 lg:px-32">
      <h1 className="my-10 text-center text-3xl sm:text-4xl">Highlights</h1>
      <div className="space-y-8">
        {HIGHLIGHTS.map((highlight, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-4 sm:p-6 shadow-lg"
          >
            <div className="flex-1 mb-4 md:mb-0 md:mr-6">
              <h2 className="text-lg sm:text-xl font-semibold text-white">{highlight.title}</h2>
              <ul className="list-none mt-4 sm:mt-5">
                {highlight.description.map((section, index) => (
                  <li key={index} className="flex items-start mb-3 text-sm sm:text-base text-neutral-400">
                    <span className="mr-2 text-neutral-400">•</span> {/* Custom bullet point */}
                    <p>{section}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )  
}

export default Highlights