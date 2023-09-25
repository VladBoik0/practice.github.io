const iconOpen=document.getElementById('iconOpen')
const maineMenu=document.getElementById('maineMenu')
const menuIcons=document.getElementById('menuIcons')

menuIcons.addEventListener('click', ()=> {
    iconOpen.classList.toggle('hide')
    maineMenu.classList.toggle('hide')
})