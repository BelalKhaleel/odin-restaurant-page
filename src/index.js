import renderHomePageContent from "./pages/home/home.js";
import renderAboutPageContent from "./pages/about/about.js";
import renderMenuContentPage from "./pages/menu/menu.js";
import './style.css';

const divContent = document.querySelector('#content');
const nav = document.querySelector('nav');

renderHomePageContent(divContent);

nav.addEventListener('click', e => {
  switch (e.target.textContent) {
    case "About":
      divContent.replaceChildren();
      renderAboutPageContent(divContent);
      break;
    case "Menu":
      divContent.replaceChildren();
      renderMenuContentPage(divContent);
      break;
    default:
      divContent.replaceChildren();
      renderHomePageContent(divContent);
  }
});