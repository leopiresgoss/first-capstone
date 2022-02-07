function checkWindowWidth() {
  // check if matches for mobile version
  const width = window.matchMedia("(max-width: 768px)");
  return width.matches;
}

function reduceSpeakers() {
  // let only two speakers visible
  const speakers = document.querySelectorAll('#speakers .cards ul li');
  speakers.forEach((speaker, index) => {
    if (index > 1) {
      speaker.classList.replace('d-flex', 'd-none');
    }
  })
}

function appearAllSpeakers() {
  const speakers = document.querySelectorAll('#speakers .cards ul li');
  speakers.forEach((speaker) => {
    speaker.classList.replace('d-none', 'd-flex');
  })
}

function lessBtn() {
  const less = document.querySelector('.more-less button');
  less.ariaLabel = "Close";
  less.innerHTML = 'Less<i class="fas fa-chevron-up"></i>';

  less.addEventListener('click', () => {
    reduceSpeakers();
    moreBtn();
  })
}

function moreBtn() {
  const more = document.querySelector('.more-less button');
  more.ariaLabel = "More Speakers";
  more.innerHTML = 'More<i class="fas fa-chevron-down"></i>';

  more.addEventListener('click', () => {
    appearAllSpeakers();
    lessBtn();
  })
}


document.addEventListener('DOMContentLoaded', () => {
  if(checkWindowWidth()) {
    reduceSpeakers();
    moreBtn();
  }
})



// Fix when user scroll page late

// document.addEventListener('scroll', () => {
//   if(checkWindowWidth()) {
//     reduceSpeakers();
//   } else {
//     appearAllSpeakers();
//   }
// })



