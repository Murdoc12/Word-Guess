// create an array of words
var words =  [ "Zerodawn", "mount", "aloy", "Focus", "Hades"];
// choose one randomly
var word = words [Math.floor(Math.random() * words.length)];
var rightWord = [];
var wrongWord = [];
var answer = [];
console.log (word); 
// create underscores
for (var i = 0; i < word.length; i++) {
 answer.push("_");
}

console.log (answer);

// get user input

document.onkeypress = function(event){
var keycode = event.keyCode;
var keyword = String.fromCharCode(keycode);
// console.log (word.indexOf(keyword));

//guess is right
if (word.indexOf(keyword) > -1 ) {
rightWord.push(keyword);



//replace with right letter
answer[word.indexOf(keyword)] = keyword;

console.log (answer);
if (answer.join('_') == word) {
    alert(Winner);
      }



}
else { 
    wrongWord.push(keyword);
    console.log(wrongWord);

}



}