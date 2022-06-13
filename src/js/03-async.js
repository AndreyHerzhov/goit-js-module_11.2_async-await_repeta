// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch
 
 function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝',
    apple: '🍎'
  };

   return new Promise((resolve, reject) => setTimeout(() => resolve(fruits[name]), 1500))
 
}

// setTimeout(() => {
//   console.log('TimeOut');
// }, 0);

// console.log('1');

async function asyncMakeSmoothie() {
  try {
    console.time('asyncMakeSmoothie')
    const apple =   getFruit('apple')
    const kiwi =   getFruit('kiwi')
    const strawberry =   getFruit('strawberry')

    const fruits =    Promise.all([apple,kiwi,strawberry])

    console.log(fruits);
 
  
    // console.timeEnd('asyncMakeSmoothie')
  } catch (error) {
    console.log(error);
  }
  
}

// console.log('2');

asyncMakeSmoothie() 
// console.log('3');

// function makeSmoothie() {
//   getFruit('apple').then(res => {
//     console.log(res)
//     getFruit('kiwi').then(res => console.log(res))
//   })
// }

 



// async function fn () {}

// const fn = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName() {}
// }