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
Imagine getting a text from a friend and you think of the perfect TV or movie quote to respond with in a GIF, but you have to sort through so many to find the right one. We wanted to create a simple generator to help users quickly find the exact GIF they are thinking of.
MovieQuoteGif is an API Javascript Jquery application that allow the user to search for their favorite Gif's also it allow the users to search for a specific Gif if they add a quote in the quote section.
not only that but also the user is able to Download, Pick favorite and remove Gif's

<a name="pseudocode"></a>
## Pseudo Code 

![MovieQuoteGif](/assets/images/moviequotegifs.png)

1. [Watch the demo](https://youtu.be/BqreERTLjgQ).

<!-- Add pseudocode below you can use the trello cards to add the points we discussed -->

2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.


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