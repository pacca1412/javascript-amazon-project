const xhr = new XMLHttpRequest();

// set up the event listener first, then action
xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev'); // setup xhr
xhr.send();