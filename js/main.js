// alert("Ban da bi hack")
var like = 200, dis = 12; //declare numbers of like and dislike at the begining
function likeFunction() {
	//like increases when call function
	like++;
    document.getElementById("like").innerHTML = like ;
}
function dislikeFunction(){
	//dislike increases when call function
	dis++;
    document.getElementById("dislike").innerHTML = dis ;
}

function warningFunction(){
	alert("Please do not spam the button!");
}

function reloadFunction() {
    location.reload();
}