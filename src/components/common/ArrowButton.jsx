import React from 'react'

const ArrowButton = ({className}) => {
  return (
    <div>
        <button className={`bg-[#fcefd4] w-10 h-10 rounded-full text-2xl text-[#6b665d] flex justify-center hover:bg-[#f9dba9] duration-300 delay-75 ${className}`}>&#8594;</button>
    </div>
  )
}

export default ArrowButton