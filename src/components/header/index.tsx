import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <Link to="/">
            <div>Cryptos ✨🤑</div>
          </Link>
        </div>
        <Link to="/cryptos">Cryptos price</Link>
      </div>
    </div>
  )
}

export default Header
