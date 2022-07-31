const active = document.querySelectorAll('.card__item')
const btnSubmit = document.querySelector('.card_btn')
const show = document.querySelector('.thanks_select')
const rater = document.querySelector('.rater')
const thanks = document.querySelector('.thanks')


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
        rater.style.display = 'none';
        thanks.style.display = 'initial';
        show.innerHTML = `You selected ${activeItem.innerText} out of 5`
    }else{
        alert('Please rate us')
    }
})