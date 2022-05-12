import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Requirementsform from './requirements';
import Rooms from './rooms';
import Aboutus from './aboutus';
import './navbar.css';
 import room from "./pexels-dmitry-zvolskiy-2082087 1.png";
 import penthouse from "./pexels-naim-benjelloun-2029670 1.png";
 import aboutpic2 from "./pexels-max-vakhtbovych-6492403 1.png";
 import aboutpic1 from "./pexels-max-vakhtbovych-5998051 1.png";
 import aboutpic3 from "./pexels-houzlook-com-3356416 2.png";
 import aboutpic4 from "./pexels-oleg-zaicev-4834891 1.png";
 import bgimage from "./pexels-vecislavas-popa-1571460 1.png";

class Firstfold extends React.Component {
    state = {
        heading:"Rethink your living & renting",
        tagline:"Make your stay painless with us",
        roomdetails:[
        {price:35,area:28,descp:"Room with one king-size bed",image:room},
        {price:230,area:72,descp:"Penthouse for 8 person",image:penthouse},
        ],
         aboutus:[
        {heading:"Chapter 1",descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",image:aboutpic1,top:"236px",margintop:"35px"},
        {heading:"Chapter 2",descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",image:aboutpic2,top:"282px",margintop:"35px"},
        {heading:"Chapter 3",descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",image:aboutpic3,top:"313px",margintop:"100px"},
        {heading:"Chapter 4",descp:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",image:aboutpic4,top:"368px",margintop:"100px"}
        ]

        
    };
    render() {
        return (
          <div>
           <Navbar />
          <div className='firstfolddiv'>  
          <span className='headline'>{this.state.heading}</span>
          <span className='tagline'>{this.state.tagline}</span>
           <Requirementsform />
          </div>
          <div className='container' id='explorediv'>
            <div style={{fontWeight: "bold",fontSize:"64px",}}>Explore</div>
            <div style={{fontSize: "18px",fontFamily: "monospace"}}>From one-guest rooms to</div>
            <div style={{fontSize: "18px",fontFamily: "monospace",paddingBottom:"60px"}}>penthouses with pools and gardens</div> 
            {this.state.roomdetails.map(room=>
        <Rooms price={room.price}
         area={room.area} descp={room.descp} image={room.image} />
         )}
         <div style={{fontSize: "64px",fontWeight: "bold"}}>About Us</div>
         <div style={{fontSize: "18px",fontFamily: "monospace"}}>Allow us to tell a short story...</div>
          {this.state.aboutus.map(about=>
        <Aboutus heading={about.heading} descp={about.descp} image={about.image} top={about.top} margintop={about.margintop} />
         )}
         </div>
        
        
          </div>
           
    
        );
      }

    }
    export default Firstfold;