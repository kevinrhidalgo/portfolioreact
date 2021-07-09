import React, { useState } from "react";
import './Opener.css'
import { Link } from "react-router-dom";
import salud from './saludHome.png'
import shelfi from './shelfi.png'
import underC from './underC.jpg'

const underScore={
  color:'tomato',
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
  color:'tomato'
}
const githubLink={
  textDecoration:'none',
  fontSize:'18px',
  color:'tomato',
  display:'flex',
  justifyContent:'center'
}



export default function Opener() {


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
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <a className="close-modal" onClick={toggleModal}>
            <span style={closeBtn}>X</span>
            </a>
          </div>
        </div>
      )}

{modalTwo && (
        <div className="modal">
          <div onClick={toggleModalTwo} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Hello
            </p>
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
            <h4>Heres the Link to my Github</h4>
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