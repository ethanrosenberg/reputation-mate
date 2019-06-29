import React from 'react';

import { Link } from 'react-router-dom'





const NavigationBar = () => {
  return (
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand'>
              ReputationMate
            </a>
          </div>
          <ul class="nav navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/popular">Most Popular</Link></li>
          <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>

  )
}

export default NavigationBar
