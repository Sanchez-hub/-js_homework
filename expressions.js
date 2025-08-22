var re = /\b(?!\w*[aA])\w{6,}\b/g;

var str = "Wonderful Joyful Happiness Time Task Apple";
var matches = str.match(re);

console.log(matches); // ["Wonderful", "Joyful"]
