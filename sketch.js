let v,p,verse,people,button;
function setup() {
  createCanvas(500, 500);
  people = createInput();
  people.position(50, 60);
  text('Number of People', 50, 50);
  verse = createInput();
  verse.position(50, 110);
  text('Number of Verses', 50, 100);
  button = createButton('submit')
  button.position(50,150)
  button.mousePressed(display)

}
function display(){
  clear()
    text('Number of People', 50, 50);
    text('Number of Verses', 50, 100);
  v = verse.value()
  p = people.value()
    text(mapVal(noSix(sortArr(v,p))),50, 200)
}
function sortArr(V, P) {
  var numVerse = V / P;
  var remain = V % P;
  var intVerse = Math.floor(numVerse);
  var i;
  let list = new Array(P);
  for (i = 0; i < P; i++) {
    list[i] = intVerse;
  }
  for (i = 0; i < remain; i++) {
    list[i]++;
  }
  list.sort()
  return list;
}

function checkSix(arr) {
 if(arr instanceof Array){
    var i;
    var six = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === 6) {
        six++;
      }

    }
   return six;
}
}

function noSix(arr) {
  if(arr instanceof Array){
    var i;
    var numSix = checkSix(arr);
    var firstSix
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === 6) {
        firstSix = i;
        break;
      }
    }
    var lastSix;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === 6) {
        lastSix = i;
      }
    }
    while (numSix >= 3) {
      arr[firstSix]--;
      arr[lastSix]++;
      firstSix++;
      lastSix--;
      console.log(numSix)
      numSix = checkSix(arr);
    }
    return arr;
  }
}

function mapVal(arr) {
  if(arr instanceof Array){
    var perPerson = new Map();
    var i;
    for (i = 0; i < arr.length; i++) {
      if (perPerson.has(arr[i]) == false) {
        perPerson.set(arr[i], 1)
      } else {
        perPerson.set(arr[i], perPerson.get(arr[i]) + 1);
      }
    }
    var textString = '';
    for (let key of perPerson.keys()) {
      if(perPerson.get(key) > 1){
      textString = textString + perPerson.get(key) + ' people read ' + key + '. ';
      }else{
      textString = textString + perPerson.get(key) + ' person reads ' + key + '. ';
      }
    }
    return textString
  }
}