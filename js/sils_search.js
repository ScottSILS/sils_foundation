//do we even have jquery up in here? can't use $('.whatevs') ?!
if (typeof jQuery == 'undefined') {
    console.log("jQuery NOT LOADED");
    } else {
    console.log("jQuery is loaded successfully!");
    }

//but apparently calling jQuery(); works just dandy
jQuery( document ).ready(function() {

var libLocationSearchObj = new Object();

jQuery(".LocationLibrary").each( function(index, element){
    libLocationSearchObj["name"] = jQuery(this).text();
    libLocationSearchObj["url"] = jQuery(this).find("a:first").attr('href');
});

/*
var libraries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: jQuery.map(libLocationSearchObj, function(libraryName, index) { return { value: libraryName }; })
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
*/


console.log(libLocationSearchObj);

});
