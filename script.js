function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
bar.onclick = () =>{
if( nav.style.left == "0%"){
    nav.style.left = "-100%";
    bar.src = "img/menu.png"
}else{
nav.style.left = "0%";
    bar.src = "img/x.png"
            }

        }

    } 
    
myNav();


// Bu aşağıda yapacağım "window onload" özelliği anasayfada başta çıkan yazının sağdan sola doğru animasyonlu bir şekilde gelmesini sağlayacaktır. 


window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}