//#1
//Declare a variable called 'name' that has the value of your name.

var name = Mitchell;

//#2
//create an if statement that checks to see if your name is equal to 'Ben'
//If yes, log 'yes'
//otherwise log 'no'
//note: use console.log to log the string

if(name === 'ben'){
  console.log('yes'); 
}
else{
  console.log('no');
}

//#3
//create an array called 'favoriteFoods'.
//fill it up with the names of several of your favorite foods

var favoriteFoods = ["pizza", "eggs", "milk"];

//#4
//use a for loop to log each food in the 'favoriteFoods' array

for(var i = 0; i < favoriteFoods.length; i ++)
{
  console.log(favoriteFoods[i]);
}

//#5
//create an object called 'favoriteMovie'.
//give 'favoriteMovie' a property called 'runtime' and set it equal to how long the movie is in minutes
//give 'favoriteMovie' a property called 'title' and set it equal to the title
//give 'favoriteMovie' a property called 'director' and set it equal to the director's name

var favoriteMovie = {
  runtime:125,
  title:'Booby Jones Stroke of Genuis',
  director:'Rowdy Herrington',
}

//#6
//create a function called 'sayHi'.
//'sayHi' should accept one argument called 'name'
//when 'sayHi' is invoked it should log the string 'Hello <name>!' where <name> is equal to the 'name' argument
function sayHi(name){
  console.log('Hello " + name);
}

//#7
//create an array called 'friends'
//create three objects that have information about your friends
//each object should have a 'name', 'age', and 'vocation' property with appropriate data
//put the three objects inside of the 'friends' array

var friends = [{ name:'Benson',age:23,vocation:'HR'},{ name:'Khale',age:23,vocation:'Accounting'},{ name:'Tanner',age:23,vocation:'Business'}];

//#8
//use a for loop to iterate over the 'friends' array from problem #7
//inside the for loop print the string 'My friend <name> is <age> years old and does <vocation> for work.'

for(var i = 0; i < friends.length; i ++)
  {
    document.write('My friend ' + friends[i].name + ' is ' + friends[i].age + ' years old and does ' + friends[i].vocation + ' for work.');
  }

//#9
//create a constructor called 'User' that can function as a class for creating new user objects
//'User' should take 'email', and 'password' as arguments 
//each instance of 'User' that is created should have a 'email', and 'password' property that is equal to the arguments passed to the constructor

var user = new object('User','email','password');
  function user('User','email','password') {
    this.User = 'User';
    this.email = 'email';
    this.password = 'password';
}
  

//#10
//create a function called 'nFactorial(num)'
//'nFactorial' should return the factorial of the 'num' argument
//note: the factorial of 5 is (5 * 4 * 3 * 2 * 1) ->  120
//try to solve this recursively

function nFactorial(num){
  if(num == 0) {
        return 1
    } else {
        return num * factorial(num - 1);
    }
}
