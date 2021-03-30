document.querySelector('.hamburger-menu').
addEventListener('click', ()=> {
    document.querySelector('.container').classList.toggle('change');
});

document.querySelector(".scroll-btn").addEventListener('click',() => {
    document.querySelector('html').style.scrollBehavior = "smooth";
    setTimeout(()=>{
        document.querySelector('html').style.overscrollBehavior ="unset";

    }, 1000);
});

var nombre = document.getElementById("nombre").textContent;

document.querySelector('.submit-btn').
addEventListener('click', function enviarmail(){
    console.log("holita");
    console.log(nombre);
});




