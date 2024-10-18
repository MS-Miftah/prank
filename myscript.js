//Class00:Basic JavaScript........................................
/*
use camelCase;

Show result:
1.console.log(...)
2.document.getElementById('...').COMMAND=VALUE;

Syntax
1.Variable:declaration IDENTIFIER = VALUE;
2.Function:declaration funcName (ARGUMENT) {OBJECT}; "()" means panthesis"
3.Object:variable = {"PROPERTY": VALUE};
4.Array: variable = [VALUE];

Quotes
1.'He is "General"'
2."It's okay"
3."I\'m Mr. \"Jack\""

Escape code in string
\' (single quote)
\" (double quote)
\\ (backslash)
\n (newline)
\r (carriage return)
\t (tab)
\b (backspace)
\f (form feed)

Notation
1.camel 
2.bracket
3.dot

Magic
location = "provide a location and enjoy!"
*/
console.log('hello')
document.getElementById('p').innerHTML="I\'m Mr.\"Jack\"";


//Class01:Comment...................................................
/*
1.in-line comment;
2.multi-line comment;
*/


//Class03:Variables.................................................
/*
Declaration
1.var; (double var is possible, it id global)
2.let; (double let isn't possible, it is local) [safe use]
3.const; (for constant or read only variables, it cant be change)
*/
var firstName = 'Miftah';
var firstName = 'Eftha';

let an = 2;
//let an = 2; is not possible.

const pi = 3.1416;

//Class02:DataTypes.................................................
/*
1.string; (something within quotation)
2.number; (1,2,4.2..)
3.boolean; (true or false)
4.undefined; (has not set any data)
5.symbol; (unique)
6.null; (result is nothing)
7.object; (key values)
*/
let string = 'Miftah';
document.getElementById('pa').innerHTML=string;

let number = 42;
document.getElementById('par').innerHTML=number;

let boo = 5;
let lean = 5;
document.getElementById('para').innerHTML=(boo==lean);

let undef1ned;
document.getElementById('parag').innerHTML=undef1ned;


//Class04:Operators.................................................
/*
For Number
1.adding; (+)
2.subtracting; (-)
3.multiplying; (*)
4.dividing; (/)
5.increment; (++)
6.decrement; (--)
7.remainder; (%)
8.augmented adding; (+=)
9.augmented subtracting; (-=)
10.augmented multiplying; (*=)
11.augmented dividing; (/=)
12.equal; (=)

For Boolean
13.equality; (==)
14.strict equality; (===)
15.inequality; (!=)
16.strict inequality; (!==)
*/
//NUMBERS
add = 1 + 1;
document.getElementById('paragr').innerHTML=add;

subtract = 2 - 2;
document.getElementById('paragra').innerHTML=subtract;

multiply = 4 * 2;
document.getElementById('paragrap').innerHTML=multiply;

divide = 6 / 2;
document.getElementById('paragraph').innerHTML=divide;

//increment or, add = add + 1;
add++;
document.getElementById('paragr').innerHTML=add;

//decrement or, sub = sub - 1;
subtract--;
document.getElementById('paragra').innerHTML=subtract;

remainder = 7 % 2;//7-2*3=(1)
document.getElementById('aragraph').innerHTML=remainder;

//aug addition or, add = add + 1;
add += 5; //also, add = 'I am fisrt.'; add += 'I am second.';
document.getElementById('paragr').innerHTML=add;

//aug subtraction or, sub = sub - 5;
subtract -= 5;
document.getElementById('paragra').innerHTML=subtract;

//aug multiplication or, mul = mul * 5;
multiply*= 5;
document.getElementById('paragrap').innerHTML=multiply;

//aug division or, div = div / 5;
divide /= 5;
document.getElementById('paragraph').innerHTML=divide;

//STRING
//Concatenating with + (adding multiple strings of same variable)
text01 = 'Hello ' + 'Shoourov';
document.getElementById('ragraph').innerHTML=text01;

//Concatenating with += (adding extra string of same variable)
text02 = 'Hello ';
text02 += 'Jakir';
document.getElementById('agraph').innerHTML=text02;

