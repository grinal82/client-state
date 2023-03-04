(() => {
    const firstWindow = document.getElementById("subscribe-modal");
    const closeButton = document.querySelector(".modal__close");

    // check if the modal should be displayed
    if (!localStorage.getItem("modal_closed")) {
        firstWindow.classList.add("modal_active");
    }

    closeButton.addEventListener("click", function () {
        this.parentElement.parentElement.classList.remove("modal_active");
        // store the fact that the modal has been closed
        localStorage.setItem("modal_closed", "true");
    });
})();



