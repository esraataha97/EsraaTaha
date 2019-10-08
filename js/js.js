	var i=0;
	var images=[];
	var time=3000;


	images[0]='image/img.jpg';
	images[1]='image/pic1.jpeg';
	images[2]='image/pic2.jpeg';
	images[3]='image/pic3.jpg';
	images[4]='image/pic4.jpg';

	function changeImage(){
		document.slide.src=images[i];

		if(i<images.length-1)
		{
			i++;
		}
		else{
			i=0;
		}
		setTimeout("changeImage()",time);
	} 
	window.onload= changeImage;