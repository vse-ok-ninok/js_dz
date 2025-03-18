/*  Пользователь может вести машину только если ему больше 18 лет, он имеет права
и он НЕ пьян*/
let age = Number(prompt("Сколько тебе лет?"));
let isDrunk = prompt("Вы трезвый? да/нет") == "нет" ? true : false;
let hasLicense = prompt("У вас есть лицензия? да/нет") == "да" ? true : false;

console.log((age >=18) && !isDrunk && hasLicense ?"Может":"Не может");