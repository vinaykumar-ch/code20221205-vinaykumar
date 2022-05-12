import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Firstfold from './firstfold';
import Requirementsform from './requirements';
import './navbar.css';

class Aboutus extends React.Component {
    render() {
        return (
        <div className='auoutuscard' style={{marginTop:`${this.props.margintop}`}}>
         <img src={this.props.image} alt="tutorialswebsite logo"/>
           <div className='carddescp'  style={{top:`${this.props.top}`}}>
              <div className="aboutus-card-heading">
                {this.props.heading}
              </div>
                  <p style={{padding:"10px"}}>{this.props.descp}</p>
            </div>
        </div>
        );
      }

    }
    export default Aboutus;