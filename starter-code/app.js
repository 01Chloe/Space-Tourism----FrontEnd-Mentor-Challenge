// Navigation
const nav = document.querySelector('nav');
const menuBtn = document.querySelector('.menu-btn');
const lines = document.querySelector('.line');

menuBtn.addEventListener('click', handleNavigation);

function handleNavigation() {
     nav.classList.toggle('active');
     lines.classList.toggle('active');
}

const navLinks = document.querySelectorAll(".nav-link");
const allGlobalpages = document.querySelectorAll('.page');
let indexPage = 0;

navLinks.forEach(link => {
     link.addEventListener('click', () => {
          indexPage = link.getAttribute('data-index');

          for(i = 0; i < allGlobalpages.length; i++) {
               if(allGlobalpages[i].getAttribute('data-index') == indexPage) {
                    allGlobalpages[i].classList.add('active');
               } else {
                    allGlobalpages[i].classList.remove('active');
               }
          }
     })
})

// Navigation slide Anim
const linkSelectNav = 'active-nav';

function changeNav(el, linkSelectNav) {
     navLinks.forEach(link => {
          if(link.classList.contains(linkSelectNav)) {
               link.classList.remove(linkSelectNav);
          }
     });
     el.classList.add(linkSelectNav);
}

navLinks.forEach(link => {
     link.addEventListener('click', () => {
          changeNav(link, linkSelectNav);
     })
})

// Reload home page
const logo = document.querySelector('.logo');
const homePage = document.querySelector('.home');
const destPage = document.querySelector('.destination');
const crewPage = document.querySelector('.crew');
const technologyPage = document.querySelector('.technology');

logo.addEventListener('click', function() {
     location.reload();
     destPage.classList.remove('active');
     crewPage.classList.remove('active');
     technologyPage.classList.remove('active');
})

// Explorer btn
const explorerBtn = document.querySelector('.home-btn');
const destLink = document.querySelector('.dest-link');

explorerBtn.addEventListener('click', explorFunction);

function explorFunction() {
     destPage.classList.add('active');
     navLinks.forEach(link => {
          link.classList.remove('active-nav');
     })
     destLink.classList.add('active-nav');
     homePage.classList.remove('active');
     crewPage.classList.remove('active');
     technologyPage.classList.remove('active');
}

// Change background image Home Page
const homeSection = document.querySelector('.home');
window.addEventListener('resize', bgHomeSize);
function bgHomeSize() {
     if(window.innerWidth < 500) {
          homeSection.style.backgroundImage = "url('./assets/home/background-home-mobile.jpg')";
          homeSection.style.backgroundSize = 'cover';
     } else if(window.innerWidth < 950) {
          homeSection.style.backgroundImage = "url('./assets/home/background-home-tablet.jpg')";
          homeSection.style.backgroundSize = 'cover';
          homeSection.style.backgroundPosition = 'center';
     } else if(window.innerWidth < 1400) {
          homeSection.style.backgroundImage = "url('./assets/home/background-home-desktop.jpg')";
          homeSection.style.backgroundSize = 'cover';
     } else {
          homeSection.style.backgroundImage = "url('./assets/home/background-home-desktop.jpg')";
          homeSection.style.backgroundSize = 'cover';
     }
}
bgHomeSize();

// Change background image Destination Page
const destinationSection = document.querySelector('.destination');
window.addEventListener('resize', bgDestinationSize);
function bgDestinationSize() {
     if(window.innerWidth < 500) {
          destinationSection.style.backgroundImage = "url('./assets/destination/background-destination-mobile.jpg')";
          destinationSection.style.backgroundSize = 'cover';
     } else if(window.innerWidth < 950) {
          destinationSection.style.backgroundImage = "url('./assets/destination/background-destination-tablet.jpg')";
          destinationSection.style.backgroundSize = 'cover';
          destinationSection.style.backgroundPosition = 'center';
     } else if(window.innerWidth < 1400) {
          destinationSection.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
          destinationSection.style.backgroundSize = 'cover';
     } else {
          destinationSection.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
          destinationSection.style.backgroundSize = 'cover';
     }
}
bgDestinationSize();

// Change background image Crew Page
const crewSection = document.querySelector('.crew');
window.addEventListener('resize', bgCrewSize);
function bgCrewSize() {
     if(window.innerWidth < 500) {
          crewSection.style.backgroundImage = "url('./assets/crew/background-crew-mobile.jpg')";
          crewSection.style.backgroundSize = 'cover';
     } else if(window.innerWidth < 950) {
          crewSection.style.backgroundImage = "url('./assets/crew/background-crew-tablet.jpg')";
          crewSection.style.backgroundSize = 'cover';
          crewSection.style.backgroundPosition = 'center';
     } else if(window.innerWidth < 1400) {
          crewSection.style.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
          crewSection.style.backgroundSize = 'cover';
     } else {
          crewSection.style.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
          crewSection.style.backgroundSize = 'cover';
     }
}
bgCrewSize();

// Change background image Technology Page
const techSection = document.querySelector('.technology');
window.addEventListener('resize', bgTechSize);
function bgTechSize() {
     if(window.innerWidth < 500) {
          techSection.style.backgroundImage = "url('./assets/technology/background-technology-mobile.jpg')";
          techSection.style.backgroundSize = 'cover';
     } else if(window.innerWidth < 950) {
          techSection.style.backgroundImage = "url('./assets/technology/background-technology-tablet.jpg')";
          techSection.style.backgroundSize = 'cover';
          techSection.style.backgroundPosition = 'center';
     } else if(window.innerWidth < 1400) {
          techSection.style.backgroundImage = "url('./assets/technology/background-technology-desktop.jpg')";
          techSection.style.backgroundSize = 'cover';
     } else {
          techSection.style.backgroundImage = "url('./assets/technology/background-technology-desktop.jpg')";
          techSection.style.backgroundSize = 'cover';
     }
}
bgTechSize();

