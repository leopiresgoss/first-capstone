class MoreLessBtn {
  checkWindowWidth = () => {
    // check if matches for mobile version
    const width = window.matchMedia('(max-width: 768px)');
    return width.matches;
  }

  reduceSpeakers = () => {
    // let only two speakers visible
    const speakers = document.querySelectorAll('#speakers .cards ul li');
    speakers.forEach((speaker, index) => {
      if (index > 1) {
        speaker.classList.replace('d-flex', 'd-none');
      }
    });
  }

  appearAllSpeakers = () => {
    const speakers = document.querySelectorAll('#speakers .cards ul li');
    speakers.forEach((speaker) => {
      speaker.classList.replace('d-none', 'd-flex');
    });
  }

  moreBtn = () => {
    const more = document.querySelector('.more-less button');
    more.ariaLabel = 'More Speakers';
    more.innerHTML = 'More<i class="fas fa-chevron-down"></i>';

    more.addEventListener('click', () => {
      this.appearAllSpeakers();
      this.lessBtn();
    });
  }

  lessBtn = () => {
    const less = document.querySelector('.more-less button');
    less.ariaLabel = 'Close';
    less.innerHTML = 'Less<i class="fas fa-chevron-up"></i>';

    less.addEventListener('click', () => {
      this.reduceSpeakers();
      this.moreBtn();
    });
  }
}

const moreLess = new MoreLessBtn();

document.addEventListener('DOMContentLoaded', () => {
  if (moreLess.checkWindowWidth()) {
    moreLess.reduceSpeakers();
    moreLess.moreBtn();
  }
});

window.addEventListener('resize', () => {
  if (moreLess.checkWindowWidth()) {
    moreLess.reduceSpeakers();
    moreLess.moreBtn();
  } else {
    moreLess.appearAllSpeakers();
  }
});
