import React from 'react'

export default function Errorpage() {
    const divstyle={
       fontStyle:"italic",
       fontWidth:"bolder",
       fontSize:"100px",
     display:"flex",
     justifyContent:'center',
     alignItems:'center',
     height:'100vh'
       
  }
  return (
    <>
    <h1 className="p-3 mb-2 bg-primary-subtle text-primary-emphasis" style={divstyle}>404 | Not Found</h1>
    </>
  )
}
