import React from 'react'
import { PUBLICATIONS } from '../constants'
import { MdArrowOutward } from 'react-icons/md'

const Publications = () => {
  return (
    <section className="pt-12 px-4 sm:px-8 lg:px-32" id="publications">
      <h2 className="mb-6 text-center text-2xl sm:text-3xl lg:text-4xl">Publications</h2>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PUBLICATIONS.map((article, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl min-h-[300px] sm:min-h-[350px] md:min-h-[400px]"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-full w-full object-cover aspect-video transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-2 text-lg sm:text-xl font-semibold">{article.title}</h3>
              <p className="mb-8 p-4 text-sm sm:text-base text-neutral-800 line-clamp-3">
                {article.description}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-black px-4 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <div className="flex items-center">
                  <span>View on Medium</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )      
}

export default Publications