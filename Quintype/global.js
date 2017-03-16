/*
Author : Shivangi Das
Date : 16/03/2017
*/
var modal = document.getElementById('adModal');
var adClick = document.getElementById("adBox");
var close = document.getElementsByClassName("close")[0];
/*click on add*/
adClick.onclick = function() {
    modal.style.display = "block";
}
/*close button*/
close.onclick = function() {
    modal.style.display = "none";
}
/*press esc key*/
document.onkeyup = function(event){
	if (event.keyCode==27){
    modal.style.display = "none";
    }
}
/*anywhere outside of the modal*/
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}