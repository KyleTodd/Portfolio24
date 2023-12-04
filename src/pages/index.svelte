<script>
  import { metatags } from '@roxi/routify';
  import { onMount, onDestroy } from 'svelte';
  import Typewriter from 'typewriter-effect/dist/core';

  metatags.title = 'Kyle Todd - Software Developer';
  metatags.description = 'Software Developer';
  
  let x = 0;
  let y = 0;
  let animationFrameId;
  let typewriter;
  let sections;
  let scrollPosition = 0;
  let observer;
  let index = 0;

  const resumeUrl = 'KYLETODD_Resume.pdf';

  function handleDownloadClick(event) {
    event.preventDefault();
    window.location.href = resumeUrl;
  }

  const updateCursor = (event) => {
  x = event.clientX -300 + window.scrollX;
  y = event.clientY -1550  + window.scrollY; 

  console.log(x,y);
  // x = event.clientX - 200 + window.scrollX;
  // y = event.clientY - 180 + window.scrollY; 
  }

  let techs = [
        "Azure", "CSS",  "Django", "Git", "HTML",
        "Java", "JavaScript","Jupyter", "NodeJs", "PHP", "Python","Rest API's", "SQL", 
        "Svelte"
    ];

  
  
  let activePopup = null;
  let nonActive = null;

  function togglePopup(tech) {
    // If there's an active popup, close it and restore its icon style
    if (activePopup) {
        document.getElementById(`popup-${activePopup}`).style.display = 'none';
        document.getElementById(activePopup).style.filter = 'invert(100%) sepia(90%) saturate(4%) hue-rotate(123deg) brightness(108%) contrast(100%)';
    }

    // If the clicked tech was already active, set activePopup to null (indicating no active popup)
    if (activePopup === tech) {
        activePopup = null;
    } else {
        // Otherwise, show the new popup and change its icon style
        document.getElementById(`popup-${tech}`).style.display = 'block';
        document.getElementById(tech).style.filter = 'brightness(1)';
        activePopup = tech;
    }
}


  onMount(() => {
    // Listen for mousemove to update the cursor position
    window.addEventListener('mousemove', updateCursor);

    // Initialize the typewriter effect
    typewriter = new Typewriter('#typewriter', {
      strings: [
        'a design-first',
        'a full-stack',
        'a problem solving',
        'a clean code',
        'a tech stack agnostic',
        'a user-centric',
      ],
      autoStart: true,
      loop: true,
    });

    // Configure Intersection Observer options
    const options = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.20 // Adjust as needed
    };

    // Initialize Intersection Observer
    observer = new IntersectionObserver(handleIntersect, options);

    // Query sections and add them to the observer
    sections = document.querySelectorAll('.section');  
    sections.forEach(section => observer.observe(section));

    const arrow = document.querySelector('.scroll-down-arrow');
    arrow.addEventListener('click', function(event) {
        event.preventDefault();
        
        const contentMain = document.querySelector('#content-main');
        const top = contentMain.offsetTop;

        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    });
  });

  function handleScroll() {
  scrollPosition = window.scrollY || document.documentElement.scrollTop;
  }

  function handleIntersect(entries, observer) {
  console.log("Intersection observed:", entries);  // Log entries
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element is in the viewport:", entry.target);  // Log target element
      // entry.target.classList.add('slide-in');
      // entry.target.classList.remove('section');
    } else {
      // entry.target.classList.remove('slide-in');
      // entry.target.classList.add('section');
    }
  });
}


  onDestroy(() => {
    window.removeEventListener('mousemove', updateCursor);
    cancelAnimationFrame(animationFrameId);
    typewriter.stop();
    window.removeEventListener('scroll', handleScroll);
    observer.disconnect();
  });
