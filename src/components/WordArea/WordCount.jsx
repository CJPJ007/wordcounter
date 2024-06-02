import React from 'react'

export default function WordCount({wordCount}) {
  return (
    <div className='bg-blue-600 text-white px-2 py-1 rounded-md'>
      Words ({wordCount})
    </div>
  )
}
