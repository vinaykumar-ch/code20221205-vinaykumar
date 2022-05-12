import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Firstfold from './firstfold';
import './navbar.css';

class Requirementsform extends React.Component {
    render() {
        return (
          <div className='allfieldsdiv'>
              <div className="citydiv">
                <div className='labelcity'>
                  CITY
                </div>
                <select className='selectcitydropdown'>
                 <option>Select your city</option>
                  <option>Banglore</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>

                </select>
              </div>
              <div className="datediv">
              <div className='labelcity'>
                  DATE
                </div>
                <div className='labeldate'>
                  Select your Date
                </div>
              </div>
              <div className="guestsdiv">
              <div className='labelcity'>
                  GUESTS
                </div>
                <div className='labelguest'>
                  Add Guests
                </div>
              </div>
              <button className="searchdiv"> Search</button>
          </div>
          
        );
      }

    }
    export default Requirementsform;