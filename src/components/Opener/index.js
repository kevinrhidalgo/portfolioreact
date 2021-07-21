import React, { useState } from "react";
import './Opener.css'
import { Link } from "react-router-dom";
import salud from './saludHome.png'
import shelfi from './shelfi.png'
import underC from './underC.jpg'
import { images } from "../../Helpers/CarouselData"
import { imagesTwo } from "../../Helpers/ShelfiData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Github from "../About/github.PNG"
import Phone from "../About/cellphone.PNG"
import Email from "../About/email.PNG"
import Linkedin from "../About/linkedin.PNG"


const underScore={
  color:'#629ac9',
  animation: 'blinker 1s linear infinite',
}
const pStyler={
  display:'flex',
  justifyContent:'center',
  fontWeight:'bold',
  marginBottom:'-10px'
}
const projectImg={
   width:'210px',
   height:'280px',
   borderRadius: '2%',
   
}
const modalProjects={
  margin:'-5px -15px',
}
const closeBtn={
  fontSize:'25px',
  fontFamily: 'Lato, sans-serif',
  color:'#629ac9',
  cursor: 'pointer' 
}
const githubLink={
  textDecoration:'none',
  fontSize:'18px',
  color:'blue',
  display:'flex',
  justifyContent:'center'
}
const indent={
  marginLeft:'20px',
  color:'#629ac9',
  fontSize:'24px'
}
const indentP={
  marginLeft:'190px',
  marginRight:'10px',
  color:'#629ac9',
  fontSize:'24px'
}
const footerImg1 ={
  width: 40,
  height: 45,
  backgroundColor:'#222222',
  marginBottom:'-4px',
  boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
  }
const footerImg2 ={
      width: 40,
      height: 45,
      backgroundColor:'#ff8822',
      marginBottom:'-4px',
      boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
      }
const footerImg3 ={
      width: 40,
      height: 45,
      background:'#0e76a8',
      marginBottom:'-4px',
      boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
          }
const footerImg4 ={
      width: 40,
      height: 45,
      backgroundColor:'#0e76a8',
      marginBottom:'-4px',
      boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
              }

export default function Opener() {

//the consat function for the modals of the projects
  const [modal, setModal] = useState(false);

  const toggleModal = () => {

    setModal(!modal);
  };

  const [modalTwo, setModalTwo] = useState(false);

  const toggleModalTwo = () => {

    setModalTwo(!modalTwo);
  };

  const [modalThree, setModalThree] = useState(false);

  const toggleModalThree = () => {

    setModalThree(!modalThree);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  if(modalTwo) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  if(modalThree) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  //this is the function code for the image carousal

const [currImg, setCurrImg] = useState(0);
 
  return (
    <>
      <div className='opener' id='opener'>

<div className='topOpener'>
  
            <div className='openerBody'>
<div className='vl'></div>
           
<h2>Kevin R. Hidalgo</h2>

<div className='vl'></div>

        <h3>“It’s not how good you are, it’s how good you want to be”
</h3>
</div>
</div>
          
      </div>


      <div className='sideContacts'> 
<a href="https://github.com//kevinrhidalgo"><img style={footerImg1} src={Github}/></a> 
<a href="tel:555-555-5555"><img style={footerImg2} src={Phone}/></a>
<a href="mailto:EmailAddress@.XYZ.com"><img style={footerImg3} src={Email}/></a>
<a href="https://www.linkedin.com/in/kevinrhidalgo/"><img style={footerImg4} src={Linkedin}/></a>
    </div>



<div className='projSec' id='projSec'>
     <h1>Work <span style={underScore} className='underScore'>_</span></h1>
     <div className='pStyler'>
       <div className='pStylerTwo'>
<p style={pStyler}>
<div style={indentP}>As</div> a fullstack web developer, my passion is 
creating different projects to enhance user experiences.To create
applications that start from an idea in the head. It's a balance of applying 
various technology, designs, and research with non-stop experimentation.
</p>
  </div>
  </div>



  <div className='projectSetOne'>

<a style={modalProjects} onClick={toggleModal} className="btn-modal">
  <div className='setOne'><img style={projectImg} className='projectImg' src={salud}/><div className='projectTitle'>Salud.</div></div>
</a>

<a style={modalProjects} onClick={toggleModalTwo} className="btn-modal">
  <div className='setOne'><img style={projectImg} className='projectImg' src={shelfi}/><div className='projectTitle2'>Shelfi.</div></div>
</a>

<a style={modalProjects} onClick={toggleModalThree} className="btn-modal">
  <div className='setOne'><img style={projectImg} className='projectImg' src={underC}/><div className='projectTitle3'>Coming Soon!</div></div>
</a>
<a style={modalProjects} onClick={toggleModalThree} className="btn-modal">
  <div className='setOne'><img style={projectImg} className='projectImg' src={underC}/><div className='projectTitle4'>Coming Soon!</div></div>
</a>

<a style={modalProjects} onClick={toggleModalThree} className="btn-modal">
  <div className='setOne'><img style={projectImg} className='projectImg' src={underC}/><div className='projectTitle5'>Coming Soon!</div></div>
</a>

<a style={modalProjects} onClick={toggleModalThree} className="btn-modal">
  <div className='setOne'><img style={projectImg} className='projectImg' src={underC}/><div className='projectTitle6'>Coming Soon!</div></div>
</a>
</div>


</div> 



{modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content2">

<div className='aboutProject2'>
       <div className="carousel">
      
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >

     <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 45 }} />
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 45 }} />
        </div>
      </div>
    </div>

  
    <div className='aboutSalud'> 
      <h1>salud.</h1>
