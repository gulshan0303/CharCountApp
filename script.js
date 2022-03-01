const charVal = document.getElementById("textarea");

let totalCount = document.getElementById("total-counter");

let remainingCount = document.getElementById("remaning-counter");

let char = 0;
const updateCounter = () =>{
  Userchar = charVal.value.length;
  totalCount.innerText = Userchar;
  remainingCount.innerText = 150-Userchar;
}
charVal.addEventListener("keyup",() => updateCounter());



//copy the text code
const copyText = () =>{
   charVal.select();
   charVal.setSelectionRange(0,9999); //mobile version
   navigator.clipboard.writeText(charVal.value); 
}