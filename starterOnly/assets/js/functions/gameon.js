//import { first } from '../../../src/index'
const first = document.getElementById("first")

export default function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export function event__focusOutTextFirst(){
    console.log("Attention le nom !" + first.parentNode.childElementCount)
    //first.parentElement.nodeValue
    //lastChild.classlist.remove("invisible")
    //first.parentNode.lastChild.classlist.add("visible")
}