//Constructing with variables (adding multiple strings and variables)
place = "Dhaka";
text03 = 'I live in ' + place + ', Bangladesh.';
document.getElementById('graph').innerHTML=text03;

//Appending variables (adding extra variable )
let adjective = "awesome!";
let text04 = " Learning code is ";
text04 += adjective;
document.getElementById('raph').innerHTML=text04;

//Change string
let text05 = 'Bad Luck!';
text05 = 'Good Luck!';
document.getElementById('aph').innerHTML=text05;


//Class05:Methods................................................
//Find length
let text06 = 'welcome';
document.getElementById('ph').innerHTML=text06.length;

//Find nth character with [] notation
let text07 = 'Hemel';
nthCharacter = text07[0]; // if n = 1, [] = 1-1 = 0;
document.getElementById('h').innerHTML=nthCharacter;

//Find nth last character
let text08 = 'Mithu';
nthLastCharacter = text08[text08.length-1]; // if n = 1, [] = 1;
document.getElementById('u').innerHTML=nthLastCharacter;


//Class06:Function Statement................................................
/*
1.Basic
2.Array
3.If statement
4.Switch statement
*/
//Basic------------------------------------------------------------
//Reusable function 
function reUse()
{
		console.log('Reusable function');
};
reUse();
reUse();

//Passing values to function with arguments
function myFunction(a, b)
{
	console.log(a-b);
};
myFunction(10, 5);

//Scope (visibility of variables)
var g = 10; //Global scope (outside of function)
function hello()
{
	var f=2; //Local scope (inside of function)
	console.log(f);
};
hello();
console.log(g);

//Global vs Local
var d = 3; // script always search outside of function 
function hi()
{
	d = 4; //function first search inside then outside of function-  
	return d;
};
console.log(hi());
//Return
//Return value
function mew(num)
{
	return num - 1;
};
console.log(mew(10));


//Undefined return 
var sum = 0;
function three()
{
sum += 3;
};
console.log(three());

//Assignment with return value
var alu = 6;
function aluuu(num)
{
	return (num + 5);
}
alu = aluuu(10);
console.log(alu);

//Stand in line {don't get it!}
function next(arr, item)
{
	arr.push(item);
	return arr.shift();
};
var testArr = [1,2,3,4,5];
console.log('Before :' + JSON.stringify(testArr));
console.log(next(testArr, 6));
console.log('After :' + JSON.stringify(testArr));

//Returning Boolean value
function boolean(a, b)
{
	return a < b;
};
console.log(boolean(20 ,12));

//Word Blanks {don't get it!}
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb)
{
	var result = '';
	result += 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' to the store.';
	return result; 	
};
console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));
document.getElementById('un').innerHTML=wordBlanks('dog', 'big', 'ran', 'quickly');

//Array-------------------------------------------------------------- 
/*
functions
1.push
2.pop
3.shift
4.unshift
*/
//store multiple data
let array = [10,35, 23];

//multi dimensional array
let nestedArray = [['Miftah',25], ['Eftha',20]];

//find data from array data (when n = 1-1 = 0);
let myData = nestedArray[0]; 
document.getElementById('uni').innerHTML=myData;

//modify array
array[1] = 79; // output 10,79,23

//find data from nested array
let myArray = [[1,2], [4,5], [[7,8], 9]];
let dataArray = myArray[2][0][1]; // output 8

//Mutate a const array
const set = [1, 2, 3];
//set = [4, 5, 6]; is not possible
set[0] = 4;
set[1] = 5;
set[2] = 6;
console.log(set);

//If statement-----------------------------------------------------
/*
remember about logical order

Uses
1.condition
2.comparison
3.selection
*/
//conditional logic
function statement(hello)
{
	if (hello)
	{
		return 'Yes, it is true.if';
	}
	return 'No, it is false';
};
console.log(statement(true));
document.getElementById('unive').innerHTML=statement(true);
 
 //Comparison with the Equality (==) operator
function test01(val)
{
	if (val == 12)
	{
		return 'Equal';
	}
	return 'Not Equal';
};
console.log(test01(12));

 //Comparison with the Strict Equality (===) operator
