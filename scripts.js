//******FASE 1******//
var myName = ['a', 'n', 'a', 'l', 'a', 'm', 'b', 'e', 'a', 9, "9"]

var mapA = new Map();
function setMap(myName){
    for (var i=0 ; i<myName.length ; i++){
        var char = myName[i];
        if(char== 'a' || char== 'e' || char== 'i' || char== 'o' || char== 'u'){
            addValue(char);
           console.log('VOCAL');

        } else if  (!isNaN(char)){
               console.log("Els noms de persones no contenen números!");
        } else {
                addValue(char);
               console.log("CONSONANT");
        }
    }
}


function addValue(char){
    if (mapA.has(char)){
        var newValue = mapA.get(char) + 1;
        mapA.set(char, newValue);
    } else {
        mapA.set(char, 1);
    }    
}

var mySurname = [];
function getSurname(myName){
    mySurname = myName.slice(3,myName.length-2);
    myName = myName.splice(3, myName.length);
    console.log(mySurname);
}

function fullName(myName, mySurname){
    var fullName = [];
//        fullName = myName.concat(" ", mySurname);
        
        fullName.push(...myName, ..." ", ...mySurname);
    
    return fullName;
}



setMap(myName);
console.log(mapA);
getSurname(myName);
console.log(fullName(myName, mySurname));