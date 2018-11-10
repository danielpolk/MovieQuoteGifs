var imgURL = "";
var movie = $('#movie').val();
    var quote = $('#quote').val();
    var movieSearch = movie + ' ' + quote;

$("#gifSearchBtn").on("click", function (event) {
    event.preventDefault();
    
    // hide previous gifs that were searched
    $('.moreGifs').empty();
    $("#gifs-appear-here").empty();
    $("#history-appear-here").empty();


    // storing search value in variale
    var movie = $('#movie').val();
    var quote = $('#quote').val();
    var movieSearch = movie + ' ' + quote;
    var limit = 0;
    if ($('#quote').val().length == 0) {
        limit = 10;
    } else {
        limit = 1;
    }
    // adding the searched term into the API URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movieSearch + "&api_key=dc6zaTOxFJmzC&limit=" + limit;
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
            historyButton.addClass('historyButton btn btn-dark');
            // prepend the movie searched into the button
            historyButton.prepend(movie);
            // prepend the button with the link of the searched movie into the footer
            $('#searchHistory').prepend(historyButton)
            // resets the value of the form
            $('.form-control').val("");
            //create a container to hold the Gif's
            // if ($("#quote").val() === "" && $("#movie").val() !== "") {
                var moreGifDiv = $('<div>');
                moreGifDiv.addClass('moreGifs')
                var moreGifs = $('<button>');
                moreGifs.addClass('historyButton btn btn-dark');
                moreGifs.text("See More");
                moreGifDiv.append(moreGifs);
                $("#gifs-appear-here").after(moreGifDiv);
                
            // } else{
                // console.log("working")
               
            // }

            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var personImage = $("<img>");
                var resultElem = results[i];
                personImage.addClass("gifImage")
                personImage.attr("src", results[i].images.fixed_height.url);
                // personImage.attr("onclick", "forceDownload(this)");
                // personImage.attr("download", ("image"+i));
                var downloadBTN = $("<a>");
                downloadBTN.addClass("downloadBtn far fa-arrow-alt-circle-down");
                downloadBTN.attr("data-href", results[i].images.fixed_height.url);
                downloadBTN.attr("onclick", "forceDownload(this)");
                downloadBTN.attr("download", (results[i].title + "" + i));



                // Pausing and playing the gifs ----------------------- //

                $(document.body).on("click", ".gifImage", function(){
                    
                    if($(this).attr('src')== resultElem.images.fixed_height.url){
                        $(this).attr('src', resultElem.images.fixed_height_still.url);
                    } else {
                        $(this).attr('src', resultElem.images.fixed_height.url);
                    }
                
                }); // end of click handler

                

                //pause button
                // downloadBTN.addClass("downloadBtn far fa-pause-circle"); 
                


                //favorite button
                var favBTN = $("<a>");
                favBTN.addClass("favBtn far fa-star");
                favBTN.attr("onclick", "favbtnfunc(this)");
                favBTN.attr("data-href2", results[i].images.fixed_height.url)
                //append buttons and image to imgDiv
                var imgDiv = $("<div>");
                imgDiv.addClass('imgDiv');
                imgDiv.append(downloadBTN).append(favBTN).append(personImage);
                $("#gifs-appear-here").prepend(imgDiv);
            }
        });
})

//Made "enter" keystroke === to search button click.
$("#movie").on("keydown", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        $("#gifSearchBtn").click();
    }
});

$("#quote").on("keydown", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        $("#gifSearchBtn").click();
    }
});

//history button function
$(document.body).on("click", ".historyButton", function () {
    
    event.preventDefault();
    // empty out the gifs on the page
    $('.moreGifs').empty();
    $("#gifs-appear-here").empty();
    $("#history-appear-here").empty();
    var movieHistory = $(this).text()
    // adding the searched term into the API URL
    var qURL = "https://api.giphy.com/v1/gifs/search?q=" +
        movieHistory + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
            url: qURL,
            method: "GET"
        })
        .then(function (response1) {
            var results1 = response1.data;
            // var firstResult = results1[0]

            for (var j = 0; j < results1.length; j++) {
                var personHistoryImage = $("<img>");
                personHistoryImage.addClass("historyImage")
                personHistoryImage.attr("src", results1[j].images.fixed_height.url);
                var downloadBtnH = $("<a>");
                downloadBtnH.addClass("downloadBtn far fa-arrow-alt-circle-down");
                downloadBtnH.attr("data-href", results1[j].images.fixed_height.url);
                downloadBtnH.attr("onclick", "forceDownload(this)");
                downloadBtnH.attr("download", ("image" + j));
                //favorite button
                var favBTNH = $("<a>");
                favBTNH.addClass("favBtn far fa-star");
                favBTNH.attr("onclick", "favbtnfunc(this)");
                favBTNH.attr("data-href2", results1[j].images.fixed_height.url)
                //append buttons and image to imgDiv
                var imgDivH = $("<div>");
                imgDivH.append(downloadBtnH).append(favBTNH).append(personHistoryImage);
                $("#history-appear-here").prepend(imgDivH);

            }

            // var moreGifDiv = $('<div>');
            // moreGifDiv.addClass('moreGifs')
            // var moreGifs = $('<button>')
            // moreGifs.addClass('moreBtn');
            // moreGifs.text("See More");
            // moreGifDiv.append(moreGifs);

            // $("#history-appear-here").after(moreGifDiv);
        })
});


