module.exports = function check(str, bracketsConfig) {

  /*
let brStr = bracketsConfig.flat(Infinity).join("").replace(/\s+/g, '');
let strClear = str.replace(/\s+/g, '')

  // str.includes(arr[0].join('').replace(/\s+/g, '')) Смотрим включаеет ли строка в себя подмассив
  // подмассив делаем строкой join('') 
  // и из строки удаляем пробелы replace(/\s+/g, '') - метод возвращает новую строку без пробелов 


// Как сравнить пары в строке и в массиве?

let brNewStr = "";
for (let i=0; i<bracketsConfig.length; i++) {
  brNewStr += bracketsConfig[i].join("");
}

if (arr1 == true && arr2 == true && strClear.length === brStr.length) {
  return true;
} else return false
*/

let newArr = [];
bracketsConfig.forEach(element => {
  // в новый массив добавляем element, который является подмассивом 
  //по аналогии если бы let a = arrN[0].join("") и потом newArr.push(a)
  newArr.push(element.join("")) 
});

// далее проверяем содержит ли строка элемент массива, который у нас у же тоже строка [" (  ) ", " [  ] "]

for (let i = 0; i<newArr.length; i++) {
  if( str.includes(newArr[i].replace(/\s+/g, '')) ) {
     str.replace(newArr[i], ""); // Возращаем строку без пары newArr[i] - (  )
     i--; // возвращаемся еще раз проверить
  }
}

if (str.length == 0) {
  return true;
} else return false;


}
