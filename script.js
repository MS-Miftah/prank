export const capitalizeString = str => str.toUpperCase();
/*class:03-Syntax

//JavaScript is CASE & SPACE sensitive

//this is single line comment
/*this is multiple
line comment

//values are 2 types
literals=45.5(fixed)
variables=xyz(changable

//keyword
var
let
const
*/

//keyword identifier = value;
var x = 10;
var y = 5;
var firstName = 30;
 
z = x + y;
m = z + y;

document.getElementById('text').innerHTML=m;
console.log(m)

/*class:04-Variables

x,firstName,$_lastname = identifier (cannel & snake notation)
let,var, const = reserve word (these words can't be used as indentifire)

//value 
number(20)
string('string')
*/

let k = 'Miftah';
let n = 5;
l=k+n;

document.getElementById('heel').innerHTML=l;

const bestName='rifat';
//bestName='jack'; (it can't be changed)
document.getElementById('hel').innerHTML=bestName;

/*class:05-Operators

use of +,-,*,/

properties
.length

methods[contains ( )means panthesis]
.toUpperCase()
.toLowerCse()
.substring(0,5)
.split('')
prompt('')
*/
let age01=20;
age01 *=5;//use 5times more, add 5, substract 5 etc from age01
let age02=25;
age=age01+age02;

console.log(age01)

var name='Miftah';
document.getElementById('age').innerHTML=name.length;
document.getElementById('age1').innerHTML=name.split('');

//var yourName=prompt('What is your name?');
//var yourAge=prompt('What is your age?');

//document.getElementById('para').innerHTML='This is '+yourName+' and '+'I am '+yourAge+' years old.';

/*class06-Data Types
if any string lies with number, that data type will count as string!
Quotation uses
Boolean
*/

let number=6+'plus'+6; 
let text="I'm Miftah";
let phone1=8;
let phone2=9;

document.getElementById('p').innerHTML=number;
console.log(number);

document.getElementById('pa').innerHTML=text;

document.getElementById('par').innerHTML=(phone1==phone2);


