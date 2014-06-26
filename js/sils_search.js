if (typeof jQuery == 'undefined') {
    // jQuery is not loaded
    console.log("jQuery NOT LOADED");
    } else {
    console.log("jQuery is loaded successfully!");
    }

$( document ).ready(function() {

var libSearchArray = [];

$(".libLocation").each( function(index, element){
    libSearchArray.push( $( this ).text() );
});

console.log(libSearchArray);

});
