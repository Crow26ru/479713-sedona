var formOrder = document.querySelector(".map form");
var buttonListeningForm = document.querySelector(".btn-open-form");
formOrder.classList.add("start-status");


buttonListeningForm.addEventListener("click", function(e) {
    e.preventDefault();
    formOrder.classList.remove("start-status");
    if (!formOrder.classList.contains("form-close") && !formOrder.classList.contains("form-open")) {
        formOrder.classList.add("form-open");
    } else if (formOrder.classList.contains("form-close")) {
        var focusOnInput = formOrder.querySelector("input");
        
        formOrder.classList.remove("form-close");
        formOrder.classList.add("form-open");
        focusOnInput.focus();
    } else {
        formOrder.classList.remove("form-open");
        formOrder.classList.add("form-close");
    }
});
