let cardWorks = {
  card1: {
    id:1,
     title:'Professional Art Printing Data',
     description:'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard',
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
     description:'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard',
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
     description:'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard',
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
     description:'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard',
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
     description:'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard',
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
     description:'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard',
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
  if(Object.hasOwnProperty.call(cardWorks,cards)){
   const card =  cardWorks[cards]
 console.log(card)
  cardSection.innerHTML += `
  <div class="cardimages">
  <div class=" cardwork cardwork1">
  <div class="cardcon">
    <h3>${card.title}</h3>
    <p>
     ${card.description}
    </p>
    <div class="spancon">
      <span class="span">HTML</span>
      <span class="span">CSS</span>
      <span class="span">JAVASCRIPT</span>
    </div>
  </div>
  <div class="button">
    <a href="" id=${card.id} class="see" type="button">See Project</>
  </div>
  </div>
  </div>
  </div>
</div>`
}

}

const popButton = document.querySelectorAll('.button')

popButton.forEach(popup=>{
  popup.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(popup.id)
    for(const cards in cardWorks){
      if(Object.hasOwnProperty.call(cardWorks,cards)){
        const card = cardWorks[cards]
        console.log(card)
      cardSection.innerHTML += `
      <div class="cardimages">
      <div class=" cardwork cardwork1">
      <div class="cardcon">
        <h3>${card.title}</h3>
        <p>
         ${card.description}
        </p>
        <div class="spancon">
          <span class="span">HTML</span>
          <span class="span">CSS</span>
          <span class="span">JAVASCRIPT</span>
        </div>
      </div>
      <div class="button">
        <a href="" class="see" type="button">See Project</>
      </div>
      </div>
      </div>
      </div>
    </div>`
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
