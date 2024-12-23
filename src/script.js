const mobileMenu = document.querySelector('.mobile-menu-icon button')

mobileMenu.addEventListener('click', ()=>{
    let navMenu = document.querySelector('.menu-mobile')
    if(navMenu.classList.contains('open')){
        navMenu.classList.remove('open')
        document.querySelector('.mobile-menu-icon img').src = "./src/images/menu-svgrepo-com (2).svg"
    } else {
        navMenu.classList.add('open')
        document.querySelector('.mobile-menu-icon img').src = "./src/images/close-svgrepo-com.svg"

    }
})

//mobile accordion

let accordionEl = document.querySelectorAll('.accordion')
let symbol = document.querySelector('.symbol')

accordionEl.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        accordionEl.forEach(eachItem =>{
            eachItem.classList.remove('active')
        })
        item.classList.add('active')
    })
})

//open contact
const btnContact = document.querySelectorAll('.btn-contato')
btnContact.forEach((item)=>{
    item.addEventListener('click',()=>{
        let asideContact = document.querySelector('aside');
        asideContact.style.display = "flex"
    })
})


//close contact
const closeContact = document.querySelector('.close-contact');
closeContact.addEventListener('click',()=>{
    let asideContact = document.querySelector('aside');
    asideContact.style.display = "none"
})
