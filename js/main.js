var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];

console.log( findEachString(posts));

function findEachString(posts){
	
for(var i=0; i < posts.length; i++){

	
	posts[i] = findLongestWord(posts[i]); 
	
} 
var output = posts.join(" ");
return output;
}

function findLongestWord(string){
	var words = string.split(" ");
	var longest = "";
	for(var word of words){
		if(word.length > longest.length) longest = word;
	}
return longest;
}
/*
var posts = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];

console.log( findEachString(posts));

function findEachString(posts){
	//console.log(posts);
for(var i=0; i < posts.length; i++){

	//console.log(posts[i]); // turime israiskes posts[i] masyve
	posts[i] = findLongestWord(posts[i]); // cia iskvieciam ta sekancia funkcija
	
} 
var output = posts.join(" ");
return output;
}

function findLongestWord(string){
	var words = string.split(" ");
	var longest = "";
	for(var word of words){
		if(word.length > longest.length) longest = word;
	}
	//console.log(longest); 
//console.log(string);
return longest;
}
*/
/*
var name = "vardenis pavardenis";

console.log( firstToUpperChar(name) );

function firstToUpperChar(string){
	var stringArray = string.split(" ");
	for( var i=0; i < stringArray.length; i++ ){
		stringArray[i] = convertChar(stringArray[i])
	}
} 
function convertChar(word){
	var firstLetter = word.charAt(0).toUpperCase(),
	text = word.substring(1);
	return firstLetter + text;
}
*/
/*
function largestOfFour(arr){
	var maxes = [];
	for(i=0; i<arr.length; i++){
		var tempMax = arr[i][0];
		//console.log(tempMax);
		for(var j=0; j<arr[i].length; j++){
			var currentElement = arr[i][j];
		//	console.log(arr[i][j]);
		if(currentElement >= tempMax){
			tempMax = currentElement;
		}
		}
		maxes.push(tempMax);
	}
	return maxes;
}

largestOfFour([[5, 6, 1, 10], [8, 6, 13, 10], [55, 16, 11, 20], [22, 17, 19, 5]]);



*/
//var arr = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];

// Finding Longest Word
/*
function findLongestWord (words) {
  var max=1;
  var maxWord;
  words.forEach(function (word) {
    if (word.length  > max) {
      max = word.length;
      maxWord = word;
    }
  })
  return maxWord;
}

var words = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
var longest = findLongestWord(words);
console.log(longest);
*/

/*

var arr = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];


var lgth = 0;
var longest;

for(var i=0; i < arr.length; i++){
    if(arr[i].length > lgth){
        var lgth = arr[i].length;
        longest = arr[i];
    }      
} 
console.log(longest);







var arr = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
*/


/*$(function(arr){
  var arr = ["Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu"];
  $("#result").append(longestName(arr));
});
*/


/*

var arr = [ "Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu" ];

Array.prototype.longest=function() {
    return this.sort(
      function(a,b) {  
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
          return 0
      }
    )[0];
}
console.log(arr.longest()); 

*/
/*
var words = [ "Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu" ];

function findLongestWord(array) {
  var longestWord = "";
  array.forEach(function(word) {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

var word = findLongestWord([ "Sveikinu radus darbą", "Ar tikrai pabaigus kursą viskas bus gerai", "Javascript nėra Java", "Rasti video medžiagą visada šaunu" ]);
console.log(word); // result is "jumped"

*/

// var word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);



/*var temperatura = "Lietuvoje šiuo metu laipsnių pagal Celsijų";

function toCelsius(f) {
    return (5/9) * (f-32);
}

console.log( temperatura.substr(0, 20) + toCelsius(26).toFixed(1) + temperatura.substr(19, 39));

var temperatura = "Lietuvoje šiuo metu laipsnių pagal Celsijų";

console.log( temperatura.substr(0, 20) + ((26-32) * (5/9)).toFixed(1) + temperatura.substr(19));*/

/*Įmonė nori įsigyti 2 baltus arba juodus tos pačios rūšies kompiuterius (būtinai vienos spalvos), kurių bendra kaina neviršytų 1600 €. 
Sugeneruokite sąrašą kompiuterių, kuriuos galite pasiūlyti.*/

