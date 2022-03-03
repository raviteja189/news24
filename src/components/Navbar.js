import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
        <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News24</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" style={{display:"inline-block",margin:0,marginRight:"5px",paddingLeft:"10px",paddingRight:"10px"}}>
          <Link className="nav-Link" style={{color:"white",textDecoration:"none"}} to="/">Home</Link>
        </li>
        
       <li className="nav-item" style={{display:"inline-block",margin:0,marginRight:"5px",paddingLeft:"10px",paddingRight:"10px"}}><Link className="nav-Link" style={{color:"white",textDecoration:"none"}}to="/business">business</Link></li>
       <li className="nav-item" style={{display:"inline-block",margin:0,marginRight:"5px",paddingLeft:"10px",paddingRight:"10px"}}><Link className="nav-Link" style={{color:"white",textDecoration:"none"}}to="/entertainment">Entertainment</Link></li>
       <li className="nav-item" style={{display:"inline-block",margin:0,marginRight:"5px",paddingLeft:"10px",paddingRight:"10px"}}><Link className="nav-Link" style={{color:"white",textDecoration:"none"}}to="/general">General</Link></li>
       <li className="nav-item" style={{display:"inline-block",margin:0,marginRight:"5px",paddingLeft:"10px",paddingRight:"10px"}}><Link className="nav-Link" style={{color:"white",textDecoration:"none"}}to="/health">Health</Link></li>
       <li className="nav-item" style={{display:"inline-block",margin:0,marginRight:"5px",paddingLeft:"10px",paddingRight:"10px"}}><Link className="nav-Link" style={{color:"white",textDecoration:"none"}}to="/science">Science</Link></li>
       <li className="nav-item" style={{display:"inline-block",margin:0,marginRight:"5px",paddingLeft:"10px",paddingRight:"10px"}}><Link className="nav-Link" style={{color:"white",textDecoration:"none"}}to="/sports">Sports</Link></li>
       <li className="nav-item" style={{display:"inline-block",margin:0,marginRight:"5px",paddingLeft:"10px",paddingRight:"10px"}}><Link className="nav-Link" style={{color:"white",textDecoration:"none"}}to="/technology">Technology</Link></li>
       
         
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
      </>
    )
  }
}
