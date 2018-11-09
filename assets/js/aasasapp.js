$("#gifSearchBtn").on("click", function (event) {
    event.preventDefault();
    // hide previous gifs that were searched
    $("#gifs-appear-here").empty();
    $("#history-appear-here").empty();


    // storing search value in variale
    var movieSearch = $('.form-control').val();
    // adding the searched term into the API URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movieSearch + "&api_key=dc6zaTOxFJmzC&limit=10";
    //if search is empty and submitted it will not add a button to the search history footer
    if (movieSearch == "") {
        return false;
    }
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {

            // create new button
            var historyButton = $('<button>');
            historyButton.addClass('historyButton');
            // prepend the movie searched into the button
            historyButton.prepend(movieSearch);
            // prepend the button with the link of the searched movie into the footer
            $('#searchHistory').prepend(historyButton)
            // resets the value of the form
            $('.form-control').val("");

            var results = response.data;
            console.log(results);

            for (var i = 0; i < results.length; i++) {
                var personImage = $("<img>");
                personImage.addClass("gifImage")
                personImage.attr("src", results[i].images.fixed_height.url);
                $("#gifs-appear-here").prepend(personImage);
            }


        });

})

$(document.body).on("click", ".historyButton", function () {
    event.preventDefault();
    // empty out the gifs on the page
    $("#gifs-appear-here").empty();
    $("#history-appear-here").empty();


    var movieHistory = $(this).text()

    console.log(movieHistory);
    // adding the searched term into the API URL
    var qURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movieHistory + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
            url: qURL,
            method: "GET"
        })
        .then(function (response1) {
            var results1 = response1.data;
            var firstResult = results1[0]
            console.log(firstResult);

            for (var j = 0; j < results1.length; j++) {
                var personHistoryImage = $("<img>");
                personHistoryImage.addClass("historyImage")
                personHistoryImage.attr("src", results1[j].images.fixed_height.url);
                $("#history-appear-here").prepend(personHistoryImage);
            }
        })
});