function test02(val)
{
	if (val === 12)
	{
		return 'Equal';
	}
	return 'Not Equal';
};
console.log(test02(12)); //1===1(true), 1==='1'(false)

//Practice of comparing
function test03(a, b)
{
	if (a == b) //use (===) to compare
	{
		return 'Equal';
	}
	return 'Not Equal';
};
console.log(test03(5, '5'));

 //Comparison with the Inequality (!=) operator
function test04(val)
{
	if (val != 1)
	{
		return 'Not Equal';
	}
	return 'Equal';
};
console.log(test04(2));

 //Comparison with the Strict Inequality (!==) operator
function test05(val)
{
	if (val !== 1)
	{
		return 'Not Equal';
	}
	return 'Equal';
};
console.log(test05(6));

 //Comparison with Greater than (>) operator
function test06(val)
{
	if (val > 100)
	{
		return 'Over 100';
	}
	if (val > 10)
	{
		return 'Over 10';
	}
	
	return '10 or Under';
};
console.log(test06(8));

 //Comparison with Greater or Equal (>=) operator
function test07(val)
{
	if (val >= 100)
	{
		return '100 or Over';
	}
	if (val >= 10)
	{
		return '10 or Over';
	}
	
	return 'Under 10';
};
console.log(test07(80));

 //Comparison with Lesser than (<) operator
function test08(val)
{
	if (val < 10)
	{
		return 'Under 10';
	}
	if (val < 100)
	{
		return 'Under 100';
	}
	
	return '100 or Over';
};
console.log(test08(800));

//Comparison with Lesser or Equal (<=) operator
function test09(val)
{
	if (val <= 10)
	{
		return '10 or Under';
	}
	if (val <= 100)
	{
		return '100 or Under';
	}
	
	return 'Over 100';
};
console.log(test09(200));
 
//Comparison with Logical And (&&) operator
function test10(val)
{
	if (val <= 60 && val >=20)
	{
		return 'Yes';
	}	
	return 'No';
};
console.log(test10(56));

//Comparison with Logical Or (||) operator
function test11(val)
{
	if (val <= 20 || val >=60)
	{
		return 'Yes';
	}	
	return 'No';
};
console.log(test11(560));

//Else statement
function test12(val)
{
	if (val < 20)
	{
		return 'Under 20';
	}
	else
	{	
		return '20 or Over';
	}
};
console.log(test12(5));

//Else if statement
function test13(val)
{
	if (val > 10)
	{
		return 'Over 10';
	}
	else if (val < 5)
	{	
		return 'Under 5';
	}
	else
	{
		return 'Between 5 and 10'; // else doesn't need 'return' before last } bracket.
	}
};
console.log(test13(5));

//Chaining if else statement
function test14(num)
{
	if (num < 5)
	{
		return 'Tiny';
	}
	else if (num < 10)
	{
		 return 'Small';
	}
	else if (num < 15)
	{
		return 'Medium';
	}
	else if (num < 20)
	{
		return 'Large';
	}
	else
	{
		return 'Huge';
	}
};
console.log(test14(3));

//Golf code
var league = ['Legend','Titan','Champion','Master','Crystal', 'Gold', 'Silver', 'Bronze'];
function test15(attack,won)
{
	if (attack == 1)
	{
		return league[0];
	}
	else if (attack == won - 2)
	{
		 return league[1];
	}
	else if (attack == won - 1)
	{
		return league[2];
	}
	else if (attack == won )
	{
		return league[3];
	}
	else if (attack == won + 1)
	{
		return league[4];
	}
	else if (attack == won + 2)
	{
		return league[5];
	}
	else if (attack == won + 3)
	{
		return league[6];
	}
	else if (attack == won + 4)
	{
		return league[7];
	}
	return "You're demoted!";
};
console.log(test15(10, 9));
document.getElementById('univer').innerHTML=test15(10, 9);


//Returning early pattern (don't get it!)
function test17(a, b)
{
	if (a < 0 || b < 0)
	{
		return undefined;
	}
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
};
console.log(test17(1, 4));

