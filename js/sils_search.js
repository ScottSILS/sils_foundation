//do we even have jquery up in here? can't use $('.whatevs')
if (typeof jQuery == 'undefined') {
    console.log("jQuery NOT LOADED");
    } else {
    console.log("jQuery is loaded successfully!");
    }

//but apparently calling jQuery(); works just dandy
jQuery( document ).ready(function() {

var libSearchArray = [];

jQuery(".libLocation").each( function(index, element){
    libSearchArray.push( jQuery( this ).text() );
});


//figuring out what we're working with
console.log(typeof(libSearchArray));

if (libSearchArray instanceof jQuery) {
    console.log("libSearchArray is a jquery object wtf");
}
else {
    console.log("Is libSearchArray a regular old array?:" + (libSearchArray instanceof Array) + ".");
}

console.log(libSearchArray);

});
