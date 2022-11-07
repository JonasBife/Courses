//Em operadores relacionais o resultado sempre será True or False
//But in javascript you can compare either the content and the type

//Comparing the content
console.log('01)','1' == 1);

//Comparing the content and the type
console.log('02)','1' === 1);

//Comparing the content
console.log('03)','3' != 3);

//Comparing the content and the type
console.log('04)','3' !== 3);


console.log('05)', 3 < 2);
console.log('06)', '3' > 2);
console.log('07)', '3' <= 2);
console.log('08)', 3 >= 2);

//Reference date in javascript is 01 january 1970
const d1 = new Date(0);
const d2 = new Date(0);

console.log('09)', d1 == d2); //the date reference is for the memory local and not the content, so it returns false
console.log('10)', d1 === d2);

console.log('11)', d1.getTime === d2.getTime);  //the problem is resolved using this function because you bring the content number 
                                //and not the reference

console.log('12)', undefined == null);
console.log('13)', undefined === null);