//Conditional operator (Ternary) [condition ? statement if true : statement if false]
function test19(a, b)
{
	return a === b ? true : 'not matched';
}
console.log(test19(1, 2));

//Multi-conditional operator
function test20(val)
{  
	return val > 0 ? 'Positive' : val < 0 ? 'Negative' : 'Zero';
}
console.log(test20(0));

//Switch statement--------------------------------------------------
 /*
 Uses
 1.selection (choose an option from among)
 2.election (multi options for a result)
 */
function switch01(val)
 {
 	var answere = '';
 	switch(val)
 	{
 	case 1: 
 		answere = 'Alpha';
 		break;
 	case 2: 
 		answere = 'Beta';
 		break;
 	case 3: 
 		answere = 'Gamma';
 		break;
 	case 4: 
 		answere = 'Delta';
 		break;
 	}
 	return answere;
 };
console.log(switch01(2))

//Default switch 
function switch02(val)
 {
 	var answere = '';
 	switch(val)
 	{
 	case 'a': 
 		answere = 'Alpha';
 		break;
 	case 'b': 
 		answere = 'Beta';
 		break;
 	case 'g': 
 		answere = 'Gamma';
 		break;
 	case 'd': 
 		answere = 'Delta';
 		break;
 	default:
 		answere = 'type'
 	}
 	return answere;
 };
console.log(switch02('a'));

//Multiple identical option
function switch03(val)
 {
 	var answere = '';
 	switch(val)
 	{
 	case 1:
 	case 2:
 	case 3:
 		answere = 'Mild';
 		break;
	case 4:
 	case 5:
 	case 6:
 		answere = 'Moderate.switch';
 		break;
	case 7:
 	case 8:
 	case 9:
 		answere = 'Severe';
 		break;
 	}
 	return answere
 };
console.log(switch03(5))
document.getElementById('univers').innerHTML=switch03(5);

//Replacing If to Switch chain
function test16(val)
{
	var answere = '';
	if (val === 'a')
	{
		return 'Apple';
	}
	else if (val === 'b')
	{
		 return 'Bird';
	}
	return answere;
};

console.log(test16('b'));
//conversion 
function switch04(val)
{
	var answere = '';
	switch(val)
	{
	case 'a':
		answere = 'Apple';
	break;
	case 'b':
		answere = 'Bird';
		break;
	}
	return answere;
};
console.log(switch04('b'));

//Counting cards (don't get it!)
var count = 0;
function cc(card)
{
	switch(card)
	{
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
		count++;
		break;
	case 10:
	case 'J':
	case 'Q':
	case 'K':
	case 'A':
		count--;
		break;
	}
	var holdbet = 'Hold';
	if (count > 0)
	{
		holdbet = 'Bet';
	}
	return count + ' ' + holdbet;
};
cc('K');
console.log(cc('A'));


//Class07:Objects.....................................................
/*
Uses
Selection

Rules
1.use COMMA (,) after every VALUE.
2.use DOUBLE QUOTATION ("") for every PROPERTY.
3.use SINGLE QUOTATION for ('') every STRING.
*/
//Structure
var objects =
{
	"Name" : 'Miftah',
	"Age" : 25,
	"Address" : ['Tangail', 'Dhaka']
};

//access with Dot notation
var object01 = objects.Name; 
console.log(object01); // skip 2 lines: console.log(objects.Name);

//access with Bracket notation
var object02 = objects["Address"][0]; 
console.log(object02); // console.log(objects['Address'][0]);

// access with Variable
var old = "Age";
var object03 = objects[old];
console.log(object03); // console.log(objects[old]);

//Update properties
objects.Name = 'Eftha';

objects["Name"] = 'Erfan';

var name = "Name";
objects[name] = "Shahida";
console.log(objects[name]);

//Add new properties
objects.Country = 'Banghladesh'; // by dot notation
console.log(objects.Country);

objects["Continent"] = 'Asia'; // by bracket notation
console.log(objects["Continent"]);

var planet = "Planet";
objects[planet] = 'Earth'; // by variable
console.log(objects[planet]);

