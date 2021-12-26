let elForm = document.querySelector(".form__box");
let elDiv = document.querySelector(".counts");
let elInp = document.querySelector(".form-box--inp");

elForm.addEventListener("submit", e => {
    e.preventDefault();
    if(elInp.value != "")elDiv.innerHTML = elDiv.innerHTML +  `<p class="form-count-box"><span class="form__count">${elInp.value}</span></p>`;
    document.querySelectorAll(".form__count").forEach(count => {
        let countText = +count.textContent;
        for(let i = 0; i <= countText; i++){
            setTimeout(function () { 
                count.innerHTML = countText;
                countText--;
                console.log(count.innerHTML);
                if(count.innerHTML == 0){
                    count.parentElement.style.display = "none";
                }
            }, i * 600) ;
            
        }
    })
    document.querySelectorAll(".form__count").forEach(item => {
        console.log(item);
    })
    elInp.value = "";
})


