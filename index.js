let cardWorks = {
  card1: {
    id:1,
     title:'Professional Art Printing Data',
     description:"A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
     featuredImage:'./images/popimage.png',
     technologies:[
      'Html',
      'Bootstrap',
      'Ruby'
     ],
     linkToLiveVersion:'https://summyalena.github.io/Website-Portfolio/',
     LinkToSource:'......'
  },
 card2: {
    id:2,
     title:'Professional Art Printing Data',
     description:"A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
     featuredImage:'./images/popimage.png',
     technologies:{
      span1: 'Html',
      span2: 'Bootstrap',
      span3: 'Ruby'
     },
     linkToLiveVersion:'https://summyalena.github.io/Website-Portfolio/',
     LinkToSource:'......'
  },
 card3: {
    id:3,
     title:'Professional Art Printing Data',
     description:"A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
     featuredImage:'./images/popimage.png',
     technologies:[
      'Html',
      'Bootstrap',
      'Ruby'
     ],
     linkToLiveVersion:'https://summyalena.github.io/Website-Portfolio/',
     LinkToSource:'......'
  },
  card4: {
    id:4,
     title:'Professional Art Printing Data',
     description:"A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
     featuredImage:'./images/popimage.png',
     technologies:[
      'Html',
      'Bootstrap',
      'Ruby'
     ],
     linkToLiveVersion:'https://summyalena.github.io/Website-Portfolio/',
     LinkToSource:'......'
  },
 card5:  {
    id:5,
     title:'Professional Art Printing Data',
     description:"A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
     featuredImage:'./images/popimage.png',
     technologies:[
      'Html',
      'Bootstrap',
      'Ruby'
     ],
     linkToLiveVersion:'https://summyalena.github.io/Website-Portfolio/',
     LinkToSource:'......'
  },
  card6: {
    id:6,
     title:'Professional Art Printing Data',
     description:"A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
     featuredImage:'./images/popimage.png',
     technologies:[
      'Html',
      'Bootstrap',
      'Ruby'
     ],
     linkToLiveVersion:'https://summyalena.github.io/Website-Portfolio/',
     LinkToSource:'......'
  }
}

const cardSection = document.querySelector('.cardworks')

for(const cards in cardWorks){
  if(Object.hasOwnProperty.call(cardWorks, cards)){
   const card =  cardWorks[cards]
  cardSection.innerHTML += `
  <div class="card-images">
    <div class="cardwork-container">
      <div class=" cardwork cardwork1">
        <div class="cardcon">
          <h3>${card.title}</h3>
          <p>
          ${card.description.length > 90 ? card.description.substring(0,90) : card.description}
          </p>
          <div class="spancon">
            <span class="span">HTML</span>
            <span class="span">CSS</span>
            <span class="span">JAVASCRIPT</span>
          </div>
        </div>
        <div class="button">
          <a href="" id= "${card.id}" class="see" >See Project</a>
        </div>
      </div>
    </div>
  </div>`
}
}

const projectPopup = document.querySelector('.project-popup')
console.log(projectPopup)
const popButton = document.querySelectorAll('.see')
console.log(popButton)

popButton.forEach(popup=> {
  popup.addEventListener('click', (e)=>{
    e.preventDefault()
    for(const cards in cardWorks){
      if(Object.hasOwnProperty.call(cardWorks,cards)){
        const card = cardWorks[cards]
          if (card.id == popup.id) {
            projectPopup.innerHTML = `
              <div class="popup-container">
                <div class = "popup-container-child">
                  <div class="popup-cardwork">
                    <div class = "title-popup">
                      <h1>${card.title}</h1>
                      <div class= "popup-close-btn">&times;</div>
                    </div>
                    <div class="popup-spancon">
                        <span class="popup-span">HTML</span>
                        <span class="popup-span">CSS</span>
                        <span class="popup-span">JAVASCRIPT</span>
                    </div>
                    <div class = "image-text-container">
                      <div class="popup-image">
                        <img class = "image-pop" src="${card.featuredImage}" alt="images">
                      </div>
                      <div class = "popup-text-btn-contain">
                        <p class="popup-description">
                          ${card.description}
                        </p>

                        <div class="see-btn-container">
                          <a href="" class="see-btn" >See Live</a>
                          <a href="" class="see-btn" >See Source</a>
                        </div>
                      </div>
                    </div>
                  <div/>
                </div>
              </div>`
          }
    }
  }
    
  })
}
)

const mobileNav = document.querySelector('.mobile-nav');
const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const mobileNavLink = document.querySelectorAll('.mobile-nav-link');

hamburgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('is-active');
  hamburgerClose.classList.toggle('is-active');
});

mobileNavLink.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.toggle('is-active');
    hamburgerClose.classList.toggle('is-active');
  });
});
