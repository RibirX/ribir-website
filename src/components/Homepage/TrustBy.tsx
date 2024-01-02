import React from 'react';

export default function Trust({ title, description, image, link }) {
  return (
    <div className='mx-auto max-w-6xl mt-14'>
      <p className="text-black font-bold text-5xl text-center">
        Trusted by
      </p>
      <br />
      <div className="justify-between md:flex min-[640px]:flex-row mt-6">
        <div className="md:w-5/12 max-[640px]:1/5">
          <img className="rounded-md"src={image} alt="Image description" />
        </div>
        <div className="self-center text-pretty max-w-xl md:ml-4 sm:ml-4 max-[640px]:ml-0 max-[640px]:mr-4">
          <div className='text-4xl font-bold max-[640px]:text-3xl'>
            {title}
          </div>
          <div className="text-xl mt-6 max-[640px]:text-base">
            {description}
          </div>
          <div className="text-xl mt-4 max-[640px]:text-base">
            <a href={link}>
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}