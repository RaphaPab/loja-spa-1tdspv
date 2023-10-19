import React from 'react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div>
        <h1>OPSS! 404</h1>
        <p>!NOT FOUND</p>
        <div>
            <Image 
            src="https://httpstatusdogs.com/img/404.jpg"
            alt="Cachorro cavando..."
            width={650}
            height={500}
            />
        </div>



    </div>
    

  )
}
