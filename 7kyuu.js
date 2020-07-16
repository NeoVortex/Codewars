// 001: Get the Middle Character
const getMiddle = str => str.subst(Math.ceil(str.length / 2 - 1 ), ~~(str.length/2+1));
function getMiddle(str){
  return str.slice((str.length-1)/2, str.length/2+1);}

// 002: Disemvowel Trolls
const disemvowel = str =>str.replace(/[aiueo]/gi,'');
function disemvowel(str) {
	let vowel = ['a','i','u','e','o','A','I','U','E','O'];
	return [...str].filter(el=> vowel.indexOf(el)== -1).join``;
}

// 003: Square Every Digit
// String(num),(num+'')
const squareDigits = num => +([...`${num}`].reduce((acc, val)=> acc + val*val,''));
const squareDigits = num => +([...(num.toString())].map(val=> val*val).join``);

// 004: Mumbling
const accum = str => [...str].map(
	(char,i)=> ( char.toUpperCase() + char.toLowerCase().repeat(i))).join`-`;

// 005: Highest and Lowest
const highAndLow=num=> `${Math.max(...(num.split` `))} ${Math.min(...(num.split` `))}`;

// 006: Exes and Ohs
const XO = str => (str.match(/o/gi)||0).length == (str.match(/x/gi)||0).length;
const XO = str => str.replace(/o/ig,'').length == str.replace(/x/ig,'').length;
const XO = str => str.toLowerCase().split('o').length == str.toLowerCase().split('x').length;

// 007: Descending Order
const descendingOrder = num => +([...`${num}`].sort((a,b)=> b-a).join``);
const descendingOrder = num => Number(String(num).split``.sort().reverse().join``);

// 008: Complementary DNA // replace using object/array
const DNAStrand=dna=> dna.replace(/./g, el=>{A:'T', T:'A', C:'G', G:'C'}[el]);
const DNAStrand=dna=> dna.replace(/./g, el=> 'CGAT'['GCTA'.indexOf(el)]);

// 009:Shortest Word
const findShort=str=> Math.min(...str.split` `.map(str => str.length));
const findShort=str=> str.split` `.reduce((acc, val)=> Math.min(acc, val.length), Infinity);

// 010: Binary Addition
const addBinary=(a,b)=> ((a+b) >>> 0).toString(2); // >>>0 it's a good practice
const friend=arr=> arr.filter(el => el.length == 4);

// 011: Make a function that does arithmetic! // object/array
const arithmetic=(a,b,op)=> ({'add': a+b, 'subtract': a-b, 'multiply': a*b, 'divide': a/b}[op]);
const arithmetic=(a,b,op)=> eval(a + '+-*/'['asmd'.search(op[0])] + b);

// 012: Summing a number's digits 
const sumDigits = num => eval([...String(Math.abs(num))].join('+'));
const sumDigits= num => Math.abs(num).toString().split``.reduce((acc, el)=> acc + +el, 0);
//  x|0 'OR' returns the true part or the integer, when false|false, returns the last false
const sumDigits = num=> [...(num + '')].reduce((acc,el)=> acc + (el | 0), 0);

// 013: The Coupon Code
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate)=> enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);

// 014: Gauß needs help! (Sums of a lot of numbers).
f = n=> n !== (n | 0) || n < 1 ? false : n * (n + 1) / 2; // n !== (n|0) questions: is 'n' integer?

// 015: Beginner Series #3 Sum of Numbers
const getSum = (a,b)=> (Math.max(a,b)-Math.min(a,b)+1) * (Math.max(a,b)+Math.min(a,b)) / 2;
const getSum = (a,b)=> a==b? a : a<b ? a+getSum(a+1,b) : a+getSum(a-1,b);
const getSum = (a,b)=> Math.abs(a-b) * (a+b) / 2;

// 016: Round up to the next multiple of 5
const roundToNext5 = n => Math.ceil(n/5)*5;
const roundToNext5 = n => (n%5)? roundToNext5(n+1) : n;// recursiveness

// 017: Find the nth Digit of a Number
const findDigit = (num, nth) => nth > 0 ? nth != 1 ? findDigit(Math.abs(~~(num/10)), --nth) : num%10 : -1;
const findDigit = (num, nth)=> --nth >= 0? +[...(''+Math.abs(num))].reverse()[nth] || 0 : -1;

// 018: Moves in squared strings (I)
const vertMirror = s => s.map(el=> [...el].reverse().join``);
const horMirror = s => s.reverse();
const oper = (fct, s) => fct(s.split('\n')).join('\n');

// 019: List Filtering
const filter_list = l => l.filter(el => (Number));