// Navigation Destination Page
const linkPlanet = document.querySelectorAll(".destination-link");
const allImages = document.querySelectorAll('.img-planet');
const allDesc = document.querySelectorAll('.dest-desc');
const distance = document.querySelectorAll('.distance');
const time = document.querySelectorAll('.time');
let indexPlanet = 0;

linkPlanet.forEach(link => {
     link.addEventListener('click', () => {
          indexPlanet = link.getAttribute('data-index');

          for(i = 0; i < allImages.length; i++) {
               if(allImages[i].getAttribute('data-index') == indexPlanet) {
                    allImages[i].classList.add('img-active');
               } else {
                    allImages[i].classList.remove('img-active');
               }
          }

          for(i = 0; i < allDesc.length; i++) {
               if(allDesc[i].getAttribute('data-index') == indexPlanet) {
                    allDesc[i].classList.add('active');
               } else {
                    allDesc[i].classList.remove('active');
               }
          }

          for(i = 0; i < distance.length; i++) {
               if(distance[i].getAttribute('data-index') == indexPlanet) {
                    distance[i].classList.add('active');
               } else {
                    distance[i].classList.remove('active');
               }
          }

          for(i = 0; i < time.length; i++) {
               if(time[i].getAttribute('data-index') == indexPlanet) {
                    time[i].classList.add('active');
               } else {
                    time[i].classList.remove('active');
               }
          }
     })
})

// Navigation Destination Anim
const linkSelectDest = 'active-dest';

function change(el, linkSelectDest) {
     linkPlanet.forEach(link => {
          if(link.classList.contains(linkSelectDest)) {
               link.classList.remove(linkSelectDest);
          }
     });
     el.classList.add(linkSelectDest);
}

linkPlanet.forEach(link => {
     link.addEventListener('click', () => {
          change(link, linkSelectDest);
     })
})

// navigation Crew Page
const crewImages = document.querySelectorAll('.img-crew');
const crewTitle = document.querySelectorAll('.crew-title');
const crewParag = document.querySelectorAll('.crew-parag');
const allCircleCrew = document.querySelectorAll('.circle');
let indexCircle = 0;

allCircleCrew.forEach(circle => {
     circle.addEventListener('click', () => {
          indexCircle = circle.getAttribute('data-index');

          for(i = 0; i < crewImages.length; i++) {
               if(crewImages[i].getAttribute('data-index') == indexCircle) {
                    crewImages[i].classList.add('crew-img-active');
               } else {
                    crewImages[i].classList.remove('crew-img-active');
               }
          }

          for(i = 0; i < crewTitle.length; i++) {
               if(crewTitle[i].getAttribute('data-index') == indexCircle) {
                    crewTitle[i].classList.add('active');
               } else {
                    crewTitle[i].classList.remove('active');
               }
          }

          for(i = 0; i < crewParag.length; i++) {
               if(crewParag[i].getAttribute('data-index') == indexCircle) {
                    crewParag[i].classList.add('active');
               } else {
                    crewParag[i].classList.remove('active');
               }
          }
     })
})

// Navigation Crew Anim
const circleSelect = 'active';

function changeCircle(el, circleSelect) {
     allCircleCrew.forEach(circle => {
          if(circle.classList.contains(circleSelect)) {
               circle.classList.remove(circleSelect);
          }
     });
     el.classList.add(circleSelect);
}
allCircleCrew.forEach(circle => {
     circle.addEventListener('click', () => {
          changeCircle(circle, circleSelect);
     })
})


// Navigation Technology Page
const techBtns = document.querySelectorAll('.tech-btn');
const allImgTechMobile = document.querySelectorAll('.img-tech-mobile');
const allImgTechDesktop = document.querySelectorAll('.img-tech-desktop');
const techTitle = document.querySelectorAll('.tech-title');
const techParag = document.querySelectorAll('.tech-parag');
let btnTechIndex = 0;

techBtns.forEach(btn => {
     btn.addEventListener('click', () => {
          btnTechIndex = btn.getAttribute('data-index');

          for(i = 0; i < allImgTechMobile.length; i++) {
               if(allImgTechMobile[i].getAttribute('data-index') == btnTechIndex) {
                    allImgTechMobile[i].classList.add('tech-img-active');
               } else {
                    allImgTechMobile[i].classList.remove('tech-img-active');
               }
          }

          for(i = 0; i < allImgTechDesktop.length; i++) {
               if(allImgTechDesktop[i].getAttribute('data-index') == btnTechIndex) {
                    allImgTechDesktop[i].classList.add('tech-img-active');
               } else {
                    allImgTechDesktop[i].classList.remove('tech-img-active');
               }
          }

          for(i = 0; i < techTitle.length; i++) {
               if(techTitle[i].getAttribute('data-index') == btnTechIndex) {
                    techTitle[i].classList.add('active');
               } else {
                    techTitle[i].classList.remove('active');
               }
          }
          for(i = 0; i < techParag.length; i++) {
               if(techParag[i].getAttribute('data-index') == btnTechIndex) {
                    techParag[i].classList.add('active');
               } else {
                    techParag[i].classList.remove('active');
               }
          }
     })
})

// Navigation Technology Anim
const btnTechSelect = 'active';

function changeBtnTech(el, btnTechSelect) {
     techBtns.forEach(btn => {
          if(btn.classList.contains(btnTechSelect)) {
               btn.classList.remove(btnTechSelect);
          }
     });
     el.classList.add(btnTechSelect);
}

techBtns.forEach(btn => {
     btn.addEventListener('click', () => {
          changeBtnTech(btn, btnTechSelect);
     })
})