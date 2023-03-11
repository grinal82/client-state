(() => {
    const firstWindow = document.getElementById("subscribe-modal");
    const closeButton = document.querySelector(".modal__close");

    // check if the modal should be displayed
    if (getCookie("modal_closed") !== "true") {
        firstWindow.classList.add("modal_active");
    }

    closeButton.addEventListener("click", function () {
        this.parentElement.parentElement.classList.remove("modal_active");
        // store the fact that the modal has been closed
        setCookie("modal_closed", "true");
    });

    // helper functions for setting and getting cookies
    function setCookie(name, value) {
        value = encodeURIComponent(value);
        document.cookie = `${name}=${value}; path=/`;
    }

    function getCookie(name) {
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(`${name}=`)) {
                return decodeURIComponent(cookie.substring(name.length + 1));
            }
        }

        return undefined;
    }
})();
