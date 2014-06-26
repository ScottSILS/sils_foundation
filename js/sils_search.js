var libSearchArray = [];

$(".libLocation").each( function(index, element){
    libSearchArray.push( $( this ).text() );
});

console.log(libSearchArray);
