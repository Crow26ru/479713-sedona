var formOrder = document.querySelector(".map form");
var buttonListeningForm = document.querySelector(".btn-open-form");
var mapLink = document.querySelector(".map a");
var interactiveMap = document.querySelector(".map iframe");
var submitForm = document.querySelector(".map .find");

window.addEventListener("load", function() {
    formOrder.classList.add("start-status");
    mapLink.classList.add("visually-hidden");
    interactiveMap.classList.remove("visually-hidden");
});

window.addEventListener("keydown", function(e) {
				if (e.keyCode === 27 && formOrder.classList.contains("form-open")) {
								e.preventDefault();
								formOrder.classList.remove("form-open");
        formOrder.classList.add("form-close");
				}
});

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

submitForm.addEventListener("click", function(e) {
				var inputDate = formOrder.querySelector(".input-date");
				var outputDate = formOrder.querySelector(".output-date");
				var adultsCount = formOrder.querySelector(".adult-container input");
				var childrensCount = formOrder.querySelector(".children-container input");
				
				if (inputDate.value == "" || outputDate.value == "" || (parseInt(adultsCount.value, 10) === 0 && parseInt(childrensCount.value, 10) === 0)) {
								e.preventDefault();
				}
});