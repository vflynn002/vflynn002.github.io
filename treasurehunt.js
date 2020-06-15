// alert ("Connected!")
var randomNumTreasure = Math.ceil(Math.random() * 25)
console.log(randomNumTreasure);
var randomNumBomb = Math.ceil(Math.random() * 25)
console.log(randomNumBomb);

var count =0;

while (randomNumTreasure === randomNumBomb){
  var randomNumBomb = Math.ceil(Math.random() * 25);
// console.log(`${randomNumBomb} bomb reset`)
}

const treasure = (location) => {
  // alert(location)
  // document.getElementById(location).innerHTML=location
  count +=1
    document.getElementById("counter").innerHTML=count

  if (location === randomNumTreasure){
    alert("You win!")
    document.getElementById(location).innerHTML="<img src=\'treasure1.jpg\' width=\'100px\'height=\'100px\'>";
    document.getElementById("table").style.pointerEvents = "none";
  }
  else if (location === randomNumBomb) {
    alert("Avada Kedavra!")
    document.getElementById(location).innerHTML="<img src=\'treasure2.jpg\' width=\'100px\'height=\'100px\''>";
    document.getElementById("table").style.pointerEvents = "none";
  }
  else{
    alert("Keep looking...")
    document.getElementById(location).innerHTML="<img src=\'treasure3.jpg\' width=\'100px\'height=\'100px\''>";
    document.getElementById(location).style.pointerEvents = "none";
  }

}
