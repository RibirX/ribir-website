import React from 'react';

export default function FeatureLeftSection({title, description, image}) {
  return (
    <div className='mx-auto max-w-6xl mt-10'>
      <div className="justify-between md:flex min-[640px]:flex-row">
        <div className="bg-white md:w-5/12 max-[640px]:1/5">
          <img src={image} alt="Image description" />
        </div>
        <div className="self-center text-pretty max-w-xl md:ml-4 sm:ml-4 max-[640px]:ml-0">
          <div className='text-5xl font-bold'>{title}</div>
          <div className="text-xl mt-6">
          {description}
          </div>
        </div>
      </div>
    </div>
  )
}