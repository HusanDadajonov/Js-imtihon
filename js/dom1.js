let elBtns = document.querySelectorAll(".btn__all");
let elBody = document.querySelector("body");

elBtns.forEach(btn => {
    btn.addEventListener("focus",e => {
        if(e.target.value == 1){
            elBody.style.backgroundColor = "blue";
        }
        else if(e.target.value == 2){
            elBody.style.backgroundColor = "#055f23";
        }
        else if(e.target.value == 3){
            elBody.style.backgroundColor = "#dd9308";
        }
        else if(e.target.value == 4){
            elBody.style.backgroundColor = "#dd0808";
        }
        else if(e.target.value == 5){
            elBody.style.backgroundColor = "#b208dd";
        }
    })
})


