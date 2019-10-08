import React from 'react'
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from '../svg/marvel-logo.svg';

const Header = () => {
  return (
    <div className="header row center-v">
      <Link to="/">
        <Logo height={40} width={100} />
      </Link>
      <Link to="/">
        <h1 className="title ml-2" style={{fontSize: 18}}>Marvel Showcase</h1>
      </Link>
    </div>
  )
}

export default Header
