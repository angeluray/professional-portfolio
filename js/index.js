const menuHamburguer = document.querySelector('.burguer-menu');
const myNav = document.querySelector('.menu-sections');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('active');
  myNav.classList.toggle('active');
});

document.querySelectorAll('.link-nav').forEach((n) => n.addEventListener('click', () => {
  menuHamburguer.classList.remove('active');
  myNav.classList.remove('active');
}));

const myWorkContainer = document.querySelector('.my-work');

const myCardsContent = [

  {
    myCardId: 'card-1',
    workImage: 'images/To-Do-List.png',
    modalImage: 'images/To-Do-List.png',
    modalImgClose: 'images/cancel.png',
    workTitle: 'Personal To-Do List',
    workDescription: '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    workTools: ['CSS', 'HTML', 'JavaScript', 'Linters'],
    seeLive: 'https://angeluray.github.io/angel-todo-list/',
    seeSource: 'https://github.com/angeluray/angel-todo-list',
    myMbId: 'btnId1',

  },

  {
    myCardId: 'card-2',
    workImage: 'images/imageplaceholder.png',
    modalImage: 'images/test-image.png',
    modalImgClose: 'images/cancel.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: 'btnId2',

  },

  {
    myCardId: 'card-3',
    workImage: 'images/imageplaceholder.png',
    modalImage: 'images/snp-image.png',
    modalImgClose: 'images/cancel.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A dailyyy selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: 'btnId3',

  },

  {
    myCardId: 'card-4',
    workImage: 'images/imageplaceholder.png',
    modalImage: 'images/test-image.png',
    modalImgClose: 'images/cancel.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: 'btnId4',

  },

];

const dynamiContent = () => {
  let myVarCont = '';

  for (let i = 0; i < myCardsContent.length; i += 1) {
    const myCardCon = ` <div class="cards" id="${myCardsContent[i].myCardId}">

       <div class="image-container">
          <img src="${myCardsContent[i].workImage}" alt="First project visualization" class="my-project-image">
       </div>

       <div class="my-flex-card">
          <h2 class="my-work-title">${myCardsContent[i].workTitle}</h2>
          <p class="my-work-description">${myCardsContent[i].workDescription}</p>
           <ul class="my-work-tools">
              <li class="li-css">${myCardsContent[i].workTools[0]}</li>
              <li>${myCardsContent[i].workTools[1]}</li>
              <li>${myCardsContent[i].workTools[2]}</li>
              <li>${myCardsContent[i].workTools[3]}</li>
           </ul>
          <button class="visualize-button actv" id="${myCardsContent[i].myMbId}"type="button" >See Project</button>
        </div></div>`;
    myVarCont += myCardCon;
  }
  myWorkContainer.insertAdjacentHTML('beforeend', myVarCont);
};
dynamiContent();

// ...........MODAL POPUP........................................

const btnId1 = document.getElementById('btnId1');
const btnId2 = document.getElementById('btnId2');
const btnId3 = document.getElementById('btnId3');
const btnId4 = document.getElementById('btnId4');

let i = 0;