</script>

  <style>
    .card-title{
      letter-spacing: -1.1px;
    }
    ul{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .hero-intro{
      opacity: 60%;  
    }

    .hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .scroll-down-arrow {
        font-size: 2rem;
        transition: transform 0.3s;
        display: block;
        cursor: pointer;
    }

    .scroll-down-arrow:hover {
        transform: translateY(10px);
    }

    #content-main{
      padding-top: 3em;
    }

    .hero-name{
      font-size: 4em;
      font-weight: 700;
      letter-spacing: -1.2px;
    }

    .hero-title{
      font-size: 3em;
      display: inline;
      opacity: 60%;
      letter-spacing: -1.2px;
    }

    .hero-desc{
      font-size: 3em;
      font-weight: 500;
      display: inline-block;
    }

    @media (max-width: 768px) {
      .hero-name {
          font-size: 3em;
      }

      .hero-title, .hero-desc {
          font-size: 2em;
      }
    }

    @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(14deg); }
    75% { transform: rotate(-8deg); }
    }

    .hand {
        display: inline-block;
        animation: wave 0.5s infinite;  /* Wave duration is 0.5s */
        animation-duration: 3s;        /* Animation runs for 3 seconds */
        animation-iteration-count: 1;  /* Animation runs only once */
    }

    .hand:hover {
        animation: wave 0.5s infinite;  /* Wave duration is 0.5s */
        animation-duration: 3s;        /* Animation runs for 3 seconds */
        animation-iteration-count: 100;  /* Animation runs only once */
    }
    
    .memoji{
      max-width: 20%;
      height: auto;
      z-index: 2;
    }

    .tech-content{
      padding-top: 3%;
      text-align: center;
    }

    .uts{
      filter: invert(100%) sepia(90%) saturate(4%) hue-rotate(123deg) brightness(108%) contrast(100%);
    }

    .degree-year{
      opacity: 70%;
      font-family: monospace;
    }

    .bachelor{
      font-weight: 600;
    }

    #cursor-light {
      position: fixed;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: rgba(2, 103, 121, 0.2);
      filter: blur(4rem);
      pointer-events: none;
      z-index: -2;
    }

    .section {
      opacity: 0;
      transform: translateX(-100px);  
      transition: opacity 3s ease, transform 3s ease;
    }

    .slide-in {
      opacity: 1;
      transform: translateX(0px);
      transition: opacity 3s ease, transform 3s ease;  

    }
    
    .scroll-box {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    border-radius: 5px;
    z-index: 9999;
  }

    .content{
      padding-left: 1em;
      margin-top:5em;
    }

    .about-me-content{
      opacity: 100%;
      font-style:normal;
      font-size: 1em;
      font-weight: 300;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      background: rgb(255, 255, 255);
      border-radius: 6px;
      color: #130d46;
      padding: 1em;
    }

    .project-card{
      opacity: 90%;
      background: linear-gradient(45deg, rgb(12, 5, 35), rgb(23, 10, 75));
      box-shadow: 5px 5px 25px #130d46;
    }

    .card-text-colour{
      color: white;
      opacity: 90%;
    }

    .timeline .work-item {
    position: relative;
    margin-bottom: 50px;
    }

  .timeline .work-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: calc(15% - 5px);
      height: 100%;
      width: 2px;
      background-color: #ccc;
  }

  .timeline .date {
      font-weight: bold;
  }

  .timeline .details h4 {
      font-weight: bold;
  }

  .timeline .details h5 {
      font-style: italic;
  }

  .tech-logo {
        width: 50px;  
        height: 50px; 
        filter: invert(100%) sepia(90%) saturate(4%) hue-rotate(123deg) brightness(108%) contrast(100%);
        margin: 0 10px;
        transition: filter 0.3s ease;
        fill: white;
    }

    .tech-logo:hover {
        filter: brightness(1);
        cursor: pointer;
    }

    .button-logo{
      width: 25%;
      height: 25%;
    }

    .tech-item {
      display: inline-flex;
      align-items: center;
      position: relative;
    }

  .tech-popup {
      display: none;
      background-color: rgb(255, 255, 255);
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 10px;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
      margin-left: 10px;
      white-space: nowrap;
      color: black;
      transition: opacity 3s ease, transform 1s ease;  /* Prevents the text inside the popup from wrapping to the next line */
    }

    .f-project-icons{
      margin-top: 3em;
      margin-bottom: 2em;
    }

    .linkedin-banner {
    position: fixed;    /* Fix position */
    top: 0;          /* Align to the bottom of the screen */
    left: 0;            /* Align to the left of the screen */
    width: 100%;        /* Full width */
    background-color: rgba(0, 0, 0, 0.6);  /* Black background with 60% opacity */
    color: #ffffff;     /* White text */
    text-align: center; /* Centered text */
    padding: 10px 0;    /* Padding on top and bottom */
    z-index: 1000;      /* Ensure it's on top of other elements */
    }

    .brand-link {
    margin-right: 0rem; 
    }
    

    

  </style>

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
<body>

  <nav class="navbar navbar-dark fixed-top ">
    <div class="container-fluid justify-content-start">
      <ul class="nav ">
        <li class="nav-item">
          <a class="brand-link" href="https://www.linkedin.com/in/kyleatodd/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.svg" alt="" width="30" height="24" class="d-inline-block">
          </a>
        </li>
        <li class="nav-item">
          <a class="brand-link" href="https://github.com/KyleTodd" target="_blank" rel="noopener noreferrer">
            <img src="github.svg" alt="" width="22" height="20" class="d-inline-block">
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="hero container-fluid">
    <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 text-center">
            <div class="hero-intro">Hi there, I'm</div>
            <div class="hero-name">Kyle Todd <div class="hand">👋</div></div>
            <div class="hero-title"><div id="typewriter"></div></div>
            <div class="hero-desc">Software Developer</div>
            <div class="mt-5">
                <a href="#content-main" class="scroll-down-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"/></svg></a>
            </div>
        </div>
    </div>
