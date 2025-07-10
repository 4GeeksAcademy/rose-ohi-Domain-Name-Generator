import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//           .0        1             2            3            4

let pronoun = ['the', 'our', 'we', 'he', 'she', 'they'];
let adj = ['great', 'big', 'pink', 'square'];
let noun = ['jogger', 'racoon', 'rainbow'];
let domain = ['.com', '.org', '.net','.love'];


window.onload = function () {
  let output = "<strong>"; // Accumulate domains strings
    
  
  
  //write your code here
  //generates random outputs with nested for loops instead of randomizing function
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
          
          let domain_out = pronoun[i] + adj[j] + noun[k] + domain[l];
          output += domain_out + "<br>"; // Add to string with line break
         
        }
      }
    }
  }


  console.log("Hello Rigo from the console!");
  document.querySelector("#domain").innerHTML = output;
  
};