<p>
<span style={indent}>Salud</span> is an online Magazine application focused on the benefits of a healthy lifestyle, whether that has to with working out to what you eat.
You can read articles, read blogs, watch mini-films and even find recipes based on how calories you plan to consume. 
The application is an ongoing project with hopes to continue growing and implementing new ideas.
</p>
<a id='repo' href='https://github.com/kevinrhidalgo/dd-salud'>View Repo</a>
<a id='site'  href='https://github.com/kevinrhidalgo/dd-salud'>View Site</a>

<div className='toolsUsed'>

  <div className='toolsUsedTwo'>
  <h6>REACT</h6>
  <div className='vlOne'></div>
  <h6>NODE</h6>
  <div className='vlTwo'></div>
  </div>

  <div className='toolsUsedTwo'>
  <h6>MONGOOSE</h6>
  <div className='vlThree'></div>
  <h6>EXPRESS</h6>
  <div className='vlFour'></div>
  </div>
</div>
      </div>
 
</div>
<div className='closeBtn'>
            <a className="close-modal" onClick={toggleModal}>
            <span>X</span>
            </a>
            </div>
          </div>
        </div>
      )}




{modalTwo && (
        <div className="modal">
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content2">

<div className='aboutProject2'>
     <div className="carousel">
    
    <div
      className="carouselInnerShelfi"
      style={{ backgroundImage: `url(${imagesTwo[currImg].img})` }}
    >

   <div
        className="left"
        onClick={() => {
          currImg > 0 && setCurrImg(currImg - 1);
        }}
      >
        <ArrowBackIosIcon style={{ fontSize: 45 }} />
      </div>
      <div
        className="right"
        onClick={() => {
          currImg < imagesTwo.length - 1 && setCurrImg(currImg + 1);
        }}
      >
        <ArrowForwardIosIcon style={{ fontSize: 45 }} />
      </div>
    </div>
  </div>


  <div className='aboutShelfi'> 
    <h1>shelfi.</h1>
<p>
<span style={indent}>Shelfi</span>  is a modern search engine for book lovers 
to find their next good read. Users can search books by author or title 
to view a description and details.
</p>
<a id='repo' href='https://github.com/mascarelloa/shelfi'>View Repo</a>
<a id='site' href='https://myshelfi.herokuapp.com/'>View Site</a>

<div className='toolsUsed'>

  <div className='toolsUsedTwo'>
  <h6>Handlebars</h6>
  <div className='vlOne1'></div>
  <h6>NODE</h6>
  <div className='vlTwo2'></div>
  </div>

  <div className='toolsUsedTwo'>
  <h6>mySQL</h6>
  <div className='vlThree3'></div>
  <h6>EXPRESS</h6>
  <div className='vlFour4'></div>
  </div>
  <div className='toolsUsedTwo'>
  <h6>SEQUELIZE</h6>
  <div className='vlFive5'></div>
  </div>
</div>
    </div>
</div>

<div className='closeBtn'>
<a className="close-modal" onClick={toggleModalTwo}>
            <span>X</span>
            </a>
            </div>
        </div>
      </div>
      )}




{modalThree && (
        <div className="modal">
          <div onClick={toggleModalThree} className="overlay"></div>
          <div className="modal-content">
            <h2>Coming Soon!</h2>
            <p>
              This is a current Project underdevelopment.<br/>
              Currently being coded out.
            </p>
            <h4>Heres the Link to my Github in the meantime</h4>
            <a href='https://github.com/kevinrhidalgo' style={githubLink}> Github</a>
  
            <div className='closeBtn'> 
            <a className="close-modal" onClick={toggleModalThree}>
              <span>X</span>
            </a>
            </div>
          </div>
        </div>
      )}

    </>
  );
}