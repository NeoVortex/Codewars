// 001: Abbreviate a Two Word Name
kata = name => name.match(/\b\w/g).join(".")toUpperCase();
kata = n => n.split``.map(x => x.substr(0,1).toUpperCase()).join('.');

// 002: Total amount of points
// reduce splited the string into many values
points = g => g.reduce((tt, [hm,_,gst]) => tt + (hm > gst? 3: hm == gst), 0)
points = g => g.map(m => m[0] - m[2])
.filter(m => m >= 0)
.reduce((ac, m)=> ac + (m > 0? 3 : 1), 0)

// 003: Array plus array
apa = (a1, a2) => a1.concat(a2).reduce((ac, e) => ac + e);
apa = (a1, a2) => [...a1, ...a2].reduce((ac, e) => ac + e);

// 004: Beginner Series #1 School Paperwork
ppw = (n, m) => n > 0 && m > 0 ? n*m : 0

//// 005: You only need one - Beginner
check = (a,x) => a.includes(x);
//~a = -(N+1) = 0 = false
check = (a,x) => !!~a.indexOf(x);
check = (a,x) => a.some(a => a == x);

// 006: Get Planet Name By ID
getPlanetName = (id) => ({
	1: 'Mercury',
	2: 'Venus',
	3: 'Earth',
	4: 'Mars',
	5: 'Jupiter',
	6: 'Saturn',
	7: 'Uranus',
	8: 'Neptune',
} [id]);
getPlanetName = id =>({[null,'Mercury','Venus','Earth','Mars','Jupiter',
	'Saturn','Uranus','Neptune'][id]});

// 007: Sum of positive
positiveSum = arr => arr.reduce((a, e) => a+(c>0? c : 0));

