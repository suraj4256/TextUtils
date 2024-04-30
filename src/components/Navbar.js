import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
    <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" style={{color:props.mode==="dark"? "white" : "black"}} href="/">{props.name}</a>
  </li>
</ul>
    </>
  )
}

Navbar.propTypes = {name: PropTypes.func.isRequired};
