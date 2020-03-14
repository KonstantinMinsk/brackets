module.exports = function check(str, bracketsConfig) {

  /*
let brStr = bracketsConfig.flat(Infinity).join("").replace(/\s+/g, ''); но тогда будет следующий массив "()[]"
ПримерЖ 

let strClear = str.replace(/\s+/g, '') - убираем пробелы

  // str.includes(arr[0].join('').replace(/\s+/g, '')) Смотрим включаеет ли строка в себя подмассив
  // подмассив делаем строкой join('') 
  // и из строки удаляем пробелы replace(/\s+/g, '') - метод возвращает новую строку без пробелов 


// Как сравнить пары в строке и в массиве?
*/


// Матрицу переделываем в массив так, чтобы подмассив стал arr[i]
let newArr = [];
bracketsConfig.forEach(element => {
  newArr.push(element.join(""))      // можно использовать метод map let newArr = bracketsConfig.map( (b) => b.join("") 
});
// в новый массив добавляем element, который является подмассивом 
  //по аналогии если бы let a = arrN[0].join("") и потом newArr.push(a)
  // Exempale: было[[ ' (' , ' ) ' ], [ ' [ ' , ' ] ' ]]   стало -    [" (  ) ", " [  ] "]



// далее проверяем содержит ли строка элемент массива, который у нас у же тоже строка [" (  ) ", " [  ] "]
// let strClear = str.replace(/\s+/g, '') если убрать пробелы тоже самое
for (let i = 0; i<newArr.length; i++) {
  if( str.includes(newArr[i]) ) {
    str = str.replace(newArr[i], "");  
    i =-1; // возвращаемся проверять все заново, т.к. -1 +1 в for i = 0
    // Возращаем строку без пары newArr[i] - (  ) 
    // Почему наличеи пробелов не влияет? (newArr[i].replace(/\s+/g, ''), "") - не дает никакого результата
    // i--; возвращаемся еще раз проверить
  }
}

if (str.length == 0) {
  return true;
} else return false; 

// короткая запись return (str) ? false : true;

}
