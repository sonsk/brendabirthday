import React from 'react'
import Typical from 'react-typical'

export default function Header() {
    const today = new Date();
    let date = today.getFullYear()
  return (
    <div className="w-10/12 mx-auto flex justify-between">
        <div>
            <Typical
                steps={['BRENDA', 2000, 'LESLIE', 2000,
                'TEMGOUA', 2000, 'MON PERE', 2000, 'MAMA NA ZOUK', 2000,
                'LA BELGE', 2000
                ]}
                loop={Infinity}
                className="inline-block  text-2xl md:text-5xl mt-5"
            />
        </div>
        <div className="mt-5 text-2xl font-bold">
            <p>{date}</p>
        </div>
    </div>
  )
}