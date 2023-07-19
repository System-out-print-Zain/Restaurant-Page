import Icon1 from '../images/burger1.jpg';
import Icon2 from '../images/burger2.jpg';
import Icon3 from '../images/burger3.jpg';
export function genAbout(container)
{
    const aboutCont = document.createElement('div');
    aboutCont.classList.add('about-content');
    container.appendChild(aboutCont);

    const para = document.createElement('p');
    const imgBar = document.createElement('div');

    aboutCont.appendChild(para);
    aboutCont.appendChild(imgBar);

    para.textContent = "BurgerLand was founded in 1345. We are commited to the welfare and satisfaction of our customers."

    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');

    img1.src = Icon1;
    img2.src = Icon2;
    img3.src = Icon3;

    img1.classList.add('burger1');
    img2.classList.add('burger2');
    img3.classList.add('burger3');

    imgBar.appendChild(img1);
    imgBar.appendChild(img2);
    imgBar.appendChild(img3);
}