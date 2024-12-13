// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card
const mainNav = document.getElementById('mainNav');
// console.log(mainNav);
const divElems = document.getElementsByTagName('div');
// console.log(divElems);
const cardElems = document.getElementsByClassName('card');
// console.log(cardElems);

// console.log(`JS is fuctional...`);

const queryMainNav = document.querySelector(`#mainNav`);
const queryDivElems = document.querySelectorAll(`div`);
const queryCardElems = document.querySelectorAll(`.card`);
// Xtra: =>
const cardGroup = document.querySelector(`.card-group`);
// console.log(queryMainNav, queryDivElems, queryCardElems. carGroup);

// A- finding across the entire DOM
const header = document.querySelector(`header`);
const logoTitle = document.querySelector(`#logoTitle`);
const firstCard = document.querySelector(`.card:nth-of-type(1)`);
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector(`img`);
const titleFirstCard = firstCard.querySelector(`h2`);
const subtitleFirstCard = firstCard.querySelector(`h3`);
const textFirstCard = firstCard.querySelector(`.card-text`);
// C- traversing with dot notation
const cardLinks = document.querySelectorAll(`.card-link`);
// console.log(cardLinks);
const link1FirstCard = cardLinks[0];
// console.log(link1FirstCard);
const link2FirstCard = cardLinks[1];
// console.log(link2FirstCard.innerHTML);

// Atl: =>
// const link1FirstCard = textFirstCard.nextElementSibling;
// console.log(link1FirstCard);
// const link2FirstCard = link1FirstCard.nextElementSibling;
// console.log(link2FirstCard);


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll(`nav a`);
// console.log(links);
// B- Loop over the links and console.log their text content
const newLink = document.createElement(`a`);
links.forEach((link) => logoTitle.appendChild(newLink));
// C- Turn the collection of links into a real array
const linksArr = Array.from(links);
// console.log(links, linksArr);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArr.filter((link) => link.textContent === "Home");
// console.log(homeLink);


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content

imageFirstCard.src = `https://cdn.pixabay.com/photo/2024/04/28/05/16/animal-8724816_640.jpg`;
logoTitle.textContent = `Pups o' BloomTech`;
titleFirstCard.textContent = `Supreme Over-Lord`;
subtitleFirstCard.textContent = `- Hi, my name is "Jackson"`;
textFirstCard.textContent = `I love to run and play for hours on end. My jealousy knows no bounds when it comes to getting attention! But, all-in-all, I'm the bestest boy-yo! Adopt Me!!! :)`;
textFirstCard.style.backgroundColor = `darkgrey`;
textFirstCard.style.borderRadius = `3px`;
textFirstCard.style.padding = `5px`;
textFirstCard.style.color = `#ccffff`;
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.href = `https://pixabay.com/photos/dog-puppy-cavalier-running-play-6977210/`;
link2FirstCard.href = `https://goldenmeadowsretrievers.com/golden-retrievers/white-golden-retrievers/#:~:text=White%20Golden%20Retrievers%2C%20also%20known,and%20even%20service%20dog%20applications.`;
link2FirstCard.innerHTML = `More Info`;
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute('href', `https://pexels.com/search/puppy`);
link2FirstCard.setAttribute(`href`, `https://doggoipsum.com`);
logoTitle.className = `logo heading dragonfruit`;


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add(`sky`);
//  B- By manipulating inline styles on the element
header.style.fontSize = `2em`;
const bodyEffect = document.querySelector(`body`);
bodyEffect.style.background = `black`;

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
newLink.class = `menu-item`
newLink.href = `#`;
newLink.innerHTML = `Blog`;
queryMainNav.appendChild(newLink)
// console.log(queryMainNav)


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times

// My first attempt, alone: =>
// const secondCard = document.createElement(`div`);
// secondCard.innerHTML = firstCard.innerHTML;
// secondCard.className = `card`;
// cardGroup.appendChild(secondCard);
// console.log(cardGroup);

secondCard = firstCard.cloneNode(true);
cardGroup.appendChild(secondCard);


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

header.remove();
document.body.prepend(header);

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]

const data = {
  "contact": {
    "contact-heading": "Contact",
    "address": "123 SomeWhere Street, Oddplace State, 00000-000",
    "phone": "0 (000) 000-0000",
    "email": "purpose@random.web"
  }
};

const contactSelector = document.querySelector(`footer`);
contactSelector.style.color = `white`;

const contactHeading = document.querySelector(`.contact-heading`);
const address = document.querySelector(`.address`);
const phone = document.querySelector(`.phone`);
const email = document.querySelector(`.email`);

contactHeading.textContent = data["contact"]["contact-heading"]
address.textContent = data["contact"]["address"]
phone.textContent = data["contact"]["phone"]
email.textContent = data["contact"]["email"]

// console.log((contactSelector));