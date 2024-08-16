//your JS code here. If required.
let fname=document.getElementById("fname");

fname.addEventListener("blur",function(){
	fname.value=fname.value.toUpperCase;
})
