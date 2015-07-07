
$(function() {

 	var trackTemplate = _.template($('#track-template').html());
	var $results = $('#results');
	var $spotifySearch = $('#spotify-search')
	var $track = $('#track');

$('#spotify-search').on('submit', function(event){

	event.preventDefault();
  	$.get('https://api.spotify.com/v1/search?q=' + $('#track').val() +  '&type=track', function(data) {
   	console.log(data);
   	 

   	 var trackData = data.tracks.items;

   	 _.each(trackData, function(result, index){
   	 	var templateData = {
   	 	artist : result.artists[0].name,
   	 	name :result.name
   	 	
   	 	}

   	 	console.log(result.artists[0].name, result.name);

   	 	 // put data in template and append to view
          var $trackResult = $(trackTemplate(templateData));
          $results.append($trackResult);
        });
   	 });



  	   $spotifySearch[0].reset();
 	   $track.focus();

   	 });

});


