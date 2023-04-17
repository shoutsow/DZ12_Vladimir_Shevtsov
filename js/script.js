document.write(`<p class="pz">` + 'Задание 1)' + `&ensp;`);
let str = 'aaa@bbb@ccc';
let newstr = str.replace(/@/gi, '!');
document.write('Замена методом "replace":' + `&emsp;` + `<br>` + `<p class="rs">` + newstr + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 2)' + `&ensp;`);
let date = '2025-12-31';
let newdate = date.replace(/-/gi, '/');
let newnewdate = newdate.replace(/(2025)\/(12)\/(31)/, '$3/$2/$1');
document.write('Преобразование даты в формат со "/" вместо "-" и разворот последовательности в виде дд/мм/гггг:' 
+ `&emsp;` + `<br>` + `<p class="rs">` + newnewdate + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 3)' + `&ensp;`);
let str1 = 'Я учу javascript!';
let str1s = str1.substr(-15, 14);
document.write('Вырезаем слово "учу" и слово "javascript" способом "substr":' 
+ `&emsp;` + `<br>` + `<p class="rs">` + str1s + `</p>` + `<br>`);
let str1ss = str1.substring(2, 16);
document.write(`<p class="pz">` + 'Вырезаем слово "учу" и слово "javascript" способом "substring":' + `</p>` 
+ `<p class="rs">` + str1ss + `</p>` + `<br>`);
let str1sl = str1.slice(2, 16);
document.write(`<p class="pz">` + 'Вырезаем слово "учу" и слово "javascript" способом "slice":' + `</p>` 
+ `<p class="rs">` + str1sl + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 4)' + `&ensp;`);
let arr = [4, 2, 5, 19, 13, 0, 10];
let sumofcubes = 0;
for (let i = 0; i < arr.length; i++) {
    sumofcubes += Math.pow(arr[i], 3);
}
let res = Math.sqrt(sumofcubes);
document.write('Находим квадратный корень из суммы кубов элементов массива [4, 2, 5, 19, 13, 0, 10]:' 
+ `&emsp;` + `<br>` + `<p class="rs">` + res + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 5)' + `&ensp;`);
let a = 3;
let b = 5;
let a1 = 6;
let b1 = 1;
let c = Math.abs(a - b);
let c1 = Math.abs(a1- b1);
document.write('Делаем так, чтобы в любом случае в переменную "c" записалось положительное значение. + ' 
+ 'Проверяем работу скрипта при a и b, равных соответственно 3 и 5:' 
+ `&emsp;` + `<br>` + `<p class="rs">` + c + `</p>`);
document.write(`<p class="pz">` + 'Проверяем работу скрипта при a и b, равных соответственно 6 и 1:' 
+ `</p>` + `<p class="rs">` + c1 + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 6)' + `&ensp;`);
let dat = new Date();
let fdat = dat.toLocaleString('by-BY');
let time = fdat.substring(11, 20);
let date1 = fdat.substring(0, 10);
/*function add0() {
    let newform = '';
    let form = dat.getHours() + ':' + dat.getMinutes() + ':' + dat.getSeconds() + ' '
    + dat.getDate() + '.' + Number(dat.getMonth() + 1) + '.' + dat.getFullYear();
    form = String(form);
    for (let i = 0; i < form.length; i++) {
        if (form[i - 1] == ':' && form[i + 1] == ':') {
            newform = form.replace(form[i], '0' + form[i]);
            break;
        }
        else if (form[i - 1] == ':' && form[i + 1] == ' ') {
            newform = form.replace(form[i], '0' + form[i]);
            break;
        }
        else if (form[i - 1] == ' ' && form[i + 1] == '.') {
            newform = form.replace(form[i], '0' + form[i]);
            break;
        }
        else if (form[i - 1] == '.' && form[i + 1] == '.') {
            newform = form.replace(form[i], '0' + form[i]);
            break;
        }
    }
    document.write('Выводим  на экран текущую дату-время в формате чч:мм:сс дд.мм.гггг:'
+ `<br>` + `<p class="rs">` + newform + `</p>`);
}
add0();*/ // что-то этим способом неверно берётся месяц и криво работает функция... непонятно, почему.
document.write('Выводим  на экран текущую дату-время в формате чч:мм:сс дд.мм.гггг:'
+ `<br>` + `<p class="rs">` +  time + `&ensp;` + date1 + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 7)' + `&ensp;`);
let str2 = 'aa aba abba abbba abca abea';
let preres = str2.match(/abb*a/gi);
let strres = String(preres).replace(/,/gi, ', ');
document.write('Работа регулярки, которая найдет строки aba, abba, abbba по шаблону: ' 
+ 'буква "a", буква "b" любое количество раз, буква "a":' 
+ `<p class="rs">` + strres + `</p>`);
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 8)' + `&ensp;`);
function tnumcheck() {
    let tnum = prompt('Введите номер телефона в международном формате', '+375295555555');
    let regchk = /^\+(?:[0-9] ?){6,14}[0-9]$/g;
    document.write('Cтрогая проверка ввода номера телефона в международном формате, ' 
    + 'используя регулярные выражения:' + `<p class="rs">` + regchk.test(tnum)  + `</p>`);
}
tnumcheck();
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 9)' + `&ensp;`);
function mailcheck() {
    let mail = prompt('Введите адрес электронной почты', 'zina18@yahoo.com');
    let regchk1 = /^\D+[a-z0-9_-]+@([a-z0-9-]+\.)+[a-z]{2,11}$/gi;
    document.write('Cтрогая проверка ввода адреса электронной почты, ' 
    + 'используя регулярные выражения:' + `<p class="rs">` + regchk1.test(mail)  + `</p>`);
}
mailcheck();
document.write(`</p>` + `<br>` + `<hr>`);


document.write(`<p class="pz">` + 'Задание 10)' + `&ensp;`);
function splitfadr() {
    let fadr = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
    let pointer1 = 0;
    let pointer2 = 0;
    let pointer3 = 0;
    for (let i = 0; i < fadr.length; i++) {
        if (fadr[i] == '/' && fadr[i + 1] !== '/' && fadr[i - 1] !== '/') {
            pointer1 = i;
            break;
        }
    }
    for (let i = 0; i < fadr.length; i++) {
        if (fadr[i] == '?') {
            pointer2 = i;
            break;
        }
        else {
            pointer2 = fadr.length - 1;
        }
    }
    for (let i = 0; i < fadr.length; i++) {
        if (fadr[i] == '#') {
            pointer3 = i;
            break;
        }
        else {
            pointer3 = fadr.length;
        }
    }
    let domn = fadr.substring(0, pointer1);
    let padr = fadr.substring(pointer1, pointer2);
    let prms = fadr.substring(pointer2 + 1, pointer3);
    let hash = fadr.substring(pointer3, fadr.length);
    document.write('Получаем адрес доменного имени: ' + `<p class="rs">` + domn + `</p>` 
    + `<br>` + `<p class="pz">` + 'Oстальную часть адреса без параметров:' 
    + `</p>` + `<p class="rs">` + padr + `</p>` 
    + `<br>` + `<p class="pz">` + 'Параметры:' + `</p>` + `<p class="rs">` + prms + `</p>` 
    + `<br>` + `<p class="pz">` + 'И хеш:' + `</p>` + `<p class="rs">` + hash + `</p>`);
}
splitfadr();
document.write(`</p>` + `<br>` + `<hr>`);