//Delete properties
delete objects.Planet;
console.log(objects.Planet);

//Replacing Switch to Object to If
function switch05(val)
{
	var result = '';
	switch(val)
	{
	case 'alpha':
		result = 'Adam';
		break;
	case 'bravo':
		result = 'Boston';
		break
	}
	return result;
};
console.log(switch05('alpha'));
//conversion to switch
function object04(val)
{
	var result = '';
	var lookup =
	{
		"alpha": 'Adam',
		"bravo": 'Boston'
	}
	result = lookup[val];
	return result;
};
console.log(object04('bravo'));
//conversion to if
function test18(val)
{
	//here don't need "var result = '';" because of else
	if (val === 'alpha')
	{
		return 'Adam';
	}
	else if (val === 'bravo')
	{
		return 'Boston';
	}
	// here don't need 'return result' because of else
};
console.log(test18('bravo')); 

//Testing properties
var myObjects =
{
	"Pen": '5tk',
	"Book": '100tk',
	"Scale": '30tk'
}
function object05(prop)
{
	if (myObjects.hasOwnProperty(prop))
	{
		return myObjects[prop];
	}
	else
	{
		return 'Not Found!';
	}
};
console.log(object05("Pen"));

//Accessing nested arrays
var music = 
[
	{
	"Artist": 'Atif Aslam',
	"Title": 'Allahu',
	"Formate": ['CD', 'MP4', '4k'],
	"Award": true
	},
	{
	"Artist": 'Maher Zain',
	"Title": 'Alhamdulillah',
	"Format": ['3GP', 'MP4', '4k'],
	"Award": false
	}	
];
console.log(music[1].Title);
 
//Accessing nested object
var nestedObj =
{
	"Physics":
	{
		"Paper_1": 
		{
			"CLass_1": 'Vector',
			"Class_2": 'Projectile'
		},
		"Paper_2":
		{
			"Class_3": 'Magnet.object',
			"Class_4": 'Astronomy'
		}
	}
};
console.log(nestedObj.Physics.Paper_2.Class_3);
document.getElementById('universi').innerHTML=nestedObj.Physics.Paper_2.Class_3;


//Record collection {"id":"property":'value'} (don't get it!) #coding challenge
var singer = 
{
	"Singer01":
	{
	"Artist": 'Atif Aslam',
	"Title": 'Allahu',
	"Formate": ['CD', 'MP4', '4k'],
	"Award": true
	},
	"Singer02":
	{
	"Artist": 'Maher Zain',
	"Title": 'Alhamdulillah',
	"Format": ['3GP', 'MP4', '4k'],
	"Award": false
	}	
};
function object06(id, prop, val)
{
	if (val === "")
	{
		delete singer[id][prop];
	}
	else if  (prop === "Title")
	{
		singer[id][prop] = singer[id][prop] 
	}
};
console.log("Somossa ase thik kor!");

//Prevent object from change
function object07()
{
	const VALUE =
	{
		"PI": 3.14
	};
		Object.object07(VALUE);//IMPORTANT to prevent 
	try 
	{
		VALUE.PI = 10;
	}
	catch(ex)
	{
		console.log(ex);
	}
	return VALUE.PI;
}
const PI = object07;
console.log(PI);

//Class08:Loops...................................................
/*
1.While loops
2.Do While loops
3.For loops (most common)
*/
//While loops
var loop01 = [];
var i = 0;
while (i < 5)
{
	loop01.push(i);
	i++;
};
console.log(loop01);

//Do While loops
var loop08 = [];
var i = 10;
do
{
	loop08.push(i);
	i++;
}
while (i < 5);
console.log(i, loop08);

//For loops 
var loop02 = [];
for ( var i = 0; i < 5; i++) 
	
{
	loop02.push(i);
}
console.log(loop02);

// Iterate Odd numbers
var loop03 = [];
for ( var i = 1; i < 5; i += 2) 
	
{
	loop03.push(i);
}
console.log(loop03);

// Iterate Even numbers
var loop04 = [];
for ( var i = 0; i < 5; i += 2) 
	