/*
for(i=0; i < pcs.length; i++){

	if(pcs[i].spalva.juoda > 1 && pcs[i].kaina*2 <= 1600 || pcs[i].spalva.balta > 1 && pcs[i].kaina*2 < 1600) {
		console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina*2 + "\n" + "Spalvos: " + pcs[i].spalva.juoda);
	}
}
*/

/*


var pcs = [
	{ modelis:"lenovo idėja", kaina:1234, spalva:{raudona:1,žalia:2} },

	{ modelis:"hp monstras", kaina:800, spalva:{juoda:2,geltona:0} },

	{ modelis:"toshiba sriuba", kaina:256, spalva:{mėlyna:3,žalia:1} },

	{ modelis:"dell apskritimas", kaina:697, spalva:{juoda:1,balta:2} },

	{ modelis:"acer peizažas", kaina:620, spalva:{juoda:4,balta:2} },

	{ modelis:"apple 256", kaina:2560, spalva:{balta:3,juoda:1} },

	{ modelis:"asus pokšt", kaina:1001, spalva:{juoda:2,geltona:3} }
],

q = 2;
sum = 1600;

/*
for(i=0; i < pcs.length; i++){
 
		for(var keys in pcs[i].spalva){
	if(((keys == "balta" && pcs[i].spalva.balta > 1 ) || (keys == "juoda" && pcs[i].spalva.juoda > 1)) && pcs[i].kaina*2 <= 1600){
		console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina*2 + "\n" + "Spalvos: " + keys );
		}}
	 }
*/

/*

for( var i=0; i < pcs.length; i++){
// filtras
if( pcs[i].kaina * q <= sum && (pcs[i].spalva. juoda >= q || pcs[i].spalva.balta >= q) ){

var colors = Object.keys(pcs[i].spalva);
color = "";
for( var j=0; j < colors.length; j++ ){

if( (colors[j] == "balta" && pcs[i].spalva.balta >= q) || (colors[j] == "juoda" && pcs[i].spalva.juoda >= q) ){
if ( color){
color += " ir " + colors[j];
} else {
	color = colors[j];
}
}

}
console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina*2 + "\n" + "Spalvos: " + color );

}

}


/*
for(i=0; i < pcs.length; i++){

	if((pcs[i].spalva.juoda > 1 || pcs[i].spalva.balta > 1) && pcs[i].kaina*2 <= 1600) {
		for(var keys in pcs[i].spalva){
	if((keys == "balta" && pcs[i].spalva.balta > 1 ) || (keys == "juoda" && pcs[i].spalva.juoda > 1)){
		console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina*2 + "\n" + "Spalvos: " + keys );
		}}
	} }
*/



/*var s = ""  
for (var key in pcs) {  
    s += key + ": " + pcs[key];  
    s += "<br />";  
    }  
console.log(s); */

/*console.log(Object.keys(pcs[1]));*/


/*
for(i=0; i < pcs.length; i++){

	if((pcs[i].spalva.juoda > 1 || pcs[i].spalva.balta > 1) && pcs[i].kaina*2 <= 1600) {
		console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina*2 + "\n" + "Spalvos: " + Object.keys(pcs[i].spalva));
	} }

*/

/* 
for(i=0; i < pcs.length; i++){

	if(pcs[i].spalva.juoda > 1 && pcs[i].kaina*2 <= 1600) {
		console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina*2 + "\n" + "Spalvos: Juoda");
	} else if(pcs[i].spalva.balta > 1 && pcs[i].kaina*2 <= 1600){
		console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina*2 + "\n" + "Spalvos: Balta");
	} else if((pcs[i].spalva.balta > 1 && pcs[i].spalva.juoda > 1) && pcs[i].kaina*2 <= 1600)
	{
		console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + pcs[i].kaina*2 + "\n" + "Spalvos: Juoda ir Balta");
	}}
*/
/* reikia dar vieno ciklo kad su keys padaryti*/










