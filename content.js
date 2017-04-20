console.log(document.URL);
var x = document.URL;
//var y =  document.documentElement.outerHTML;
//alert(x);

//NEW CODE
var image_array = new Array();

for(i=0;i<document.images.length;i++){
	image_array[i] = document.images[i].src;
}

 for(i=0;i<document.images.length;i++){
 	chrome.runtime.sendMessage({cmd:"OpenProfile", list:image_array[i]})
 }
//NEW CODE ENDS
//console.log(document.images[0].src);
//chrome.runtime.sendMessage({cmd:"OpenProfile", list:image_array}); 


