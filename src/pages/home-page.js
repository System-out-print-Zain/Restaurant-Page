/*The purpose of this module is to produce a function
that generates the homepage.*/
import Icon from '../images/burger3.jpg';
export function genHome(container){
    const homeCont = document.createElement('div');
    homeCont.classList.add("home-content");

    container.appendChild(homeCont);

    const welcome = document.createElement('h1');
    welcome.classList.add("welcome");
    welcome.textContent = "Welcome To BurgerLand!";

    const burgImg = document.createElement('img');
    burgImg.src = Icon;
    burgImg.classList.add('home-burger');

    homeCont.appendChild(welcome);
    homeCont.appendChild(burgImg);

}
