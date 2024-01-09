<script>
	import { metatags } from "@roxi/routify";
	import { onMount, onDestroy } from "svelte";
	import Hotjar from "@hotjar/browser";
	import Typewriter from "typewriter-effect/dist/core";

	metatags.title = "Kyle Todd - Software Developer";
	metatags.description = "Software Developer";

	let x = 0;
	let y = 0;
	let animationFrameId;
	let typewriter;
	let sections;
	let scrollPosition = 0;
	let observer;
	let index = 0;
	let activePopup = null;
	let nonActive = null;
	const siteId = 3790677;
	const hotjarVersion = 6;
	let name = "";
	let email = "";
	let message = "";
	let buttonText = "Submit";
	let buttonClass = "btn btn-primary btn-lg d-block w-100";

	const resumeUrl = "KYLETODD_Resume.pdf";

	function handleDownloadClick(event) {
		event.preventDefault();
		window.location.href = resumeUrl;
	}

	const updateCursor = (event) => {
		x = event.clientX - window.scrollX - 200;
		y = event.clientY - window.scrollY - 200;

		// console.log(x, y);
		// x = event.clientX - 200 + window.scrollX;
		// y = event.clientY - 180 + window.scrollY;
	};

	async function handleSubmit(event) {
		event.preventDefault();

		buttonText = "Submitting...";
		buttonClass = "btn btn-success btn-lg d-block w-100";

		const formData = { name, email, message };

		try {
			const response = await fetch("https://api.kyletodd.com.au/submitemail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				buttonText = "Message Submitted";
				name = email = message = "";

				setTimeout(() => {
					buttonText = "Submit";
					buttonClass = "btn btn-primary btn-lg d-block w-100";
				}, 2500);
			} else {
				throw new Error("Submission failed");
			}
		} catch (error) {
			console.error("Error:", error);
			buttonText = "Submission Failed";
			alert(
				"There was an error submitting the form \n Please send an email to kyleatodd@outlook.com",
			);
			buttonClass = "btn btn-danger btn-lg d-block w-100";
		}
	}

	let techs = [
		"Azure",
		"CSS",
		"Docker",
		"Flask",
		"Git",
		"HTML",
		"Java",
		"JavaScript",
		"Jupyter",
		"NodeJs",
		"PHP",
		"Python",
		"Rest API's",
		"SQL",
		"Svelte",
	];

	function togglePopup(tech) {
		// If there's an active popup, close it and restore its icon style
		if (activePopup) {
			document.getElementById(`popup-${activePopup}`).style.display = "none";
			document.getElementById(activePopup).style.filter =
				"invert(100%) sepia(90%) saturate(4%) hue-rotate(123deg) brightness(108%) contrast(100%)";
		}

		// If the clicked tech was already active, set activePopup to null (indicating no active popup)
		if (activePopup === tech) {
			activePopup = null;
		} else {
			// Otherwise, show the new popup and change its icon style
			document.getElementById(`popup-${tech}`).style.display = "block";
			document.getElementById(tech).style.filter = "brightness(1)";
			activePopup = tech;
		}
	}

	onMount(() => {
		// Listen for mousemove to update the cursor position
		window.addEventListener("mousemove", updateCursor);
		// Add hotjar
		Hotjar.init(siteId, hotjarVersion);
		// Initialize the typewriter effect
		typewriter = new Typewriter("#typewriter", {
			strings: [
				"a design-first",
				"a full-stack",
				"a problem solving",
				"a clean code",
				"a user-centric",
			],
			autoStart: true,
			loop: true,
		});

		// Configure Intersection Observer options
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1, // Adjust as needed
		};

		// Initialize Intersection Observer
		observer = new IntersectionObserver(handleIntersect, options);

		// Query sections and add them to the observer
		sections = document.querySelectorAll(".section");
		sections.forEach((section) => observer.observe(section));

		// ARROW SCROLL FUNCTION
		function scrollToSection(sectionId) {
			const section = document.querySelector(sectionId);
			if (section) {
				const top = section.offsetTop;
				window.scrollTo({
					top: top,
					behavior: "smooth",
				});
			}
		}

		// Attach listeners to each arrow/trigger
		document.querySelectorAll(".scroll-down-arrow").forEach((arrow) => {
			arrow.addEventListener("click", (event) => {
				event.preventDefault();

				// Get the section ID from a data attribute or other means
				const sectionId = arrow.getAttribute("data-section");
				scrollToSection(sectionId);
			});
		});
	});

	function handleScroll() {
		scrollPosition = window.scrollY || document.documentElement.scrollTop;
	}

	function handleIntersect(entries, observer) {
		console.log("Intersection observed:", entries); // Log entries
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				console.log("Element is in the viewport:", entry.target); // Log target element
				entry.target.classList.add("slide-in");
				entry.target.classList.remove("section");
			} else {
				entry.target.classList.remove("slide-in");
				entry.target.classList.add("section");
			}
		});
	}

	onDestroy(() => {
		window.removeEventListener("mousemove", updateCursor);
		cancelAnimationFrame(animationFrameId);
		typewriter.stop();
		window.removeEventListener("scroll", handleScroll);
		observer.disconnect();
	});
