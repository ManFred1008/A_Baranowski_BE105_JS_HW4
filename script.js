/* 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. */

let task = 0;

console.log(`\n Task ${++task}\n`);

let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
   console.log(`${i + 1}-й элемент: ${arr1[i]}`);
}

/* 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3. */
console.log(`\n Task ${++task}\n`);

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr2.length; i++) {
   arr2[i] = +arr2[i];
   if (arr2[i] > -10 && arr2[i] < -3) {
      console.log(arr2[i]);
   }
}

/* 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите. */
console.log(`\n Task ${++task}\n`);

let arr3For = [],
    arr3While = [],
    k = 22,
    sum3 = 0,
    result = 0;

for (let i = 0; i <= 57 - 23; i++) {
   arr3For.push(++k); 
   sum3 += arr3For[i];
}

console.log('for: ', arr3For);

let j = 0;
k = 22;

while(j <= 57 - 23) {
   arr3While.push(++k);
      j++;
}

console.log('while: ', arr3While);
console.log(sum3);

/* 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. */
console.log(`\n Task ${++task}\n`);

let arrStr4 = ['10', '20', '30', '50', '235', '3000'];

let arrCheck = [];

for (let i = 0; i < arrStr4.length; i++) {
   arrCheck = arrStr4[i].split('');
   if (arrCheck[0] == 1 || arrCheck[0] == 2 || arrCheck[0] == 5) {
      console.log(arrStr4[i]);
   }
}

/* 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. */
console.log(`\n Task ${++task}\n`);
document.write(`<h2>Task ${task}</h2>`);

console.log('See browser window...')

let arrWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arrWeek.length; i++) {
   if (arrWeek[i] == 'СБ' || arrWeek[i] == 'ВС') {
      document.write(`<strong>${arrWeek[i] + ' '}</strong>`);
   } else {
      document.write(arrWeek[i] + ' ');
   }
}

/* 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length. */
console.log(`\n Task ${++task}\n`);

let arr6 = ['word', 45, -8, [1, 2, 'three'], false, 986];

arr6.push(prompt('6.Введите последний элемент массива:', 345));
console.log(arr6[arr6.length-1]);

/* 7. Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тех пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран. */
console.log(`\n Task ${++task}\n`);

let arr7 = [];
let i = +prompt('7.Введите число:');

for (; ; ) {
   if (i != '' || i != 0) {
      if (isNaN(i)) {
         alert('Неверно! Введите число!')
      } else {
         arr7.push(+i);
      }      
   i = +prompt('7.Введите число:');
   } else break;
}

console.log(arr7);

arr7.sort(function(a, b) {
   return a - b;
});

console.log(arr7);

/* 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse. */
console.log(`\n Task ${++task}\n`);

let arr8 = [12, false, 'Текст', 4, 2, -5, 0] ;

console.log(arr8);
console.log('Цикл while:');
j = 0;
let arr8Rev = [];

while (j < arr8.length) {
   arr8Rev.push(arr8[(arr8.length - 1) - j]);
   j++;
}

console.log(arr8Rev);

console.log('Метод reverse:');

arr8.reverse();

console.log(arr8);

/* 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6]. */
console.log(`\n Task ${++task}\n`);

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let num9 = 0;

console.log(arr9);

for (i = 0; i < arr9.length; i++) {
   if(arr9[i] == undefined) {
      num9 += 1;
   }
}

console.log(`Кол. пустых элементов: ${num9}`);

/* 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2]. */
console.log(`\n Task ${++task}\n`);

let arr10 = [1,8,13,76,8,7,22,2,3,2];


let sum10 = 0;

let numNum = +prompt('10. Выберите количество нулей в массиве');
for (let num = 0, place;num < numNum;num++) {
   place = +prompt(`10.Выберите место от 0 до ${arr10.length} для нуля номер ${num+1} `);
   arr10.splice(place, 0, 0);
}

let firstNull = arr10.indexOf(0);
let lastNull = arr10.lastIndexOf(0);

console.log(arr10);

for (let i = firstNull + 1; i < lastNull; i++) {
   sum10 += +arr10[i];
}

console.log(sum10);

/* 11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране:*/
console.log(`\n Task ${++task}\n`);
document.write(`<h2>Task ${task}</h2>`);

let arr11 = [];
let height = +prompt('11. Выберите высоту пирамиды:');

let x = '^';

for (let j = 1; j <= height; j++) {
   for (let i = 1; i <= height - j; i++){
      arr11.push(' ');
   }
   for (let i = 1; i <= (j - 1) * 2 + 1; i++) {
      arr11.push(x);
   }
   arr11 = arr11.join('');
   console.log(arr11);
   document.write(`<pre>${arr11}</pre>`);
   arr11 = [];
}
