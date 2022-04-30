const container = document.querySelector('#container');

const content = document.createElement('div');
const paragraph1 = document.createElement('p');
const heading3 = document.createElement('h3');
const content2 = document.createElement('div');
const heading1 = document.createElement('h1');
const paragraph2 = document.createElement('p');

content2.setAttribute('style', 'border: 1px solid black; background: pink;');    

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

content2.appendChild(heading1);
content2.appendChild(paragraph2);

heading1.textContent = "I'm in a div";
paragraph2.textContent = "ME TOO!!";

container.appendChild(content);
container.appendChild(content2);

//Events

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello Dying World");

const btn2 = document.querySelector("#btn2");

btn2.addEventListener('click',(e)=>{
	e.target.style.background = 'blue';
});