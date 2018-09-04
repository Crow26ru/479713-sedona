var formOrder = document.querySelector(".map form");
var buttonListeningForm = document.querySelector(".btn-open-form");
formOrder.classList.add("form-close");


buttonListeningForm.addEventListener("click", function(e) {
    e.preventDefault();
    if (formOrder.classList.contains("form-close")) {
        formOrder.classList.remove("form-close");
        formOrder.classList.add("form-open");
    } else {
        formOrder.classList.remove("form-open");
        formOrder.classList.add("form-close");
    }
});