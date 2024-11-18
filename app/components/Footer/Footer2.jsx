import React from 'react'
import Content from './Content';

export default function Footer() {
  return (
    <div 
      className='footerMain'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", backgroundColor: "#000000", color: "#ffffff"}}
    >
      <div className='footerContent'>
        <Content />
      </div>
    </div>
  )
}
