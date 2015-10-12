'use strict';

var phoneBook = []; // Здесь вы храните записи как хотите
/*
 Функция добавления записи в телефонную книгу.
 На вход может прийти что угодно, будьте осторожны.
 */

function Userdata(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}
function isValidEmail(email) {
    var reg = /^[\w-]+@[\w-]+\.[a-z]{2,3}$/i;
    return reg.test(email)
}

function isValidPhone(phone) {
    var reg = /^[\d]{1}\ \([\d]{3}\) \ [\d]{3}-[\d]{2}-[\d]{3}$/;

    return reg.test(phone)
}
module.exports.add = function add(name, phone, email) {
    if (isValidEmail(email) && isValidPhone(phone)) {
        phoneBook.push(new Userdata(name, phone, email));
        console.log('Запись ' + name.concat(' ', phone) + 'добавлена');
        return true;
    } else {
        console.log('Веденные данные: ' + name.concat(' ', phone) + 'не валидны');
        return false;
    }


    // Ваша невероятная магия здесь

};



function search_index(query) {
    var index = [];
    phoneBook.forEach(function (item, i, phoneBook) {
        if (
            item.name.indexOf(query) +
            item.phone.indexOf(query) +
            item.email.indexOf(query) > -3
        ) {
            index.push(i);
        }

    });
    return index;
}

/*
 Функция поиска записи в телефонную книгу.
 Поиск ведется по всем полям.
 */

module.exports.find = function find(query) {
    var index = query ? search_index(query).map(function (identity) {
        return phoneBook[identity];
    }) : phoneBook;
    index.forEach(function (notes) {
            console.log(notes.name + ', ' + notes.phone + ', ' + notes.email)
        }
    );

    // Ваша удивительная магия здесь


};

/*
 Функция удаления записи в телефонной книге.
 */
module.exports.remove = function remove(query) {
    var Format = index(query);
    phoneBook = phoneBook.filter(function (identity) {
        return Format.indexOf(identity) < 0;
    });
    console.log('Удалено контактов: ' + Format.length.toString());
    // Ваша необьяснимая магия здесь

};

/*
 Функция импорта записей из файла (задача со звёздочкой!).

module.exports.importFromCsv = function importFromCsv(filename) {
    var data = require('fs').readFileSync(filename, 'utf-8');

    // Ваша чёрная магия:
    // - Разбираете записи из `data`
    // - Добавляете каждую запись в книгу
};


 Функция вывода всех телефонов в виде ASCII (задача со звёздочкой!).

module.exports.showTable = function showTable(filename) {

    // Ваша чёрная магия здесь

};
*/
