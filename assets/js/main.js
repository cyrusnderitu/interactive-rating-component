const active = document.querySelectorAll('.card__item')

active.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const openItem = document.querySelector('.active')
        
        if(openItem && openItem!== item){
            addActive(openItem)
        }
        addActive(item)
        console.log(item.innerText)
    })
})

const addActive = (select)=>{
    if(select.classList.contains('active')){
        select.classList.remove('active')
    }else{
        select.classList.add('active')
    }
}