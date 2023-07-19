import Icon from '../images/burger1.jpg'
export function genMenu(container)
{
    const menuCont = document.createElement('div');
    menuCont.classList.add('menu-content');
    container.appendChild(menuCont);

    const head = document.createElement('h1');
    head.textContent = "Menu";
    menuCont.appendChild(head);

    const menuItems = document.createElement('ul');
    menuItems.classList.add('menu-items');
    menuCont.appendChild(menuItems);
    
    const items = [];
    for (let i = 0; i < 4; i++)
    {
        items.push(document.createElement('li'));
        items[i].appendChild(document.createElement('div'));
        menuItems.appendChild(items[i]);
    }

    const itemDivs = document.querySelectorAll('li > div');

    const dishTitles = [];
    for (let i = 0; i < 4; i++)
    {
        dishTitles.push(document.createElement('h4'));
    }

    dishTitles[0].textContent = "Classic Burger: $11.99";
    dishTitles[1].textContent = "Cheesy Burger: $13.99";
    dishTitles[2].textContent = "Fat Burger: $15.50";
    dishTitles[3].textContent = "Mega Burger: $19.99";

    for (let i = 0; i < 4; i++)
    {
        itemDivs[i].appendChild(dishTitles[i]);
    }

    const img = document.createElement('img');
    img.classList.add('menu-burger');
    itemDivs[0].appendChild(img);
    img.src = Icon;

}