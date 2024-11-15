import React from 'react'
import Content from './Content';

export default function Footer() {
  return (
    <div 
        className='relative h-[100vh]'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+100vh)] -top-[100vh]'>
            <div className='h-[100vh] sticky top-[calc(100vh-800px)]'>
                <Content />
            </div>
        </div>
    </div>
  )
}