// 020: Isograms
const isIsogram=str=> !/(/w).*\1/i.test(str);// '\1' match the exact same variable again
const isIsogram=str=> str.length == new Set (str.toLowerCase()).size;
const isIsogram=str=> [...str.toLowerCase()].every((val, i, arr)=> arr.indexOf(val) == i) || !str;

// 021: Sum of two lowest positive integers
const sumTwoSmallestNumbers = numb => (n = numb.sort((a,b)=> a-b))[0]+n[1];
const sumTwoSmallestNumbers = num => num.sort((a,b)=>a-b).slice(0,2).reduce((acc, val)=> acc + val);

// 022: Growth of a Population
const nbYear = (p0, percent, aug, p, years = 0) => p0 < p? nbYear(p0 + p0*percent/100 + aug, percent, aug, p, years+1) : years;

// 023: Credit Card Mask
const maskify = cc => cc.slice(-4).padStart(cc.length,'#');
const maskify = cc => cc.slice(0, -4).replace(/./g, '#')+ cc.slice(-4);
const maskify = cc => cc.replace(/.(?=.{4})/g, '#');
const maskify = cc => '#'.repeat(Math.max(0, cc.length-4)) + cc.substr(-4);

// 024: Find the next perfect square!
const findNextSquare= sq=> Number.isInteger(s = Math.sqrt(sq))?  ++s*s : -1;

// 025: Two to One
const longest=(s1, s2)=> [...new Set(s1+s2)].sort().join``;
const longest=(s1, s2)=> Array.from(new Set(s1+s2)).sort().join``;
const longest=(s1, s2)=> 'abcdefghijklmnopqrstuvwxyz'.replace(new RegExp(`[^${s1+s2}]`, 'g'),'');

// 026: Printer Errors
const printerError = s => `${s.match(/[n-z]/g)||0.length}/${s.length}`;

// 027: Sum of odd numbers
const rowSumOddNumbers = n => n * n * n;

// 028: Categorize New Member
const openOrSenior= data => data.map(([age, lvl]) => (age > 54 && lvl > 7) ? 'Senior' : 'Open');

// 029: Ones and Zeros
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
//OR is used to avoid first 0 case cancel all the operation
const binaryArrayToNumber = arr => arr.reduce((acc, val) => acc << 1 | val);
const binaryArrayToNumber = arr => arr.reduce((acc, val) => (acc = acc * 2 + val),0);

// 030: Find the divisors!
function divisors(int) {
	for ( var res= [], i = 2; i<= int/2; ++i ) if ( !int%i ) res.push(i);
	return res.length ? res : `${int} is prime`;}
const divisors = int => (res = [...Array(int).keys()].slice(2, int/2+1).filter(el => !(int%el)), res.length ? res : `${int} is prime`);

// 031: Number of People in the Bus
const number = busStops => [...busStops].reduce((acc, [on, off])=> acc + on - off,0);

// 032: Remove the minimum (without changing the original array)
const removeSmallest = nums => {
	let min = Math.min.apply(this, nums);
	return [...nums.slice(0, min), ...nums.slice(++min)]};
const removeSmallest=nums=> nums.filter((el, i)=> i!= nums.indexOf(Math.min(...nums)));

// 033: String ends with?
const solution=(str, end)=> str.match(end+'$') == end;
const solution=(str, end)=> str.endsWith(end);
const solution=(str, end)=> new RegExp(end+'$', 'i').test(str);
const solution=(str, end)=> str.substr(-end.length) == end;

// 034: Breaking chocolate problem
const breakChocolate = (n,m) => Math.max(0, m*n-1);
const breakChocolate = (n,m) => (n*=m) ? n-1 : n;

// 035: Reverse words
const reverseWords = str => str.split` `.map(word=> [...word].reverse().join``).join` `;
const reverseWords = str => str.replace(/\S+/g, word=> [...word].reverse().join` `);

// 036: The highest profit wins!
const minMax= arr => [Math.min(...arr), Math.max(...arr)];

// 037: Odd or Even?
const oddOrEven = arr => arr.reduce((acc, val)=> acc+val, 0)&1? 'odd' : 'even';
const oddOrEven = arr => ['even', 'odd'][arr.reduce((acc, el)=> acc + el, 0) & 1];
const oddOrEven = arr => arr.filter(el=> el & 1).length & 1 ? 'odd' : 'even';

// 038: Money, Money, Money
function calculateYears(principal, interest, tax, desired, y=0) {
	while (principal < desired) {
		principal+= principal*interest*(1-tax)
    y++;
	} return y;}
	// Math.log(8)/Math.log(2) = logarithm of 8 with base 2 = 4
const calculateYears=(P, interest, tax, desired)=>  Math.ceil(Math.log(desired / P) / Math.log(1 + interest * (1 - tax)));

