const iconOpen=document.getElementById('iconOpen')
const maineMenu=document.getElementById('maineMenu')
const menuIcons=document.getElementById('menuIcons')

menuIcons.addEventListener('click', ()=> {
    iconOpen.classList.toggle('hide')
    maineMenu.classList.toggle('hide')
})



let modal = document.getElementById('sing-up-free')
document.querySelectorAll('.openModal').forEach(element => {
    element.addEventListener('click', () => {
        if(modal.classList.contains('hide')) {
            modal.classList.remove('hide')
        }
    })
});

modal.addEventListener('click', () => {
    if(modal === event.target) {
        modal.classList.add('hide')
    }
})

document.querySelectorAll('.closeModal').forEach(element => {
    element.addEventListener('click', () => {
        if(!modal.classList.contains('hide')) {
            modal.classList.add('hide')
        }
    })
});