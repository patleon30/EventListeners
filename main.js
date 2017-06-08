console.log ("howdy");

let articleEl = document.getElementsByClassName("article-section")
console.log(articleEl);


function handleSectionClick() {
console.log (event);
let elementText = event.target.innerHTML
outputDiv.innerHTML = `You clicked on the ${elementText} section`

}

//HandleSectionClick();
articleEl[0].addEventListener ("click", handleSectionClick)
function sayYourName (name) {
console.log ("My name is " +name);
}
let getGuinea = document.getElementById ("guinea-pig");

document.getElementById("change-color").addEventListener("click", function(){
	getGuinea.classList.toggle ("color");
})

document.getElementById ("make-large").addEventListener ("click", function(){
	getGuinea.classList.toggle ("large");

})

document.getElementById ("add-border").addEventListener ("click", function(){
	getGuinea.classList.toggle ("border");
})

document.getElementById ("make-rounding").addEventListener ("click", function(){
	getGuinea.classList.toggle ("round");
})