{
	loop04.push(i);
}
console.log(loop04);

//Count backwards
var loop05 = [];
for ( var i = 5; i > 0; i -= 2)
	
{
	loop05.push(i);
}
console.log(loop05);

//Iterate through an array
 var arr = [7, 8, 9, 10];
 var loop06 = 0;
 for (var i = 0; i < arr.length; i++)
 {
 	loop06 += arr[i];
 }
console.log(loop06);

//Access nested array b y nested For loops (don't get it!)
function product(arr)
{
	var loop07 = 1;
	for (var i = 0; i < arr.length; i++)
	{
		for (var j = 0; j < arr[i].length; j++)
		{
			loop07 *= arr[i][j];
		}
	}
	return loop07;
};
var loop07 = product([[1, 2], [3, 4], [5, 6, 7]]);
console.log(loop07);

//Profile lookup (profile info search) #coding challenge
var contact = 
[
	{
 		"FirstName": 'Golzer',
 		"LastName": 'Talukder',
 		"Contact": '01736621794',
 		"Likes": ['Pizza', 'Burger']
	},
	{
 		"FirstName": 'Shahida',
 		"LastName": 'Begum',
 		"Contact": '01921351269.loop',
 		"Likes": ['Chicken Fry', 'Sweet']
	}
];
function loop09(name, prop)
{
	for (var i = 0; i < contact.length; i++)
	{
		if (contact[i].FirstName === name)
		{
			return contact[i][prop] || 'No such property';
		}
	}
	return 'No such contact';
};
console.log(loop09('Shahida', 'Contact'));
document.getElementById('universit').innerHTML=loop09('Shahida', 'Contact');


//Class09:Function...........................................
/*

*/
//Push (add in last)
let myarray = [['Book', 23], ['Bat', 15], ['Ball.array', 70]];
myarray.push(['Storm', 45]);  // output will add data in last
console.log(myarray);

//Pop (remove in last)
myarray.pop(); //output will remove the last data

//Shift (remove in first)
myarray.shift(); //output will remove the first data

//Unshift (add in first)
myarray.unshift(['Sea', 46]); // output will add data in first
document.getElementById('univ').innerHTML=myarray;

//Random (generate number)
//Fraction number
function random01()
{
	return Math.random();
}
console.log(random01());
document.getElementById('university').innerHTML=random01();


//Integer number
function random02()
{
	return Math.floor(Math.random() * 10 );
}
console.log(random02());
//or,
var random03 = Math.floor(Math.random() * 5);
console.log(random03)

//Integer number within range
function random04(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min; 
};
console.log(random04(5, 10));

//parseInt (convert to decimal)
function convert(str)
{
	return parseInt(str, 2); //mention radix of input (2, 8, 16)
};
console.log(convert('101010'));

//Arrow (write concise function)
var fun = function()
{
	return new Date();
};

const fun00 = () => new Date();//arrow function 
console.log(fun00); 

//arrow function with parameters
var fun01 = (a, b) => a.concat(b);
console.log(fun01([1, 2], [3, 4, 5]));

//Higher order arrow function
const realNum = [4, 5.6, -9.6, 3.14, 42, 6, 8.34, -2];
const sqList = (arr) => 
{
	const sqIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
	return sqIntegers;
};
const sqIntegers = sqList(realNum);
console.log(sqIntegers);
//another
const inc = (function()
{
	return function inc(number, value = 1)
	{
		return number + value;
	};
})();
console.log(inc(5, 2));
console.log(inc(5));

//Rest operator
const sum01 = (function()
{
	return function sum01(x, y, z)//This
	{
		const args = [x, y, z]//and this 2 lines 
		return args.reduce((a, b) => a + b, 0);
	};
})();
console.log(sum01(1, 2, 3));
//using rest operator (...)
const sum02 = (function()
{
	return function sum02(...args)//is replaced by this
	{
		return args.reduce((a, b) => a + b, 0);
	};
})();
console.log(sum02(1, 2, 3));

