$(document).ready(function() {
   //Click searchbtn and run our search
   function search() {
    // Get value of our searchbar that user inputs
    var searchInput = $('#searchInput').val();

    //reset our textbox when search is called
    $('#searchInput').val('');
    //set our search url with the API and searchInput
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchInput + "&format=json&callback=?";

      $.ajax({
        data: "GET",
        url: url,
        async: false,
        dataType: "JSON",
        success: function(data) {

           $('#output').html('').addClass('animated slideInUp');

           for (let i = 0; i < 6; i += 1) {
             if (i === 0) {

             } else {
                $('#output').append("<li><a class='heading' href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
             }
           }

        },
        error: function(errorMessage) {
          alert("There was a problem retrieving your results.");
        }
    })
    $('#output').removeClass();
   }
  $('#searchBtn').click(function(event) {
      event.preventDefault();
      search();
    });
  $('#searchInput').keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      search();
    }
  });

  $('#random').click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
});

  
