const newNoteBtn = document.querySelector('.new-button');
const popup = document.querySelector('.popup-container-closed');
const closePopupBtn = document.querySelector('.closeBtn');
const container = document.querySelector('.container');
const addNoteBtn = document.querySelector('.addNoteBtn');
const delBtn = document.querySelector('.delBtn');
const headingInput = document.querySelector('.headingInput');
const textInput = document.querySelector('.textInput');
const items = document.querySelector('.items');

newNoteBtn.addEventListener('click', function () {
  openPopup();
});

closePopupBtn.addEventListener('click', function () {
  closePopup();
});

addNoteBtn.addEventListener('click', function () {
  createNote();
});

const closePopup = function () {
  popup.classList.remove('popup-container-open');
  popup.classList.add('popup-container-closed');
  container.classList.add('container');
  container.classList.remove('container-popup-open');
};

const openPopup = function () {
  popup.classList.remove('popup-container-closed');
  popup.classList.add('popup-container-open');
  container.classList.remove('container');
  container.classList.add('container-popup-open');
};

const createNote = function () {
  const heading = headingInput.value;
  const text = textInput.value;

  localStorage.setItem(heading, text);

  const div = document.createElement('div');
  div.classList.add('notes');

  const noteHeading = document.createElement('h1');
  noteHeading.innerText = heading;

  const noteText = document.createElement('p');
  noteText.innerText = text;

  const noteDel = document.createElement('button');
  noteDel.classList.add('delBtn');
  noteDel.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

  noteDel.addEventListener('click', () => {
    localStorage.removeItem(heading);

    items.removeChild(div);
  });

  items.append(div);
  div.append(noteHeading);
  div.append(noteDel);
  div.append(noteText);

  headingInput.value = '';
  textInput.value = '';
  closePopup();
};

const loadNotes = () => {
  console.log('loading notes from local storage');
  for (let i = 0; i < localStorage.length; i++) {
    const heading = localStorage.key(i);
    const text = localStorage.getItem(heading);

    const div = document.createElement('div');
    div.classList.add('notes');

    const noteHeading = document.createElement('h1');
    noteHeading.innerText = heading;

    const noteText = document.createElement('p');
    noteText.innerText = text;

    const noteDel = document.createElement('button');
    noteDel.classList.add('delBtn');
    noteDel.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

    noteDel.addEventListener('click', () => {
      localStorage.removeItem(heading);

      items.removeChild(div);
    });

    items.append(div);
    div.append(noteHeading);
    div.append(noteDel);
    div.append(noteText);
  }
};

loadNotes();
