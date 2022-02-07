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


document.addEventListener('DOMContentLoaded', () => {
  if(checkWindowWidth()) {
    reduceSpeakers();
  }
})

document.addEventListener('scroll', () => {
  if(checkWindowWidth()) {
    reduceSpeakers();
  } else {
    appearAllSpeakers();
  }
})