//Spread operator (evaluate arrays in-plays)
const arr1 = ['Jan', 'Feb', 'Mar', 'Apr'];
let arr2;
(function()
{
	arr2 = [...arr1]; //spread operator instead of this arr2 = arr1;
	arr1[0] = 'Potato'; //spread operator to prevent this action
})();
console.log(arr2);

//Create strings using template literals
const person =
{
	"Name": 'Miftah',
	"Age": '25'
}
const greet = `Hello, my name is ${person.Name}! 
I am ${person.Age} years old.`;
console.log(greet);

//Simple fields to concise object literal declaration
 const person00 = (name, age ,gender) => ({name, age, gender});
 console.log(person00("Eftha", 20, "F"));

 //Function within object
 const bicycle = 
 {
 	"gear": 2,
 	"setGear"(newGear) // shortcut instead of this "setGear": function(newGear)
 	{
 		this.gear = newGear;
 	}
 };
 bicycle.setGear(3);
 console.log(bicycle.gear);

//Class syntax to define a constructor function
class space // X
{
 	constructor(target) // for another style; var space = function(target)
 	{
		this.target = target
	}
};
var zeus = new space('Jupiter');
console.log(zeus.target);
//another
function make()
{
	class vegetable 
	{
		constructor(name)
		{
			this.name = name;
		}
	}
	return vegetable;
};
const vegetable = make();
const carrot = new vegetable('carrot');
console.log(carrot.name);

//Getters & Setter to control access object
function made()
 
{
	class thermostat
	{
		constructor(temp)
		{
		 	this._temp = 5 / 9 * (temp - 32); 
		}
		get temperature() //getter
		{
			return this._temp;
		}
		set temperature(updateTemp)  //setter
		{
			this._temp = updateTemp;
		}
	}
	return thermostat;
};
const thermostat = made();
const thermos = new thermostat(76);
let temp = thermos.temperature;
thermos. temperature = 26;
temp = thermos.temperature;
console.log(temp);


//Import
import {capitalizeString} from "./script"; // {} need when it's not a default export
const cap = capitalizeString("hello");
console.log(cap);

//Using * to import
import  * as capital from "capital-str";

//Export
const capString = (string) =>
{
	return string.charAt(0).toUpperCase() = string.slice(1);
};
export {capString};
export const foo = 'bar';
export const bar = 'foo';
console.log(foo);

//Export fallback (exporting a default export)
export default function subtract(x, y)
{
	return x - y;
}
//Import a default export
import subtract from "math_fun";
subtract(7, 8);


//Class10:De-structuring assignment (DSA).............................
/*

*/
//Assign variables from Arrays
const [h, k, , j] = [1, 2, 3, 4, 5];
console.log(h, k, j);
//another
let m = 5, n = 6;
(() =>
{
 [m, n] = [n, m] 
})();
console.log(m);
console.log(n);

//Assign variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.5};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
const {x: a, y: b, z: c} = voxel;
console.log(voxel);
//another
const avgTemp = 
{
	"today": 77.5,
	"tomorrow": 79
};
function tem(val)
{
	const {tomorrow: tempTomorrow} = val;
	return tempTomorrow; 
};
console.log(tem(avgTemp));
//another with nested objects
const localForcast = 
{
	"Today": 
	{
		"Min": 72,
		"Max": 83
	},
	"Tomorrow":
	{
		"Min": 72.5,
		"Max": 83.9
	}
};
function maxTm(val)
{
	const {"Tomorrow": {"Max": maxTomorrow}} = val;
	return maxTomorrow;
};
console.log(maxTm(localForcast));

//DSA with Rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function des(list)
{
	const [ , ,...arr] = list;
	return arr;
};
console.log(des(source));
console.log(source);

//DSA to pass object as function's parameter
const stats =
{
	"max":56.78,
	"min":-0.75,
	"mode": 23.87
};
const half = (function ()
{
	return function half({max, min}) // return function half(stats)
	{
		return (max + min) / 2.0; // return (stats.max + stats.min) / 2.0;
	};
})();
console.log(stats);
console.log(half(stats));

document.getElementById('y').innerHTML='Congratulation!';
console.log('Congratulation!');