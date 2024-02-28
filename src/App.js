
import ScrollReveal from 'scrollreveal';

import React, { useEffect } from 'react';

import './App.css';
import aboutpsg from '../src/images/about-port.jpg'
import homepsg from '../src/images/PhotoRoom-20230818_003328.png';


import port1 from '../src/images/bloodbank.jpeg';
import port2 from '../src/images/staygold.jpeg';
import port3 from '../src/images/ibm.png';
import commingsoon from './images/coming-soon.webp'










function App() {
  useEffect(() => {
  
  window.watsonAssistantChatOptions = {
    integrationID: "62db2e57-08e6-4438-ad0a-4dcad73d4bc6", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "e9171ea5-04db-463e-8d08-5d580dba564e", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });

  
  
      /*========== scroll sections active link ==========*/
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');
  
        sections.forEach(sec => {
          const top = window.scrollY;
          const offset = sec.offsetTop - 150;
          const height = sec.offsetHeight;
          const id = sec.getAttribute('id');
  
          if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
          }
        });
      };
  
      /*========== sticky navbar ==========*/
      const handleStickyNavbar = () => {
        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 0);
      };
  
     
     
      
      /*========== dark light mode ==========*/
      const handleDarkModeClick = () => {
        const darkModeIcon = document.querySelector('#darkMode-icon');
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
      };
  
      /*========== scroll reveal ==========*/
      ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 100,
      });
  
      ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
      ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
      ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'top' });
      ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'top' });
  
      /*========== Event Listeners ==========*/
     
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleStickyNavbar);
      document.querySelector('#darkMode-icon').addEventListener('click', handleDarkModeClick);
  
      /*========== Clean-up ==========*/
      return () => {
       
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleStickyNavbar);
        document.querySelectorAll('header nav a').forEach(link => {
          
        });
        document.querySelector('#darkMode-icon').removeEventListener('click', handleDarkModeClick);
      };
   
  }, []); 
  return (
<>

<body>
  

  <header class="header">
      <a href="/" class="logo"><i class="fa-solid fa-graduation-cap"></i> PSG </a>
  
      <nav class="navbar">
              <a href="#home" class="active">Home</a>
              <a href="#about">About</a>
              <a href="#services">Skills</a>
              <a href="#portfolio">Projects</a>
              <a href="#contact">Contact</a>

              
          </nav>
  
      <div class="bx bx-moon" id="darkMode-icon"></div>
  
      <div class="bx bx-menu" id="menu-icon"></div>
  </header>
  
  
  <section class="home" id="home">
      <div class="home-content">
          <h3>Hello, I am</h3>
          <h1>Sai Ganesh</h1>
          <p>
              I'm a web developer who loves to create beautiful and functional websites
              for people who want to make a difference in the world.
          </p>
          <p>Currently I'm a student of The NEC College, where I'm learning how to
          create beautiful and functional websites using HTML, CSS, JavaScript, and Animations.</p>
  
          <div class="social-media">
              <a href="/"><i class='bx bxl-facebook'></i></a>
              <a href="/"><i class='bx bxl-twitter'></i></a>
              <a href="/"><i class='bx bxl-instagram-alt'></i></a>
              <a href="/"><i class='bx bxl-linkedin'></i></a>
          </div>
  
          <a href="/" class="btn">Download CV</a>
      </div>
  
     
  
      <div class="home-img">
          <img src={homepsg} alt=""></img>
   
      </div>
  </section>
  
  <section class="about" id="about">
      <div class="about-img">
      <img src={aboutpsg} alt=""></img>
      </div>
  
      <div class="about-content">
          <h2 class="heading">About <span>Me</span></h2>
          <h3>
              Hi there, welcome to my website! I'm SaiGanesh,
              a passionate web developer who enjoys learning new technologies
              and solving problems with code!
          </h3>
          <p>
          I hold a B-tech degree in  NEC College. My academic journey has equipped me with a solid foundation in CSE.
          </p>
          <p>
          Thank you for visiting my portfolio! I look forward to the exciting possibilities ahead.
          I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out if you'd like to chat about FullStack.
          </p>
          <a href="/" class="btn">Read More</a>
      </div>
  </section>
  
  <section class="services" id="services">
      <h2 class="heading">My <span>Skills</span></h2>
  
      <div class="services-container">
          <div class="services-box">
              <i class='bx bx-code-alt'></i>
              <h3>FrontEnd Development</h3>
              <p>Frontend development involves creating the user interface and experience of a website or web application. Here are some
                 frontend development skills:</p>
                 <p>Examples: Html , Css , Js , Git</p>
              <a href="/" class="btn">Read More</a>
          </div>
          <div class="services-box">
              <i class='bx bxs-paint'></i>
              <h3>BackEnd Development</h3>
              <p>Backend development involves building the server-side of web applications, managing databases, and handling server logic. Here are 
                 backend development skills:</p>
                 <p>Examples: JS (Node.js), python , java</p>
              <a href="/" class="btn">Read More</a>
          </div>
          <div class="services-box">
              <i class='bx bx-bar-chart-alt'></i>
              <h3>Databases</h3>
              <p>Databases are an integral part of software development, serving as organized repositories for storing, managing, and 
                retrieving data. </p>
              <p>Examples: MySQL , Oracle , MongoDB</p>
              <a href="/" class="btn">Read More</a>
          </div>
      </div>
  </section>
  
  
  <section class="portfolio" id="portfolio">
      <h2 class="heading">Latest <span>Project</span></h2>
  
      <div class="portfolio-container">
          <div class="portfolio-box">
              <img src={port1} alt=""></img>
  
              <div class="portfolio-layer">
                  <h4>BloodBank</h4>
                  <p>Visit</p>
                  <a href="/"><i class='bx bx-link-external'></i></a>
              </div>
          </div>
          <div class="portfolio-box">
              <img src={port2} alt=""></img>
  
              <div class="portfolio-layer">
                  <h4>StayGold</h4>
                  <p>Visit</p>
                  <a href="/"><i class='bx bx-link-external'></i></a>
              </div>
          </div>
          <div class="portfolio-box">
              <img src={port3} alt=""></img>
  
              <div class="portfolio-layer">
                  <h4>Ev-Point</h4>
                  <p>Visit</p>
                  <a href="/"><i class='bx bx-link-external'></i></a>
              </div>
          </div>
          <div class="portfolio-box">
              <img src={commingsoon} alt=""></img>
  
              <div class="portfolio-layer">
                  <h4>Comming Soon</h4>
                  <p>Visit</p>
                  <a href="/"><i class='bx bx-link-external'></i></a>
              </div>
          </div>
          <div class="portfolio-box">
              <img src={commingsoon} alt=""></img>
  
              <div class="portfolio-layer">
                  <h4>Comming Soon</h4>
                  <p>Visit</p>
                  <a href="/"><i class='bx bx-link-external'></i></a>
              </div>
          </div>
          <div class="portfolio-box">
              <img src={commingsoon} alt=""></img>
  
              <div class="portfolio-layer">
                  <h4>Comming Soon</h4>
                  <p>Visit</p>
                  <a href="/"><i class='bx bx-link-external'></i></a>
              </div>
          </div>
      </div>
  </section>


  
  
  <section class="contact" id="contact">
      <h2 class="heading">Contact <span>Me!</span></h2>
  
      <form action="#">
          <div class="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
          </div>
          <div class="input-box">
              <input type="number" placeholder="Mobile Number" />
              <input type="text" placeholder="Email Subject" />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" class="btn" />
      </form>
     
  </section>
  
  <footer class="footer">
      <div class="footer-text">
          <p>Copyright &copy; 2023 | All Rights Reserved.</p>
      </div>
  
      <div class="footer-iconTop">
          <a href="#home"><i class='bx bx-up-arrow-alt'></i></a>
      </div>
  </footer>


   
   </body>
</>
  )
}

export default App;