</div>

  <div class="container" id="content-main">
    <div class="section slide-in row" id="about-me">
      <h2>💭 About Me </h2>
      <div class="col">
        <!-- <div class="row justify-content-end">
          <img src="/applemoji.png" alt="Picture of me!" class="img-fluid memoji"/>
        </div> -->
        <div class="about-me-content col">
          Final year University of Technology Sydney student with a deep-rooted passion for coding,
          I blend analytical expertise with client-facing skills to develop innovative tech solutions. Here is some of the tech that I love working with:
        <div>
          <div class="col-12">
            <div class="tech-content">
              <!-- Tech Icons Start  -->
              <div class="tech-icons">
               
                {#each techs as tech}
                  <div class="tech-item">
                    <img src={`/tech/${tech}.svg`} alt={tech} class="tech-logo" id={tech} title={tech} on:click={() => togglePopup(tech)}>
                    <div class="tech-popup" id={`popup-${tech}`}>
                      {tech}
                    </div>
                  </div>
                {/each}
              </div>
              
              <!-- Tech Icons Stop -->
            
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <div class="section slide-in content row" id="f-project">
        <h2>🌟 Featured Project</h2>

        <div class="container d-md-flex align-items-center">
          <!-- Iphone Mockup -->
          <div class="col-md-6 col-sm-12">
            <img src="iphone14.png" width="100%" alt="Iphone Mockup">
          </div>

          <!-- Featured Project Info -->
          <div class="col-md-6 col-sm-12">
            <div>
              <h5 class="card-title card-text-colour" style="font-weight: 700; font-size:3em; margin-bottom:1em;">Insurance Policy Manager</h5>
              <p class="card-text card-text-colour" style="font-family:monospace;">
                Deployed scalable and reliable insurance broker client document management software using Svelte as a front end and NodeJS as an API to interface with the MySql Databse. All hosted on Azure.
              </p>
            </div>
            <div>
              <p class="f-project-icons">
                <img src="/tech/Svelte.svg" class="tech-logo">
                <img src="/tech/NodeJs.svg" class="tech-logo">
                <img src="/tech/Rest API's.svg" class="tech-logo">
                <img src="/tech/SQL.svg" class="tech-logo">
                <img src="/tech/Azure.svg" class="tech-logo">
              </p>
              <a href="#" class="btn btn-dark"><img src="github.svg" class="button-logo"></a>
             <a href="https://www.bespokeinsurance.app/" target="_blank" class="btn btn-light" style="margin-left: 1em;">View Project</a>
            </div>
          </div>

        </div>

        
    <div class="section slide-in content row" id="projects">
      <h2>💡 My Work </h2>
  
      <div class="row">
    
          <!-- Card 2 -->
          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card project-card">
                  <img class="card-img-top" src="/stocktrader.png" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title card-text-colour">Stock Trader</h5>
                      <p class="card-text card-text-colour">Analyses stock sentiment for various social media sources and trades the market</p>
                      <p class="card-text ">
                        <img src="/tech/Python.svg" class="tech-logo">
                        <img src="/tech/Rest API's.svg" class="tech-logo">
                        <img src="/tech/SQL.svg" class="tech-logo">
                      </p>
                      <a href="https://github.com/1crowie1/stock-project" class="btn btn-dark"><img src="github.svg" class="button-logo"></a>
                 
                  </div>
              </div>
          </div>
  
          <!-- Card 3 -->
          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card project-card">
                  <img class="card-img-top" src="/betting.png" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title card-text-colour">Betting Arbitrage Finder</h5>
                      <p class="card-text card-text-colour">Finds oppurtunities within the Austrailian sports betting scene for odds arbitrage oppurtunities</p>
                      <p class="card-text ">
                        <img src="/tech/Python.svg" class="tech-logo">
                        <img src="/tech/Rest API's.svg" class="tech-logo">
                        <img src="/tech/Django.svg" class="tech-logo">
                      </p>
                      <a href="#" class="btn btn-dark"><img src="github.svg" class="button-logo"></a>
                      
                  </div>
              </div>
          </div>
  
          <!-- Card 4 -->
          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card project-card">
                  <img class="card-img-top" src="/api.png" alt="Card image cap">
                  <div class="card-body">
                      <h5 class="card-title card-text-colour">Resume API</h5>
                      <p class="card-text card-text-colour">Custome API allowing anyone to pull data from my resume.</p>
                      <p class="card-text ">
                        <img src="/tech/JavaScript.svg" class="tech-logo">
                        <img src="/tech/Rest API's.svg" class="tech-logo">
                        <img src="/tech/NodeJs.svg" class="tech-logo">
                        <img src="/tech/HTML.svg" class="tech-logo">
                      </p>
                      <a href="https://github.com/KyleTodd/CryptoCheckerCMC-API" class="btn btn-dark"><img src="github.svg" class="button-logo"></a>
                      
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="section slide-in content row">
    <h2>🎓 Education</h2>
    <div class="col-12">
        <div class="edu-content">
            <div class="row d-flex align-items-center">
                <div class="col-sm-2 col-12">
                    <img class="uts" src="uts.svg">
                </div>
                <div class="col-md-4 col-12 degree">
                    <div class="row bachelor">Bachelor of Science in IT</div>
                    <div class="row">Major - Enterprise Systems Development</div>
                    <div class="row degree-year">Distinction Average</div>
                    <div class="row degree-year">Exp. 2024</div>
                </div>
                <div class="col-sm-2 col-12">
                    <img class="uts" src="uts.svg">
                </div>
                <div class="col-md-4 col-12 degree">
                    <div class="row bachelor">Bachelor of Business</div>
                    <div class="row">Major - Finance</div>
                    <div class="row degree-year">Credit Average</div>
                    <div class="row degree-year">2023</div>
                </div>
            </div>
        </div>
    </div>
</div>


  <div class="section slide-in content" id="work-experience">
    <h2>💼 Resume</h2>
    <div class="row">
      <div class="col-6">
        <a href="KYLETODD_Resume.pdf" target="_blank" download="KYLETODD_Resume.pdf" class="btn btn-primary" on:click={handleDownloadClick}>
          Download Resume
        </a>        
      </div>
      <div class="col-6"> Use API</div>
    </div>
  </div>

    <div class="section slide-in content row">
      <h2>📞 Contact Me</h2>
      <div class="col-12">
          <div class="contact-content">
              <div class="row d-flex align-items-center justify-content-center">
                  <!-- Email Section -->
                  <div class="col-lg-6 col-md-8 col-sm-10 col-12 text-center">
                      <h4>✉️ Email</h4>
                      <p>
                          <a href="mailto:kylearodd@outlook.com" class="btn btn-primary">Send me an Email</a>
                      </p>
                  </div>
                  <!-- Phone Section -->
                  <div class="col-lg-6 col-md-8 col-sm-10 col-12 text-center">
                      <h4>📞 Phone</h4>
                      <p>
                          <a href="tel:+610410932131" class="btn btn-secondary">Call me</a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>


</div>

  <div id="cursor-light" style="left: {x}px; top: {y}px;"></div>

  

  
</body>