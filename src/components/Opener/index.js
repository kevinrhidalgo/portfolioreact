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


const underScore={
  color:'#0080ff',
  animation: 'blinker 1s linear infinite',
}
const pStyler={
  display:'flex',
  justifyContent:'center',
  fontWeight:'bold'
}
const projectImg={
   width:'300px',
   height:'225px',
   borderRadius: '2%',
}
const modalProjects={
  margin:'-5px -15px'
}
const closeBtn={
  fontSize:'25px',
  fontFamily: 'Lato, sans-serif',
  color:'#0080ff',
  cursor: 'pointer' 
}
const githubLink={
  textDecoration:'none',
  fontSize:'18px',
  color:'#0080ff',
  display:'flex',
  justifyContent:'center'
}
const indent={
  marginLeft:'20px',
  color:'orange',
  fontSize:'24px'
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

            <div className='openerBody'>
<h2>Kevin R. Hidalgo</h2>
        <h3>“It’s not how good you are, it’s how good you want to be”
</h3>

</div>

          
      </div>
{ /* <div className='midBorder'>Hello</div> */}


<div className='projSec'>
     <h1>Work <span style={underScore} className='underScore'>_</span></h1>
     <div className='pStyler'>
       <div className='pStylerTwo'>
<p style={pStyler}>As a fullstack web developer, my passion is creating different projects to enhance user experiences.
 To create applications that start from an idea in the head. 
It's a balance of applying various technology, designs, and research with non-stop
  experimentation.</p>
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
</div>

 <div className='projectSetOne'>
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
<a  href='https://github.com/kevinrhidalgo/dd-salud'>View Repo</a>
<a  href='https://github.com/kevinrhidalgo/dd-salud'>View Site</a>
      </div>
 
</div>
            <a className="close-modal" onClick={toggleModal}>
            <span style={closeBtn}>X</span>
            </a>
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
<a href='https://github.com/mascarelloa/shelfi'>View Repo</a>
<a href='https://myshelfi.herokuapp.com/'>View Site</a>
    </div>

</div>
<a className="close-modal" onClick={toggleModalTwo}>
            <span style={closeBtn}>X</span>
            </a>
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
            
            <a className="close-modal" onClick={toggleModalThree}>
              <span style={closeBtn}>X</span>
            </a>
          </div>
        </div>
      )}

    </>
  );
}