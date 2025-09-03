//your JS code here. If required.
let targetElement=document.getElementById("level")
let parentElement=targetElement.parentNode;
let count=0

while(parentElement!=null){
    parentElement=parentElement.parentNode;
    count++
}

alert(`The level of the element is: ${count}`);
