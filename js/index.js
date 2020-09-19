document.addEventListener("DOMContentLoaded", function () {


    const goForm = document.querySelector(".main__popup");
    const mainForm = document.querySelector(".popup-container")


    goForm.addEventListener("click", function (e) {
        e.preventDefault();
        mainForm.style.display = "flex";
    })


});