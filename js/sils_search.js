if (typeof jQuery == 'undefined') {
    // jQuery is not loaded
    console.log("jQuery NOT LOADED");
    } else {
    console.log("jQuery is loaded successfully!");
    }

$( document ).ready(function() {

var libSearchArray = [];

jQuery(".libLocation").each( function(index, element){
    libSearchArray.push( jQuery( this ).text() );
});

console.log(libSearchArray);

});
