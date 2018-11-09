var imgURL = "";

$("#gifSearchBtn").on("click", function (event) {
    event.preventDefault();
    // hide previous gifs that were searched
    $("#gifs-appear-here").empty();
    $("#history-appear-here").empty();


    // storing search value in variale
    var movie = $('#movie').val();
    var quote = $('#quote').val();
    var movieSearch = movie + ' ' + quote;
    var limit = 0;
    if($('#quote').val().length==0){
        limit = 10;
    } else {
        limit = 1;
    }
    // adding the searched term into the API URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movieSearch + "&api_key=dc6zaTOxFJmzC&limit=" + limit ;
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
            historyButton.prepend(movie);
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
                // personImage.attr("onclick", "forceDownload(this)");
                // personImage.attr("download", ("image"+i));
                imgURL = results[i].images.fixed_height.url;
                console.log(imgURL);
                var downloadBTN = $("<a>");
                downloadBTN.addClass("downloadBtn far fa-arrow-alt-circle-down");
                downloadBTN.attr("data-href", results[i].images.fixed_height.url);
                downloadBTN.attr("onclick", "forceDownload(this)");
                downloadBTN.attr("download", ("image"+i));

                //pause button
                // downloadBTN.addClass("downloadBtn far fa-pause-circle"); 


                //favorite button
                // downloadBTN.addClass("downloadBtn far fa-star");

                // personImage.append(downloadBTN);
                var imgDiv = $("<div>");
                imgDiv.append(downloadBTN).append(personImage);
                $("#gifs-appear-here").prepend(imgDiv);
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
                 // personImage.attr("onclick", "forceDownload(this)");
                // personImage.attr("download", ("image"+i));
                imgURL = results1[j].images.fixed_height.url;
                console.log(imgURL);
                var downloadBtnH = $("<a>");
                downloadBtnH.addClass("downloadBtn fas fa-film");
                downloadBtnH.attr("data-href", results1[j].images.fixed_height.url);
                downloadBtnH.attr("onclick", "forceDownload(this)");
                downloadBtnH.attr("download", ("image"+j));

                // personImage.append(downloadBTN);
                var imgDivH = $("<div>");
                imgDivH.append(downloadBtnH).append(personHistoryImage);
                $("#history-appear-here").prepend(imgDivH);
            }
        })
});


// Side menu script starts=============\\

var sideMenu;
 $("#menu-close").click(function(e) {
    e.preventDefault();
    sideMenu = false;
    $("#sidebar-wrapper").toggleClass("active");
    changeBodyMargin();
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    sideMenu = true;
    $("#sidebar-wrapper").toggleClass("active");
    changeBodyMargin();
  });

  function changeBodyMargin(){
    if (sideMenu  == true){
        $("#gif-container").addClass("shiftContentIn");
        $("#gif-container").removeClass("shiftContentOut");
        console.log("class added");
    } else{
        $("#gif-container").addClass("shiftContentOut");
        $("#gif-container").removeClass("shiftContentIn");
        console.log("class removed;")
    }

  }
  changeBodyMargin();
// Side menu script ends=============\\
// Download function script starts=============\\
function forceDownload(link){
    var url = link.getAttribute("data-href");
    var fileName = link.getAttribute("download");
    // link.innerText = "Working...";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
        // link.innerText="Download Image";
    }
    xhr.send();
}
// Download function script ends=============\\
