// nav logo color scroll
let customMainContainer = document.querySelector('.custom-main-container');
let navLogo = document.querySelector('.custom-nav-logo');
// nav button
let navButton = document.querySelector("#nav-button");
let customNavButtonBox = document.querySelector('.custom-nav-button-box');
let navIntContainer = document.querySelector(".custom-nav-int-container");
let icon = document.querySelector('.icon');
let iconsBg = document.querySelectorAll('.cstm-nav-icon-bg');
let navIntLine = document.querySelector('.cstm-nav-int-line');
let headerLine = document.querySelector('.cstm-header-line');
let swiperBtnPrev = document.querySelector('#cstm-swiper01-button-prev');
let swiperBtnNext = document.querySelector('#cstm-swiper01-button-next');
let porfolioSection = document.querySelector('#portfolio');
let swiperBtnPrev02 = document.querySelector('#cstm-swiper02-button-prev');
let swiperBtnNext02 = document.querySelector('#cstm-swiper02-button-next');
let skillsSection = document.querySelector('#skills');
let skillsLines = document.querySelectorAll('.cstm-body-line');
let skillsLinesMB = document.querySelectorAll('.cstm-body-line-mb');
let aboutSection = document.querySelector('#about');
let contactsSection = document.querySelector('#contacts');
let contactsLine = document.querySelector('.cstm-contact-line');
let navLinks = document.querySelectorAll('.cstm-nav-link');



headerLine.style.height = "100%";

customMainContainer.addEventListener("scroll", () => {
  if(customMainContainer.scrollTop == 0){
    headerLine.style.height = "100%";
  } else{
    headerLine.style.height = "0";
  }
  if (customMainContainer.scrollTop > 0) {
    navLogo.style.backgroundColor = `var(--clr-trans-black)`;
  } else{
    navLogo.style.backgroundColor = `var(--clr-primary)`;
  }


  if (Math.round(customMainContainer.scrollTop) == Math.round(porfolioSection.offsetTop) || Math.round(customMainContainer.scrollTop) == Math.round(skillsSection.offsetTop)){
    swiperBtnPrev.style.left = "-10px";
    swiperBtnNext.style.right = "-10px";
    swiperBtnPrev02.style.left = "-10px";
    swiperBtnNext02.style.right = "-10px";
  } else {
    swiperBtnPrev.style.left = "-70px";
    swiperBtnNext.style.right = "-70px";
    swiperBtnPrev02.style.left = "-70px";
    swiperBtnNext02.style.right = "-70px";
  }

  if (Math.round(customMainContainer.scrollTop) == Math.round(skillsSection.offsetTop) || Math.round(customMainContainer.scrollTop) == Math.round(aboutSection.offsetTop)){
    navLogo.style.backgroundColor = `var(--clr-primary)`;
    skillsLines.forEach((line) => {
      line.style.height = '20%'
    });
    skillsLinesMB.forEach((line) => {
      line.style.width = '15%'
    });
  } else {
    skillsLines.forEach((line) => {
      line.style.height = '0'
    })
    skillsLinesMB.forEach((line) => {
      line.style.width = '0'
    });
  }

  if (Math.round(customMainContainer.scrollTop) == Math.round(aboutSection.offsetTop)){
    navLogo.style.backgroundColor = `var(--clr-trans-black)`;
  }

  if (Math.round(customMainContainer.scrollTop) == Math.round(contactsSection.offsetTop)){
    contactsLine.style.width = `100%`;
  } else{
    contactsLine.style.width = `0`;
  }
  
});

let check = true
navButton.addEventListener("click", () => {
  icon.classList.toggle("open");
  if (check == true) {
    navButton.classList.add('cstm-toggle-nav-button')
    navIntContainer.style.left = 0;
    customNavButtonBox.style.width = '25%';
    navIntLine.style.transitionDelay = '0.75s';
    navIntLine.style.width = '35%';
    iconsBg.forEach((iconBg) => {
      iconBg.style.backgroundColor = 'var(--clr-white)'
    })

    check = false;
  } else {
    navButton.classList.remove('cstm-toggle-nav-button')
    navIntContainer.style.left = "3000px";
    customNavButtonBox.style.width = '70px';
    navIntLine.style.transitionDelay = '0s';
    navIntLine.style.width = '0'
    iconsBg.forEach((iconBg) => {
      iconBg.style.backgroundColor = 'var(--clr-black)'
    })
    check = true;
  };
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    icon.classList.toggle("open");
    navButton.classList.remove('cstm-toggle-nav-button')
    navIntContainer.style.left = "3000px";
    customNavButtonBox.style.width = '70px';
    navIntLine.style.transitionDelay = '0s';
    navIntLine.style.width = '0'
    iconsBg.forEach((iconBg) => {
      iconBg.style.backgroundColor = 'var(--clr-black)'
    })
    check = true;
  });
})

// Portfolio Elements


