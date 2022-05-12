import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.css';

class Navbar extends React.Component {
    render() {
        return (
    <div class="nav">
  <input type="checkbox" id="nav-check" />
  <div class="nav-header">
    <div class="nav-title">
     {/* logo comes here */}
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="#explorediv" >Explore</a>
    <a href="#" >About Us</a>
    <a href="#" >Cities</a>
    <a href="#">Call</a>
  </div>
</div>
    
        );
      }

    }
    export default Navbar;