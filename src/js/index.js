

const aApp = document.querySelector(".a-app");
const menuBoxApp = document.querySelector(".box--menu--app");


let active = true;
aApp.addEventListener("click", () =>{

    if(active){
        menuBoxApp.style.width ="150px";
        menuBoxApp.style.height = "100px";
        active = false;
    }


    else{

        menuBoxApp.style.width ="0px";
        menuBoxApp.style.height = "0px";
        active = true;

    }

})