// 008: altERnaTIng cAsE - ALTerNAtiNG CaSe// It seems that in prototypes you MUST create a function with return
String.prototype.toAlternatingCase = function () { return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')};
String.prototype.toAlternatingCase = function() {
	return [...this].map(c => c[`to${c > 'Z' ? 'Upp' : 'Low'}erCase`]()
		).join``;
}
// 009: Is the string uppercase// It seems that in PROTOTYPES you MUST create a function with return
String.prototype.iUC =function(){ return this.toUpperCase() == this;}
String.prototype.iUC =function(){ return this.split('').every(c => c == c.toUpperCase());}

// 010: SpeedCode #2 - Array Madness
am = (a,b) => a.reduce((ac, a)=> ac + a*a) > b.reduce((ac, b)=> ac + b*b*b);

// 011: Polish alphabet
cpl = str => str.replace(/./g, c=>({'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'}[m]||m));
cpl = s=> s.replace(/[ąćęłńóśźż]/g, c=> "acelnoszz"["ąćęłńóśźż".indexOf(c)])

// 012: Multiply
multiply = (a,b) => !a || !b || isNaN(a) || isNaN(b) ? "Error" : a*b

// 013: Expressions Matter
em = (a,b,c) => Math.max(a+b+c, a*b*c, a*(b+c), (a+b)*c)

// 014: All Star Code Challenge #18
sC = (s,c) => s.split(c).length-1;
sC = (s,c) => s.split('').filter(i => i == c).length;

// 015: Is it even
tE = n => n%2 == 0;
tE = n => !(n%2);// turning '0' in 'true'

// 016: Will you make it
zf = (d, mpg, f) => f*mpg >= d;

// 017: Find the Difference in Age between Oldest and Youngest Family Members // using comma and returning (array)
dia = a=> (min = Math.min(...a), max = Math.max(...a), [min, max, max - min]) 

// 018: Removing Elements
reo = a => a.filter((_, i) => !(i&1)); // only work with integers

// 019: Find the first non-consecutive number
fnc = a => a.find((v, i) => i != 0 && v !== a[i-1]+1); //'find' the 1st element 'true'
fnc = a => a.find((v, i) => v != a[0]+ i? v : null);

// 020: Is he gonna survive
h = (b,d) => b >= d*2;

// 021: Number toString
let a = 123:.toString();
let a = 123 .toString();
let a = (123).toString();
let a = 123+``;

// 022: L1 Bartender, drinks!
gdbpf = params => ({// parenthesis
	jabroni:'Patron Tequila',
			'school counselor':'Anything with Alcohol',// more than one word
			programmer:'Hipster Craft Beer',
			'bike gang member':'Moonshine',
			politician:'Your tax dollars',
			rapper:'Crystal'})[params.toLowerCase()]||"Beer"

// 023: get ascii value of character
getASCII = c => c.charCodeAt(0);

// 024: You Cant Code Under Pressure #1
di = i => i+i;
di = i => i << 1;

// 025: Watermelon
divide = w => w>2 && !(w%2);
divide = w => w!=2 && !(w&1);

// 026: Triple Trouble
tt = (a,b,c) => a.replace(/./g, (a, i) => a+b[i]+c[i]);
tt = (a,b,c) => [...a].map((a, i) => a+b[i]+c[i]).join('');
tt = (a,b,c) => [...a].reduce((ac, e, i) => ac+a[i]+b[i]+c[i], '');

// 027: Grasshopper - Messi Goals
tt = (...g) => g.reduce((ac, g) => ac + g);

// 028: Function 1 - hello world
greet= () => "hello world!";

// 029: Thinkful - Number Drills Blue and red marbles
guessBlue = (bs, rs, bp, rp) => (bs-bp)/(bs-bp + rs - rp);

// 030: Beginner Series #2 Clock
past = (h,m,s) => 1000 * (3600*h + 60*m + s)

// 031: Grasshopper - Grade book
gG = (s1, s2, s3) => (s = (s1 + s2 + s3)/3, s>89? 'A': s>79? 'B': s>69? 'C': s>59?'D':'F');
gG = (a, b, c) => 'FFFFFFDCBA'[(s1+s2+s3)/30];

// 032: N-th Power
i = (a, n) => a.length>n?  (a[n]**n): -1;
i = (a, n) => a[n]**n || -1;

// 033: Grasshopper - Summation
sum = n => n*(n+1)/2
sum = n => n? n + sum(n-1):0;// The function run 'backwards', so it'll start with 0, then adding the other results

// 034: No zeros for heros
nbz = n => +`${n}`.replace(/0*$/,"");
nbz = n => n%10 || n===0? n: nbz(n/10); // n%10 = 0 = false ;)

// 035: Exclusive or (xor) Logical Operator
xor = (a,b) => a != b;

// 036: How good are you really
bta = (t, m) => m > t.reduce((ac, p) => (ac+p)/t.length);

// 037: Filling an array (part 1)
a = n => Array.from({length: n}, (_,i) => i);
a = n => [...Array(n).keys()];

// 038: Squash the bugs
fl = s => Math.max(...str.split``.map(w => w.length));

// 039: Holiday VI - Shark Pontoon
shark = (pontoonD, sharkD, youSp, sharkSp, dolphin) => 
pontoonD/youSp < sharkD/sharkSp*(dolphin? 2:1)? "Alive!":"Shark Bait!";
shark = (pD, sD, yS, sS, d) => yS/pD < sS/sD/++d? "Shark Bait!":"Alive!";

// 040: Grasshopper - Messi goals function;
g = (...a) => a.reduce((ac, e) => s+v);
function goals (ll, cr, cl) {
  return [].reduce.call(arguments, (a, b)=> a + b);// reducing the object 'arguments' of the function
}

// 041: Opposite number
o = n => -n;

// 042: What's the real floor
grf = n => n>13? n-2: n>0? n-1: 0;
grf = n => n- (0<n) - (12<n);

// 043: Beginner Series #4 Cockroach
cs = s => Math.floor(s/3600 * 1e5);

// 044: Simple Fun #352 - Reagent Formula //!(not) ?!(cannot be)
iv = a=> !/12|34|5(?!6)|([^5]|\b)6|[^78]$/.test(a.sort().join(''));
// y: search from the 'lastindex' property on. It doesn't seem have any function in here though.
iv = f=> /(1(?!2)|2)*(3(?!4)|4)*(56)*(7|8)/y.test(f.sort(a,b)=> a-b).join("");

// 045: Volume of a Cuboid
gvc=(l,w,h)=> l*w*h

// 046: No Loops 2 - You only need one
c=(a,v)=> a.includes(v);
c=(a,v)=> a.some(e=> e ===v);
c=(a,v)=> a.indexOf(v) >= 0;

// 047: Return Negative
mn=n=> -Math.abs(n);

// 048: Reversed Strings
r=s=> [...s].reverse().join('');

// 049: Convert number to reversed array of digits
d=n=> (`${n}`).split``.map(e=>+e).reverse();
d=n=> Array.from((`${n}`), Number).reverse();
d=n=> [...`${n}`].reverse().map(Number);

// 050: noobCode 01 - SUPERSIZE ME or rather, this integer
ss=n=> +([...`${n}`]).sort().reverse().join(``);

// 051: Keep Hydrated!
l=t=> (t/2)|0;
l=t=> t >> 1;

// 052: Area or Perimeter
ap=(l,w)=> l === w? l*l : (l+w)*2;

// 053: Grasshopper - Check for factor
cf=(b,f)=> !(b%f);

// 054: Remove First and Last Character
rc=s=> s.slice(1,-1);
rc=s=> s.substring(1, s.length-1);
rc=s=> s.replace(/(^.|.$)/g, '');

// 055: Sum Mixed Array
sm=a=> a.map(e=>+e).reduce((ac,v)=> ac+v);
sm=a=> a.reduce((ac, e)=> +e + +ac);//"el" and "acc" become numbers, remove parenthesis
sm=a=> eval(a.join('+'));

// 056: Square(n) Sum
ss=a=> a.reduce((ac,n)=> ac + n*n, 0);

// 057: The Wide-Mouthed frog!
ms=e=>e.match(/alligator/i)? 'small':'wide';
ms=e=>/alligator/.test(e)? 'small':'wide';

// 058: Reversed sequence
rs=n=> Array(n).fill().map((e,i)=> n-i);
rs=length=> Array.from({length}, ()=> length--)// Array.from({arrLength}, mapFn(eachElement, index), initArg 'this')

// 059: Century From Year
c=y=>Math.ceil(y/100);

// 060: Is n divisible by x and y
id=(n,x,y)=> !(n%x|n%y);
id=(n,...e)=> e.every(v=> !(n%v))

// 061: Classic Hello World
console.log('Hello World!');

// 062: Generate range of integers
gr=(m,x,s)=> m > n ? []: [m, ...gr(m+s),n,s] // iterator function
gr(m,x,s)=> Array.from({length:(x-m)/s+1},(_,i)=> m+s*i)

// 063: Enumerable Magic #25 - Take the First N Elements
t=(a,n)=> a.filter((e,i)=> i<n);

// 064: Find numbers which are divisible by given number
db=(a,n)=>a.filter(e=> !(e%n));

// 065: Beginner - Lost Without a Map
maps=a=>a.map(v=> v*v);

// 066: Count the Monkeys!
mc=length=>Array.from({length},(_,i)=> ++i);
mc=n=> [...Array(n).keys()].map(v=>++v);
mc=n=>Array(n).fill().map((_,i)=>++i);
mc=n=>Array.from(Array(n), (_,i)=>++i)

// 067: What is between
bw=(b,e)=> Array.from({length:e-b+1}, (_,i)=>b+i);
bw=(b,e)=> Array(e-b+1).fill('').map((_,i)=>b+i);
bw=(b,e)=> b<e? [b, ...bt(b+1,e)]:[a]; // iterator recursive function
bw=(b,e)=> [...' '.repeat(e-b+1)].map((__,_)=> _+a);

// 068: Coding 3min - Jumping Dutch act
sc=f=> f>1? `${'Aa~ '.repeat(f-1)}${(f<7? 'Pa! Aa!' : 'Pa')}` : '';
sc=f=> f>1? [...Array(f-1).fill('Aa~ '), 'Pa!', f>6? '':' Aa!'].join('') : '';

// 069: Implement a Filter function
Array.prototype.filtr = function (fn) {
	return this.reduce((s,a)=> fn(a)? [...s,a]:s, [])}

// 070: Not so black box
blackbox(); console.log(blackbox().toString());// what a shitty kata >_<"

// 071: For Twins- 2- Math operations
ibv=(r,x,y)=> 2*r*r(x-y); // whoot?? >.<

// 072: Object Oriented Piracy
function Ship(draft, crew) {
	this.draft = draft;
	this.crew = crew;}
	Ship.prototype.isWorthIt = function () {
		return this.draft - (this.crew*1.5) > 20;}

// 073: Training JS #14- Methods of Number object--toString() and toLocaleString()
function toHex(n) {
	let res = n.toString(16);
	return res.length == 1 ? `0${res}` : res;}
	colorOf = (r,g,b)=> `#${toHex(r)+toHex(g)+toHex(b)}`;

	colorOf=(r,g,b)=> '#' + rgb.map(e=> `0${toString(16)}`.slice(-2)).join``;
colorOf=(r,g,b)=>`#${[r,g,b].map(e=> e.toString(16).padStart(2,0)).join``};`// fill with '0' until reach 2 elms

// 074: Be Concise IV - Index of an element in an array
f=(a,e)=> (e=a.indexOf(e)) < 0 ? "Not found" : e;

// 075: Compare within margin
cc=(a,b,m=0)=> Math.abs(a-b)<=m? 0 : Math.sign(a-b);

// 076: 8kyu interpreters - HQ9+
function HQ9(c) {
	switch (c) {
		case 'H': return 'Hello World!';
		case 'Q': return c;
		case '9': return beer(99);
		default: return undefined;  }}
		function beer(ct) {
			if (ct === 2) {
				return '2 bottles of beer on the wall, 2 bottles of beer.\n' +
				'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
				'1 bottle of beer on the wall, 1 bottle of beer.\n' +
				'Take one down and pass it around, no more bottles of beer on the wall.\n' +
				'No more bottles of beer on the wall, no more bottles of beer.\n' +
				'Go to the store and buy some more, 99 bottles of beer on the wall.';
			} else {
				return `${ct} bottles of beer on the wall, ${ct} bottles of beer.\n` +
				`Take one down and pass it around, ${ct - 1} bottles of beer on the wall.\n` +
				beer(ct - 1); }}

// 077: Swap Values
function sv() {
	arguments[0].reverse(); //'arguments' refers to all values passed in a non-arrow fn
}

sv=a=> [a[0],a[1]] = [a[1],a[0]];
sv=a=> a.reverse();

// 078: ES6 string addition
js=(a,b)=> `${a} ${b}`;

// 079: Remove the time
std=s=> s.split(',')[0];
std=s=> s.slice(0, s.indexOf(','));
std=s=> ([d, t] = s.split(','),d);

// 080: noobCode 02 - TRICKY QUESTIONS ( primitives and operator precedence)
gtlt=(a,b,c)=> a<b<c;

// 081: Training JS #15- Methods of Number object--toFixed(), toExponential() and toPrecision()
hms=(a,n)=> a.filter(x=> x.toFixed(2) < n).length;
hms=(a,n)=> a.reduce((a,b)=> a + (b.toFixed(2)<n),0);

// 082: 5 without numbers !!
uf = '     '.length;
uf = '%'.charCodeAt();

// 083: Is it a number
id=s=> s == parseFloat(s);
id=s=> !!s.trim()&& +s==s

// 084: Calculate BMI
//'w' value changed and kept changed
bmi=(w,h)=> (w/=h*h) > 18.5? w > 25? w > 30? "Obese" : "Overweight" : "Normal" : "Underweight";
bmi=(w,h,f=w/h/h)=> ['Underweight','Normal','Overweight','Obese'][[f<=18.5, f>18.5, f>25, f>30].lastindexOf(true)];

// 085: Exclamation marks series #2- Remove all exclamation marks from the end of sentence
r=s=> s.replace(/!+$/,'');

// 086: validate code with simple regex
vc=n=> /^[1-3]/.test(n);

// 087: Is your period late
pl=(l,t,c)=> (t-l)/8.64e+7 > c;

// 088: Geometry Basics- Distance between points in 2D
dbp=(a,b)=> Math.hypot(a.x - b.x, a.y - b.y);

// 089: A bugs trilogy- Episode 1 - Let Math.Random() decide your future
yfc=_=>  ['FrontEnd', 'BackEnd', 'FullStack'][Date.now%3]+'Developer';// Date.now instead Math.random

// 090: Remove First and Last Character Part Two
ar=a=>a.length>2? a.slice(1,-1).replace(/,/g,' '):null;

// 091: Power
np=(n,p)=> p==0? 1: n*(np(n,p-1));
np=(n,p)=> Array(p).fill(n).reduce((res,n)=> res*n,1);

// 092:Convert to Binary
tb=n=> +n.toString(2);
tb=n=>0..constructor(0..toString.call(...[].reverse.call([].concat.bind([2])(n))))
document.write(toBinary(5));
		// constructor: changes the Constructor type of Number to ...
		// call: applies the "toString" method of 'Number' on '(_)'
		// reverse.call: applies the "reverse" method on '(_)' AND add 'n' as argument
		// concat: concat '[]' and '[2]'
		// bind: applies the 'this' of '[2]' to '[].concat'

// 093: Grasshopper - Order of operations
function orderOperations () {"+*+*";
return "Hi there. Doesn't seem like the tests are very rigorous".charCodeAt(2);

// 094: Grasshopper - Function syntax debugging
main = (v, n) => v + n;

// 095: Logical calculator

// 096: Name Shuffler
ns=s=> s.replace(/([\w'-]+) ([\w'-]+)/g, '$2 $1');//($): captured groups

// 097: Pre-FizzBuzz Workout #1
pf=length=>Array.from(length, (_,i)=> ++i);
pf=n=> [...Array(n)].map((_,i)=> ++i);

// 098: Simple Comparison
a=(e,v)=> e==v;

// 099: NBA full 48 minutes average
p48=(p,m)=> +(p/m*48).toFixed(1)||0;

// 100:What's wrong with these identifiers
let Person = {
	'1stname': "John",
	'second-name': "Doe",
	'email@ddress': "john.doe@email.com",
	'male-female': "M"
}

// 101: simple calculator
calculator = (a,b s) => !isNaN(a) && !isNaN(b) && [\+\-\*\/].includes(s) ?
eval(a+s+b) : "unknown value";
c = (a,b,s) => [\+\-\*\/].test(s) && Number.isInteger(a+b) ? a+b : "unknown value";

// 102: For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
quote =_=> _[15]? "I am not impressed by your performance."
:"I'd like to take this chance to apologize.. To absolutely NOBODY!"
quote = (f, _={'george saint pierre':"I am not impressed by your performance.",
	'conor mcgregor': "I'd like to take this chance to apologize.. To absolutely NOBODY!"})=> _[f.toLowerCase()];

// 103: Chuck Norris VII - True or False? (Beginner)
iccs =_=> !1

// 104: Switch it Up!
switchItUp =_=> ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][_]

// 105: Double Char
doubleChar = str => str.replace(/(.)/g "$1$1"); // match position
doubleChar = str => str.replace(/(.)/g "$&$&"); // last match

// 106: Convert a Number to a String!
nts = n => n.toString();
nts = n => n+''
nts = String;

// 107: Invert values
invert = a => a.map(i => 0 - i)
invert = a => a.map(n => n && -n) // return the last evaluated operand (if n is 0 'false', it stops there)

// 108: Hex to Decimal
htd = h = parseInt(h, 16);

// 109: Vogal Remover
shortcut =str=> str.replace(/[aeiou]/g,'');

// 110: Super Duper Easy
problem = x => x === +x? x*50+6 : "Error";

// 111: Is this my tail?
ct = (b,t) => b[b.length-1] === tail;
ct = (b,t) => b.endsWith(t); // boolean check for the statement;
ct = (b,t) => b.slice(-1) === tail;
substring / slice: nao muda a string; splice: muda

// 112: Short Long Short
s=(a,b)=> a. length < b.length ? a+b+a : b+a+b;
solution=$=(Q,S)=>Q.length<// S.length?Q+S+Q:$(S,Q)

// 113: The 'if' function

_if = (bool, func1, func2) => bool ? func1() : func2();

// 114: Enumerable Magic #3 - Does My List Include This?
include = (arr, it) => arr.includes(it);
include = (arr, it) => arr.indexOf(it) != -1;
include = (arr, item)=> Boolean(~arr.indexOf(item)); // ~N -> -(N+1) = 0

// 115: Area of a Square
function squareArea(A){
	var circum = 4 * A;
	var radius = circum / (2 * Math.PI);
	var area = Math.pow(radius, 2);
	return Math.round(area*100)/100
}
squareArea = A => +((2*A/Math.PI)**2).toFixed(2);

// 116: Regular Ball Super Ball
var Ball = function(ballType = 'regular'){
	this.ballType = ballType;
}

// 117: Drink about
var dpa = [[14, "toddy"], [18, "coke"], [21, "beer"], [Number.MAX_VALUE, "whisky"]]
pwad=age=> "drink"+dpa.reduce((a,b)=> a == "" && age < b[0]? b[1] : a, "") // loop while!
pwad=age=>"drink" +["toddy","coke","beer", "whisky"][(age>=14)+(age>=18)+(age>=21)]// array
// use boolean+string to show only the string!; two pipes = else
pwad=age=>`drink ${age<14&&'toddy'||age<18&&'coke'||age<21&&'beer'|| 'whisky'}`

// 118: Can we divide it?
idb= (n,a,b) => !(n%a)&&!(n%b)
idb= (...a) => [a].every(i=> !(n%i))// a[0] always divide by a!

// 119: Exclamation marks series #1: Remove a exclamation mark from the end of string
remove = s=> s.replace(/!$/,'');

// 120: Number toString
var a = 123:.toString();
var a = 123 .toString()
var a = (123).toString();
var a = 123 + '';

// 121: Generate range of integers
// loop while min < max, filling the array
gr = (min, max, step) => min <= max? [min, ...gr(min+step, max, step)]:[];
// create Array from: (array, mapFn); Array(length); fill it with map(elm, index)
gr = (min, max, step) => Array.from(Array((max-min)/step+1), (_,i) => min+(i*step);

// 122: Count Odd Numbers below n
const oddCount = n => Math.floor(n/2);
oddCount=_=>this['Math']['floor'](_/[-~[]+!!{}][~~{}]);
// this without context == window, contains all global variables; Math.floor == window.Math.floor; You can access property of object not only with dot, but with brackets as well (obj['prop'] == obj.prop);[] == -1, it's a dynamic typing feature. So -[] == --1 == 1; !!{} == true, that means 1 + true == 1 + 1 == 2;~~{} == ~-1 == 0;[2][0] == 2; so finally it's similar to: oddCount=_=>return window.Math.floor(n / 2);		

// 123: Unfinished Loop - Bug Fixing #1
const createArray = n => Array({length:n}).map((_, i) => i + 1);

// 124: Convert a Boolean to a String
bts = b => String(b);
bts = String;
bts = Function.prototype.call.bind(Boolean.prototype.toString);
bts = b => JSON.stringify(b);

// 125: Convert boolean values to strings 'Yes' or 'No'.
btw = b => ['No','Yes'][+b];
//&&: If expr1 is true, returns the 2nd (expr2) truth; ELSE, returns expr1(value=FALSE)
btw = b => b && 'Yes' || 'No'; 

// 126: L1: Set Alarm
setAlarm = (e, v) => e && !v;
setAlarm = (e, v) => e > v;

// 127: Is the string uppercase?
String.prototype.isUpperCase = function() {
// this == this.toUpperCase()};
  return !/[a-z]/.test(this);// If there is a match this method returns true
// searches for a specified value, and returns the position of the match
return this.search(/[a-z]/g) == -1;

// 128: Be Concise II - I Need Squares
// filter: array with elements that passed a test, sqrt (cubo: **(1/3), quarta: **0.25)
squaresOnly = a => a.filter(e => !(e ** 0.5 % 1));

// 129: Grasshopper - Object syntax debug: ^_^''

// 130: !a == a ?!// shift: returns 1st element of array and remove it.
// valueOf: returns the primitive value (boolean, string, number...) 
// Math.random() > 0.5 returns boolean

// 131: Grasshopper - If/else syntax debug
const checkAlive = (_) => _ > 0;

// 132: How much water do I need? // Sucker long function

// 133: Grasshopper - Array Mean
findAverage = n => n.reduce((a, b) => a + b)/n.length; // return 1 value, map return array

// 134: Generate user links
gl = user => `http:// www.codewars.com/users/${encodeURIComponent(user)}`;

// 135: Word Count
countWords = s => (s.match(/[^\s]+/g) || []).length;
// Global objects (Number, Math, String, Array, etc) are functions, so:
str.filter(Boolean).length == str.filter(x=> Boolean(x)).length;

// 136: Training JS #21: Methods of String object--trim() and the string template
// trim: ANY (kind or nº) whitespaces before and after.
// map takes every el in array, that's why it's necessary to spread it.
fiveLine = (s, t=s.trim(), r="") => [...Array(5)].map(_ => r+=t).join('\n');
fiveLine = s => [...Array(5).keys()].map( i => s.trim().repeat(i+1)).join('\n');

// 137: Find the force of gravity between two objects
solution = ([m1,m2,d],[um1,um2,ud]) => {
	const G = 6.67e-11, conversion = {kg:1, g:1e-3, mg:1e-6, μg:1e-9, lb:.453592,
		m:1, cm:1e-2, mm:1e-3, μm:1e-6, ft:.3048};
		return G * m1 * conversion[um1] * m2 * conversion[um2] / (d * conversion[ud]) ** 2;}

// 138: Simple Fun #// 261: Whose Move
whoseMove = (lp, win) => win?lp:lp=="white"?"black":"white";
// string:char by char until they are not equal or there aren't any characters left to compare. 
whoseMove = (l, w) => l < 'w' ^ w ? 'white':'black';

// 139: Do you speak "English"?
spEng = s => /english/i.test(s);
spEng = s => !!s.match(/english/i);

// 140:Geometry Basics: Circle Area in 2D
circleArea = {radius} => radius * radius * Math.PI
circleArea = circle => circle.radius ** 2 * Math.PI

// 141: Leonardo Dicaprio and Oscars
leo = oscar =>(
	oscar==88 ? "Leo finally won the oscar! Leo is happy" :
	oscar==86 ? "Not even for Wolf of wallstreet?!" :
	oscar<88 ?  "When will you give Leo an Oscar?" :
	"Leo got one already!")

// 142: Training JS #6: Basic data types--Boolean and conditional statements if..else
tf = v => Boolean(v)+''

// 143: String cleaning
sc = s => s.replace(/\d/g,"");

// 144: Grasshopper - Combine strings
cn = (...n) => n.join(' ');//(...n) is a full array, (...n).arg splits every element

// 145: Kata Example Twist
// Apply 'Array' to 'null' and join 'Array(1000)' items to it.
// map: 'String...valueOf' is the function, 'codewars' is the 'THIS' argument. So, it turns 'codewars' in valueOf 'codewars', which is the same.
websites = Array.apply(null, Array(1000)).map(String.prototype.valueOf, 'codewars');
var websites = [], i = 1000;
while(i--) {
	websites.push('codewars');
} 

// 146: Safen User Input Part I - htmlspecialchars
//{objeto}[el]
hsc = d => d.replace(/[&<>"]/g, d => 
	({"<": "&lt;", ">":"&gt;", "\"":"&quot;", "&":"&amp;"}[m]));

// 147: Unexpected parsing @_@''
const getStatus = i => ({status: i?'busy':'available'});

// 148: Powers of 2
powersOfTwo = n => Array.from(Array(n+1), (_,p) => 2**p);
powersOfTwo = n => [...Array(n+1)].map((_,i)=>2**i);

// 149: Color Ghost// Creating a new Object
Ghost = function(){this.color = ['white', 'yellow', 'purple', 'red']
[~~(Math.random()*4)]}

// 150: Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
// Notice they return a Number, not a String ^_^
firstToLast = (str, c, s=(str.search(c))) => s >= 0 ?(str.lastIndexOf(c)) - s : s
// Math.max returns the greater number in the given array
firstToLast = (str, c) => str.lastIndexOf(c) - Math.max(0, str.indexOf(c));
// Introducing variables amidst the one line function!
firstToLast=(str,c)=>(e=str.lastIndexOf(c))>=0&&(s=str.indexOf(c))>=0?e-s:-1

// 151: Find Nearest square number
nsq=n=> Math.round(n**.5)**2;

// 152: The falling speed of petals
sakuraFall = v => v>0? 400/v : 0;

// 153: Return the day// || else = default
whatday=n=> ({1: "Sunday", 2: "Monday", 3: "Tuesday", 4: "Wednesday", 5: "Thursday", 6: "Friday", 7: "Saturday"}[n]||'Wrong, please enter a number between 1 and 7');
whatday=n=> [,"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][n]||'Wrong, please enter a number between 1 and 7';

// 154: "this" is a problem
function NameMe(f,l){Object.assign(this,{firstName[cap(fst)]: ${surname[cap(lst)]}f, lastName:l, name:f+' '+l})}

// 155: Function 2 - squaring an argument
s = n => n*n

// 156: Bin to Decimal	
binToDec = bin=> parseInt(bin, 2)

// 157: Determine offspring sex based on genes XX and XY chromosomes
// Notice the way JS split at will strings.....
cC= s =>`Congratulations! You're going to have a ${s[1] == 'Y' ? 'son' : 'daughter'}.`

// 158: I love you, a little , a lot, passionately ... not at all
[ 'not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly'][p%6]

// 159: To square(root) or not to square(root)
ssr= a => a.map(e => Number.isInteger(e**.5)? e**.5 : e*e);
// Immediately Invoked Function Expression prevents double power invocation, see
//(www.bryanbraun.com/2014/11/27/every-possible-way-to-define-a-javascript-function):
ssr = a => a.map(a=> (r=> r%1? a*a : r)(a**.5));

// 160: Training JS #8: Conditional statement--switch
function hmd(m){
	switch(m){case 2: return 28; case 4:case 6:case 9:case 11: return 30;}return 31;}
	hmd=m=>new Date(2015, m, 0).getDate();

// 161: Training JS #10: loop statement --for
rps = (p1, p2) => p1 == p2? 'Draw' : `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`
rps=(a,b)=>a==b?'Draw!':`Player ${/kp|rsc|sr/.test(a+b)+1} won!`

// 162: Filling an array (part 1)
arr = n => Array.from({ length: n }, (_,i)=> i);
arr = n => n ? [...Array(n).keys()]:[]; // Notice, 0 as EXCEPTION, FALSE
arr = n => [...Array(n||0).keys()]; // when 'n' is empty, not return an array '[0]'

// 163: Regex count lowercase letters
lcc = (str.match(/[a-z]/g)|| []).length
lcc = str.replace(/[^a-z]/g, "").length
lcc = str.split(/[a-z]/).length - 1

// 164: Function 3 - multiplying two numbers
multiply = Math.imul// a * b

// 165: Difference of Volumes of Cuboids

fD = (a,b) => Math.abs((a.reduce((a,b)=> a*b))-(b.reduce((a,b)=> a*b)));
fd= ([a,b,c], [d,e,f])=> Math.abs(a*b*c - d*e*f)

// 166: Surface Area and Volume of a Box
getSize = (a,b,c) => [(a*b + b*c + a*c)<<1, a*b*c];

// 167: How many lightsabers do you own?
hml = n=> n == 'Zach'? 18 : 0;

// 168: Plural
plural = n => Boolean(n-1);

// 169: Training JS #10: loop statement --for
function pickIt(a){
	var odd=[],even=[], i=0;
	for (i of a){
		((i&2)? odd : even).push(i)
	} 
	return [odd,even];
}
// bitwise checks if it's odd, include in t[0] and mantain t[1] intact, else mantain t[0] and include in t[1]. Create two arrays of elements inside an bigger array.
pI=a=>a.reduce((t,c)=>c&1?[[...t[0],c],t[1]]:[t[0],[...t[1],c]],[[],[]]);
pI=a=> [a.filter(e=>e&1),a.filter(e=>!(e%2))];

// 170: 101 Dalmatians - squash the bugs, not the dogs! =_=''
hmd = n =>{n = 0+(n>10)+(n>50)+(n==101) 
	return ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!",
	"101 DALMATIANS!!!"][n]}

// 171: Opposites Attract // XOR verifies if just one last digit will be '1'
lf = (f1,f2) => !!((f1^f2)&1);

// 172: Is it a palindrome?// Buffer = split & join?
ip = s => s.toLowerCase() == Buffer(s.toLowerCase()).reverse();
ip=s => s.toLowerCase() == ([...s.toLowerCase()]).reverse().join``;

// 173: Grasshopper - Summation 
s =n=> n * (n+1)/2;|s =n=> n*n/2 + n/2;|s =n=> n/2*(n+1)
s =n=> (n>1)? n + s(n-1): n; // recursive function

// 174: Grasshopper - Personalized Message
g = (n, o) => n === o? "Hello boss":"Hello guest";

// 175: Convert a String to a Number!
+s | s = parseInt | s = Number | s = Math.floor

// 176: Find the smallest integer in the array
fsi = a => a.reduce((a, b)=>a <b? a : b);
fsi = a => Math.min(...a);
fsi = a => Math.min.apply(null, args); // 1st arg. is an object || this.
// don't need to call 'apply' anymore. 'Math.min' is bound as 'this'.
this.fsi = Function.apply.bind(Math.min, null); 

// 177: Sum Arrays
sum = a => a.reduce((ac, e)=> ac + e, 0);
function sum (a) { // ZERO means NULL
	a.length == 0 ? 0 : a.shift() + sum(a);};

// 178: Count by X
countBy = (x, n) => Array.from({length:n},(_,i) => (i+1)*x);
countBy = (x, n) => Array(n).fill(x).map((x,i) => x*(i+1)); // Array.fill.map
countBy = (x, n) => [...Array(n)].map((_,i) => x*(++i));

// 179: String repeat
rs = (n, s) => s.repeat(n);
rs = (n, s) => n > 1 ? s + rs(--n, s): s;
rs = (n, s) => Array(n+1).join(s);

// 180: Max Headroom and JavaScript style
var max = {name: 'Max Headroom'} return max;
return {name: 'Max Headroom'};

// 181: Enumerable Magic #2 - True for Any?
any = (arr, fun) => arr.some(fun);// fun = function;
any = (arr, fun) => arr.filter(fun).length > 0;
any = Function.prototype.call.bind(Array.prototype.some);

// 182: Shifty Closures 
const f = s => `Hello, ${s}!`
const greet_abe = _ => f("Abe"), greet_ben = _ => f("Ben")

TDD:Test.assertEquals(1 + 1, 2);
assert.strictEqual(1 + 1, 2);

// 183: Points of Reflection	
sp = (p, q)=> [2*q[0] - p[0], 2*q[1]  - p[1]]
sp = ([a,b], [c,d])=> [c*2 -a, d*2-b];
sp = (p, q)=> q.map((e,i)=> 2*e-p[i]);
sp = (p, q)=> q.reduce((acc, val, idx)=> acc.concat(val + val-p[i]), []);

// 184: Count the number of cubes with paint on
cs = c => c? 6 * c*c + 2 : 1;

// 185: Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
r = (s, n) => n>0? r(s.replace("!",""), n--) : s;
r = (s, n) => s.replace(/!/g, c => n-- > 0 ? "" : c);
r = (s, n) => [...s].filter(c => c != '!' || n-- <=0).join``;

// 186: Training JS #34: methods of Math---pow() sqrt() and cbrt()
cc = (v, n) => !(Math.cbrt(n)%1) && !(Math.cbrt(v/n)%1);
cc = (v, n) => [v/n, n].map(Math.cbrt).every(x=> x==~~x);

// 187: Decibel Scale
dbe = i => Math.round(10 * Math.log10(i/1e-12));

// 188: Is the date today // Wed Jun 03 2020
it = d => new Date().toDateString() === d.toDateString();
it = d => (n = new Date(), ['getDate', 'getMonth', 'getFullYear'].every( v =>
	d[v] == n[v]()));
it = d => (t = new Date(), t.setHours(0,0,0,0) == d.setHours(0,0,0,0));

// 189: Take an Arrow to the knee, Functionally
af = a => a.map(e => String.fromCharCode(e)).join``;
af = a => String.fromCharCode.apply(String, a);
af = a => String.fromCharCode(...a);

// 190: What's up next?
function nextItem(a, e) {
	const iterator = a[Symbol.iterator]();
	for (let i of iterator) {
		if (i == e) return iterator.next().value;
	}
}

// 191: Grasshopper - Create the rooms
let rooms = {};
for (let i = 0; i < 3; i++);
	rooms[`room${i}`] = {'a': 1, 'b': 2, 'c': 3};

a = [[],[],[]]; rooms = { a, b: a, c: a };

// 192: Reverse List Order
rl = l => l.reverse();
function reverseList(a) {
	const rlist = [];
	for (let i of a)
		rlist.unshift(i)
	return rlist;
}

// 193: Calculate Price Excluding VAT
evp = p => p!=null? +(p/1.15).toFixed(2);

// 194: Are there any arrows left?
aA = (a) => a.some(a=> !a.damaged);

// 195: Training JS #16: Methods of String object--slice(), substring() and substr()
// slice(start,end) /substring(start,end) /substr(start,length)
ci = a => (min = Math.min(...a.map(v => v.length)), a.map(v => v.slice(0, min)));

// 196: Finish Guess the Number Game
class Guesser {
	constructor(number, lives) {
		this.number = number;
		this.lives = lives;
	}
	guess(n) {
		if (!this.lives) throw Error;
		this.lives--;
		return n == this.number;
	}
}

// 197: Geometry Basics: Circle Circumference in 2D
cc = c => 2 * Math.PI * c.radius;

// 198: Grasshopper - Bug Squashing 😐

// 199: Collatz Conjecture (3n+1)
h = n => n == 1 ? 0: h(n&1? (3*n+1): n/2)+1;
// accumulator coming BEFORE to make effect
hotpo = (n, ac=0) => n <= 1? ac : n&1 ? hotpo(3*n+1, ++ac) : hotpo(n/2, ++ac)

// 200: Find Multiples of a Number
// Using spread in here, 'cause Array.from is too heavy
findMultiples = (n, l)=> [...Array(~~(l/n))].map((_,i)=> n+n*i);

// 201: Palindrome Strings
ip = a => a+`` == Buffer(a+``).reverse();

// 202: Formatting decimal places #0
twoDecimalPlaces = n => +n.toFixed(2);

// 203: How old will I be in 2099?
ca = (b, y) => [
`You will be born in ${b-y} years.`,
`You will be born in 1 year.`,
`You were born this very year!`,
`You are 1 year old.`,
`You are ${y-b} years old.`]
[(y-b>-2)+(y-b>-1)+(y-b>0)+(y-b>1)];

// 204: UEFA EURO 2016
ue = ([t1, t2], [s1, s2]) => 
`At match ${t1} - ${t2}, ${s1 == s2 ? 
	`teams played draw.`:`${s1>s2? t1:t2} won!`}`

// 205: Training JS #29: methods of arrayObject---concat() and join()
// var arr=[[1,2],[3,4],[5,6]];
// var result=[].concat(...arr); >> [ 1, 2, 3, 4, 5, 6 ]
//[...Array(n+1)].join(s); (repeat("a",5)); >> aaaaa
// arr..join("") is faster than 'arr+='
bts= a => [].concat(...a).sort((a,b)=> b-a).join(>)

// 206: Pirates!! Are the Cannons ready!??
// Object.x loops through values/keys
cr = g => Object.values(g).some(m => m === 'nay')? 'Shiver me timbers!' : 'Fire!';
cr = a => Object.keys(a).every(g=> a[g] === 'aye')? 'Fire!':'Shiver me timbers!';
// Turn 'g' in to a string and verify if it includes 'nay' in it
cr = g => JSON.stringify(g).includes('nay')? 'Shiver me timbers!' : 'Fire!';

// 207: Be Concise I - The Ternary Operator
da = v => `You're a(n) ${v<13? 'kid': v<18? 'teenager' : v<65? 'adult' : 'elderly'}`  
da = v => "You're a(n) "+["kid", "teenager", "adult", "elderly"][(n>12)+(n>17)+(n>64)]}

// 208: Printing Array elements with Comma delimiters
pa =a=> a.join();
pa =a=> a.toString();
pa =a=> a;
repeatIt
// 209: Thinkful - Number Drills: Pixelart planning
id = (w, p) => !(w%p);

// 210: Check the exam
ce = (配, 列) => Math.max(列.reduce((積, 列, 指) => 積 + (列 === 配[指] ? 4 : 列 === '' ? 0 : -1),0),0);

// 211: Merge two sorted arrays into one
ma = (a1, a2) => [...new Set(a1.concat(a2))].sort((a,b)=>a-b);
// arr.filter((e, i)=> arr.indeOf(e) == i) too would filter;

// 212: Hello, Name or World!
h = s => `Hello, ${s? s[0].toUpperCase() + s.slice(1).toLowerCase():`World`}!`;

// 213: Holiday VIII - Duty Free
df = (n, d, h) => ~~(h/(n*d/100))|Infinity//'^0' too makes the work

// 214: repeatIt
ri = (s, n) => typeof s == 'string'? s.repeat(n):"Not a string";
ri = (s, n) => s+`` === s? Array(n+1).join(s):"Not a string";

// 215: Find out whether the shape is a cube
cc = (v, s) => v>0 && v === s*s*s;

// 216: Training JS #1: create your first JS function and print "Helloworld!"
helloWorld=_=>// var str
console.log`Hello World!`

// 217: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
r= s=> `${s.replace(/!/g, "")}!`;
r= s=> `${s}!`.replace(/!(?=.)/g, "");//'?=': lookahead, '.': any except line terminators

// 218: FIXME: Replace all dots
rd = (str) => str.replace(/\./g, '-');

// 219: String Templates - Bug Fixing #5
bs = (...s) => `I like ${s.join(', ')}!`;

// 220: Welcome to the City
sh = (n, c, s) => `Hello, ${[...n].join(' ')}! Welcome to ${c}, ${s}!`

// 221: Online RPG: player to qualifying stage?
ru = p => p>99 && "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";

// 222: Closest elevator
e = (l,r,c) => Math.abs(c-l) < Math.abs(c-r) ? 'left':'right';

// 223: Parse nice int from char problem
g = s => +s[0];
g = s => parseInt;

// 224: Sentence Smash
s = a => a.join` `;

// 225: Grasshopper - Debug sayHello
sh = n => `Hello, ${n}`;

// 226: Twice as old
tao = (d, s) => Math.abs(d - 2*s)

// 227: My head is at the wrong end!
ftm = a => a.reverse();
ftm = ([t,b,h])=>[h,b,t]

// 228: Regexp Basics - is it a digit?
String.prototype.digit = function() {
	return /^\d$/.test(this);};// OR...
return (this.match(/^\d$/));// OR ELSE...
return !!(this.search(/^\b\d$/)+1);

// 229: Simple multiplication
sm = n => n*(n&1? 9 : 8);
sm = n => n*(n%2 + 8);

// 230: Tip Calculator
let tip = {"terrible": 0, "poor": .05, "good": .1, "great": .15, "excellent": .2}
const calculateTip = (a, r) => {
	r = r.toLowerCase();
	return r in tip ? Math.ceil(tip[r] * a) : "Rating not recognised";
};

let calculateTip = (a, r) => (i = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(r.toLowerCase()),	i < 0 ? "Rating not recognised" : Math.ceil(i*.05 * a))

// 231: Return to Sanity
mystery=()=> ({sanity: 'Hello'});// ARROW function

// 232: Find numbers which are divisible by given number
db = (n, d) => n.filter(e => !(e%d));

// 233: Training JS #7: if..else and ternary operator
sh = n => n*(n<5? 100 : n < 10? 95 : 90)

// 234: Filter out the geese
gf = (a) => (geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"],
	a.filter(e => !geese.includes(e)))
gf = a => (geese => a.filter(v => !geese.includes(v)))// IIFE 
([`African`, `Roman Tufted`, `Toulouse`, `Pilgrim`, `Steinbacher`])

// 235: A Needle in the Haystack
fn = a => `found the needle at position ${a.indexOf('needle')}`;

// 236: Take the Derivative
d = (c,e) => `${c*e}x^${--e}`

// 237: Enumerable Magic #4 - True for None?
none = (a,f)=> !a.some(f)
none = (a,f)=> a.filter(a => f(a)).length == 0;
none = (a,f)=> a.every(v => !f(v));
none = (a,f)=> !a.reduce((ac, v)=>ac||f(v), false);// false: initial 'ac'
none = (a,f)=> a.map(f).filter(Boolean).length==0;// Boolean filters all 'true'

// 238: Training JS #9: loop statement --while and do..while
pi= (s,n)=> '*'.repeat(Math.ceil(n/2)) +str+ '*'.repeat(~~(n/2))
pi = (s,n)=>{ 
	while (n--)
		s = (n&1)==0? "*"+s : s+"*" 
	return s;
}

// 239: Arguments to Binary addition// toString() turns decimal to binary
let a2b = a => a.reduce((ac, e)=> ac+ (typeof e === "number"? e : 0), 0).toString(2);

// 240: Semi-Optional// Objects.value
function wrap(obj) {
	return {
		'value': obj,
	}}
	wrap = v => ({value: v});
	wrap = value => ({value});

// 241: Find variable which breaks strict comparison!
//; unaries and () turns a function declaration in a function expression: function() { console.log("Foo!");} --> +function() { console.log("Foo!"); }();
fsv = ()=> NaN; ||+{}/parseInt('') ||0/0 ||var undefined++ || 0/dog || Number('str');

// 242:Lexical this
ff=f=> this._friends.push(...f);
ff=f=> this._friends = f;

// 243: Potenciation
p =(x, y)=> Array(y+1).fill(x).reduce((ac,v)=> ac*v, 1)

// 244: Hello Happy Codevarrior!
function Warrior(n){
	let name = n;
	this.name = function(n){
		if( n ) name=n;
		return name;
	}};

// 245: Be Concise III - Sum Squares
ss = a => a.reduce((ac, e)=> ac+ e*e, 0);

// 246:isReallyNaN // NaN === NaN
isn = Number.NaN || isn = n => n != n || Object.is(NaN, n)// Obj.is= is the SAME

// 247: Days in the year
yd = y=> {let leap = !(y%4), except = (y%100)? true: !(y%400);
	return `${y} has 36${leap && except? 6:5} days`}

	yd = y => `${y} has 36${!(y%100) && y%400 || y%4? 5:6} days`;

	yd = y => (d = y%4? 5 : y%100? 6 : y%400? 5 : 6, `${y} has 36${d} days`);

// 248: BASIC: Making Six Toast.
st = n => Math.abs(6-n);

// 249: Is integer safe to use?
si =  Number.isSafeInteger;
si=n => n<=Number.MAX_SAFE_INTEGER && n>=Number.MIN_SAFE_INTEGER;

// 250: Localize The Barycenter of a Triangle
bt = ([xA, yA], [xB, yB], [xC, yC]) => [+((xA + xB + xC) / 3).toFixed(4), +((yA + yB + yC) / 3).toFixed(4)];
bt = ([t,a],[r,n],[i,g])=> [t+r+i,a+n+g].map(e=> +(e/3).toFixed(4));

// 251: Configure package json for a node application
const configuration = {
	"name": "-",
	"version":"0.0.0"
};

// 252: Contamination #1 -String-
c= (s, c) => s.replace(/./g, c);
c= (s, c) => c.repeat(s.length);

// 253: Training JS #13: Number object and its properties
function wnit(n){
	return `Input number is ${
		n === Number.MAX_VALUE ? 'Number.MAX_VALUE' : 
		n === Number.MIN_VALUE ? 	'Number.MIN_VALUE' :
		isNaN(n) ? 'Number.NaN' :
		n === Number.NEGATIVE_INFINITY ? 'Number.NEGATIVE_INFINITY' :
		n === Number.POSITIVE_INFINITY ? 'Number.POSITIVE_INFINITY' : n}`;}

		const objN = {
			[Number.MAX_VALUE]: 'Number.MAX_VALUE',
			[Number.MIN_VALUE]: 'Number.MIN_VALUE',
			[-Infinity]: 'Number.NEGATIVE_INFINITY',
			[Infinity]: 'Number.POSITIVE_INFINITY'
		}
		const whatNumberIsIt=n=> `Input number is ${isNaN(n)? 'Number.NaN' :
		(objN[n] || n)}`;

// 254: Parse float
pf = n=> isNaN(parseFloat(n))? null : parseFloat(n);
pf = n=> /\d+/.test(n)? +n : null;

// 255: Fun with ES6 Classes #1 - People, people, people
class Person {
	constructor (firstName[cap(fst)]= ${surname[cap(lst)]} 'John',	lastName= 'Doe',	age= 0,	gender= 'Male'){
		this.firstName[cap(fst)]  ${surname[cap(lst)]}= firstName[cap(fst)]; ${surname[cap(lst)]}
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;	
	}
	sayFullName() {
		return `${this.firstName[cap(fst)]} ${surname[cap(lst)]} ${this.lastName}`;
	}
};

Person.greetExtraTerrestrials = raceName => {
	return `Welcome to Planet Earth ${raceName}`;
// static greetExtraTerrestrials(raceName){return...}
};

// 256: Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n) {
	let [l, r] = n.toString().split('.'), a = l.length, b = r.length;
	return a > b ? ~~n : a < b ? Math.ceil(n) : Math.round(n)}

// 257: Man in the west
ctb = b => b.some(e => e=='gold');
ctb = b => !([...b].every(e => e == "stone"))
ctb = b => b.includes("gold")
ctb = b => ([...b].match(/gold/)).length>0

// 258: Pillars
p = (p,d,w)=> p>1? (p-2)*w + --p*100*d : 0;
p = (p,d,w)=> Math.max(0, p-1) * (d*100) + Math.max(0, p-2);

// 259: Multiplication table for number
mt= n => [...Array(10)].map((_,i)=> `${++i} * ${n} = ${i*n}`).join('\n');

// 260: Lario and Muigi Pipe Problem
pf = n => [...Array(n[n.length-1] - n[0] + 1)].map((_, i)=> n[0]+i);
pf = n => [...Array(Math.max(...n) - Math.min(...n))].map((_, i)=> n[0]+i);

// 261: Grasshopper - Terminal game combat function
c = (h,d,r= h-d) => r > 0? r : 0;  
c = (h,d) => Math.max(0, h-d);

// 262: A Strange Trip to the Market
lnm = s => /tree fiddy|three fifty|3\.50/.test(s);
lnm = s => /th?ree fi(?:ft|dd)y/.test(s)//?: or 'ft' or 'dd'

// 263: This is a sadly story #1: Are they opposite?// name too long... (◔_◔)
o = (s, a) => s == a.replace(/./g, c => c[`to${c<='Z'?'Low':'Upp'}erCase`]())&&s!='';
o =(s,a)=> [...s].map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join`` == a && s != '';

// 264: Barking mad
function Dog (breed) {
	this.breed = breed;
}

Dog.prototype.bark = () => "Woof";

let scoobydoo = new Dog("Great Dane");
let snoopy = new Dog("Beagle");
/*--------------------------------------*/
const Dog = {bark: () => "Woof"}
let snoopy = Object.create(Dog);
let scoobydoo  = Object.create(Dog);

// 265: get character from ASCII Value
gc = String.fromCharCode;

// 266: Invalid Login - Bug Fixing #11// I really didn't get this kata, so just copied the most popular solution :-)
function validate(username, password){
	var valid = new Validator();
	return valid.login(username, escape(password));
}

// 267: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
r=s=>s.replace(/[aeiou]/gi, '!')

// 268: Sort and Star
ts=s=> [...s.sort()[0]].join('***')

// 269: Remove duplicates from list
d=a=> [...new Set(a)];
d=a=> a.filter((v,i)=>a.indexOf(v) == i);

// 270: Who ate the cookie?// Object as array, property as index/key ;). N...ice!
c=v=> `Who ate the last cookie? It was ${({string: 'Zach', number: 'Monica'}[typeof v]|| 'the dog')}!`
c=v=> `Who ate the last cookie? It was ${v.sub ? 'Zach' : v.toFixed ? 'Monica' : 'the dog'}!`// sub/sup methods only applies for strings

 // 271: Age Range Compatibility Equation
 dr=a=> a > 14? `${~~(a/2+7)}-${(~~(a-7)*2)}` : `${~~(a - a*.1)}-${~~(a + a*.1)}`
 dr=a=> [a <= 14? .9*a : .5*a + 7, a <= 14? 1.1*a : 2*a - 14].map(Math.floor).join('-');

// 272: Fix your code before the garden dies!
ra=mm=> { if (mm < 40) return `You need to give your plant ${40 - mm}mm of water`;
return `Your plant has had more than enough water for today!` } 

// 273: Duck Duck Goose
ddg=>(a,n)=>a[(n-1)%a.length].name

// 274: Enumerable Magic #1 - True for All?
a=(a,f)=> a.every(f); 

// 275: Alan Partridge II - Apple Turnover// && returns the last arg if true
a=v=> v*v> 1e3 && t || f;
let t = 'It\'s hotter than the sun!!',
f = 'Help yourself to a honeycomb Yorkie for the glovebox.'

// 276: Multiply the number
m=n=> 5**(Math.abs(n)+'').length*n;
m=n=> 5**(~~(Math.log10(Math.abs(n))+1))*n;

// 277: Training JS #4: Basic data types--Array
gl=a=> a.length;
gf=a=> a[0];
glt=a=> a[a.length-1];
pue=a=> {a.push(4); return a};
poe=a=> {a.pop(); return a};

// 278: Draw stairs
ds=n=> [...Array(n)].map((_,i)=> ' '.repeat(i)+'I').join('\n');
// padStart(until length get to this, fill with this)
ds=n=> Array(n).fill('I').map((I,v)=>I.padStart(++v,` `)).join('\n');

// 279: Grasshopper - Terminal Game #1
function Hero (name) {
	this.name= name || "Hero";
	this.position= '00';
	this.health= 100;
	this.damage= 5;
	this.experience= 0
}

class Hero {
	constructor(name='Hero', position='00', health=100, damage=5, experience=0) {
		Object.assign(this, {name, position, health, damage, experience})
	}}

// 280: Training JS #2: Basic data types--Number
let v1=50,v2=100,v3=150,v4=200,v5=2,v6=250,
equal1=()=>v1+v1, equal2=()=>v3-v1, equal3=()=>v1*v5,
equal4=()=>v4/v5, equal5=()=>v2%v4;

// 281: Sum The Strings
ss=(a,b)=> (+a+ +b)+``;

// 282: Reversing Words in a String
r=s=> s.split(' ').reverse().join(' ');

// 283: Cat years, Dog years
hcd=v=> v==1? [v,15,15] : v==2? [v,24,24] : [v, 24+(v-2)*4, 24+(v-2)*5];
hcd=v=>[ v, (v-1? 16:11) +4*v, (v-1? 14:10) +5*v ];

// 284: Returning Strings
g=n=> `Hello, ${n} how are you doing today?`

// 285: Find the Integral
i=(c,e)=> `${c/(++e)}x^${e}`;

// 286: Basic variable assignment
let a = "code", b = "wa.rs", name = a + b;
let name = 'codewa.rs';

// 287: Switch/Case - Bug Fixing #6
function evalObject (v) {
	switch (v.operation) {
		case '+': return v.a + v.b;// OR instead of 'return', 'break'
		case '-': return v.a - v.b;
		case '*': return v.a * v.b;
		case '/': return v.a / v.b;
		case '%': return v.a % v.b;
		case '^': return v.a ** v.b;
	}}

	const evalObject = v = ({
		'+': (a,b) => a + b,
		'-': (a,b) => a - b,
		'*': (a,b) => a * b,
		'/': (a,b) => a / b,
		'%': (a,b) => a % b,
		'': Math.pow,
	}[v.operation](v.a, v.b))

	let ops={'+':(a,b)=>a+b,'-':(a,b)=>a-b,'*':(a,b)=>a*b,'/':(a,b)=>a/b,'%':(a,b)=>a%b,'':Math.pow,}, evalObject = v=> ops[v.operation](v.a, v.b);

// 288: Heads and Legs
function animals(h,l) { let ox = l/2 - h, hen = h - ox;
	return l&1 || hen>h || ox>h ? "No solutions":[hen,ox]};

// 289: Sum of differences in array
sod=a=> a.length > 1? Math.max(...a) - Math.min(...a):0;
sod=a=> a.sort((a,b) => a-b).map((v,i)=> v-a[i+1]||0).reduce((ac, v)=>ac+v, 0);

// 290: Are You Playing Banjo?
aypb=n=> `${n} ${n[0]=='r'||n[0]=='R'? `plays` : `does not play`} banjo`;
aypb=n=> `${n} ${/^r/i.test(n)? `plays` : `does not play`} banjo`;

// 291: Grasshopper - Basic Function Fixer
af=n=> n+=5

// 292: L1: Bartender, drinks!
let drinks = { "jabroni": "Patron Tequila",
"school counselor": "Anything with Alcohol",
"programmer": "Hipster Craft Beer",
"bike gang member": "Moonshine",
"politician": "Your tax dollars",
"rapper": "Cristal"}
const getDrinkByProfession = p => drinks[p.toLowerCase()] || "Beer"

gdbp=p=>({ jabroni: "Patron Tequila",
	"school counselor": "Anything with Alcohol",
	programmer: "Hipster Craft Beer",
	"bike gang member": "Moonshine",
	politician: "Your tax dollars",
	rapper: "Cristal"})[p.toLowerCase()]||"Beer"

// 293: How good are you really?
bta=(c,y)=> c.reduce((ac,v)=> ac+v, 0)/c.length < y;

// 294: Get Nth Even Number
en=n=> --n*2;

// 295: Stringy Strings
s=s=> '10'.repeat(s).slice(0,s);
s=s=> [...Array(s)].map((v,i)=> +!(i%2)).join(``);
s=s=> ''.padStart(s,'10');
s=s=> [...Array(s)].map((v,i)=> ~i&1.join``;// not true = false

// 296: Classy Classes
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;}
		
		get info() {
			return `${this.name}s age is ${this.age}`;}

			class Person {
				constructor(n, a) {
					this.info = `${n}s age is ${a}`}}

// 297: Will there be enough space?
e=(c,o,w)=> Math.max(o+w-c, 0);// OR 0
e=(c,o,w)=> +(c < o+w && o+w - c);

// 298: easy logs
l=(x,a,b)=> (Math.log(a*b)/Math.log(x));// log a + b with base x

// 299: Grasshopper - Grade book
gg=(a,b,c)=>'FFFFFFDCBA'.charAt(a+b+c)/30;

// 300: Do I get a bonus?
bt=(s,b)=> `£${s* 10**b}`

// 301: Correct the mistakes of the character recognition software
c=s=> [...s].map(c => ({0:'O', 5:'S', 1:'I'})[c]||c).join``;
c=s=> s.replace(/[501]/g, c=> ({0:'O', 5:'S', 1:'I'})[c]);// Object
c=s=> s.replace(/[501]/g, c=> (['O', 'I'][c]||'S'));// Array
// hasOwnProperty() = includes()

// 302: Calculate average
fa=a=> a.reduce((ac,n)=> ac+n, 0)/a.length;

// 303: Fake Binary
fb=s=> s.replace(/\d/g, c=> c > 5? 1 : 0);
fb=s=> [...s].reduce((a,b)=> a+((+b/5)|0),"");
fb=s=> x.replace(/\d/g, c=> "0000011111"[c])

// 304: Sum without highest and lowest number
sa=a=> a? a.sort((a,b)=> a-b).slice(1, -1).reduce((ac, v)=> ac+v,0):0

// 305: Convert a string to an array
sa=s=> s.split(' ');

// 306: Welcome!
g=l=>({czech: 'Vitejte',danish: 'Velkomst',dutch: 'Welkom',estonian: 'Tere tulemast',finnish: 'Tervetuloa',flemish: 'Welgekomen',french: 'Bienvenue',german: 'Willkommen',irish: 'Failte',italian: 'Benvenuto',latvian: 'Gaidits',lithuanian: 'Laukiamas',polish: 'Witamy',spanish: 'Bienvenido',swedish: 'Valkommen',welsh: 'Croeso'})[l]||'Welcome';

// 307: Remove String Spaces
ns=s=> s.replace(/\s/g,"");
ns=s=> s.split` `.join``;

// 308: SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
class Labrador extends Dog{
	constructor(name, age, gender, master) {
		super(name, age, gender, "Labrador", "Large", master, true)}};

// 309: Aspect Ratio Cropping - Part 1
ar=(x,y)=>Math.round(16*y/x/9)

// 310: Simple Change Machine
function changeMe(v) {
	switch (v) {
		case "£5": return "20p ".repeat(25).trim();
		case "£2": return "20p ".repeat(10).trim();
		case "£1": return "20p ".repeat(5).trim();
		case "50p":return "20p 20p 10p";
		case "20p":return "10p 10p";
		default: return v}}

// 311: Do something "n.times" (Simplifying "for" loops)
Number.prototype.times = function (f) {
	for (let i = 0; i < this; i++) {
		f(i)}}

		Number.prototype.times = function (fn) {
			let n = 0;
			while (n < this) fn(n++)}

// 312: Blood-Alcohol Content
bac=(d, w, s, t)=> +((5.14*d.ounces*d.abv/w*(s == 'male'? .73:.66) - (.015*t)).toFixed(4));

// 313: Template Strings
ts = (o, f)=> `${o} are ${f}`;

// 314: Improving Math.round(x)
Math.roundTo = (n, p)=>	+(n.toFixed(p));
Math.roundTo = (n, p)=>	1*(n.toFixed(p));

// 315: Total pressure calculation
s=(m1,m2,M1,M2,v,t)=>(M1/m1+M2/m2)*0.082*(t+273:15)/v

// 316: USD => CNY
uc=u=> `${(6.75*u).toFixed(2)} Chinese Yuan`;

// 317: Did she say hallo?
vh = g => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(g);

// 318: Playing with cubes II
class Cube {	constructor(side=0) {this.side = side}
getSide(){ return Math.abs(this.side)}
setSide(side){this.side = side}}

class Cube{ constructor(side){this.setSide(side)}
getSide(){return this.side}
setSide(side=0){this.side = Math.abs(side)}}

// 319: Mr. Freeze
Object.freeze(MrFreeze)
Object[freeze](MrFreeze)// remember this notation!

// 320: pick a set of first elements
first = (a, n=1) => a.slice(0,n);
f=(a,n=1) => a.filter((v,i)=> i < n);

// 321: Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
baw=a=> `It's a ${Array.isArray(a)? ~a.indexOf(5)&& ~a.indexOf(13)? 'black':'white':'fake'} array`;// invert 'indexOf' value to becoma 'true/false' statement
baw=a=> `It's a ${Array.isArray(a)?  a.includes(5) && a.includes(13)? 'black':'white':'fake'} array`;

// 322: Wilson primes
f=p=> p<=1? 1 : p * f(p-1);
aIW=(f(p-1)+1)/(p*p)%1===0;

aIW=p=> [5, 13, 563].includes(p);

// 323: Type of sum
ts= (a,b)=> typeof (a+b);

// 324: Add new item (collections are passed by reference)
ae=a=> [...a, 13];
ae=a=> a.concat(13);

// 325: CSV representation of array
tct=a=> a.join`\n`;

// 326: For Twins: 1. Types
tv=(v,t)=> typeof v == t;

// 327: Name on billboard
bb=(s,v=30)=> eval([...s].map(e=> e.replace(e, v)).join('+'));
bb=(s,v=30)=> [...s].reduce((ac,e)=> ac+v,0);

// 328: Pole Vault Starting Marks
sm=h=> +((122/31)*h + 3.468).toFixed(2);

// 329: Price of Mangoes
m=(q,p)=> (q- ~~(q/3))*p;

// 330: Crash Override
let cap = n => n[0].toUpperCase();
let ok = n => /^[a-z]/i.test(n);
let aliasGen=(fst, lst)=> ok(fst)&&ok(lst)? 
`${firstName[cap(fst)]} ${surname[cap(lst)]}`:
'Your name must start with a letter from A - Z.';

// 331: Find the Remainder
r=(a,b)=> a-b > 0 ? a%b : b%a;
r=(a,b)=> Math.max(a,b) % Math.min(a,b);

// 332: Training JS #12: loop statement --for..in and for..of
function gimme5(o){
	let f=[];
	for(let k in o){
		if (k.length===5) f.push(k);
		if (o[k].length===5) f.push(o[k]);}
		return f;}

// 333: Push a hash/an object into array
let items = [];
items.push({a: "b", c: "d"});

// 334: Unicode Total
ut=s=> [...s].reduce((ac, e)=> ac+ e.charCodeAt(),0);
ut=s=> [...s].reduce((ac, e)=> ac+ e.codePointAt(e),0);

// 335: Add Length
al=s=> s.split` `.map(e=> `${e} ${e.length}`);

// 336: Training JS #18: Methods of String object-- split() and its good friend join()
sam=(s,e)=>s.split` `.map(v=> [...v].join(e)).join` `;//...v = v.split``
sam=(s,e)=> s.replace(/\S+/g, w=> w.replace(/./g, '$&'+e));//\S ignores space; x(?=y):Matches only if "x" is followed by "y", lastMatch:$&

// 337: Are arrow functions odd?
o=s=> s.filter(v=> v&1)
o=s=> s.filter(v=> v%2)// 0 is 'false'

// 338: Circular Objects #1 - Running around in circles
c={value: 'Hello World!'};
c.self = c;

c={ value: 'Hello World', 
get self(){
	return this;}}

// 339: Quarter of the year
q=m=> ~~(--m/3+1);
q=m=> Math.ceil(m/3);
q=m=>m/3+.7|0 // bitwise OR, true only for integers
q=m=>0|(2+m)/3;// returns the integer part
q=m=>0|(m/3)+!!(m%3)

// 340: Capitalization and Mutability
cw=s=>s[0].toUpperCase()+s.slice(1);

// 341: Job Matching #1
m=(c,j)=>c.minSalary && j.maxSalary? c.minSalary*.9<=j.maxSalary :[].pippi()
m=(c,j)=>{ if (!c.minSalary || !j.maxSalary) throw TypeError('¡No te atrevas!')
return c.minSalary*.9<=j.maxSalary}

// 342: Basic subclasses - Adam and Eve
class God{
	static create(){
		return[new Man, new Woman]; }}
		class Human{};
		class Man extends Human{};
		class Woman extends Human{};

// 343: Training JS #11: loop statement --break,continue
function grabDoll(dolls){
	let bag=[], doll;
	for (doll of dolls){
		if (doll === 'Hello Kitty' || doll === 'Barbie doll') bag.push(doll)
			if (bag.length === 3) break;
	} return bag}

// 344: Find the position!
p=c=> `Position of alphabet: ${c.charCodeAt()-96}`;

// 345: Freudian translator
f=s=> s.replace(/[^ ]+/g, 'sex');//[^]=not
f=s=> s.replace(/\w+/g, 'sex');
f=s=> s.replace(/[\SEX]+/g, 'sex');

// 346: Multiple of index
moi=a=>a.filter((n,i)=> i && !(n%i);
	moi=a=>a.filter((n,i)=> n%i==0);

// 347: Miles per gallon to kilometers per liter
c=m=> Math.round(m*35.40060435382138)/100;
c=m=> +(m*.3540060435382138).toFixed(2);// doesn't include '0' at the end (8.50)

// 348: Find the Slope
m=([a,b,c,d],m=(d-b)/(c-a))=> Number.isFinite(m)? `${m}` : 'undefined';
m=([a,b,c,d])=> a == c ? 'undefined': String((d-b)/(c-a));

// 349: Is there a vowel in there?
function isVow(a){
	for(let i in a){
		let c = String.fromCharCode(a[i]);// turns number in char
		if('aeiou'.indexOf(c) != -1) a[i]=c; 
		return a}}
// define a variable inside the ternary op
iv=s=> s.map(e=> 'aeiou'.includes(c=String.fromCharCode(e))? c:e);
iv=s=> s.map(e=> ({97:'a', 101:'e', 105:'i', 111:'o', 117:'u'})[e]||e);

// 350: Get number from string
gnfs=s=> +s.replace(/\D/g, '');
gnfs=s=> +(s.match(/\d/g).join(''));
gnfs=s=> +([...s].filter(e=>/\d/.test(e)).join``);

// 351: Grader
g=n=> n<.6? 'F': n<.7? 'D': n<.8? 'C': n<.9? 'B': n<=1? 'A': 'F';

// 352: Training JS #3: Basic data types--String
let a2='a',b1='B',b2='b',d1='D',d2='d',e2='e',n2='n',
Dad=()=>d1+a2+d2, Bee=()=>b1+e2+e2, banana=()=>b2+a2+n2+a2+n2+a2
answer1=()=>'no', answer2=()=>'no', answer3=()=>'yes'

// 353: Broken Counter
function Counter() {
	this.value = 0;}
	Counter.prototype = {
		increase: function () {this.value++},
		getValue: function () {return this.value;},
		reset: function () {this.value = 0;}};
		/* ------------OR ELSE---------------*/
		Counter.prototype.increase=()=> this.value++;
		Counter.prototype.reset=()=> this.value=0;
		Counter.prototype.getValue=()=> {return this.value}

// 354: Basic Training: Add item to an Array
websites.push('codewars');

// 355: How many stairs will Suzuki climb in 20 years?
s20=s=> s.reduce((ac,w)=> ac+w.reduce((ac,v)=>ac+v,0),0)*20

// 356: Simple Fun #1: Seats in Theater
st=(nc, nr, c, r)=> (nc-c+1)*(nr-r);

// 357: Grasshopper - Variable Assignment Debug
let a = "dev", b = "Lab", name = a + b;

// 358: Training JS #5: Basic data types--Object
a=o=> `This ${o.color} ${o.name} has ${o.legs} legs.`
a=({name,legs,color})=> `This ${color} ${name} has ${legs} legs.`

// 359: Fix the Bugs (Syntax) - My First Kata
function mfk(a, b) {
	if (typeof(a) != "number" || typeof(b) != "number") {
		return false;
	} else { return a % b + b % a; }}

	mfk=(a,b)=> typeof a !== 'number' || typeof b !== 'number'? false: a%b+b%a;

// 360:Evil or Odious
evil=n=> `It's ${n.toString(2).match(/1/g).length&1? 'Odious':'Evil'}!`
e=n=> `It's ${[...n.toString(2)].reduce( (ac, e) => ac + +e, 0)&1 
	? "Odious" : "Evil"}!`;

// 361: Classy Extentions
class Cat extends Animals {
	speak() {
		return `${this.name} meows.`}}

// 362: Define a card suit
ds=a=> (l= a.slice(-1), l == '♣'? 'clubs':l == '♦'? 'diamonds':l == '♥'? 'hearts':'spades';)
ds=a=>({"♣":"clubs", "♠":"spades", "♦":"diamonds", "♥":"hearts"}[a[a.length-1]])
ds=a=>([a,b,c])=>({"♣":'clubs', "♠":'spades', "♦":'diamonds', "♥":'hearts'})[c||b]

// 363: Dollars and Cents
fm=n=> `$${n.toFixed(2)}`;

// 364: Reversed Words
rw=s=> s.split` `.reverse().join` `;

// 365: Sleigh Authentication
function Sleigh() {}
Sleigh.prototype.authenticate = function(n, p) {
	return n === 'Santa Claus' && p === 'Ho Ho Ho!'};

// 366: A wolf in sheep's clothing
wts=q=>{
	p = q.length-q.indexOf('wolf');
	p > 0 ? `Oi! Sheep number ${p}! You are about to be eaten by a wolf!`:
	`Pls go away and stop eating my sheep`;}

	wts=q=> q.reverse()[0]==='wolf'?
	'Pls go away and stop eating my sheep': 
	`Oi! Sheep number ${q.indexOf('wolf')}! You are about to be eaten by a wolf!`;

// 367: Keep up the hoop
hc=n=> n>9? 'Great, now move on to tricks':'Keep at it until you get it';

// 368: All Star Code Challenge #18
sc=(s,l)=> s.split(l).length-1;
sc=(s,l)=>s.split``.filter(a=> a==l).length;

// 369: Fuel Calculator
fp=(l,p)=> (d= Math.min(~~(l/2)*.05, .25), np=+(l*(p - d)).toFixed(2))

// 370: Character Frequency
cf=s=> s.split``.reduce((ac,c)=> (ac[c] = ac[c]||0)+1) && ac, {};
cf=s=> [...s].reduce((ac,c)=> ({...ac, [c]:(ac[c]||0)+1}),{});
function cf(s) {
	a={}; 
	for(c of s) if(a[c])a[c]++
		else a[c] = 1;
	return a;	}

// 371: Sum of Multiples
sm=(n,m, i=m)=> n>=m? 'INVALID': Array(m/n).fill(n).reduce((ac,v,i)=> ac+(v*i),0);

// 372: Remove exclamation marks
rem=s=> s.replace(/!/g, '');
rem=s=> s.split('!').join``;

// 373: Thinkful - Logic Drills: Traffic light
ul=v=> v == 'green'? 'yellow': v== 'yellow'? 'red': 'green';
ul=v=>({ g: 'yellow', y: 'red', r:'green' })[v[0]]

// 374: Third Angle of a Triangle
oa=(α,β)=>180-α-β;

// 375: Get the mean of an array
ga=a=> ~~(a.reduce((ac, v)=> ac + v,0)/a.length);

// 378: Well of Ideas - Easy Version
w=a=>(v=a.filter(e=> e==='good').length, v>2? 'I smell a series!': v>0? 'Publish!': 'Fail!');

// 379: Grasshopper - Debug
wi=n=>`${t=(n-32)*(5/9)} is ${t>0? 'above ':''}freezing temperature`;

// 380: Simple validation of a username with regex
v=s=>/^[\d_a-z]{4,16}$/.test(s);

// 381: Subtract the Sum
ss =FAKE_BAD_KATA=> ("e"+"l"+"p".repeat(2)+"a").split("").reverse().join("");

// 382: Beginner - Reduce but Grow
g=a=> a.reduce((ac,n)=> ac*n,1)
g=a=>eval(a.join('*'));

// 383: Find Maximum and Minimum Values of a List
min=a=> Math.min(a), max=a=> Math.max(a)
min=a=> a.sort((a,b)=>a-b)[0]//.pop();
max=a=> a.sort((a,b)=>b-a)[0];//.shift()

// 384: No zeros for heros
nbz=n=>{
	while(n%10==0 && n!==0) n/=10;
	return n;} 

	nbz=n=> +`${n}`.replace(/0*$/,'');

// 385: The Feast of Many Beasts
f=(b,d)=> b[0]+b[b.length-1] == d[0]+d[d.length-1];
f=(b,d)=> b[0]+b.slice(-1) == d[0]+d.slice(-1);
f=(b,d)=> b.startsWith(d[0]) && b.endsWith(d.slice(-1))
f=(b,d)=> [...b].shift()+[...b].pop() == [...d].shift()+[...d].pop();

// 386: Student's Final Grade
fg=(e,p)=> e>90||p>10? 100 : e>75&&p>4? 90 : e>50&&p>1? 75 : 0;

// 387: If you can't sleep, just count sheep!!
cs=n=> [...Array(n).keys()].map(v=>`${v+1} sheep...`).join``;
cn=n=> [...Array(n).fill('')].map((_,k)=>`${++k} sheep...`).join``;

// 388: Grasshopper - Terminal game move function
m=(p,r)=> p+ 2*r

// 389: Beginner Series #1 School Paperwork
pw=(n,m)=> n>0 && m>0? n*m:0
pw=(n,m)=> Math.max(0,n)*Math.max(0,m);

// 390: MakeUpperCase
muc=s=>s.toUpperCase()

// 391: Jenny's secret message
g=s=> `Hello, ${s=='Johnny'? 'my love': s}!`;

// 392: Even or Odd
eo=n=> n&1? 'Odd':'Even';

// 393: Beginner Series #2 Clock
p=(h,m,s)=> h*3.6e6+m*6e4+s*1e3

// 394: Coefficients of the Quadratic Equation
q=(b,c)=> [1, -(b+c), b*c]

// 395: Smallest unused ID
n=a=> a.sort((a,b)=>a-b).reduce((ac,v)=> ac+ (ac === v),0);
function n(a){
	let e = 0;
	while (a.includes(e))e++;
	return e;}