// 039: Find the stray number
function stray(nums) {
	for (let i in nums) {
		if (nums.indexOf(nums[i] == nums.lastIndexOf(nums[i]))) return nums[i];
	}} 
const stray = nums => nums.reduce((acc, el)=> acc^el);
const stray=nums=>  nums.filter( x => x == Math.max(...nums)).length == 1 ? 
    Math.max(...nums): Math.min(...nums);

// 040: Largest 5 digit number in a series
function solution(dgt) {
	let largest = i =0;
	for (i; i < dgt.length-4; i++) {
		let buffer = dgt.slice(i, i+5)
		if (buffer > largest) {
			largest = buffer;
		}
	} return +largest;
}
// taking array in map
const solution = dgt => dgt.split``.map((_,i,arr)=> arr.slice(i, i+5).join``).sort((a,b)=>b-a)[0];
const solution = dgt => Math.max(~~dgt.substr(0,5), solution(dgt.slice(1)));
const solution = dgt => +dgt.split``.reduce((acc,_,i)=> ((buff = +dgt.slice(i, i+5)) > acc? buff:acc),0);

// 041: Don't give me five!
function dontGiveMeFive(start, end) {
	for (var count =0; start <= end; start++) /5/.test(start) || count ++;
		return count;}

// 042: Halving Sum 
const halvingSum = n => n > 1 ? n + halvingSum(n/2|0) : n;// |0: OR, returns only the integer part
const halvingSum = H = n => n && n + H(n>>1)// n &&.. activates false/true test

// 043: Simple remove duplicates
const solve = arr => arr.filter((val, i)=> arr.lastIndexOf(val) == i);
const solve = arr => [... new Set(arr.reverse())].reverse();
// 'add' method append a 'value' to the end of a 'Set' object
const solve = arr => [...arr.reduceRight((acc, val)=> acc.add(val), new Set)].reverse();

// 044: Triangular Treasure
const triangular = T = n=> n > 0 ? n + T(--n): 0;
const triangular = n=> (n = Math.max(n, 0)) * ++n / 2; //Replacing OR 0 with Math.max(n,0)

// 045: Sum of a sequence
const sequenceSum = SS = (begin, end, step) => begin < end ? begin + SS(begin+step, end, step):0;

// 046: Count the Digit
const nbDig = (n, d)=> [...Array(++n)].map((_,i)=> i*i).join``.match(new RegExp(d, 'g')).length;

// 047: No oddities here
const noOdds = values => values.filter(el => ~(el&1));
// m flag causes '^' and '$' match the begin/end of each line, not just string.
const noOdds = values => [...values].match(/[02468]+/gm).map(Number);

// 048: Factorial (Both options throw a new 'RangeError')
const factorial = n => n<0 || n>12? n() : n < 2? 1 : n*factorial(n - 1);
const factorial = F = n => n<0 || n>12? Array(-1) : n < 2? 1 : n*F(n - 1);

// 049: Count the divisors of a number
const getDivisorsCnt = n => {  
	for(var cont = 0, i = 0;; i < Math.sqrt(n); ++i)
		if (!(n%i)) cont+=2;
	if(!(n % Math.sqrt(n))) cont++;
	return  cont }
// An slow one but clever
const getDivisorsCnt = n => {
  for (var total = 0, i = 1, length = Math.sqrt(n); i < length; total += (n%i++) ? 0 : 2);
  return (n%length)? total: ++total}
function getDivisorsCnt(n,i,t){
    for(t=1,i=n>>1;i;t+=n%i--==0);
    return t}

// 050: Sum of all the multiples of 3 or 5
const findSum = FS = (n, res=0, i=0) => i <=n ? !(i%3) || !(i%5) ? FS(n, res+i, ++i) : FS(n, res, ++i) : res;
const findSum = n => [...Array(++n).keys()].reduce((acc, val)=> !(val%3 && val%5)? acc+val : acc, 0);
// Note: Math.trunc return the integer part of the Number

// 051: Maximum Length Difference
const mxdiflg = (a1,a2) => a1.length && a2.length ?
(x = a1.map(str=> str.length), y = a2.map(str=> str.length), 
Math.max(Math.max(...x) - Math.min(...y), Math.max(...y) - Math.min(...x))) : -1;

const mxdiflg = (a1,a2, max=-1) =>{
  for (let x of a1) for (let y of a2) 
  max = Math.max(max, Math.abs(x.length - y.length))
  return max}

// 052: Deodorant Evaporator
with (Math) evaporator = (content,epd,threshold) => ceil( log(threshold/100) / log(1-epd/100));

// 053: Find the capitals
let capitals = word => [...word].reduce((acc, cur, i)=> {
    return /[A-Z]/.test(cur) && acc.push(i), acc;}, []);
let capitals = word => word.match(/[A-Z]/g).map(el=>word.indexOf(el));