const accCont = document.getElementsByClassName("acc-container")

let i;
for (i = 0; i < accCont.length; i++) {
    accCont[i].addEventListener("click", function() {
        this.classList.toggle("active")

        const panel = this.nextElementSibling
        if (panel.style.display === "block") {
            panel.style.display = "none"
        } else {
            panel.style.display = "block"
        }
    })
}