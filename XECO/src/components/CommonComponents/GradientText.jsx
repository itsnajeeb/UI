import React from 'react'

const GradientText = ({ title }) => {
    return (
        <h1
            className="
    text-5xl md:text-5xl font-semibold manrope-fonts
    bg-linear-to-r
    from-[#EAF6FF]
    via-[#CFEAFF]
    to-[#9FD8FF]
    bg-clip-text text-transparent
  "
        >
            {title}
        </h1>
    )
}

export default GradientText