</script>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
	<nav class="navbar navbar-dark fixed-top mynav">
		<div class="container-fluid justify-content-start" id="top">
			<ul class="nav">
				<li class="nav-item">
					<a
						class="brand-link"
						href="https://www.linkedin.com/in/kyleatodd/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="linkedin.svg"
							alt=""
							width="30"
							height="24"
							class="d-inline-block"
						/>
					</a>
				</li>
				<li class="nav-item">
					<a
						class="brand-link"
						href="https://github.com/KyleTodd"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="github.svg"
							alt=""
							width="22"
							height="20"
							class="d-inline-block"
						/>
					</a>
				</li>
			</ul>
		</div>
	</nav>

	<div class="hero container-fluid">
		<div class="row justify-content-center align-items-center h-100">
			<div class="col-12 text-center">
				<div class="hero-intro">Hi there, I'm</div>
				<div class="hero-name">
					Kyle Todd <div class="hand">👋</div>
				</div>
				<div class="hero-title"><div id="typewriter" /></div>
				<div class="hero-desc">Software Developer</div>
				<div class="mt-5">
					<a
						href="#content-main"
						class="scroll-down-arrow"
						data-section="#content-main"
					>
						<span>Click me to continue!</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Main container  -->
	<div class="container" id="content-main">
		<!-- Start content -->
		<div class="section slide-in row" id="about-me">
			<h2>💭 About Me</h2>
			<div class="col">
				<div class="about-me-content col">
					Final year University of Technology Sydney student with a deep-rooted
					passion for coding, I blend analytical expertise with client-facing
					skills to develop innovative tech solutions. Here is some of the tech
					that I love working with:
					<div>
						<div class="col-12">
							<div class="tech-content">
								<!-- Tech Icons Start  -->
								<div class="tech-icons">
									{#each techs as tech}
										<div class="tech-item">
											<img
												src={`/tech/${tech}.svg`}
												alt={tech}
												class="tech-logo"
												id={tech}
												title={tech}
												on:click={() => togglePopup(tech)}
											/>
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
				<div class="mt-5 d-flex justify-content-center">
					<a
						href="#education"
						class="scroll-down-arrow smallscreen-arrow"
						data-section="#education"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"
							/></svg
						></a
					>
				</div>
			</div>
		</div>

		<div class="education-sub section slide-in" id="education">
			<h2 class="text-md-left">🎓 Education</h2>
			<div class="col-12">
				<div class="edu-content">
					<div class="row justify-content-center">
						<div class="col-sm-4 col-md-2 col-6">
							<img class="uts" src="uts.svg" />
						</div>
						<div class="col-md-4 col-6 text-md-left align-self-center">
							<div>Bachelor of Science in IT</div>
							<div>Major - Enterprise Software Development</div>
							<div>Distinction Average</div>
							<div>Completed: 2023</div>
						</div>
						<div class="col-sm-4 col-md-2 col-6">
							<img class="uts" src="uts.svg" />
						</div>
						<div class="col-md-4 col-6 text-md-left align-self-center">
							<div>Bachelor of Business</div>
							<div>Major - Finance</div>
							<div>Credit Average</div>
							<div>Expected: 2024</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="mt-5 d-flex justify-content-center">
					<a
						href="#f-project"
						class="scroll-down-arrow"
						data-section="#f-project"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="50"
							height="50"
							viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"
							/></svg
						></a
					>
				</div>
			</div>
		</div>

		<div class="section slide-in content row" id="f-project">
			<h2>🌟 Featured Project</h2>

			<div class="container d-md-flex align-items-center">
				<!-- Iphone Mockup -->
				<div class="col-md-6 col-sm-12">
					<img src="iphone14full.webp" width="100%" alt="Iphone Mockup" />
				</div>

				<!-- Featured Project Info -->
				<div class="col-md-6 col-sm-12">
					<div>
						<h5
							class="card-title card-text-colour"
							style="font-weight: 700; font-size:3em; margin-bottom:1em;"
						>
							Insurance Policy Manager
						</h5>
						<p
							class="card-text card-text-colour"
							style="font-family:monospace;"
						>
							Deployed scalable and reliable insurance broker client document
							management software using Svelte as a front end and NodeJS as an
							API to interface with the MySql Database. All are hosted on Azure
							in production and Google Cloud for demo.
						</p>
					</div>
					<div>
						<p class="f-project-icons">
							<img src="/tech/Svelte.svg" class="tech-logo" />
							<img src="/tech/NodeJs.svg" class="tech-logo" />
							<img src="/tech/Rest API's.svg" class="tech-logo" />
							<img src="/tech/SQL.svg" class="tech-logo" />
							<img src="/tech/Azure.svg" class="tech-logo" />
						</p>
						<a
							href="https://github.com/KyleTodd/CoverCompanion"
							class="btn btn-dark"
							><img src="github.svg" class="button-logo" /></a
						>
						<a
							href="https://covercompanion-sx5k-main-g6qvsh5ywa-as.a.run.app/Login"
							target="_blank"
							class="btn btn-light"
							style="margin-left: 1em;">Demo</a
						>
					</div>
				</div>
			</div>
			<div class="mt-5 d-flex justify-content-center">
				<a href="#projects" class="scroll-down-arrow" data-section="#projects"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="50"
						height="50"
						viewBox="0 0 24 24"
						><path
							fill="none"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"
						/></svg
					></a
				>
			</div>
		</div>

		<div class="section slide-in content row" id="projects">
			<h2>💡 My Work</h2>

			<!-- Carousel for small screens -->
			<div
				id="projectsCarousel"
				class="carousel slide d-md-none centered-carousel"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					<!-- Carousel item for Card 1 -->
					<div class="carousel-item active">
						<div class="card project-card">
							<img
								class="card-img-top"
								src="/stocktrader.webp"
								alt="Stock Trader"
							/>
							<div class="card-body">
								<h5 class="card-title card-text-colour">Stock Trader</h5>
								<p class="card-text card-text-colour">
									Analyses stock sentiment for various social media sources and
									trades the market.
								</p>
								<p class="card-text">
									<img src="/tech/Python.svg" class="tech-logo" />
									<img src="/tech/Rest API's.svg" class="tech-logo" />
									<img src="/tech/SQL.svg" class="tech-logo" />
								</p>
								<a
									href="https://github.com/1crowie1/stock-project"
									class="btn btn-dark"
								>
									<img src="github.svg" class="button-logo" />
								</a>
							</div>
						</div>
					</div>

					<!-- Carousel item for Card 2 -->
					<div class="carousel-item">
						<div class="card project-card">
							<img
								class="card-img-top"
								src="/betting.webp"
								alt="Betting Arbitrage Finder"
							/>
							<div class="card-body">
								<h5 class="card-title card-text-colour">
									Betting Arbitrage Finder
								</h5>
								<p class="card-text card-text-colour">
									Identifies opportunities within the Australian sports betting
									market for odds arbitrage.
								</p>
								<p class="card-text">
									<img src="/tech/Python.svg" class="tech-logo" />
									<img src="/tech/Rest API's.svg" class="tech-logo" />
									<img src="/tech/Flask.svg" class="tech-logo" />
								</p>
								<a href="https://github.com/KyleTodd/Arby" class="btn btn-dark"
									><img src="github.svg" class="button-logo" /></a
								>
								<a
									href="https://arby-g6qvsh5ywa-as.a.run.app/"
									target="_blank"
									class="btn btn-light"
									style="margin-left: 1em;">Demo</a
								>
							</div>
						</div>
					</div>

					<!-- Carousel item for Card 3 -->
					<div class="carousel-item">
						<div class="card project-card">
							<img class="card-img-top" src="/api.webp" alt="Resume API" />
							<div class="card-body">
								<h5 class="card-title card-text-colour">Resume API</h5>
								<p class="card-text card-text-colour">
									Custom API allowing anyone to pull data from my resume.
								</p>
								<p class="card-text">
									<img src="/tech/JavaScript.svg" class="tech-logo" />
									<img src="/tech/Rest API's.svg" class="tech-logo" />
									<img src="/tech/NodeJs.svg" class="tech-logo" />
								</p>
								<a
									href="https://github.com/KyleTodd/ResumeAPI"
									class="btn btn-dark"
								>
									<img src="github.svg" class="button-logo" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Carousel Controls -->
				<a
					class="carousel-control-prev"
					href="#projectsCarousel"
					role="button"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true" />
					<span class="visually-hidden">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#projectsCarousel"
					role="button"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true" />
					<span class="visually-hidden">Next</span>
				</a>
			</div>

			<div class="row d-none d-md-flex">
				<!-- Card 2 -->
				<div class="col-lg-4 col-md-6 mb-4">
					<div class="card project-card">
						<img
							class="card-img-top"
							src="/stocktrader.webp"
							alt="Card image cap"
						/>
						<div class="card-body">
							<h5 class="card-title card-text-colour">Stock Trader</h5>
							<p class="card-text card-text-colour">
								Analyses stock sentiment for various social media sources and
								trades the market
							</p>
							<p class="card-text">
								<img src="/tech/Python.svg" class="tech-logo" />
								<img src="/tech/Rest API's.svg" class="tech-logo" />
								<img src="/tech/SQL.svg" class="tech-logo" />
							</p>
							<a
								href="https://github.com/1crowie1/stock-project"
								class="btn btn-dark"
								><img src="github.svg" class="button-logo" /></a
							>
						</div>
					</div>
				</div>

				<!-- Card 3 -->
				<div class="col-lg-4 col-md-6 mb-4">
					<div class="card project-card">
						<img
							class="card-img-top"
							src="/betting.webp"
							alt="Card image cap"
						/>
						<div class="card-body">
							<h5 class="card-title card-text-colour">
								Arby - Betting Arbitrage Finder
							</h5>
							<p class="card-text card-text-colour">
								Identifies opportunities within the Australian sports betting
								market for odds arbitrage.
							</p>
							<p class="card-text">
								<img src="/tech/Python.svg" class="tech-logo" />
								<img src="/tech/Rest API's.svg" class="tech-logo" />
								<img src="/tech/Flask.svg" class="tech-logo" />
							</p>
							<a href="https://github.com/KyleTodd/Arby" class="btn btn-dark"
								><img src="github.svg" class="button-logo" /></a
							>
							<a
								href="https://arby-g6qvsh5ywa-as.a.run.app/"
								target="_blank"
								class="btn btn-light"
								style="margin-left: 1em;">Demo</a
							>
						</div>
					</div>
				</div>

				<!-- Card 4 -->
				<div class="col-lg-4 col-md-6 mb-4">
					<div class="card project-card">
						<img class="card-img-top" src="/api.webp" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title card-text-colour">Resume API</h5>
							<p class="card-text card-text-colour">
								Custom API allowing anyone to pull data from my resume.
							</p>
							<p class="card-text">
								<img src="/tech/JavaScript.svg" class="tech-logo" />
								<img src="/tech/Rest API's.svg" class="tech-logo" />
								<img src="/tech/NodeJs.svg" class="tech-logo" />
							</p>
							<a
								href="https://github.com/KyleTodd/CryptoCheckerCMC-API"
								class="btn btn-dark"
								><img src="github.svg" class="button-logo" /></a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-5 d-flex justify-content-center">
				<a
					href="#work-experience"
					class="scroll-down-arrow"
					data-section="#work-experience"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="50"
						height="50"
						viewBox="0 0 24 24"
						><path
							fill="none"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"
						/></svg
					></a
				>
			</div>
		</div>

		<div class="content bottom-page" id="work-experience">
			<div class="row justify-content-center">
				<div class="col-12 col-sm-6 section slide-in" id="contact-me">
					<div class="resume">
						<h2>💼 Resume</h2>
						<button
							href="KYLETODD_Resume.pdf"
							target="_blank"
							download="KYLETODD_Resume.pdf"
							class="btn btn-dark tn-lg d-block resdownload w-100"
							on:click={handleDownloadClick}
						>
							Download Resume
						</button>
					</div>

					<h2 class="contact-me">👋 Contact Me</h2>

					<div class="contact-content">
						<div class="row align-items-left justify-content-left">
							<!-- Email Section -->
							<div class=" col-12 text-left">
								<form on:submit={handleSubmit}>
									<div class="form-group form-inputs">
										<input
											type="text"
											class="form-control form-control-lg"
											id="name"
											name="name"
											bind:value={name}
											placeholder="Name"
											required
										/>
									</div>

									<div class="form-group form-inputs">
										<input
											type="email"
											class="form-control form-control-lg"
											id="email"
											name="email"
											bind:value={email}
											placeholder="Email"
											required
										/>
									</div>

									<div class="form-grou form-inputs">
										<textarea
											id="message"
											name="message"
											placeholder="Your Message"
											bind:value={message}
											class="form-control form-control-lg"
											required
										/>
									</div>

									<button type="submit" class={buttonClass}>{buttonText}</button
									>
								</form>
							</div>

							<!-- Phone Section -->
							<div class="phone">
								<h2>📞 Phone</h2>
								<p>
									<a href="tel:+610410932131" class="btn btn-secondary w-100"
										>Call me</a
									>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-5 d-flex justify-content-center">
				<a href="#top" class="scroll-down-arrow" data-section="#top"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="50"
						height="50"
						viewBox="0 0 24 24"
						class="rotate-up"
						><path
							fill="none"
							stroke="white"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5"
						/></svg
					></a
				>
			</div>
		</div>

		<!-- <div id="cursor-light" style="left: {x}px; top: {y}px;"></div> -->
		<!-- <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
     style="background: radial-gradient(600px at {x}px {y}px, rgba(255, 255, 255, 0.99), transparent 80%);">
</div> -->
	</div>
	<!--WHOLE CONTENT DIV -->
</body>
