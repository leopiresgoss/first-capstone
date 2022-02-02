const speakers = [
  {
    name: "Amanda Oliveira",
    about: 'Professor of Elderly Care at University of Sao Paulo',
    moreInfo: 'Amanda, author of the best-seller: "Learning from the aged ones", is a reference to using storytelling to improve the relationship with the elderly.',
    img: 'images/speakers/avatar-amanda.jpg',
    altImg: ''
  },
];

// create elements, and add classes and innerHTML to them
function elementGenerator(type, classes, innerHTML) {
  const elem = document.createElement(type);

  const classArr = classes.split(" ");
  classArr.forEach(cl => {
    elem.classList.add(cl);
  });

  if (innerHTML) {
    elem.innerHTML = innerHTML;
  };

  return elem;
};

// create column for each speaker
function columnGenerator(speaker) {
  // column
  const col = elementGenerator('div', 'col col-md-6 mt-1 mt-md-4 d-flex gap-2 align-items-center');
  
  // img
  const img = elementGenerator('img', 'speaker-img');
  img.src = speaker.img;
  img.alt = speaker.imgAlt;

  // details
  const details = elementGenerator('div', 'details d-flex flex-column');
  const name = elementGenerator('h5', 'name', speaker.name);
  const about = elementGenerator('p', 'about', speaker.about);
  const hr = document.createElement('hr');
  const moreInfo = elementGenerator('p', 'more-info', speakers.moreInfo);
  details.append(name, about, hr, moreInfo);

  col.append(img, details);

  return col;
}

// create cards div
function speakerCards(speakers) {
  const cards = elementGenerator('div', 'cards my-2');
  const row = elementGenerator('div', 'row row-cols-1 row-cols-md-2 gap-2 gap-md-0 mt-2 justify-content-between');
  
  speakers.forEach(speaker => {
    const col = columnGenerator(speaker);
    row.appendChild(col);
  });

  cards.appendChild(row);

  return cards;
};

// add cards to speakers section
const speakersSection = document.querySelector('#speakers');
const cards = speakerCards(speakers)
speakersSection.appendChild(cards)
