const cardWorks = {
  card1: {
    id: 1,
    title: 'Youth Summit',
    description:
      'This is a website that advertises a youth conference taken place in Nigeria, there have been many youth summits in the country but SPEAK YOUTH TO POWER has made so much impact and wishes to make much more impact thus the reason why th conference holds',
    backgroundImage: './images/youthsummit.JPG',
    featuredImage: './images/youthsummit.JPG',
    technologies: [
      'Html',
      'CSS',
      'JAVASCRIPT',
    ],
    linkToLiveVersion: 'https://summyalena.github.io/YouthSummit/',
    LinkToSource: 'https://github.com/summyalena/YouthSummit',
  },
  card2: {
    id: 2,
    title: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: './images/popimage.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: 'https://summyalena.github.io/Website-Portfolio/',
    LinkToSource: 'https://github.com/summyalena/Website-Portfolio',
  },
  card3: {
    id: 3,
    title: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: './images/popimage.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: 'https://summyalena.github.io/Website-Portfolio/',
    LinkToSource: 'https://github.com/summyalena/Website-Portfolio',
  },
  card4: {
    id: 4,
    title: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: './images/popimage.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: 'https://summyalena.github.io/Website-Portfolio/',
    LinkToSource: 'https://github.com/summyalena/Website-Portfolio',
  },
  card5: {
    id: 5,
    title: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: './images/popimage.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: 'https://summyalena.github.io/Website-Portfolio/',
    LinkToSource: 'https://github.com/summyalena/Website-Portfolio',
  },
  card6: {
    id: 6,
    title: 'Professional Art Printing Data',
    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required. has been the industry standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    featuredImage: './images/popimage.png',
    technologies: ['Html', 'Bootstrap', 'Ruby'],
    linkToLiveVersion: 'https://summyalena.github.io/Website-Portfolio/',
    LinkToSource: 'https://github.com/summyalena/Website-Portfolio',
  },
};

const cardSection = document.querySelector('.cardworks');

Object.keys(cardWorks).forEach((cards) => {
  if (Object.hasOwnProperty.call(cardWorks, cards)) {
    const card = cardWorks[cards];
    cardSection.innerHTML += `
  <div class="card-images">
    <div class="cardwork-container">
      <div class=" cardwork cardwork1">
        <div class="cardcon">
          <h3>${card.title}</h3>
          <p>
          ${
  card.description.length > 90
    ? card.description.substring(0, 90)
    : card.description
}
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
  </div>`;
  }
});

const projectPopup = document.querySelector('.project-popup');
const popButton = document.querySelectorAll('.see');

popButton.forEach((popup) => {
  popup.addEventListener('click', (e) => {
    e.preventDefault();
    Object.keys(cardWorks).forEach((cards) => {
      if (Object.hasOwnProperty.call(cardWorks, cards)) {
        const card = cardWorks[cards];
        if (card.id.toString() === popup.id.toString()) {
          projectPopup.innerHTML = `
              <div class="popup-container">
                <div class = "popup-container-child">
                  <div class="popup-cardwork">
                    <div class = "title-popup">
                      <h1>${card.title}</h1>
                      <div class= "popup-close-btn">&times;</div>
                    </div>
                    <div class="popup-spancon">
                        <span class="popup-span">${card.technologies[0]}</span>
                        <span class="popup-span">${card.technologies[1]}</span>
                        <span class="popup-span">${card.technologies[2]}</span>
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
                          <a href="https://summyalena.github.io/Website-Portfolio/" class="see-btn" >See Live <img class="imgIcon" src="./images/icon.png"/></a>
                          <a href="https://github.com/summyalena/Website-Portfolio" class="see-btn" >See Source <img class="imgIcon" src="./images/Vector.png"/></a>
                        </div>
                      </div>
                    </div>
                  <div/>
                </div>
              </div>`;

          const closePopup = document.querySelector('.popup-close-btn');

          closePopup.addEventListener('click', () => {
            projectPopup.innerHTML = '';
          });
        }
      }
    });
  });
});

// #Form Validation
const form = document.getElementById('form');
const names = document.getElementById('name');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const textArea = document.getElementById('area');
const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto2');
const contactArr = [];

// eslint-disable-next-line
displayData();

function storeData() {
  const data = {
    name: names.value,
    lastName: lastName.value,
    email: email.value,
    textArea: textArea.value,
  };
  contactArr.push(data);
  localStorage.setItem('contactUsData', JSON.stringify(contactArr));
}

function getDataFromLS() {
  const retrievedData = JSON.parse(localStorage.getItem('contactUsData'));
  return retrievedData;
}

function displayData() {
  const getData = getDataFromLS();
  if (getData) {
    names.value = getData[0].names;
    lastName.value = getData[0].lastName;
    email.value = getData[0].email;
    textArea.value = getData[0].textArea;
  }
}

const Error = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const success = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = ' ';
  texto.innerText = 'successful';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

/* eslint-disable no-useless-escape */
const RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateInput() {
  const lastNameValue = lastName.value;
  const nameValue = names.value;
  const textAreaValue = textArea.value.trim();
  const emailValue = email.value;

  if (nameValue === '') {
    Error(names, 'Please input your name');
    Error(texto2, 'Kindly fill in the necessary details');
  }

  if (lastNameValue === '') {
    Error(lastName, 'Please input your last name');
    Error(texto2, 'Kindly fill in the necessary details');
  }

  if (emailValue === '') {
    Error(email, 'please input an email');
    Error(texto2, 'Kindly fill in the necessary details');
  } else if (!emailValue.match(RegExp)) {
    Error(email, 'your email should have standard email format');
    Error(texto2, 'Kindly fill in the necessary details');
  }

  if (textAreaValue === '') {
    Error(textArea, 'Please input a message');
  } else {
    Error(texto2, 'Kindly fill in the necessary details');
  }

  if (textAreaValue && emailValue && emailValue.match(RegExp) && lastNameValue && nameValue) {
    success(texto);
    success(names);
    success(lastName);
    success(email);
    success(textArea);
    storeData();
    form.reset();
  }
}

// we have to add what happens it wants to submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // eslint-disable-next-line
  validateInput();

  // form.reset();
});

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
