var characters = [
  {
    name: "Daenerys Targaryen",
    bio:
      'The youngest child of King Aerys II — also known as the Mad King — Daenerys is known by many titles, including the Mother of Dragons, or Khaleesi (which simply means "queen" in Dothraki).',
    status: "alive"
  },
  {
    name: "Khal Drogo",
    bio:
      'Khal Drogo is the leader of a Dothraki "khalasar" (tribe). He and Daenerys eventually come to care for one another, but the marriage begins under traumatic circumstances.',
    status: "dead"
  },
  {
    name: "Tyrion Lannister",
    bio:
      "Joanna Lannister died in childbirth when Tyrion when born. He's known for his cleverness and sharp tongue, though many derisively call him the Imp or Halfman.",
    status: "alive"
  },
  {
    name: "Sansa Stark",
    bio:
      "Sansa Stark was raised as a highborn lady who would one marry into another great house.",
    status: "alive"
  },
  {
    name: "Arya Stark",
    bio:
      "Arya has no desire to grow up in the confines of ladyship — she prefers swords to sewing.",
    status: "alive"
  },
  {
    name: "Jon Snow",
    bio:
      "Said to be the bastard son of Ned Stark and a mystery woman, Jon is slightly ostracized from the rest of the Stark kids.",
    status: "alive"
  }
];

var names_of_char = [];
var info_of_char = [];
for(char in characters){
  names_of_char.push(characters[char].name);
  info_of_char.push(characters[char].bio);

}



let character = document.querySelectorAll(".character");
let char_name = document.querySelectorAll(".more-info");
let more_info = [];
let char_info = document.querySelectorAll(".info");


//this comment to try late (ignore it)>>>>>
// let info_p = document.createElement("p");
// info_p.innerText = info_of_char[i];
// character[i].appendChild(info_p);
// character[i].setAttribute("id", info_p);
// console.log(info_p[i])
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

for(var i=0; i < char_name.length;i++){
  char_name[i].setAttribute("id", names_of_char[i]);
  char_info[i].innerText = info_of_char[i];




  
  
}



let div = document.querySelector(".got-characters");
var c = 0;
div.addEventListener("click", (item) => {
     item.preventDefault();
     

     if(item.target.tagName === "BUTTON"){
       
          console.log("Name: "+ item.target.id);

          while(c < char_info.length){
            document.getElementsByClassName("info")[c].style.display = 'block';
            c++;
          }

            
          
       
     }
});
