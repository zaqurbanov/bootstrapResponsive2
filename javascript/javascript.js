
window.addEventListener('scroll',()=>{

const navbar = document.getElementById('navbar');

console.log();
if(window.scrollY>5){
    navbar.classList.remove('py-3')
    navbar.classList.add('py-1')
    console.log("ASdd");
}
else{
    navbar.classList.remove('py-1')
    navbar.classList.add('py-3')
}

})