var marks = [];
var sum = 0;

for(let i = 10; i > 0; i--) {
   let filling = ( Math.floor(Math.random() * 10) ); 
    marks.push(filling);

    sum += filling; // 
    console.log('Промужеточный результат:', sum);
   
          
    }
    console.log('Весь массив:',marks);
    console.log('Итоговая сумма:', sum);
    console.log('Среднее арифметическое:', (sum/marks.length)) ;



var marks = [];

for(let i = 10; i > 0; i--) {
   marks.push ( Math.floor(Math.random() * 10) ); 
     
             
    }
    console.log('Весь массив:',marks);
    console.log('Максимальное значение: ', Math.max(...marks));
    console.log('Минимальное значение: ', Math.min(...marks));
    





