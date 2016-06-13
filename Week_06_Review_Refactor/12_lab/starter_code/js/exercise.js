function selectPet(petType){

    // Get the specific pet data set
     var petSelected = petData[petType];

    // Set the title
    $(".petDisplayName").text(petSelected.displayName);

    // Empty the specification data
    $(".petsDataSpecs").empty();

    // Add the space required, size, weight
    $(".petsDataSpecs").append("<dt>Space Required:</dt><dd> " +petSelected.spaceRequired+ " </dd>");
    $(".petsDataSpecs").append("<dt>Size:</dt><dd> " +petSelected.size+ " </dd>");
    $(".petsDataSpecs").append("<dt>Weight:</dt><dd> " +petSelected.weight+ " </dd>");
   


    // Add logic to add the trainability and lap size images
    if (petSelected.trainability == true) {
        $(".petsDataSpecs").append("<dt>Trainability:</dt><dd><img src='img/200px-Gnome-emblem-default.svg.png'></dd>");
    } else {
        $(".petsDataSpecs").append("<dt>Trainability:</dt><dd><img src='img/200px-Gnome-emblem-unreadable.svg.png'></dd>");
    }


    var food = "";
    // Add the foods (may require loop)
    for (var i = 0; i < petSelected.foods.length; i++ ) {
        food += "<li> " +petSelected.foods[i]+ "</li>";
       
}
        $(".petsDataSpecs").append("<dt>Foods:</dt> <dd><ul>"+food+"</ul></dd>");

    // Update the images

        // Set the main image
     $(".photoLarge").attr("src", petSelected.images[0]['img']);


        // Empty the thumbnails
     $(".thumbHaus").empty();

        // Add the thumbnails
    for (var p = 0; p < petSelected.images.length; p++) {
     $(".thumbHaus").append("<a class='photoThumb' href='"+petSelected.images[p]['img']+"'><img  alt='"+petSelected.images[p]['alt']+"' src='"+petSelected.images[p]['thumb']+"'/></a>")
}


        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
    $(".photoThumb").on("click", thumbClick);

    // Empty the ideal for
    $(".idealFor").empty();

    // Insert the ideal for
    for (var t = 0; t < petSelected.idealOwner.length; t++) {
     $(".idealFor").append("<li>"+petSelected.idealOwner[t]+"</li>");
}


    // Empty the Adoption Groups
    $(".adoptionGroups").empty();

    // Add the adoption groups
    for (var t = 0; t < petSelected.idealOwner.length; t++) {
     $(".idealFor").append("<li>"+petSelected.idealOwner[t]+"</li>");
}


}// end selectPet

function thumbClick (e){
    e.preventDefault();
    var imageSRC = $(this).attr("href");
    var imageALT = $(this).children("img").attr("alt");
    $(".photoLarge").empty();
    $(".photoLarge").attr("src", imageSRC);
    $(".photoLarge").attr("alt", imageALT);
}

jQuery("#petType").on('change',function(){

    var showType = jQuery(this).val();
        console.log('it works ' +showType);

        selectPet(showType);

});

jQuery(document).ready(function(e){


    // Initial run

    //Update whenever a new value is picked

});