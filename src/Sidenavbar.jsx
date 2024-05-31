import React from 'react'
import { Link } from 'react-router-dom'

const Sidenavbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/ussection'>section-1</Link></li>
                <li><Link to='/healthysection'>section-2</Link></li>
            </ul>
        </nav>

    </div>
  )
}

export default Sidenavbar