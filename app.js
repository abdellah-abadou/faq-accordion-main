let changeButton = document.querySelectorAll(".button")

changeButton.forEach(function(everyBtn){
    everyBtn.addEventListener('click', function(e){
        let hiddenAnswer = e.target.parentElement.parentElement.querySelector(".answer");
        hiddenAnswer.classList.toggle("hidden")
        if (hiddenAnswer.classList.contains("hidden")){
            e.target.src = 'assets/images/icon-plus.svg'
            
        } else {
            e.target.src  = 'assets/images/icon-minus.svg'
        }
    })
})
