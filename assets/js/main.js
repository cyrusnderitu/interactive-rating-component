const active = document.querySelectorAll('.card__item')
const btnSubmit = document.querySelector('.card_btn')


active.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const openItem = document.querySelector('.active')
        if(openItem && openItem!== item){
            addActive(openItem)
        }
        addActive(item)
    })
})

const addActive = (select)=>{
    if(select.classList.contains('active')){
        select.classList.remove('active')
    }else{
        select.classList.add('active')
    }
}

btnSubmit.addEventListener('click', ()=>{
    const activeItem = document.querySelector('.active')
    
    if(activeItem){
        console.log(activeItem.innerText)
    }else{
        alert('Please rate us')
    }
})