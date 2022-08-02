let navLinks = document.getElementById("navLinks");

// let showMenu = () => navLinks.style.right = "0";

// let hideMenu = () => navLinks.style.right = "-200px";

let showBtn = document.getElementsByClassName('fa-solid')[0]

let hideBtn = document.getElementsByClassName('fa-solid')[1]

hideBtn.onclick =  () => {
     navLinks.style.right = "-200px"
}

showBtn.onclick = () =>{
     navLinks.style.right = "0px"
}




