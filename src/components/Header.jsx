import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <header className='header'>
          <section>
              {/* banner texts */}
              <div className="banner">
                  <h2>Little Lemon</h2>
                  <h3>Chicago</h3>
                  <p>We are a family owned Mediterranean restaurant on traditional recipes served with a modern twist.</p>
                  <link to="/booking"></link>
              </div>
          </section>
    </header>
  )
}

export default Header
