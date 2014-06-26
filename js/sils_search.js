//do we even have jquery up in here? can't use $('.whatevs') ?!
if (typeof jQuery == 'undefined') {
    console.log("jQuery NOT LOADED");
    } else {
    console.log("jQuery is loaded successfully!");
    }

//but apparently calling jQuery(); works just dandy
jQuery( document ).ready(function() {

var libSearchArray = [];

jQuery(".LocationLibrary").each( function(index, element){
    libSearchArray.push( jQuery( this ).text() );
});

var libraries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: jQuery.map(libSearchArray, function(library) { return { value: library }; })
});

libraries.initialize();

jQuery('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
},
{
   name: 'libraries',
   displayKey: 'value',
   source: libraries.ttAdapter()
});

jQuery('.ui-autocomplete').addClass('f-dropdown');


console.log(libSearchArray);

});
