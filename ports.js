/*jslint es6: true, browser: true */
/*global Elm */


// get a reference to the div where we will show our UI
const container = document.getElementById('container');

// start the elm app in the container
// and keep a reference for communicating with the appp
const app = Elm.Main.embed(container);