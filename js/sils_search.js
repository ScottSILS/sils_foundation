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
    var libName = jQuery(this).text();
    var libURL = jQuery(this).find("a:first").attr('href');
    libLocationSearchObj[libName] = libURL;
});

var libraries = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: jQuery.map(libLocationSearchObj, function(libURL, libName) { return { value: libName, key: libURL }; })
});

libraries.initialize();

jQuery('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1,
    },
{
   name: 'libraries',
   displayKey: 'value',
   source: libraries.ttAdapter(),
   templates: {
       //header: '<p>Choose your location</p><hr>',
       suggestion: Handlebars.compile('<p><a href="{{key}}">{{value}}</a></p>')
   }
});


console.log(libLocationSearchObj);

});
