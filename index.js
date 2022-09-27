const statusButton = document.querySelector("button");
const pet = document.querySelector(".all-pets");



let createPet = function(name,species){
    let pet = {
        name:name,
        species :species,
        isTired:5,
        sleep: function(){
isTired = 1;
        },
play :function(){
if (this.isTired === 10){
this.sleep();
} else {
    this.isTired +=1;    
};
}
    }
    return pet;
};

let sora = createPet("Sora","Red");
let clef = createPet("Clef","Disguys");
let clew = createPet("Clew", "Rat");

sora.isTired=8;
clew.isTired=4;
clef.isTired=3;


let allPets = [sora,clef,clew];
let showPets = function(allPets){
    pet.innerHTML= "";
for (let pets of allPets){
    let status = "is ready to play";
    if(pets.isTired >= 7){
        status="sleeping";
    };
    let listItem = document.createElement("li");
    listItem.innerText=`${pets.name} the ${pets.species} is ${status}`
    pet.append(listItem)
}
};
statusButton.onclick=()=>{
    showPets(allPets);
}




