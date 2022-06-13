const validJSON = '{ "name": "Манго", "age": 3 }';
const invalidJSON = '{ бекенд вернул вот такое чудо }';



try {
      console.log('1');

    console.log(JSON.parse(validJSON));

    
    console.log('2');
} catch (error) {
  console.log('Error');
}

console.log('After TRYCATCH');