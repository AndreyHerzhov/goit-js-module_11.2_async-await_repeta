// Обработка ошибок с try...catch
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
//  - Блок catch без объекта ошибки

// const a = 5;


// console.log('Hello world');
 

try {
  console.log('Inside try before myVar');

  myVar;

  console.log('Inside try after myVar');
} catch (error) {
  console.dir(error.message)
  console.log('Error');
}

// console.log('After try and catch');

// setTimeout(() => {
//   try {
//     myVar;
//   } catch (error) {
//     console.log('Error');
//   }
// }, 100);

// console.log('After try and catch');