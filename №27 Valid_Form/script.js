const form = document.forms.formSite;
//Поля с текстом
const inputText = document.querySelectorAll(
    'input[type="text"],' +
    'input[type="number"],' +
    'input[type="url"], ' +
    'input[type="date"], ' +
    'input[type="email"], ' +
    'textarea'
);
//Радиокнопки
const inputRadio = document.querySelectorAll('input[type="radio"]');
//Чекбокс
const inputCheckbox = document.querySelector('input[type="checkbox"]');
//Список
const select = document.querySelector('select');
//Сообщение об ошибке ввода
const errorMsg = (elem, msg) => {
    const err = document.createElement('span');
    err.classList.add('err');
    err.textContent = msg;
    elem.parentElement.append(err);
}
//Удаление сообщений об ошибках
const removeMsg = () => {
    const errs = document.querySelectorAll('.err');
    errs.forEach((err) => {
        err ? err.remove() : null;
    });
}
//Проверка на пустое поле
const validText = (el) => {
    if (el.currentTarget) {
        removeMsg();
        el = el.currentTarget;
    }
    if (!el.value) {
        errorMsg(el, 'Заполните поле');
        return false;
    }
    if (el.type = 'number' && el.value < el.min) {
        errorMsg(el, 'Введите корректное число');
        return false;
    }
    return true;
}
// Валидация на соответствие формату URL адреса
const validURL = (el) => {
    const urlField = document.getElementById('site');
    const urlValue = urlField.value.trim();
    const reg = /(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))\S){2,}/gim
    if (el.value == '') {
        return true;
    } else if(reg.test(urlValue) === false) {
        errorMsg(el, 'Введите корректный URL адрес');
        return false;
    } 
    return true;
}
// Валидация на соответствие формату электронной почты
const validEmail = (el) => {
    const emailField = document.getElementById('email');
    const emailValue = emailField.value.trim();
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (el.value == '') {
        return true;
    } else if(reg.test(emailValue) === false) {
        errorMsg(el, 'Введите корректную почту');
        return false;
    }
    return true;
}
//Проверка на VIP статуса
const validRadio = (el) => {
    if (el.currentTarget) {
        removeMsg();
        el = el.currentTarget;
    }
    if (el.value === '') {
        errorMsg(el[0].parentElement, 'Выберите тип размещения');
        return false;
    } else if (el.value === 'B6format') {
        errorMsg(el.parentElement || el[0].parentElement, 'У вас нет VIP статуса');
        return false;
    }
    return true;
}
//Проверка на выбор чекбокса
const isEmptyCheck = (el) => {
    if (el.currentTarget) {
        removeMsg();
        el = el.currentTarget;
    }
    if (!el.checked) {
        errorMsg(el, 'Разрешите отзывы');
        return false;
    }
    return true;
}
//Проверка на выбор элемента списка
const validSelect = (el) => {
    if (el.target) {
        removeMsg();
        el = el.target;
        return false;
    }
    return true;
}
//Проерка всей формы
const validForm = (el) => {
    removeMsg();
    if (validText(form.elements.developer) +
        validText(form.elements.title) +
        validText(form.elements.site) +
        validText(form.elements.date) +
        validText(form.elements.visitors) +
        validText(form.elements.email) +
        validText(form.elements.description) +
        validURL(form.elements.site) +
        validEmail(form.elements.email) +
        isEmptyCheck(form.elements.votes) +
        validSelect(form.elements.category) +
        validRadio(form.elements.payment) < 10) {
        el.preventDefault();
        document.querySelector('.err').previousElementSibling.focus();
    }
}
//Выход из полей с текстом
inputText.forEach((input) => {
    input.addEventListener('blur', validText)
})
//Изменение радиокнопки
inputRadio.forEach((input) => {
    input.addEventListener('change', validRadio)
})
//Изменение чекбокса
inputCheckbox.addEventListener('change', isEmptyCheck);
//Изменение списка
select.addEventListener('change', validSelect);
//Отправка формы
form.addEventListener("submit", validForm);