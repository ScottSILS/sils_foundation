jQuery( document ).ready(function() {

var searchResults = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  remote: {
            url: '/eds/autosuggest?iid=eds&iver=live&numterms=10&userinput=%QUERY',
	    filter: function(parsedResponse) {
            var dataset = [];
            for(i = 0; i < parsedResponse.length; i++) {
                dataset.push({
                    value: parsedResponse[i]
                });
            }
            return dataset;
        },
    },
});

searchResults.initialize();


jQuery('#the-search-form .typeahead').typeahead(null, {
  name: 'search-results',
  displayKey: 'value',
  source: searchResults.ttAdapter()
});

});
