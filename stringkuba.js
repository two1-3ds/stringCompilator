let tabPom=[];
let tabC=[];
let tabL=[];
let lista = [];

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

function deleteNumbers(x) { //zamienia cyfry na nic i zwraca string bez cyfr 
    let noNbString = x.replace(/[0-9]/g,'');
    console.log(x + "  -  tekst wejsciowy");
    console.log(noNbString + "  -  tekst pozbawiony cyfr");
    return noNbString;
}

function deleteSpaces(x) { //FUNKCJA DO USUWANIA WHITESPACE'OW
  let string = x.replace(/^\s+|\s+/g,' ');
  console.log(string + "  -  tekst ze zredukowanymi whitespace'ami");
  return string;
}

function splitShit(y){  //splituje tekst do arraya
  let splitted = y.split(" ");
  console.log(splitted + "  -  SPLITTED");
  return splitted;
}

function splitRest(z){ //robi reverse i dalsze operacje
  let reversed = z.reverse();
  console.log(reversed + "  -  REVERSED");
    for(let i=0; i < reversed.length; i++){
      if(/[A-Z]/.test(reversed[i])){
        reversed[i] = reversed[i].toUpperCase()
      }
    }
  console.log(reversed + "  -  UpperCased");
  let sentence = reversed.join(" ");
  console.log(sentence + "  -  Final sentence");
  return sentence;
}

function count2(str){  //wrzuca duże litery do tablicy tabL
  tabPom =[]; //resetowanie tablicy
  let s = str.replace(/\s/g,'');
  let sL = s.length;
  console.log(s, sL, " - ilosc znakow");
    for (i = 0; i < sL; i++) {
      if (s.charAt(i) === s.charAt(i).toUpperCase()) {
        tabPom.push(s.charAt(i));
      }
    }
  console.log(tabPom + " <--- TAB Pom przed petla  \n\n " + tabC + " <--- TAB C przed petla \n\n " + tabL + " <--- TAB L przed petla \n" );
  tabC =[]; //reset
  tabL=[]; //reset
    for (let i=0; i<tabPom.length; i++){
      if (tabL.includes(tabPom[i])){
        for (let j=0; j<tabL.length; j++){
          if (tabPom[i]===tabL[j]){
            tabC.splice(j,1,tabC[j]+1);
          }
          console.log(tabC + " tabC po pętli j = " + j);
        }
      } 
      else{
        tabL.push(tabPom[i]);
        tabC.push(+1);  
      }    
      console.log(tabC + " <---- TAB C po petli " + i + "\n\n" + tabL + " <---- TAB L po petli " + i + "\n\n" );
    }
}

function showWords(x){
  let array=[];
  console.log(x + "\n" + tabL + "\n array stringów i array dużych liter" );
    for (let i=0; i<tabL.length; i++) {
      array[i]=[]; 
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

String.prototype.getNums= function(){  //wyszukuje i wypisuje wszystkie liczby niezależnie czy to zmiennoprzecinkowa czy normalna czy expo
  let rx=/[+-]?((\.\d+)|(\d+(\.\d+)?)([eE][+-]?\d+)?)/g,
  mapN= this.match(rx) || [];
  console.log(mapN.map(Number));
  return mapN.map(Number);
  }
