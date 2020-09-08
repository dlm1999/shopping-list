/*var database = [
	{
	username:"vasu",
	Password: "Vasu@123"
	},
	{
	username:"Divyanshu",
	Password: "Dasu@123"
	},
	{
	username:"Shraddha",
	Password: "Sasu@123"
	}
];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];
function isUserValid(username,password){
	for (var i = 0; i < database.length; i++) {
		if (username === database[i].username && password === database[i].password) {
			return true;
		}
	}	
	return false;
	}	
function signIn(username,password){
	if (isUserValid(username,password)) {
		console.log(newsfeed);
	}else {
		alert("Sorry!incorrect details");
	}
}
***dom events***
var usernameprompt = prompt("Enter your username");
var passwordprompt = prompt("Enter your password");
signIn(usernameprompt,passwordprompt);*/
/*var button = document.getElementsByTagName("Button")[0];

button.addEventListener("click",function(){
	console.log("CLICK!!")
})*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

liEvent();
function inputLength(){
	return input.value.length;
}
function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	liEvent();
}
function addListAfterClick(){
	if(inputLength() >0){
		createListElement();
	}	
}
function addListAfterKeypress(event){
	if(inputLength() >0 && event.keyCode == 13){
		createListElement();
	}	
}
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

function liEvent(){

	for(i=0;i<li.length;i++){
		li[i].addEventListener("click", changeclass)
	}
}	
function changeclass(){
	this.classList.toggle("done");
}

