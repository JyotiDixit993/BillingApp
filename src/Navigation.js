import React from 'react'
import Form from './Form'
import home from './home'
const Navigation = () => {
  return (
    <div className='navdiv'>
      <nav>
        <ul>
          <li>
            <a style={{color:'white',marginRight:'25px'}} className="head" href="/home">Home</a>
            <a style={{color:'white',marginRight:'25px'}} href="/Form">Login Form</a>

          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
