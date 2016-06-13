var images = ["images/animal1.jpg", "images/animal2.jpg", 
              "images/animal3.jpg", "images/animal4.jpg", 
              "images/animal5.jpg", "images/animal6.jpg",
              "images/animal7.jpg"];

var i = 0;

var maxImages = images.length-1;


function changeImage () {

	$('#image-to-vote-on').attr('src', images[i]);

};

function nextImage () {

	if (i < maxImages) {
		i++;
	} else {
		i = 0;
	}

	changeImage(i);

};

function prevImage () {

	if ( i == 0) {
		i = maxImages;
	} else {
		i--;
	}

	changeImage(i);
 
};

$("#nextButton").on("click", nextImage);
$("#backButton").on("click", prevImage);