import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='flex flex-col items-center m-4 space-y-4'>
        <Title title={"PageNotFound"}/>
        <p>Opps seems like you move to somewhere what we don't have</p>
        <Link to={"/"} className='text-blue-600 text-xs bg-gray-100 rounded-md p-4'>Click here to go to wordcounter home page</Link>
    </div>
  )
}
