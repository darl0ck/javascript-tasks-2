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
function isValidPhone(phone) {
    return /^((\+?\d{1,4})[\- ]?)?((\(\d{3}\)|\d{3})[\- ]?)[\d\- ]{7,10}$/.test(phone);
}

function isValidEmail(email) {
    return /^[\w\d\.-]+@([\w\u0410-\u044F\d-]+)(\.[\w\u0410-\u044F\d]+)+$/.test(email);
}
module.exports.add = function add(name, phone, email) {
    if (isValidEmail(email) && isValidPhone(phone)) {
        phoneBook.push(new Userdata(name, phone, email));
        return true;
    } else {
        return false;
    }


    // Ваша невероятная магия здесь

};

// Функция поиска индексов запрошенных элементов

function search_index(query) {
    var index_number = [];
    query = (query || '').toLowerCase();
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name.toLowerCase().indexOf(query) >= 0 ||
            phoneBook[i].phone.indexOf(query) >= 0 ||
            phoneBook[i].email.toLowerCase().indexOf(query) >= 0) {
            index_number.push(i);
        }
    }
    return index_number;
}

/*
 Функция поиска записи в телефонную книгу.
 Поиск ведется по всем полям.
 */

module.exports.find = function find(query) {
    var index_number = query ? search_index(query).map(function (identity) {
        return phoneBook[identity];
    }) : phoneBook;
    index_number.forEach(function (notes) {
            console.log(notes.name + ', ' + notes.phone + ', ' + notes.email)
        }
    );

    // Ваша удивительная магия здесь


};

/*
 Функция удаления записи в телефонной книге.
 */
module.exports.remove = function remove(query) {
    var format = search_index(query);
    phoneBook = phoneBook.filter(function (identity) {
        return format.indexOf(identity) < 0;
    });
    console.log('Удалено контактов: ' + format.length.toString());
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