function display() {
  const popbody = document.querySelector('body');
  const windowSection = document.createElement('section');
  const divContainer = document.createElement('div');
  const sectionDiv = document.createElement('div');
  const windowHeader = document.createElement('header');
  const windowTitle = document.createElement('h1');
  const ClosImg = document.createElement('img');
  const divImgContainer = document.createElement('div');
  const windowImg = document.createElement('img');
  const popupParagraph = document.createElement('p');
  const ul = document.createElement('ul');
  const ulLi1 = document.createElement('li');
  const ulLi2 = document.createElement('li');
  const ulLi3 = document.createElement('li');
  const ulLi4 = document.createElement('li');
  const divButton = document.createElement('div');
  const popBtn1 = document.createElement('button');
  const popBtn2 = document.createElement('button');
  const myAnchorSee = document.createElement('a');
  const myAnchorSource = document.createElement('a');

  popbody.className = 'popbody';
  windowSection.className = 'popupsection';
  divContainer.className = 'popwindow-Container';
  sectionDiv.className = 'popup-div';
  windowHeader.className = 'popup-H';
  windowTitle.className = 'windowTitle';
  ClosImg.className = 'cancel';
  divImgContainer.className = 'div-Img-Container';
  windowImg.className = 'window-div-Img ';
  popupParagraph.className = 'divP';
  ul.className = 'listMain';
  ulLi1.setAttribute('class', 'list list1');
  ulLi2.setAttribute('class', 'list list2');
  ulLi3.setAttribute('class', 'list list3');
  ulLi4.setAttribute('class', 'list list4');
  divButton.className = 'button-div';
  popBtn1.className = 'button1';
  popBtn2.className = 'button2';

  popbody.appendChild(windowSection);
  windowSection.appendChild(divContainer);
  divContainer.appendChild(sectionDiv);
  sectionDiv.appendChild(windowHeader);
  windowHeader.appendChild(windowTitle);
  windowHeader.appendChild(ClosImg);
  sectionDiv.appendChild(divImgContainer);
  divImgContainer.appendChild(windowImg);
  sectionDiv.appendChild(popupParagraph);
  sectionDiv.appendChild(ul);
  ul.appendChild(ulLi1);
  ul.appendChild(ulLi2);
  ul.appendChild(ulLi3);
  ul.appendChild(ulLi4);
  sectionDiv.appendChild(divButton);
  divButton.appendChild(popBtn1);
  divButton.appendChild(popBtn2);

  document.querySelector('.windowTitle').textContent = myCardsContent[i].workTitle;
  document.querySelector('.cancel').src = 'images/cancel.png';
  document.querySelector('.window-div-Img').src = myCardsContent[i].modalImage;
  document.querySelector('.window-div-Img').style.width = '350px';
  document.querySelector('.window-div-Img').style.height = 'auto';
  document.querySelector('.divP').textContent = myCardsContent[i].workDescription;
  document.querySelector('.button1').textContent = 'See Live';
  document.querySelector('.button2').textContent = 'See Source';

  const [list1, list2, list3, list4] = document.querySelectorAll('.list');
  const [content1, content2, content3, content4] = myCardsContent[i].workTools;

  list1.textContent = content1;
  list2.textContent = content2;
  list3.textContent = content3;
  list4.textContent = content4;

  ClosImg.addEventListener('click', () => {
    windowSection.remove();
  });

  popBtn1.addEventListener('click', () => {
    window.open(myCardsContent[i].seeLive);
  });

  popBtn2.addEventListener('click', () => {
    window.open(myCardsContent[i].seeSource);
  });
}

btnId1.addEventListener('click', () => {
  i = 0;
  display();
});

btnId2.addEventListener('click', () => {
  i = 1;
  display();
});

btnId3.addEventListener('click', () => {
  i = 2;
  display();
});

btnId4.addEventListener('click', () => {
  i = 3;
  display();
});

function validateEmail() {
  const form = document.getElementById('myForm');
  const email = document.getElementById('user-email').value;
  const emailMessage = document.getElementById('warningMessage');
  const msgButton = document.getElementById('my-form-button');
  const warningButton = document.getElementById('messageButton');

  const regExChecker = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/gm;
  if (email.match(regExChecker)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    emailMessage.innerHTML = '';
    emailMessage.style.color = '';
    msgButton.classList.add('valid');
    msgButton.classList.remove('invalid');
    warningButton.innerHTML = 'Validation complete';
    warningButton.style.color = '#00ff00';
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    msgButton.classList.remove('valid');
    msgButton.classList.add('invalid');
    warningButton.innerHTML = 'Email address should be in lowercase';
    warningButton.style.color = 'var(--warning-color)';
  }
}

document.getElementById('user-email').addEventListener('keydown', validateEmail);

const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  // stop form submissio//
  event.preventDefault();
  validateEmail();
  if (form.classList.contains('valid')) {
    form.submit();
  }
});

const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userMessage = document.getElementById('user-message');
function userStorage() {
  form.addEventListener('input', () => {
    const storageData = {
      name: `${userName.value}`,
      useremail: `${userEmail.value}`,
      usermessage: `${userMessage.value}`,
    };
    localStorage.setItem('storageData', JSON.stringify(storageData));
  });
}
userStorage();

function getUserStoragedInfo() {
  const loadInfo = JSON.parse(localStorage.getItem('storageData'));
  userName.value = loadInfo.name;
  userEmail.value = loadInfo.useremail;
  userMessage.value = loadInfo.usermessage;
}
getUserStoragedInfo();