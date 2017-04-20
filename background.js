var i =0;
var array = new Array();
function callback(para){
	alert(para);
}
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
	//alert(response);
	//alert(response);
//NEW CODE 
if(response.cmd == "OpenProfile" ){
	array = response.list;
	/*for(i=0;i<response.list.length;i++){
		array[i] = response.list;
	}*/
	alert("hiihoo");
	

}


	
	var xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:8000/otp/er/", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // WARNING! Might be evaluating an evil script!
    // var resp = eval("(" + xhr.responseText + ")");
    alert(xhr.responseText)
    
  }
}
xhr.send();

	



});


