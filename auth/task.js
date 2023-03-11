// получаем необходимые элементы
const signinForm = document.getElementById("signin__form");
const welcomeBlock = document.getElementById("welcome");
const welcomeUserId = document.getElementById("user_id");

// функция для отправки AJAX-запроса
function sendRequest(url, method, body = null) {
    return fetch(url, { method, body })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// функция для обновления блока приветствия
function showWelcomeBlock(userId) {
    welcomeUserId.textContent = userId;
    welcomeBlock.classList.add("welcome_active");
    document.getElementById("signin").classList.remove("signin_active");
}

// обработчик отправки формы
signinForm.addEventListener("submit", (event) => {
    event.preventDefault(); // отменяем стандартное поведение формы

    const formData = new FormData(signinForm); // получаем данные формы

    // отправляем запрос на сервер
    sendRequest(
        "https://students.netoservices.ru/nestjs-backend/auth",
        "POST",
        formData
    ).then((data) => {
        if (data.success) {
            // если авторизация прошла успешно
            localStorage.setItem("user_id", data.user_id); // сохраняем id пользователя в локальное хранилище
            showWelcomeBlock(data.user_id); // обновляем блок приветствия
            signinForm.reset(); // сбрасываем форму
        } else {
            // если авторизация не удалась
            alert("Неверный логин/пароль");
        }
    });
});

// проверяем наличие id пользователя в локальном хранилище
const userId = localStorage.getItem("user_id");
if (userId) {
    // если id есть, отображаем блок приветствия
    showWelcomeBlock(userId); // обновляем блок приветствия
}
