import React from 'react'
import Typical from 'react-typical'

export default function Header() {
    const today = new Date();
    let date = today.getFullYear()
  return (
    <div className="w-10/12 mx-auto flex justify-between">
        <div className="mt-5 text-2xl font-bold">
            BRENDA'S BIRTHDAY
        </div>
        <div className="mt-5 text-2xl font-bold">
            <p>{date}</p>
        </div>
    </div>
  )
}