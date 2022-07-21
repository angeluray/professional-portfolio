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
    workImage: 'images/imageplaceholder.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: 'btn-1',

  },

  {
    myCardId: 'card-2',
    workImage: 'images/imageplaceholder.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: 'btn-2',

  },

  {
    myCardId: 'card-3',
    workImage: 'images/imageplaceholder.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: 'btn-3',

  },

  {
    myCardId: 'card-4',
    workImage: 'images/imageplaceholder.png',
    workTitle: 'Multi-Post Stories',
    workDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    workTools: ['css', 'html', 'boostrap', 'ruby'],
    seeLive: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    seeSource: 'https://www.youtube.com/watch?v=4fQeaM62mOY',
    myMbId: 'btn-4',

  },

];

const dynamiContent = () => {
  let myVarCont = '';

  for (let i = 0; i < myCardsContent.length; i += 1) {
    const myCardCon = `<div class="cards" id="${myCardsContent[i].myCardId}">

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
          <button class="visualize-button actv" id="${myCardsContent[i].myMbId}"type="button">See Project</button>
        </div></div>`;
    myVarCont += myCardCon;
  }
  myWorkContainer.insertAdjacentHTML('beforeend', myVarCont);
};
dynamiContent();
