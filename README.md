# MovieQuoteGif
----------
## Table of Contents 
1. [Overview](#overview)
2. [Pseudo Code](#pseudocode)
2. [Technologies](#technologies)
3. [Methods](#methods)
4. [Local Installation](#installation)
5. [App Display](#display)

<a name="overview"></a>
## Overview 
Imagine getting a text from a friend and you think of the perfect movie quote to respond with in a GIF, but you have to sort through so many to find the right one. We wanted to create a simple generator to help users quickly find the exact GIF they are thinking of.
MovieQuoteGif is an API Javascript Jquery application that allow the user to search for their favorite GIFs while also allowing the users to search for a specific GIF by simply adding a quote (or keyword) in the quote section. The user is also able to favorite and download GIFs straight to their device with just one click.

<a name="pseudocode"></a>
## Pseudo Code 

![MovieQuoteGif](/assets/images/moviequotegifs.png)

1. [Watch the demo this project was based on](https://youtu.be/BqreERTLjgQ).

<!-- Add pseudocode below you can use the trello cards to add the points we discussed -->

2. Here's how the app works:

   * The user must click the search bar and type in a movie name. Clicking the SEARCH button or hitting ENTER on the keyboard will return 10 GIFs that are linked to that movie.

   * If the user inputs a quote or keyword, the search is designed to return just one GIF. The hope is that the generator is able to      quickly find the exact GIF the user was hoping to find.

   * If it isn't the right GIF, the user can click the SHOW MORE button to have more GIFs populated to the page. 

3. Special Features:

   * The user has the ability to favorite GIFs they like by clicking the STAR icon in the top left corner of GIFs. This will send GIFs to the FAVORITES SIDEBAR. This bar will briefly illuminate each time a new GIF is added. When the bar is clicked it will extend out to show the collection of favorited GIFs. If one is no longer needed, there is a simple remove button the user can click.

   * There is a SEARCH HISTORY at the footer of the page that has dynamic buttons added to it each time a user searches for a movie. When the user clicks search there is a new button with the title of that movie that gets added to the search history bar. This allows the user to refer back to previous searches by simply clicking the button with that movie's title on it.

   * Sometimes saving GIFs can be a hassle and it can be hard to know if it was done rightly, so we wanted to make it easy for the user to download. In the top corner of each GIF there is a download icon. Clicking this icon will immediately download the GIF to the user's device. We have ensured that the user will get the highest resolution version of this motion GIF. 


<a name="technologies"></a>
## Technologies

 - Ajax
 - API's
 - JavaScript
 - Jquery
 - HTML
 - CSS
 - Bootstrap 

<a name="methods"></a>
## Methods

 - .ajax({})
 - .addClass()
 - .attr()
 - .onload() 
 - .click()
 - .append()
 - .prepend()
 - .text()

<a name="installation"></a>
## Local Installation

### Step 1: Git Clone

Clone MovieQuoteGif to your local git repo like the following:

> git clone https://github.com/danielpolk/MovieQuoteGifs.git/

The MovieQuoteGif project and its files should now be in your project folder.

### Step 2: Launch app 

Open index.html file in browser (Chrome Preferred)

Or visit <!-- ADD LIVE LINK HERE https://markpython86.github.io/unit-4-game-crystals/ -->

<a name="display"></a>
## App Display

<!-- ### Demo
![Demo](/assets/images/demo.gif) -->
