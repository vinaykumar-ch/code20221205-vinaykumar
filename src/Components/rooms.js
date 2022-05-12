import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Firstfold from './firstfold';
import Requirementsform from './requirements';
import './navbar.css';
//import roomimage1 from './pexels-dmitry-zvolskiy-2082087 1.png'
import aboutpic4 from "./pexels-naim-benjelloun-2029670 1.png";
class Rooms extends React.Component {
    render() {
        return (
             <div className='roomscard' style ={ { backgroundImage: "url('"+this.props.image+"')" } }>
                <div className='costdetails'>
                  <span className="roomdescp">{this.props.descp}</span>
                  <span className='roomprice'>{this.props.price}$</span>
                  <span className='roomarea'>{this.props.area}M²</span>
                  <button className='bookroom'>Book!</button>
                </div>
             </div>
        );
      }

    }
    export default Rooms;