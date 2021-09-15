var i =0;
var info = [];
var wordCounts=[];
var answers=[];
function addWord(){
	var word = Number(document.getElementById("wordCount").value);
	wordCounts[i]=word;
}
function addForm(){
	info[i] = document.getElementById("form").value;
	document.getElementById("form").value="";
	info[i] += "\n";
		info[i]="<h3>"+ info[i].substring(0,info[i].indexOf("\n")) +"</h3>" + info[i].substring(info[i].indexOf("\n"));
	

	updatePage();
	i++;
	console.log(info);
}
function updatePage(){
	document.getElementById("area").innerHTML="";
	for(var j =i;j>-1;j--){
		f = document.getElementById("area").innerHTML;
		document.getElementById("area").innerHTML = `${info[j]}  <br> Word Count: ${wordCounts[j]} <br> ${f}`;
	}
}
var onkeydown = (function (ev) {
  var key;
  var isShift;
  if (window.event) {
    key = window.event.keyCode;
    isShift = !!window.event.shiftKey; // typecast to boolean
  } else {
    key = ev.which;
    isShift = !!ev.shiftKey;
  }
  if ( isShift ) {
    switch (key) {
      case 16: // ignore shift key
        break;
      case 13:
      addForm();
        break;
        case 39:
        addWord();
        break;
      default:
        
        // do stuff here?
        break;
    }
  }
});
function wordCount(a){
	var b = document.getElementById(a).value.split(" ").length;
	
	document.getElementById("WordCount-"+a).innerHTML =`WordCount: ${wordCounts[a]-b}` 
}
function submit(){
	document.getElementsByClassName("container")[0].innerHTML = `<h1>Essay Helper</h1> <div id ="area"></div>`;
	for(var j =i-1;j>-1;j--){
		f = document.getElementById("area").innerHTML;
		document.getElementById("area").innerHTML = `${info[j]}  <br> <span id="WordCount-${j}">Word Count: ${wordCounts[j]} </span><br> <textarea class = "form-control" onKeyDown = "wordCount(${j})" id ="${j}" rows="5"></textarea>  ${f}`;
	}
	document.getElementById("area").innerHTML+= `<button class ="btn btn-success" onclick="complete()">Submit</button>`
}
function complete(){
	for(var j =0;j<i;j++){
		answers[j]=document.getElementById(j).value;
	}
	document.getElementsByClassName("container")[0].innerHTML = `<h1>Essay Helper</h1> <div id ="area"></div>`;
	for(var j =i-1;j>-1;j--){
		f = document.getElementById("area").innerHTML;
		document.getElementById("area").innerHTML = `${answers[j]}  <br>  ${f}`;
	}
}