$(document.body).on("click", ".moreBtn", function(){
    $('.moreGifs').empty();
    var movieSearch = $('.historyButton:first-child').text()
    

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
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var personImage = $("<img>");
            personImage.addClass("gifImage")
            personImage.attr("src", results[i].images.fixed_height.url);
            imgURL = results[i].images.fixed_height.url;
            var downloadBTN = $("<a>");
            downloadBTN.addClass("downloadBtn far fa-arrow-alt-circle-down");
            downloadBTN.attr("data-href", results[i].images.fixed_height.url);
            downloadBTN.attr("onclick", "forceDownload(this)");
            downloadBTN.attr("download", ("image" + i));

            //favorite button
            var favBTN = $("<a>");
            favBTN.addClass("favBtn far fa-star");
            favBTN.attr("onclick", "favbtnfunc(this)");
            favBTN.attr("data-href2", results[i].images.fixed_height.url)
            //append buttons and image to imgDiv
            var imgDiv = $("<div>");
            imgDiv.append(downloadBTN).append(favBTN).append(personImage);
            $("#gifs-appear-here").prepend(imgDiv);
        }


    });

})

// Pausing Gifs ---------------------------------------------
// $(document.body).on("click", ".gifImage", function(){

//     personImage.attr({
//         "src": results.images.original_still.url,
//         "data-still": results.images.original_still.url,
//         "data-animate": results.images.original.url,
//         "data-state": "still",
//         "class": "gif"
//     });
			
//     // $(this) just means "the element with class 'gif' that was clicked"
//    var state = $(this).attr("data-state");
   
//    // $(this).attr("data-state") will either be "still" or "animate"
//    // IF it's still: we change it to animate
//    if (state === "still") {
       
//        var newSrc = $(this).attr("data-animate");
//        $(this).attr("src", newSrc);
//        $(this).attr("data-state", "animate");
       
//     // OTHERWISE it's animate already, so we change it to still
//    } else {
//        var newSrc = $(this).attr("data-still");
//        $(this).attr("src", newSrc);
//        $(this).attr("data-state", "still");
//    }
// }); // end of click handler


// Side menu script starts=============\\

var sideMenu;
$("#menu-close").click(function (e) {
    e.preventDefault();
    sideMenu = false;
    $("#sidebar-wrapper").toggleClass("active");
    changeBodyMargin();
});
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    sideMenu = true;
    $("#sidebar-wrapper").toggleClass("active");
    changeBodyMargin();
});

function changeBodyMargin() {
    if (sideMenu == true) {
        $("#gif-container").addClass("shiftContentIn");
        $("#gif-container").removeClass("shiftContentOut");
    } else {
        $("#gif-container").addClass("shiftContentOut");
        $("#gif-container").removeClass("shiftContentIn");
    }

}
changeBodyMargin();
// Side menu script ends=============\\


// Download function script starts=============\\
function forceDownload(link) {
    var url = link.getAttribute("data-href");
    var fileName = link.getAttribute("download");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
}
// Download function script ends=============\\

//favbutton function script starts=============\\
function favbtnfunc(link2){
    var url2 = link2.getAttribute("data-href2");
    var downloadBTN = $("<a>");
    downloadBTN.addClass("favDownloadBtn far fa-arrow-alt-circle-down");
    downloadBTN.attr("data-href", url2);
    downloadBTN.attr("onclick", "forceDownload(this)");
    downloadBTN.attr("download", ("Your Fav Image"));
    var favImageDiv = $("<div>");
    favImageDiv.addClass("favDiv")
    var favimg = $("<img>");
    favimg.attr("src", url2);
    favimg.addClass("favImage")
    var deletebtn = $("<a>");
    deletebtn.addClass("deletebtn far fa-times-circle");
    favImageDiv.append(downloadBTN).append(deletebtn).append(favimg)      
    $("#favSection").append(favImageDiv);

    $('.deletebtn').on('click',function () {
        $(this).parent().remove();  
    });

    var favMenu = $('#menu-toggle');
    favMenu.addClass('favBtnGlow');
    setTimeout(function () {
        favMenu.removeClass('favBtnGlow');
    }, 5*1000);

}

//favbutton function script ends=============\\
