import {genHome} from './pages/home-page.js';
import {genMenu} from './pages/menu-page.js';
import {genAbout} from './pages/about-page.js';
import {genHeader} from './pages/header.js';
import './style.css';

const content = document.getElementById("content");

const header = genHeader(content);

// Start with home page
header.homeTab.style.fontWeight = 'bold';
genHome(content);

function changePage(tab)
{
    content.childNodes[2].remove();
    header.homeTab.style.fontWeight = 'lighter';
    header.menuTab.style.fontWeight = 'lighter';
    header.aboutTab.style.fontWeight = 'lighter';
    switch (tab)
    {
        case ('home'):
            {
                header.homeTab.style.fontWeight = 'bold';
                genHome(content);
                break;
            }
        case ('menu'):
            {
                header.menuTab.style.fontWeight = 'bold';
                genMenu(content);
                break;
            }
        case ('about'):
            {
                header.aboutTab.style.fontWeight = 'bold';
                genAbout(content);
                break;
            }
    }
}

header.homeTab.addEventListener('click', () => {

    changePage('home');

})
header.menuTab.addEventListener('click', () => {

    changePage('menu');

})
header.aboutTab.addEventListener('click', () => {

    changePage('about');

})