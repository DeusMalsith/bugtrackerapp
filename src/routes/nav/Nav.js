import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <ul>
        <Link to='/login'>Login</Link>
      </ul>
    </div>
  )
}

export default Nav