import Icon from '../images/burger2.jpg';
export function genHeader(container)
{
    const head = document.createElement('div');
    const logo = document.createElement('div');
    const tabs = document.createElement('div');

    head.classList.add("header");
    logo.classList.add("logo");
    tabs.classList.add("tabs");

    head.appendChild(logo);
    head.appendChild(tabs);

    container.appendChild(head);

    const image = document.createElement('img');
    const title = document.createElement('h3');

    image.classList.add("header-burger");
    image.src = Icon;
    title.classList.add("restaurant-name");
    title.textContent = "BurgerLand";

    logo.appendChild(image);
    logo.appendChild(title);

    const tab1 = document.createElement("h6");
    tab1.classList.add('home');
    tab1.textContent = "Home";
    const tab2 = document.createElement("h6");
    tab2.classList.add('menu');
    tab2.textContent = "Menu";
    const tab3 = document.createElement("h6");
    tab3.classList.add('about');
    tab3.textContent = "About";

    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);

    return {
        homeTab: tab1,
        menuTab: tab2,
        aboutTab: tab3
    }

}