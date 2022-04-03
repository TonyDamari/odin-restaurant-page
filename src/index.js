import _ from 'lodash';
import { landingPage } from './landing';
import { menuPage } from './menu';
import { contactPage } from './contact';

const pageBody = document.getElementById('content')

pageBody.innerHTML = landingPage()

pageBody.addEventListener('click', (e) => {
    // console.log(e.target.classList)

    if(e.target.id === 'home'){
        pageBody.innerHTML = landingPage()
    }else if(e.target.id === 'menu'){
        pageBody.innerHTML = menuPage()
    }else if(e.target.id === 'contact'){
        pageBody.innerHTML = contactPage()
    }else if(e.target.classList == 'box'|| e.target.innerText === 'Breakfast' || e.target.innerText === 'Sandwich' || e.target.innerText === 'Vegetarian' || e.target.innerText === 'Beverage'){
        pageBody.innerHTML = menuPage()
        
    }else{
        return
    }
})