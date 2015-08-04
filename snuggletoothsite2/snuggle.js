

/*randomizer 2*/


    <!-- Hide the script from old browsers
    function getQuote() {
      // Create the arrays
      quotes = new Array(10);
      sources = new Array(4);

      // Initialize the arrays with quotes
      quotes[0] = "<i>Snuggletooth loves you</i>";
	  quotes[1] = "<i>Would you like Snuggletooth to tuck you in?</i>";
	  quotes[2] = "<i>Snuggletooth is here for you</i>";
	  quotes[3] = "<i>Did you know that Snuggletooth </br>can be in 2 places at once?</i>";
      quotes[4] = "<i>Heyyyy!<br> I was just thinking about you </br>Love Snuggletooth</i>";
      quotes[5] = "<i>Wanna Sandwich??</br>xSnuggletooth</i>";
      quotes[6] = "<i>Want some breakfast???</br> ;) Snuggletooth</i>";
	  quotes[7]	= "<i>Snuggletooth makes great popcorn!";
    quotes[8] ="<i>Come over to Snuggletooth's! He makes a great guacamole!</i>";
    quotes[9] = "<i>Snuggletooth likes his bubblebaths to smell like bubblegum<i>";


      // Get a random index into the arrays
      i = Math.floor(Math.random() * quotes.length);

      // Write out the quote as HTML
     
      document.write("<dt>" + "\"<i>" + quotes[i] + "</i>\"\n");
      
     
    }
    // Stop hiding the script -->
    $(function() {
    $('#simple_sketch').sketch();
  });