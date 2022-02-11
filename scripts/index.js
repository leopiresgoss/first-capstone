const speakers = [
  {
    name: 'Amanda Oliveira',
    about: 'Professor of Elderly Care at University of Sao Paulo',
    moreInfo: 'Amanda, author of the best-seller: "Learning from the aged ones", is a reference to using storytelling to improve the relationship with the elderly.',
    img: 'images/speakers/avatar-amanda.jpg',
    altImg: '',
  },
  {
    name: 'Nicholas C. Curley',
    about: 'CEO of HealthHome',
    moreInfo: 'Nicholas love for his grandparents inspired him to build HealthHome, a startup focused on improving the elderly care.',
    img: 'images/speakers/nicholas.jpg',
    altImg: '',
  },
  {
    name: 'Nayla Navarro Arredondo',
    about: 'Elderly Care Expert',
    moreInfo: 'Nayla is a Elderly Care Expert for 10 years and a consultant at Santiago Hospital',
    img: 'images/speakers/nayla.jpg',
    altImg: '',
  },
  {
    name: 'Lizzie Westenbrink',
    about: 'Elderly Care Consultant at WHO',
    moreInfo: 'Lizzy is one of the most famous elderly care consultant in Europe',
    img: 'images/speakers/lizzie.jpg',
    altImg: '',
  },
  {
    name: 'Yair Medina Leal',
    about: 'Professor of Elderly Care at Harvard University',
    moreInfo: 'Yair has been lecturing at Harvard since 2009. Now, his devoted to help sillicon valley startups to improve the elderly care',
    img: 'images/speakers/yair.jpg',
    altImg: '',
  },
  {
    name: 'Nicolai N. Vestergaard',
    about: 'EC Internation Organization Expert',
    moreInfo: 'Nicolai is one of the most influent experts in elderly care. His love to the aged one inspired him to build this conference',
    img: 'images/speakers/nicolai.jpg',
    altImg: '',
  },
];

class CardsRender {
  constructor(speakers) {
    this.speakers = speakers;
  }

  // create elements, and add classes and innerHTML to them
  #elementGenerator = (type, classes, innerHTML) => {
    const elem = document.createElement(type);

    const classArr = classes.split(' ');
    classArr.forEach((cl) => {
      elem.classList.add(cl);
    });

    if (innerHTML) {
      elem.innerHTML = innerHTML;
    }

    return elem;
  };

  // create column for each speaker
  #columnGenerator = (speaker) => {
    // column
    const col = this.#elementGenerator('li', 'col col-md-6 mt-1 mt-md-4 d-flex gap-2 align-items-center');

    // img
    const img = this.#elementGenerator('img', 'speaker-img');
    img.src = speaker.img;
    img.alt = speaker.imgAlt;

    // details
    const details = this.#elementGenerator('div', 'details d-flex flex-column');
    const name = this.#elementGenerator('h5', 'name', speaker.name);
    const about = this.#elementGenerator('p', 'about', speaker.about);
    const hr = document.createElement('hr');
    const moreInfo = this.#elementGenerator('p', 'more-info', speaker.moreInfo);
    details.append(name, about, hr, moreInfo);

    col.append(img, details);

    return col;
  }

  // create cards div
  speakerCards = () => {
    const cards = this.#elementGenerator('div', 'cards my-2');
    const row = this.#elementGenerator('ul', 'row row-cols-1 row-cols-md-2 gap-2 gap-md-0 mt-2 justify-content-between');

    this.speakers.forEach((speaker) => {
      const col = this.#columnGenerator(speaker);
      row.appendChild(col);
    });

    cards.appendChild(row);

    return cards;
  }
}

// add cards to speakers section
const speakersSection = document.querySelector('#speakers');
const classRender = new CardsRender(speakers);

// it will work only in index.html
if (speakersSection) {
  const cards = classRender.speakerCards();
  speakersSection.insertBefore(cards, speakersSection.children[1]);
}
