import React from 'react'
import {Link} from 'react-router-dom'
export default function NavbarComponent() {
  return (
    <div>
    <nav>
      <ul>
        <li><Link to = "/" >Home</Link></li>
        <li><Link to = "/about" >About</Link></li>
        <li><Link to = "/country" >Countries</Link></li>
        <li><Link to = "/gallery" >Gallery</Link></li>
        
        
      </ul>
    </nav> 
    </div>
  )
}
