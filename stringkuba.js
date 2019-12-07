function mainFunction() {
    let txt = document.getElementById("txt").value; //pobiera string z inputa 
    let strNoNb = deleteNumbers(txt); //zamienia stringa wejściowego na string bez cyfr
    let string = deleteSpaces(strNoNb); //usuwa spacje ze stringa bez cyfr
    let arrayOfWords = splitShit(string);
    let finalSentence = splitRest(splitShit(string));
    count2(string);
    display = showWords(arrayOfWords);
    
document.getElementById("result").innerHTML = display +  "<br><br>" +  finalSentence + "<br><br>" + txt.getNums().join(" ") ; // wyświetla dane rzeczy w htmlu
}

String.prototype.getNums= function(){  //wyszukuje i wypisuje wszystkie liczby niezależnie czy to zmiennoprzecinkowa czy normalna czy expo
    var rx=/[+-]?((\.\d+)|(\d+(\.\d+)?)([eE][+-]?\d+)?)/g,
    mapN= this.match(rx) || [];
    console.log(mapN.map(Number));
    return mapN.map(Number);
    };

function removeNb(nb) { //zamienia cyfry na nic
    return nb.replace(/[0-9]/g,'');
    }

function deleteNumbers(x) { //FUNKCJA DO USUWANIA cyfr i zwraca string bez cyfr 
    let noNbString = removeNb(x);
    console.log(x + "  -  tekst wejsciowy");
    console.log(noNbString + "  -  tekst pozbawiony cyfr");
    return noNbString;
    }

function myTrim(a) { //Trimmer z reg-exem do funkcji deleteSpaces
  return a.replace(/^\s+|\s+/g,' ');
}

function deleteSpaces(x) { //FUNKCJA DO USUWANIA WHITESPACE'OW
let string = myTrim(x);
console.log(string + "  -  tekst ze zredukowanymi whitespace'ami");
return string;
}

function splitShit(y){  //splituje tekst do arraya, a potem robi reverse
let splitted = y.split(" ");
console.log(splitted + "  -  SPLITTED");
return splitted;}

function splitRest(z){
let reversed = z.reverse();
console.log(reversed + "  -  REVERSED");
for(let i=0; i < reversed.length; i++){
  if(/[A-Z]/.test(reversed[i])){
  reversed[i] = reversed[i].toUpperCase()
}}
console.log(reversed + "  -  UpperCased");
let sentence = reversed.join(" ");
console.log(sentence + "  -  Final sentence");
return sentence;
}

let tabPom=[];
let tabC=[];
let tabL=[];
let lista = [];

function count2(str){  //wrzuca duże litery do tablicy tabL
  tabPom =[]; //resetowanie tablicy
  let s = str.replace(/\s/g,'');
  let sL = s.length;
  console.log(s);
  console.log(sL);
  for (i = 0; i < sL; i++) {
      if (s.charAt(i) === s.charAt(i).toUpperCase()) {
      tabPom.push(s.charAt(i));
      }
  }
  console.log(tabPom + " <--- TAB Pom przed petla");
  console.log(tabC + " <--- TAB C przed petla");
  console.log(tabL + " <--- TAB L przed petla");
  tabC =[];
  tabL=[];
  for (let i=0; i<tabPom.length; i++){
    if (tabL.includes(tabPom[i])){
      for (let j=0; j<tabL.length; j++){
        if (tabPom[i]===tabL[j]){
          tabC.splice(j,1,tabC[j]+1);
        }
        console.log(tabC + "  " + j);
      }} 
    else {
    tabL.push(tabPom[i]);
    tabC.push(+1);  
    }    
  console.log(tabC + "<------ TAB C po petli " + i );
  console.log(tabL + "<------ TAB L po petli " + i ); }
}

function showWords(x){
let array=[];
  console.log(x);
  console.log(tabL);
for (let i=0; i<tabL.length; i++) {
  array[i]=[]; //wielowymiarowa macierz w macierzy
  for (let j=0; j<x.length; j++){
    if (x[j].includes(tabL[i])){
    array[i].push(x[j]);
    }
  }
}
lista = [];
for (let i=0; i<tabL.length; i++) {
lista[i] = tabL[i].toString() + " - " + tabC[i].toString() + ",\xa0\xa0\xa0\xa0" + array[i].join(", ");
console.log(lista);
}
let display = lista.join("<br>");
return display;
}