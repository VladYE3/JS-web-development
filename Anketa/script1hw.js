// Фамилия
let surname = FullName(false, 'Укажите Вашу фамилию!', 'Введите фамилию', 'Фамилия должна состоять из букв!');
// Имя
let name = FullName(false, 'Укажите Ваше имя!', 'Введите имя', 'Имя должно состоять из букв!');
// Отчество
let dadname = FullName(false, 'Укажите Ваше отчество!', 'Введите отчество', 'Отчество должно состоять из букв!');
// Возраст
let age = FullName(true, 'Укажите Ваш возраст!', 'Введите возраст', 'Возраст должен состоять из цифр!');

function FullName(isInt, input, standart, help) {
  let myRegExp;
  if (isInt == true) {
    myRegExp = /[0-9]+$/;
  } else { 
    myRegExp = /[a-zA-ZА-Яа-яЁё]+$/;
  }
  let valuename = prompt(input, standart);
  while ((myRegExp.test(valuename)) == false || valuename == null || valuename == standart || valuename == 0) {
    alert(help);
    valuename = prompt(input, standart);
  }
  return valuename;
}
// Возраст + 5 лет
let age_5 = parseInt(age) + 5;
// Возраст в днях
let days_age = parseInt(age) * 365;
// Пол
let sex = confirm('Являетесь ли Вы мужчиной?');
let female;
let male;
if(sex == false) {
  female = 'Женский';
} else {
  male = 'Мужской';
}
// Пенсия
let pension;
let nopension;
if(sex == true && parseInt(age) < 63 || sex == false && parseInt(age) < 58) {
  nopension = 'Нет';
} else {
  pension = 'Да';
}
// Вывод
alert(`
  Ваше ФИО: ${surname + ' ' + name + ' ' + dadname}
  Ваш возраст: ${age}
  Ваш возраст в днях: ${days_age}
  Через 5 лет Вам будет: ${age_5}
  Вы на пенсии: ${pension || nopension}
  Ваш пол: ${female || male}`
)  