let portfolioCards = [
  { title: 'Vanilla Css Grid System Demo', category: 'css', difficulty: 5, url: 'https://sinaloah.github.io/grid/', color: 'rgb(137, 42, 78)', link:'#home' },
  { title: 'Sinaloah Website Demo', category: 'websites', difficulty: 8, url: './media/sinaloah_bg.jpg', color: 'rgb(42, 137, 134)', link:'#home' },
]

let swiperWrapper = document.querySelector('#cstm-swiper01-wrapper');
let customPortfolioLeftSection = document.querySelector('.cstm-portfolio-left-bg-color');

function showCards() {
  portfolioCards.forEach((card, i) => {
    let div = document.createElement('div')
    div.classList.add('swiper-slide')
    div.innerHTML = `
    <a target="_blank" href="${card.link}">
        <div class="cstm-portfolio-card-bg-color custom-portfolio-card">
            <h3 class="custom-txt-color-light cstm-portfolio-card-title text-uppercase">${card.title}</h3>
            <div class="custom-portfolio-title-balance-box"></div>
        </div>
        <img class="custom-portfolio-img" src="${card.url}" alt="">
    </a>
        `
    swiperWrapper.appendChild(div);
    
  })
  
}

// Swiper carousel

showCards()

// Swiper Box

const swiper01 = new Swiper('#swiper01', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
      el: '.swiper-scrollbar',
  },
});

let counter = 0
customPortfolioLeftSection.style.backgroundColor = portfolioCards[counter].color;
let customPortfolioCards = document.querySelectorAll('.cstm-portfolio-card-bg-color');
  customPortfolioCards.forEach((card)=>{
    card.style.backgroundColor = portfolioCards[counter].color;
  })
let swiperBullets = document.querySelectorAll('.swiper-pagination-bullet');
swiperBullets.forEach((bullet)=>{
    bullet.style.backgroundColor = portfolioCards[counter].color;
  })

function forward(){
  counter++;
  if (counter >= (portfolioCards.length)) {
    counter = 0;
  }
  customPortfolioLeftSection.style.backgroundColor = portfolioCards[counter].color;
  swiperBullets.forEach((bullet)=>{
    bullet.style.backgroundColor = portfolioCards[counter].color;
  })
  customPortfolioCards.forEach((card)=>{
    card.style.backgroundColor = portfolioCards[counter].color;
  })
}
function back(){
  counter--;
  if (counter < 0) {
    counter = (portfolioCards.length - 1);
  }
  customPortfolioLeftSection.style.backgroundColor = portfolioCards[counter].color;
  swiperBullets.forEach((bullet)=>{
    bullet.style.backgroundColor = portfolioCards[counter].color;
  })
  customPortfolioCards.forEach((card)=>{
    card.style.backgroundColor = portfolioCards[counter].color;
  })
}
swiper01.on('slideChange', function ({realIndex:r,previousIndex:p}) {
if(r-p==1){
forward()
}
else{
back()
}
});

// Swiper Box


const swiper02 = new Swiper('#swiper02', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
      el: '.swiper-scrollbar',
  },
});






let x = 1;
while (x <= 12) {
  let plane = document.createElement('div');
  plane.className = `plane plane-${x}`;
  plane.style.transform = `rotateY(${x * 15}deg)`;
  document.querySelector('.sphere-wrapper').appendChild(plane);
  for (y = 1; y <= 36; y++) {
    let spoke = document.createElement('div');
    spoke.className = `spoke spoke-${y}`;
    spoke.innerHTML = ` <div class="dot" style="background-color:${
      y % 2 === 0 ? '#b1b1b1' : '#bc110d'
    }; animation: pulsate .5s infinite ${aDelay(y)}s alternate both"></div>`;
    spoke.style.transform = `rotateZ(${y}0deg)`;
    document.querySelector(`.plane-${x}`).appendChild(spoke);
  }
  x++;
}
function aDelay(t) {
  switch (t) {
    case 1:
    case 35:
      return 0.05;
    case 2:
    case 34:
      return 0.1;
    case 3:
    case 33:
      return 0.15;
    case 4:
    case 34:
      return 0.2;
    case 5:
    case 33:
      return 0.25;
    case 6:
    case 30:
      return 0.3;
    case 7:
    case 29:
      return 0.35;
    case 8:
    case 28:
      return 0.4;
    case 9:
    case 27:
      return 0.45;
    case 10:
    case 26:
      return 0.5;
    case 11:
    case 25:
      return 0.55;
    case 12:
    case 24:
      return 0.6;
    case 13:
    case 23:
      return 0.65;
    case 14:
    case 22:
      return 0.7;
    case 15:
    case 21:
      return 0.75;
    case 16:
    case 20:
      return 0.8;
    case 17:
    case 19:
      return 0.85;
    case 18:
      return 0.95;
    case 36:
      return 0;
    default:
      return 1;
  }
}
