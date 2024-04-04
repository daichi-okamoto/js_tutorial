'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
  console.log('Clicked!');
}, false);

window.onload = () => {
  console.log('load event!');
};

const e = document.getElementById('button');
e.addEventListener('click', () => {
  const parentElement = document.getElementById('list');
  const elements = parentElement.getElementsByTagName('li');
  const removeIndex = elements.length - 1;
  parentElement.removeChild(elements[removeIndex]);
  console.log(elements.length);

  const textBox = document.getElementById('textBox')
  const li = document.createElement('li');
  const text = document.createTextNode(textBox.value);
  li.appendChild(text);
  const listElement = document.getElementById('list');
  listElement.appendChild(li);

  const elements = document.getElementsByClassName('foo');
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerText);
  }

  const elements = document.getElementsByName('result');
  console.log(elements[0].value);

  const elements = document.getElementsByTagName('div');
  for(let i=0; i< elements.length; i++) {
    console.log(elements[i].innerText);
  }

  console.log('Clicked!');
  const result = document.getElementById('result');
  console.log(result.innerText);
}, false);