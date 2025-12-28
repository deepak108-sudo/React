import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const count=useSelector((state)=>state.slice1.count)
  return (
    <div style={{textAlign:"center", margin:"10px"}}>
        <h1>CartU: {count}</h1>
    </div>
  )
}

export default Header