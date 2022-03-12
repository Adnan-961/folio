import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import Fade from 'react-reveal/Fade';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
   const [name,setName] = useState("");
   const [mail,setMail] = useState("");
   const [msg,setMsg] = useState("");
   const form = useRef();
  const sendEmail = (e) => {
     
    e.preventDefault();

    emailjs.sendForm('service_7mzdufo', 'template_3uimxzc', form.current, 'M1v5zhPUgnRZRbxcv')
      .then((result) => {
        toast.success('🤩 Email Sent', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          });
          setName("");
          setMail("");
          setMsg("");
      }, (error) => {
        toast.error('😭 Something Went Wrong! ', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
  };
  
    return(
        <><ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        />
        <Fade top>
        <div id="wave">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00b4d8" fill-opacity="1" d="M0,128L20,144C40,160,80,192,120,208C160,224,200,224,240,208C280,192,320,160,360,144C400,128,440,128,480,128C520,128,560,128,600,112C640,96,680,64,720,53.3C760,43,800,53,840,64C880,75,920,85,960,85.3C1000,85,1040,75,1080,64C1120,53,1160,43,1200,42.7C1240,43,1280,53,1320,53.3C1360,53,1400,43,1420,37.3L1440,32L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
       </div> </Fade>  
        <div id="contact-container">
            <div className="msg"><h2
          className="projects__section--title"
        >
          Drop me an <span>Email.</span>
        </h2></div>
            <form ref={form} onSubmit={sendEmail}>
            
                <div className="form-name">
             <input type="text" name="from_name" value={name}   placeholder=" Name:" className="form-inputs" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-name">
             <input type="email" name="from_email" value={mail}  placeholder=" Email:" className="form-inputs"  onChange={(e)=>setMail(e.target.value)}/>
                </div>
                <div className="form-message">
             <textarea placeholder=" Message:" name="message" value={msg} className="form-inputs"  onChange={(e)=>setMsg(e.target.value)}/>
                </div>
                <div className="form-name">
             <button id="form-btn" value="Send">Send</button>
                </div>
            </form>
            </div>
          </>
    )
}
export default Contact;