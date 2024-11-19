let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 2.PNG"
    },
    {
      name: "loki",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 1.PNG"
    },
    {
      name: "wanda vision",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 3.PNG"
    },
    {
      name: "raya and the last dragon",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 4.PNG"
    },
    {
      name: "luca",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!",
      image: "images/slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; //track slides
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  ,
    //create DOM elements
    let slide = document.createElement("div"); //slider div
    let imgElement = document.createElement("img"); //image
    let content = document.createElement("div"); //slide-content
    let h1 = document.createElement("h1"); //movie-title
    let p = document.createElement("p"); //movie-desc
  
    // attach movies to dom
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    //setting element class names
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-desc";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 4; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  const cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });








  //added by me

  
  document.addEventListener("DOMContentLoaded", function() {
    const loginLink = document.querySelector(".login-link");
    const loginPopup = document.getElementById("login-popup");
    const loginForm = document.getElementById("login-form");
  
    loginLink.addEventListener("click", function(event) {
      event.preventDefault();
      loginPopup.style.display = "block";
    });
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (username === "" || password === "") {
        alert("Please enter both username and password");
        return;
      }
  
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.json())
      .then(data => {
        if (data.authenticated) {
          window.location.href = "/protected";
        } else {
          alert("Invalid username or password");
        }
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred while logging in. Please try again.");
      });
    });
  });
  //added by me